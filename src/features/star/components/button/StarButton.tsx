import { graphql, useFragment, useMutation } from 'react-relay';
import type { StarButtonAddMutation } from './__generated__/StarButtonAddMutation.graphql';
import type { StarButtonRemoveMutation } from './__generated__/StarButtonRemoveMutation.graphql';
import type { StarButton_repository$key } from './__generated__/StarButton_repository.graphql';

type Props = {
  repositoryRef: StarButton_repository$key;
};

export function StartButton({ repositoryRef }: Props) {
  const repository = useFragment(
    graphql`
      fragment StarButton_repository on Repository {
        id
        viewerHasStarred
      }
    `,
    repositoryRef,
  );

  const [commitAddStar, isAddingInFlight] = useMutation<StarButtonAddMutation>(
    graphql`
      mutation StarButtonAddMutation($input: AddStarInput!) {
        addStar(input: $input) {
          starrable {
            viewerHasStarred
          }
        }
      }
    `,
  );

  const [commitRemoveStar, isRemovingInFlight] =
    useMutation<StarButtonRemoveMutation>(graphql`
      mutation StarButtonRemoveMutation($input: RemoveStarInput!) {
        removeStar(input: $input) {
          starrable {
            viewerHasStarred
          }
        }
      }
    `);

  const isInFlight = isAddingInFlight || isRemovingInFlight;
  const isStarred = repository.viewerHasStarred;

  return <></>;
}
