/**
 * Created by baidu on 16/9/23.
 */
$(document).ready(docready);

var officeID = '372ccd0399674ba5aabd5b984a25cf40';

function docready() {
    // setOfficeId("372ccd0399674ba5aabd5b984a25cf40");
}

function setOfficeId(id) {
    officeID = id;
    // 再拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/officeViewData?id=" + officeID;
    $.ajax(
        {
            url:url,
            success:function (data) {
                // 解析json，拿到3个数据
                var obj = eval(data);
                var intro = obj[0].caption;
                var rule = obj[0].rule;
                var judge = obj[0].referee;
                $("#intro").html(intro);
                $("#rule").html(rule);
                $("#judge").html(judge);
            }

        }
    )
}