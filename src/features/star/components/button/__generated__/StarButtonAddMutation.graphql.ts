/**
 * @generated SignedSource<<bea269dfee6b408aaed7cbb8ffdff2bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AddStarInput = {
  clientMutationId?: string | null | undefined;
  starrableId: string;
};
export type StarButtonAddMutation$variables = {
  input: AddStarInput;
};
export type StarButtonAddMutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly viewerHasStarred: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type StarButtonAddMutation = {
  response: StarButtonAddMutation$data;
  variables: StarButtonAddMutation$variables;
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
    "name": "StarButtonAddMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
    "name": "StarButtonAddMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
    "cacheID": "787dbd87d3c3b4cd9ac1b9a06d94da5f",
    "id": null,
    "metadata": {},
    "name": "StarButtonAddMutation",
    "operationKind": "mutation",
    "text": "mutation StarButtonAddMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7a189c6139effda81a9deaa417c870cc";

export default node;
