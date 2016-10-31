/**
 * Created by baidu on 16/9/23.
 */

// 17981239632246c18e0404785da78e8c
var officeID = '372ccd0399674ba5aabd5b984a25cf40';
var ScheduleData;

$(document).ready(docready);

function docready() {
    // setOfficeId(officeID)
}

function clickItem(scheduleid) {
    localStorage.setItem("officeid", officeID);
    localStorage.setItem("scheduleid", scheduleid);
    window.location.href = "./MatchInfo.html";
}


function setOfficeId(id) {
    officeID = id;
    var url = window.location.href;
    var index = url.indexOf("Schedule.html");
    if (index == -1) {
        return;
    }
    // 再拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getSchedule?officeId=" + officeID;
    var div = $("#content");
    div.empty();
    var div_panel = "<div class=\"panel panel-default\">"
        + "<div class=\"panel-heading\">"
        + "<h4 class=\"panel-title\">"
        + "<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">"
        + "第1轮"
        + "</a></h4></div>"
        + "<div id=\"collapse1\" class=\"panel-collapse collapse in\">";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                ScheduleData = rows;
                var turn = 1;
                for (var i = 0; i < rows.length; i++) {
                    var sch = rows[i];
                    var currentturn = sch.turn;
                    if (Number(currentturn) == Number(turn) + 1) {
                        div_panel += "</div>";
                        div.append(div_panel);
                        div_panel = "<div class=\"panel panel-default\">"
                            + "<div class=\"panel-heading\">"
                            + "<h4 class=\"panel-title\">"
                            + "<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse" + currentturn + "\">"
                            + "第" + currentturn + "轮"
                            + "</a></h4></div>"
                            + "<div id=\"collapse" + currentturn + "\" class=\"panel-collapse collapse in\">";
                    }
                    turn = currentturn;
                    var flag = sch.flag;
                    var scheduleid = sch.id;
                    var onclick = "clickItem(\"" + scheduleid + "\")";
                    div_panel = div_panel
                        + "<div class=\"panel-body\" style = 'height:100px' onclick=" + onclick + ">"
                        + "<div style='padding-top: 5px'>"
                        + "<div style=\"float: left;padding-top:20px\">";
                    var homephoto = sch.homeTeamPhoto;
                    div_panel += "<img src=\""+ homephoto + "\" onerror='javascript:this.src=\"images/default.png\"'/>";
                    var homename = sch.homeTeamName;
                    div_panel += "<span>" + homename +"</span>";
                    div_panel += "</div>";
                    if (flag == 1) {
                        var result = sch.homescore + ":" + sch.awayscore;
                        div_panel += "<p class='match'>" + result + "</p>";
                    } else {
                        var time = sch.time;
                        div_panel += "<p class='notmatch1'>" + sch.time + "</p>";
                        div_panel += "<p class='notmatch2'>" + sch.datetime + "</p>";
                        div_panel += "<p class='notmatch3'>" + sch.place + "</p>";
                    }
                    div_panel += "<div style=\"float: right;padding-top:20px\">";
                    div_panel += "<span>" + sch.awayTeamName + "</span>";
                    div_panel += "<img src=\"" + sch.awayTeamPhoto + "\" onerror='javascript:this.src=\"images/default.png\"'/></div>";
                    div_panel += "</div>";
                    div_panel += "</div>"
                }
                div.append(div_panel);
            }
        }
    )
}