import encoding from 'k6/encoding';
import http from 'k6/http';
import { check } from 'k6';

const username = 'sanjay';
const password = '7layer';

export default function () {
  const credentials = `${username}:${password}`;
  let res;

  // Create the header to authenticate
  // using HTTP Basic Auth
  const encodedCredentials = encoding.b64encode(credentials);
  const options = {
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
    },
  };

  res = http.get(`https://a58ad7d8eb1824cabbf93f05bbdfcd77-797796027.us-east-2.elb.amazonaws.com:8443/basicauth`, options);

  // Verify response (checking the echoed data from the httpbin.test.k6.io
  // basic auth test API endpoint)
  check(res, {
    'status is 200': (r) => r.status === 200,
    'is authenticated': (r) => r.body === 'Authentication successful',
  });
}
