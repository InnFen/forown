/*

WPS Office v11.29.0
            
[rewrite_local]

^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Unlock/WPS.js

[mitm]

hostname = account.wps.cn

*/

var body = JSON.parse($response.body);
var InnFen = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 1716179347 },
    { spid: "ocr", times: 0, expire_time: 1716179347 },
    { spid: "pdf2doc", times: 0, expire_time: 1716179347 },
    { spid: "pdf_merge", times: 0, expire_time: 1716179347 },
    { spid: "pdf_sign", times: 0, expire_time: 1716179347 },
    { spid: "pdf_split", times: 0, expire_time: 1716179347 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 1716179347,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 1716179347 },
      { memberid: 20, name: "WPS会员", expire_time: 1716179347 },
      { memberid: 12, name: "稻壳会员", expire_time: 1716179347 }
    ]
  },
  wealth: 0,
  expire_time: 1716179347
};

$done({ body: JSON.stringify(InnFen) });
