import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { LoadingSpinner } from '@/components/ui/loading-spinner/LoadingSpinner';
import { useInfiniteScroll } from '@/hooks/useInifiniteScroll';
import { RepositoryItem } from '@/features/search/components/repository-item/RepositoryItem';
import type { RepositoryList_query$key } from './__generated__/RepositoryList_query.graphql';
import type { RepositoryListPaginationQuery } from './__generated__/RepositoryListPaginationQuery.graphql';
import type { RepositoryListQuery } from './__generated__/RepositoryListQuery.graphql';
import { repositoryListStyles as styles } from './RepositoryList.css';

type Props = {
  query: string;
};

export function RepositoryList({ query }: Props) {
  const queryData = useLazyLoadQuery<RepositoryListQuery>(
    graphql`
      query RepositoryListQuery(
        $searchQuery: String!
        $first: Int!
        $after: String
      ) {
        ...RepositoryList_query
      }
    `,
    { searchQuery: query, first: 10 },
  );

  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    RepositoryListPaginationQuery,
    RepositoryList_query$key
  >(
    graphql`
      fragment RepositoryList_query on Query
      @refetchable(queryName: "RepositoryListPaginationQuery") {
        search(
          query: $searchQuery
          type: REPOSITORY
          first: $first
          after: $after
        ) @connection(key: "RepositoryList_search") {
          edges {
            node {
              ... on Repository {
                id
                ...RepositoryItem_repository
              }
            }
          }
        }
      }
    `,
    queryData,
  );

  const handleLoadMore = () => {
    loadNext(10);
  };

  const { targetRef } = useInfiniteScroll({
    hasNext,
    isLoading: isLoadingNext,
    onLoadMore: handleLoadMore,
  });

  const repositories = data?.search?.edges?.filter(
    (edge): edge is NonNullable<typeof edge> & { node: { id: string } } =>
      edge?.node != null && 'id' in edge.node,
  );

  if (!repositories?.length) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <ul className={styles.list} aria-label='Repository search results'>
      {repositories.map((edge) => (
        <RepositoryItem key={edge.node.id} repositoryRef={edge.node} />
      ))}

      {hasNext && <div ref={targetRef} />}
      {isLoadingNext && (
        <div className={styles.loading}>
          <LoadingSpinner />
        </div>
      )}
    </ul>
  );
}
