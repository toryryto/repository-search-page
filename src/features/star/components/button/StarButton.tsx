import { graphql, useFragment, useMutation } from 'react-relay';

import type { RecordSourceSelectorProxy } from 'relay-runtime';

import { Star } from 'lucide-react';

import type { StarButton_repository$key } from './__generated__/StarButton_repository.graphql';
import type { StarButtonAddMutation } from './__generated__/StarButtonAddMutation.graphql';
import type { StarButtonRemoveMutation } from './__generated__/StarButtonRemoveMutation.graphql';
import { starButtonStyles as styles } from './StarButton.css';

type Props = {
  repositoryRef: StarButton_repository$key;
};

const repositoryFragment = graphql`
  fragment StarButton_repository on Repository {
    id
    viewerHasStarred
  }
`;

const addStarMutation = graphql`
  mutation StarButtonAddMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;

const removeStarMutation = graphql`
  mutation StarButtonRemoveMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;

export function StarButton({ repositoryRef }: Props) {
  const repository = useFragment(repositoryFragment, repositoryRef);
  const [commitAddStar, isAddingInFlight] =
    useMutation<StarButtonAddMutation>(addStarMutation);
  const [commitRemoveStar, isRemovingInFlight] =
    useMutation<StarButtonRemoveMutation>(removeStarMutation);

  const isInFlight = isAddingInFlight || isRemovingInFlight;
  const isStarred = repository.viewerHasStarred;

  const handleToggle = () => {
    if (isInFlight) return;

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

  return (
    <button
      type='button'
      className={`${styles.button} ${isStarred ? styles.filled : styles.outline}`}
      onClick={handleToggle}
      disabled={isInFlight}
      aria-label={isStarred ? 'Unstar repository' : 'Star repository'}
      aria-pressed={isStarred}
    >
      <Star size={18} fill={isStarred ? 'currentColor' : 'none'} aria-hidden />
    </button>
  );
}
