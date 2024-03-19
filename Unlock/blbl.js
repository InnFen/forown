/*

Bilibili

[rewrite_local]
  
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/InnFen/forown/main/Unlock/blbl.js 

[mitm] 

hostname=app.bilibili*, *biliapi*

*/

var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '';
modifiedHeaders['x-bili-device-bin'] = '';
modifiedHeaders['Authorization'] = '';
modifiedHeaders['User-Agent'] = '';
modifiedHeaders['buvid'] = '';
modifiedHeaders['x-bili-metadata-bin'] = '';
modifiedHeaders['x-bili-locale-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
modifiedHeaders['x-bili-fawkes-req-bin'] = '';
modifiedHeaders['x-bili-trace-id'] = '';
modifiedHeaders['x-bili-exps-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
$done({'headers': modifiedHeaders});
