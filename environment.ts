import { Environment, type FetchFunction, Network } from 'relay-runtime';

import { globalConfig as config } from './config';

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const res = await fetch(config.endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.secret}`,
    },
    body: JSON.stringify({ query: request.text, variables }),
  });
  if (!res.ok) {
    throw new Error('Response failed.');
  }

  return await res.json();
};

export const networkEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
});
