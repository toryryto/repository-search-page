/**
 * @generated SignedSource<<4f7e6ebf7cd61248bf12884f4017a3cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StarButton_repository$data = {
  readonly id: string;
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "StarButton_repository";
};
export type StarButton_repository$key = {
  readonly " $data"?: StarButton_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"StarButton_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StarButton_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "3f0a3975cff91d1832fee0312ad12d5b";

export default node;
