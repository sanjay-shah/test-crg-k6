@echo off
start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s xml2json.js > xml2json.out"
REM start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s basicauth.js > basicauth.out"
REM start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s httpbin.js > httpbin.out"
REM start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s continents.js > continents.out"
REM start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s json2xml.js > json2xml.out"
REM start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s languages.js > languages.out"
REM start "" cmd /c "k6 run --insecure-skip-tls-verify --vus %1 --duration 30s xslt-transform.js > xslt-transform.out"
