/**
 * @generated SignedSource<<2d92906d5a765a0e006971a616e1e6d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryItem_repository$data = {
  readonly description: string | null | undefined;
  readonly forkCount: number;
  readonly issues: {
    readonly totalCount: number;
  };
  readonly languages: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly name: string;
      };
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly licenseInfo: {
    readonly name: string;
    readonly spdxId: string | null | undefined;
  } | null | undefined;
  readonly name: string;
  readonly stargazerCount: number;
  readonly updatedAt: any;
  readonly " $fragmentType": "RepositoryItem_repository";
};
export type RepositoryItem_repository$key = {
  readonly " $data"?: RepositoryItem_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryItem_repository">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryItem_repository",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "stargazerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "forkCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "LanguageConnection",
      "kind": "LinkedField",
      "name": "languages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LanguageEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Language",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "languages(first:1)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "License",
      "kind": "LinkedField",
      "name": "licenseInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "spdxId",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "IssueConnection",
      "kind": "LinkedField",
      "name": "issues",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();

(node as any).hash = "4871c315ed4e9a6c72d0f80ac9512ca9";

export default node;
