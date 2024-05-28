import encoding from 'k6/encoding';
import http from 'k6/http';
import { check } from 'k6';


export default function () {
  let res;
const data = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
    </ListOfContinentsByName>
  </soap:Body>
</soap:Envelope>`;
  // Create the header to authenticate
  // using HTTP Basic Auth

  res = http.post(`https://a58ad7d8eb1824cabbf93f05bbdfcd77-797796027.us-east-2.elb.amazonaws.com:8443/continents`,data);


  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
