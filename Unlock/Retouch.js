/***********************************

醒图 v7.3.0

[rewrite_local]

^https?:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-request-header https://gist.githubusercontent.com/InnFen/afb87d7b63656f84067a63a6a1f0ac21/raw/fd393fa0ba5aec7881e4bf4109e61045fb3ee76e/Retouch.js

[mitm] 

hostname = commerce-api.faceu.mobi, api3-misc-lf.retouchpics.com

*/

var modifiedHeaders = $request['headers'];
modifiedHeaders['x-tt-trace-id'] = '00-799a93ca0d7f861bbe8076e782c309d3-799a93ca0d7f861b-01';
modifiedHeaders['x-Tt-Token'] = '002bc7f1dfc6462b3756eb93c0ecc91ada00396b74ab0798bf20190a07c0a6c75c0faf4f72b2164572899fc3d63f97d5bb5c34254db5618da5d72fc190c1e79cd3e37b9b8d056c76c93215a7b43601fc7aa44897ebcd8e5fe013b1b8d3478283ae98b-1.0.1';
$done({'headers': modifiedHeaders});
