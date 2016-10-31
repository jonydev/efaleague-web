/**
 * Created by baidu on 16/9/23.
 */

var officeID = '372ccd0399674ba5aabd5b984a25cf40';

$(document).ready(docready)

function docready() {
    setOfficeId(officeID);
    // clickScore()
}

function setOfficeId(id) {
    officeID = id;
    console.log("officeID: " + officeID);
    // alert("officeID:" + officeID);
    // 再拉数据
    clickScore();
}

function clickScore() {
    // $("ul#nav").children("li").removeClass("active");
    // $("li#score").addClass("active");
    $("div#nav").children("div").removeClass("act");
    $("div#score").addClass("act");
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr style='background-color: #2222ff;height:40px'>" +
            "<td class='c row1 left'>排名</td>" +
            "<td class='row1'>球队</td>" +
            "<td class='c row1'>积分</td>" +
            "<td class='c row1'>胜/平/负</td>" +
            "<td class='c row1'>进/失</td>" +
            "<td class='c row1'>红/黄</td>" +
            "<td class='c row1 right'>净胜球</td>" +
        "</tr>>"
    table.append(title);
    // 拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/leagueIntegral?officeId=" + officeID;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var score = rows[i];
                    var rank = i + 1;
                    var name = score.team.name;
                    var point = score.point;
                    var match = score.won + "/" + score.even + "/" + score.beaten;
                    var goal = score.goal;
                    var lost = score.lost
                    var red = score.red;
                    var yellow = score.yellow;
                    var plus = score.goal - score.lost;
                    var newroll =
                        "<tr>" +
                        "<td class='c left'>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td class='c'>" + point + "</td>" +
                        "<td class='c'>" + match + "</td>" +
                        "<td class='c'>" + goal + '/' + lost + "</td>" +
                        "<td class='c'>" +
                            "<span style='color: #ff0000;'>" + red +"</span>" +
                            "<span>/</span>" +
                            "<span style='color: #ffaa00'>" + yellow + "</span>" +
                        "</td>" +
                        "<td class='c right'>" + plus + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}

function clickAssist() {
    // $("ul#nav").children("li").removeClass("active");
    // $("li#assist").addClass("active");
    $("div#nav").children("div").removeClass("act");
    $("div#score").addClass("act");
    // alert('助攻')
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr>" +
        "<td>排名</td>" +
        "<td>姓名</td>" +
        "<td>球队</td>" +
        "<td>助攻</td>" +
        "</tr>>"
    table.append(title);
    // 读本地缓存
    for (var i = 0; i < 10; i++) {
        table.append(title);
    }
}
function clickGoal() {
    // $("ul#nav").children("li").removeClass("active");
    // $("li#goal").addClass("active");
    $("div#nav").children("div").removeClass("act");
    $("div#goal").addClass("act");
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr style='background-color: #2222ff'>" +
        "<td class='c row1'>排名</td>" +
        "<td class='row1'>姓名</td>" +
        "<td class='row1'>球队</td>" +
        "<td class='c row1'>进球</td>" +
        "<td class='c row1'>点球</td>" +
        "</tr>"
    table.html(title);
    // 拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllGoal?officeId=" + officeID;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var goalrow = rows[i];
                    var rank = i + 1;
                    var name = goalrow.name;
                    var teamname = goalrow.teamName;
                    var goalnum = goalrow.num;
                    var penalty = 0;
                    var newroll =
                        "<tr>" +
                        "<td class='c left'>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + teamname + "</td>" +
                        "<td class='c'>" + goalnum + "</td>" +
                        "<td class='c right'>" + penalty + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}
function clickCards() {
    // $("ul#nav").children("li").removeClass("active");
    // $("li#cards").addClass("active");
    $("div#nav").children("div").removeClass("act");
    $("div#cards").addClass("act");
    // alert('战神卡')
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr style='background-color: #2222ff'>" +
        "<td class='c row1'>排名</td>" +
        "<td class='row1'>姓名</td>" +
        "<td class='row1'>球队</td>" +
        "<td class='c row1'>红牌</td>" +
        "<td class='c row1'>黄牌</td>" +
        "</tr>>"
    table.html(title);
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllCard?officeId=" + officeID;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var goalrow = rows[i];
                    var rank = i + 1;
                    var name = goalrow.memberName;
                    var teamname = goalrow.teamName;
                    var red = goalrow.red;
                    var yellow = goalrow.yellow;
                    var newroll =
                        "<tr>" +
                        "<td class='c left'>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + teamname + "</td>" +
                        "<td class='c'>" + red + "</td>" +
                        "<td class='c right'>" + yellow + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}


