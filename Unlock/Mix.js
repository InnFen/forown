/* 

MIX

[rewrite_local]

^https:\/\/cdn-bm\.camera360\.com\/api\/mix\/recovery url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Unlock/Mix.js

[mitm] 

hostname = cdn-bm.camera360.com

*/

var objc = JSON.parse($response.body);

    objc = 
{
  "data": {
    "errorCode": 0,
    "orderList": [{
      "quantity": "1",
      "product_id": "com.vstudio.MIX.subscription.auto.year.88",
      "transaction_id": "570001024815895",
      "original_transaction_id": "570001024815895",
      "purchase_date": "2022-10-01 08:53:25 Etc/GMT",
      "purchase_date_ms": "1664614405000",
      "purchase_date_pst": "2022-10-01 01:53:25 America/Los_Angeles",
      "original_purchase_date": "2022-10-01 08:53:26 Etc/GMT",
      "original_purchase_date_ms": "1664614406000",
      "original_purchase_date_pst": "2022-10-01 01:53:26 America/Los_Angeles",
      "expires_date": "9999-10-04 08:53:25 Etc/GMT",
      "expires_date_ms": "253392455349000",
      "expires_date_pst": "9999-10-04 01:53:25 America/Los_Angeles",
      "web_order_line_item_id": "570000453571144",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }],
    "autoBindingUserId": "",
    "pendingRenewalInfo": [{
      "expiration_intent": "1",
      "auto_renew_product_id": "com.vstudio.MIX.subscription.auto.year.88",
      "is_in_billing_retry_period": "0",
      "product_id": "com.vstudio.MIX.subscription.auto.year.88",
      "original_transaction_id": "570001024815895",
      "auto_renew_status": "0"
    }]
  },
  "status": 200,
  "message": "ok",
  "serverTime": 1686153717.5335,
  "exetime": "1686153716472-1686153717533"
}

$done({body : JSON.stringify(objc)});
