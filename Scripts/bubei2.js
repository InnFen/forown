var body = JSON.parse($response.body);
var InnFen = {
  "data_kind" : "dk",
  "result_code" : 200,
  "data_body" : {
    "auth" : "{\"wordsyn\":32493834549000}",
    "code" : 0
  },
  "data_version" : "dv"
}
;
$done({body:JSON.stringify(InnFen)});
