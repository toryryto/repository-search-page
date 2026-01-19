import { graphql, useLazyLoadQuery } from 'react-relay';
import { RepositoryItem } from '../repository-item/RepositoryItem';
import type { RepositoryListQuery } from './__generated__/RepositoryListQuery.graphql';
import { repositoryListStyles as styles } from './RepositoryList.css';

type Props = {
  query: string;
};

export function RepositoryList({ query }: Props) {
  const data = useLazyLoadQuery<RepositoryListQuery>(
    graphql`
      query RepositoryListQuery($searchQuery: String!) {
        search(query: $searchQuery, type: REPOSITORY, first: 10) {
          nodes {
            ... on Repository {
              id
              ...RepositoryItem_repository
            }
          }
        }
      }
    `,
    { searchQuery: query },
  );

  const repositories = data?.search.nodes?.filter(
    (node): node is NonNullable<typeof node> & { id: string } =>
      node != null && 'id' in node,
  );

  if (!repositories?.length) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <ul className={styles.list} aria-label='Repository search results'>
      {repositories.map((node) => (
        <RepositoryItem key={node.id} repositoryRef={node} />
      ))}
    </ul>
  );
}
