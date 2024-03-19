/*

^https:\/\/learnywhere\.cn\/api\/bb\/buy\/wordsyn\/purchase\? url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Scripts/bubei.js
^https:\/\/learnywhere\.cn\/api\/bb\/buy\/wordsyn\/by-coin url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Scripts/bubei2.js

hostname = learnywhere.cn

*/
var body = JSON.parse($response.body);
var InnFen = {
  "data_kind" : "dk",
  "data_body" : {
    "code" : 0,
    "tab1" : {
      "title" : "近义词",
      "count" : 1,
      "intro" : "关联记忆近义词，轻松积累多样表达",
      "products" : [
        {
          "extra" : null,
          "quantity" : 15,
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "1200 酷币",
          "type" : "",
          "title" : "15 天",
          "code" : "bb_wordsyn_15day_ios",
          "price" : "12",
          "tip" : "",
          "original_price_in_coin" : "0 酷币",
          "purchased" : 0,
          "cheaper_in_coin" : null,
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "quantity" : 93,
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3800 酷币",
          "type" : "",
          "title" : "3 个月",
          "code" : "bb_wordsyn_3mon_ios",
          "price" : "38",
          "tip" : "",
          "original_price_in_coin" : "0 酷币",
          "purchased" : 0,
          "cheaper_in_coin" : null,
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "quantity" : 365,
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "6800 酷币",
          "type" : "",
          "title" : "1 年",
          "code" : "bb_wordsyn_1year_ios",
          "price" : "68",
          "tip" : "",
          "original_price_in_coin" : "0 酷币",
          "purchased" : 0,
          "cheaper_in_coin" : null,
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "quantity" : -1,
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "0 酷币",
          "type" : "",
          "title" : "试用 7 天",
          "code" : "bb_wordsyn_lifetime_ios",
          "price" : "0",
          "tip" : "",
          "original_price_in_coin" : "0 酷币",
          "purchased" : 0,
          "cheaper_in_coin" : null,
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "0 酷币",
          "type" : "bbvip",
          "title" : "大会员",
          "code" : "bb_bbvip_ios",
          "price" : "0",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "original_price" : "¥ 0",
          "selected" : 0
        }
      ]
    },
    "tab2" : {
      "title" : "真题词组词书",
      "count" : 0,
      "products" : [
        {
          "extra" : null,
          "book_codes" : [
            "ZKZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3200 酷币",
          "type" : "ZKZTHXCZ",
          "title" : "中考  真题核心词组",
          "code" : "bb_wordbook_ZKZTHXCZ_ios",
          "price" : "32 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "ZKZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "ZKZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3200 酷币",
          "type" : "ZKZTTZCZ",
          "title" : "中考  真题拓展词组",
          "code" : "bb_wordbook_ZKZTTZCZ_ios",
          "price" : "32 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "ZKZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "GKZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3200 酷币",
          "type" : "GKZTHXCZ",
          "title" : "高考  真题核心词组",
          "code" : "bb_wordbook_GKZTHXCZ_ios",
          "price" : "32 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "GKZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "GKZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3200 酷币",
          "type" : "GKZTTZCZ",
          "title" : "高考  真题拓展词组",
          "code" : "bb_wordbook_GKZTTZCZ_ios",
          "price" : "32 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "GKZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "CET4ZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "CET4ZTHXCZ",
          "title" : "四级  真题核心词组",
          "code" : "bb_wordbook_CET4ZTHXCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "CET4ZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "CET4ZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "CET4ZTTZCZ",
          "title" : "四级  真题拓展词组",
          "code" : "bb_wordbook_CET4ZTTZCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "CET4ZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "CET6ZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "CET6ZTHXCZ",
          "title" : "六级  真题核心词组",
          "code" : "bb_wordbook_CET6ZTHXCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "CET6ZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "CET6ZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "CET6ZTTZCZ",
          "title" : "六级  真题拓展词组",
          "code" : "bb_wordbook_CET6ZTTZCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "CET6ZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "KYZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "KYZTHXCZ",
          "title" : "考研  真题核心词组",
          "code" : "bb_wordbook_KYZTHXCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "KYZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "KYZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "KYZTTZCZ",
          "title" : "考研  真题拓展词组",
          "code" : "bb_wordbook_KYZTTZCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "KYZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "IELTSHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3800 酷币",
          "type" : "IELTSHXCZ",
          "title" : "雅思  真题核心词组",
          "code" : "bb_wordbook_IELTSHXCZ_ios",
          "price" : "38 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "IELTSHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "IELTSTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3800 酷币",
          "type" : "IELTSTZCZ",
          "title" : "雅思  真题拓展词组",
          "code" : "bb_wordbook_IELTSTZCZ_ios",
          "price" : "38 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "IELTSTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "TOEFLHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3800 酷币",
          "type" : "TOEFLHXCZ",
          "title" : "托福  真题核心词组",
          "code" : "bb_wordbook_TOEFLHXCZ_ios",
          "price" : "38 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "TOEFLHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "TOEFLTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3800 酷币",
          "type" : "TOEFLTZCZ",
          "title" : "托福  真题拓展词组",
          "code" : "bb_wordbook_TOEFLTZCZ_ios",
          "price" : "38 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "TOEFLTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "PRO4ZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "PRO4ZTHXCZ",
          "title" : "专四  备考核心词组",
          "code" : "bb_wordbook_PRO4ZTHXCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "PRO4ZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "PRO4ZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "PRO4ZTTZCZ",
          "title" : "专四  备考拓展词组",
          "code" : "bb_wordbook_PRO4ZTTZCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "PRO4ZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "PRO8ZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "PRO8ZTHXCZ",
          "title" : "专八  备考核心词组",
          "code" : "bb_wordbook_PRO8ZTHXCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "PRO8ZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "PRO8ZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "PRO8ZTTZCZ",
          "title" : "专八  备考拓展词组",
          "code" : "bb_wordbook_PRO8ZTTZCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "PRO8ZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "ZSBZTHXCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "ZSBZTHXCZ",
          "title" : "专升本  真题核心词组",
          "code" : "bb_wordbook_ZSBZTHXCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "ZSBZTHXCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        },
        {
          "extra" : null,
          "book_codes" : [
            "ZSBZTTZCZ"
          ],
          "cheaper" : null,
          "disabled" : 0,
          "price_in_coin" : "3600 酷币",
          "type" : "ZSBZTTZCZ",
          "title" : "专升本  真题拓展词组",
          "code" : "bb_wordbook_ZSBZTTZCZ_ios",
          "price" : "36 元",
          "original_price_in_coin" : "0 酷币",
          "cheaper_in_coin" : null,
          "purchased" : 0,
          "book_code" : "ZSBZTTZCZ",
          "original_price" : "¥ 0",
          "selected" : 0
        }
      ]
    },
    "purchase" : {
      "coin_value" : 0.59999999999999998,
      "coin_shortage" : 29740,
      "extra" : null,
      "coin_remain" : 60,
      "original_product_in_coin" : null,
      "product_count" : 1,
      "purchase_price_in_coin" : 29740,
      "current_price_in_coin" : 29800,
      "coupon_name" : null,
      "original_products" : null,
      "coupon_id" : null,
      "original_product" : null,
      "product_codes" : [
        "bb_bbvip_ios"
      ],
      "coin_consumption" : 60,
      "pure_coin_available" : 1,
      "original_price_in_coin" : 29800,
      "coupon_price_in_coin" : 0,
      "purchase_price" : 297.39999999999998,
      "bbvip_product" : 1,
      "deduction_price" : 0.59999999999999998,
      "original_price" : 298,
      "current_price" : 298,
      "pure_coin_purchase" : 0,
      "current_save_price" : 0,
      "current_save_price_in_coin" : 0,
      "coupon_price" : 0,
      "coin_available" : 60
    }
  },
  "result_code" : 200,
  "data_version" : "dv"
}
;
$done({body:JSON.stringify(InnFen)});
