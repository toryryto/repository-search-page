import { CircleAlert, Clock, GitFork, Star } from 'lucide-react';
import { graphql, useFragment } from 'react-relay';
import { formatRelativeTime } from '@/utils/formatRelativeTime';
import { BookmarkButton } from '@/features/bookmark/components/button/BookmarkButton';
import { StarButton } from '@/features/star/components/button/StarButton';
import { repositoryItemStyle as styles } from './RepositoryItem.css';
import type { RepositoryItem_repository$key } from './__generated__/RepositoryItem_repository.graphql';

type Props = {
  repositoryRef: RepositoryItem_repository$key;
};

export function RepositoryItem({ repositoryRef }: Props) {
  const repository = useFragment(
    graphql`
      fragment RepositoryItem_repository on Repository {
        id
        name
        description
        stargazerCount
        forkCount
        pushedAt
        languages(first: 1) {
          edges {
            node {
              name
            }
          }
        }
        licenseInfo {
          spdxId
          name
        }
        issues {
          totalCount
        }

        ...StarButton_repository
      }
    `,
    repositoryRef,
  );

  const primaryLanguage = repository?.languages?.edges?.[0]?.node?.name;

  return (
    <li className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{repository?.name}</h3>

          <div className={styles.reactionButtonWrap}>
            <BookmarkButton
              repositoryId={repository.id}
              repositoryName={repository.name}
            />

            <StarButton repositoryRef={repository} />
          </div>
        </div>
        {repository.description && (
          <p className={styles.description}>{repository.description}</p>
        )}
      </div>

      <div className={styles.meta}>
        {primaryLanguage && (
          <span className={styles.language}>{primaryLanguage}</span>
        )}

        <ul className={styles.stats} aria-label='Repository statistics'>
          <li
            className={styles.statItem}
            aria-label={`${repository?.stargazerCount?.toLocaleString()} stars`}
          >
            <Star size={14} aria-hidden='true' />
            <span>{repository?.stargazerCount?.toLocaleString()}</span>
          </li>

          <li
            className={styles.statItem}
            aria-label={`${repository?.forkCount?.toLocaleString()} forks`}
          >
            <GitFork size={14} aria-hidden='true' />
            <span>{repository?.forkCount?.toLocaleString()}</span>
          </li>

          <li
            className={styles.statItem}
            aria-label={`${repository?.issues?.totalCount?.toLocaleString()} open issues`}
          >
            <CircleAlert size={14} aria-hidden='true' />
            <span>{repository?.issues?.totalCount?.toLocaleString()}</span>
          </li>

          <li
            className={styles.statItem}
            aria-label={`Updated ${formatRelativeTime(repository?.pushedAt)}`}
          >
            <Clock size={14} aria-hidden='true' />
            <span>{formatRelativeTime(repository?.pushedAt)}</span>
          </li>
        </ul>

        {repository.licenseInfo?.spdxId && (
          <span className={styles.license}>
            {repository.licenseInfo.spdxId}
          </span>
        )}
      </div>
    </li>
  );
}
