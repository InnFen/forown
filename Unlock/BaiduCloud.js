/*

百度网盘

[rewrite_local]

^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Unlock/BaiduCloud.js

[mitm] 

hostname = pan.baidu.com

*/

var body = JSON.parse($response.body);
var InnFen = {
  "currenttime" : 1573473597,
  "guide_data" : {
    "title" : "超级会员SVIP",
    "content" : "已拥有极速下载+视频倍速特权",
    "button" : {
      "text" : "会员中心",
      "action_url" : "https://pan.baidu.com/wap/vip/user?from=myvip2#svip"
    }
  },
  "product_infos" : [
    {
      "end_time" : 3147483648,
      "buy_time" : "1417260485",
      "cluster" : "offlinedl",
      "start_time" : 1417260485,
      "detail_cluster" : "offlinedl",
      "product_name" : "gz_telecom_exp"
    },
    {
      "product_name" : "svip2_nd",
      "product_description" : "超级会员",
      "function_num" : 0,
      "start_time" : 1553702399,
      "buy_description" : "",
      "buy_time" : 0,
      "product_id" : "1",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 1716179347,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    }
  ],
  "reminder" : {
    "reminderWithContent" : [

    ],
    "advertiseContent" : [

    ]
  }
};
$done({body:JSON.stringify(InnFen)});
