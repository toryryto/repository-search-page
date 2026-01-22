# Repository Search Page with GraphQL & Relay

GitHub GraphQL API와 Relay를 사용하여 개발한 레포지토리 검색 페이지입니다.
시간 기록은 프로젝트 루트에 있는 time.md를 확인해주세요.

## 프로젝트 실행 방법

### 1. 의존성 설치

```
pnpm install
```

### 2. GitHub Personal Access Token 설정

GitHub GraphQL API를 사용하기 위해 [Personal Access Token](https://github.com/settings/tokens)이 필요합니다.

토큰 생성 시 필요한 권한:

- `read:user`
- `public_repo`
- `user:star` (Star 기능 사용 시 필요)

.env.example파일을 참고하여 환경 변수 파일(`.env`)을 생성하고 토큰을 설정합니다.

```bash
VITE_GITHUB_TOKEN=your_github_token_here
VITE_HTTP_ENDPOINT=github_end_point_here
```

### 3. GitHub GraphQL 스키마 다운로드

GitHub GraphQL API의 최신 스키마를 서버로부터 다운로드합니다.
Relay Compiler가 GraphQL 쿼리를 검증하고 타입을 생성하려면 스키마 파일이 필요합니다.

```bash
# 스크립트 실행 권한 부여 (최초 1회만 필요)
sudo chmod +x ./src/scripts/fetch-schema.sh

# 스키마 다운로드 실행
pnpm run fetch-schema
```

### 4. 개발 서버 실행

```bash
pnpm run dev
```

concurrently를 이용헤 Relay Compiler와 Vite 개발 서버를 동시에 실행합니다.

### 5. 기타 스크립트

```bash
pnpm run build          # 프로덕션 빌드
pnpm run relay          # Relay Compiler 단독 실행
pnpm run relay:watch    # Relay Compiler watch 모드
```

## 사용한 기술 스택

| 분류              | 기술            |
| ----------------- | --------------- |
| **Framework**     | React 19        |
| **Data Fetching** | Relay, GraphQL  |
| **Routing**       | React Router v7 |
| **Styling**       | Vanilla Extract |
| **Build Tool**    | Vite            |
| **Language**      | TypeScript      |
| **Icons**         | Lucide React    |

## 구현한 기능 목록

### 레포지토리 검색

- GitHub GraphQL API를 활용한 레포지토리 검색
- URL 쿼리 파라미터 기반 검색어 관리 (브라우저 히스토리 지원)
- Suspense를 통해 유저가 대기하는 동안 Fallback UI제공

### 무한 스크롤 페이지네이션

- Relay의 `usePaginationFragment`와 `@connection` 디렉티브를 활용한 커서 기반 페이지네이션
- Intersection Observer API를 사용한 무한 스크롤 구현

### 레포지토리 정보 표시

- 레포지토리 이름, 설명
- Star 수, Fork 수, Issue 수
- 주 사용 언어, 라이선스 정보
- 마지막 업데이트 시간 (상대적 시간 표시)

### Star 기능

- GraphQL Mutation을 통한 Star/Unstar 토글
- Optimistic Update를 통한 즉각적인 UI 반영

### 북마크 기능

- LocalStorage 기반 클라이언트 사이드 북마크 저장
- 북마크 토글 기능

### 에러 처리

- ErrorBoundary를 통한 에러 핸들링
- 재시도 기능 제공

## 어려웠던 점과 해결 과정

### 1. `@connection` 디렉티브 이해

**문제:**
Relay에서 페이지네이션을 구현할 때 `@connection` 디렉티브의 역할과 필요성을 이해하는 것이 어려웠습니다.
처음에는 단순히 기존 데이터 뒤에 다음 데이터를 쌓는 형태면 충분하다고 생각했습니다. 하지만 Relay의 정규화된 Store 구조에서는 동일한 Connection 필드라도 다른 필드로 요청하면 별개의 데이터로 취급되기 때문에, 어떤 Connection에 데이터를 병합해야 하는지 Relay가 알 수 있는 방법이 필요했습니다.

**해결:**

하지만 relay는 이문제를 relay스럽게 해결할 수 있었다고 생각합니다. @connection입니다.
`@connection`은 Relay가 페이지네이션 데이터를 정규화된 Store에서 관리할 수 있도록 고유한 식별자(key)를 부여합니다.

- 여러 페이지의 데이터가 하나의 연결된 리스트로 병합됩니다.
- `loadNext()` 호출 시 기존 데이터에 새 데이터가 자동으로 추가됩니다.
- 동일한 쿼리라도 다른 컴포넌트에서 독립적인 커넥션으로 관리 가능합니다.

```graphql
search(query: $searchQuery, type: REPOSITORY, first: $first, after: $after)
  @connection(key: "RepositoryList_search") {
  edges {
    node {
      ...
    }
  }
}
```

### 2. Relay Store와 Optimistic Update

**문제:**
Star 버튼 클릭 시 서버 응답을 기다리는 동안 UI가 변하지 않아 사용자 입장에서는 버튼이 동작하지 않는 것처럼 느껴졌습니다. 이를 해결하기 위해 Optimistic Update를 적용하려 했지만, Relay Store의 정규화된 구조와 `optimisticUpdater`를 통한 Store 조작 방법을 이해하는 데 어려움이 있었습니다.

**해결:**
Relay Store가 GraphQL 응답을 어떻게 정규화하는지 파악하는 것이 핵심이었습니다. 모든 객체는 고유한 ID를 기준으로 저장되므로, `store.get(id)`로 특정 레코드에 접근하고 `setValue()`로 필드 값을 즉시 수정할 수 있었습니다.

```typescript
const handleToggle = () => {
  const config = {
    variables: { input: { starrableId: repository.id } },
    optimisticUpdater: (store: RecordSourceSelectorProxy) => {
      const repo = store.get(repository.id);
      repo?.setValue(!isStarred, 'viewerHasStarred');
    },
  };

  if (isStarred) {
    commitRemoveStar(config);
  } else {
    commitAddStar(config);
  }
};
```

결과적으로 Mutation 요청과 동시에 UI가 즉시 반영되고, 실패 시 자동으로 롤백되는 안정적인 UX를 구현할 수 있었습니다.

### 3. Fragment Composition 설계

**문제:**
처음에는 하나의 큰 쿼리에서 모든 데이터를 가져오는 방식으로 구현하려 했습니다. 하지만 컴포넌트가 늘어날수록 어떤 컴포넌트가 어떤 데이터를 필요로 하는지 파악하기 어려워졌고, 컴포넌트 재사용 시 필요한 데이터를 누락하는 문제가 발생했습니다.

**해결:**
각 컴포넌트가 자신이 필요한 데이터만 Fragment로 선언하고, 부모 컴포넌트에서 이를 포함하는 방식으로 구현했습니다.

```
RepositoryList_query (페이지네이션 + 리스트)
  └── RepositoryItem_repository (아이템 정보)
        └── StarButton_repository (Star 상태)
```
