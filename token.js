import encoding from 'k6/encoding';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';
import { check } from 'k6';

const username = 'sanjay';
const password = '7layer';

export default function () {
  //const credentials = `${username}:${password}`;
  let res;
  let url = 'https://ac4110b9de3af4aacbd1226d0ecfdb76-633278394.us-east-2.elb.amazonaws.com:8443/auth/oauth/v2/token';

  // url.searchParams.append('client_id', '54f0c455-4d80-421f-82ca-9194df24859d');
  // url.searchParams.append('client_secret', 'a0f2742f-31c7-436f-9802-b7015b8fd8e6');
  // url.searchParams.append('grant_type', 'client_credentials');

  // Create the header to authenticate
  // using HTTP Basic Auth
  //const encodedCredentials = encoding.b64encode(credentials);
  const options = {
    headers: {
      Content-Type: 'application/x-www-form-urlencoded',
    },
    data-urlencode: {
      client_id: '54f0c455-4d80-421f-82ca-9194df24859d',
      client_secret: 'a0f2742f-31c7-436f-9802-b7015b8fd8e6',
      grant_type: 'client_credentials'
    }

  };

  // const payload = JSON.stringify({
  //   client_id: '54f0c455-4d80-421f-82ca-9194df24859d',
  //   client_secret: 'a0f2742f-31c7-436f-9802-b7015b8fd8e6',
  //   grant_type: 'client_credentials'
  // });

  //console.log('URL:', url.toString())
  res = http.get(url);

  // res = res.submitForm({

  //   formSelector: 'form',

  //   fields: { 
  //     client_id: '54f0c455-4d80-421f-82ca-9194df24859d',
  //     client_secret: 'a0f2742f-31c7-436f-9802-b7015b8fd8e6',
  //     grant_type: 'client_credentials'
  //   },

  // });

  // Verify response (checking the echoed data from the httpbin.test.k6.io
  // basic auth test API endpoint)
  check(res, {
    'status is 200': (r) => r.status === 200,
    //'is authenticated': (r) => r.body === 'Authentication successful',
  });
}
