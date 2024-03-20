/*

Varlens v4.15.4
            
[rewrite_local]

# Varlens解锁(2023-02-30)@InnFen
^https:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Unlock/Varlens.js

[mitm]
hostname = mid.zineapi.com

*/

var InnFen = 
{"success":true,"data":{"username":"InnFen","app_name":"InnFen","nick":null,"email":"","status":0,"preferences":null,"membership":{"role_name":"pro","begin_time":"2021-03-13T09:59:11.485Z","end_time":"2045-05-20T00:00:00.481Z","begin_time_ms":1615629551485,"end_time_ms":2378870040000},"social_apple_id":null}};

$done({body : JSON.stringify(InnFen)});
