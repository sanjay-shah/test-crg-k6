import encoding from 'k6/encoding';
import http from 'k6/http';
import { check } from 'k6';


export default function () {
  let res;

  // Create the header to authenticate
  // using HTTP Basic Auth

  res = http.get(`https://a58ad7d8eb1824cabbf93f05bbdfcd77-797796027.us-east-2.elb.amazonaws.com:8443/xml2json`);


  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
