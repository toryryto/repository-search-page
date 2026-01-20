/**
 * @generated SignedSource<<c792895e196d839939ba59bad8472aa5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RemoveStarInput = {
  clientMutationId?: string | null | undefined;
  starrableId: string;
};
export type StarButtonRemoveMutation$variables = {
  input: RemoveStarInput;
};
export type StarButtonRemoveMutation$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly viewerHasStarred: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type StarButtonRemoveMutation = {
  response: StarButtonRemoveMutation$data;
  variables: StarButtonRemoveMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasStarred",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StarButtonRemoveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StarButtonRemoveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "445024927acae809827956d783635603",
    "id": null,
    "metadata": {},
    "name": "StarButtonRemoveMutation",
    "operationKind": "mutation",
    "text": "mutation StarButtonRemoveMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e54096c904a395a4c04fc49c87996f6";

export default node;
