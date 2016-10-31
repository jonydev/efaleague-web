/**
 * Created by baidu on 2016/9/30.
 */
$(document).ready(docready);

var officeId;
var teamId;

function docready() {
    // setParam("17981239632246c18e0404785da78e8c", "7e097ba1d9794cca8193867cf88e3261");
}

function setParam(oId, tId) {
    // alert("old id: " + teamId + "*** new id: " + tId);
    // if (teamId != tId) {
        teamId = tId;
        officeId = oId
        clickNotstart();
    // }
}

function clickNotstart() {
    $("ul#nav").children("li").removeClass("active");
    $("li#notstart").addClass("active");
    // 拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByFlag?officeId=" + officeId + "&flag=0&team_id=" + teamId;
    var contentdiv = $("div#content");
    // alert(url);
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                contentdiv.empty();
                for (var i = 0; i < rows.length; i++) {
                    var data = rows[i];
                    var flag = data.flag;
                    var homename = data.homeTeamName;
                    var awayname = data.awayTeamName;
                    var homescore = data.homescore;
                    var awayscore = data.awayscore;
                    var homeicon = data.homeTeamPhoto;
                    if (homeicon == undefined || homeicon.length <= 0) {
                        homeicon = "images/default.png";
                    }
                    var awayicon = data.awayTeamPhoto;
                    if (awayicon == undefined || awayicon.length <= 0) {
                        awayicon = "images/default.png";
                    }
                    var time = data.time;
                    var date = data.datetime;
                    var place = data.place;
                    // 构造div行
                    var divmid;
                    if (flag == "0") {
                        divmid = "<div class=\"col-xs-4 mid\">"
                            + "<p class=\"notmatch\">" + time +"</p>"
                            + "<p class=\"notmatch\">" + date + "</p>"
                            + "<p class=\"notmatch\">" + place + "</p>"
                            + "</div>";
                    } else if (flag == "1") {
                        divmid = "<div class=\"col-xs-4 mid\">"
                        + "<p class=\"match\">" + homescore + ":" + awayscore + "</p>"
                        + "</div>";
                    }

                    var divrow = "<div class=\"row\"><div class=\"col-xs-1\"></div><div class=\"col-xs-3 left\">"
                    + "<img class=\"icon center-block\" src=\"" + homeicon + "\"/>"
                    + "<p class=\"teamname\">" + homename + "</p></div>"
                    + divmid
                    + "<div class=\"col-xs-3 right\">"
                    + "<img class=\"icon center-block\" src=\"" + awayicon + "\"/>"
                    + "<p class=\"teamname\">" + awayname + "</p></div>"
                    + "<div class=\"col-xs-1\"></div></div>"

                    contentdiv.append(divrow);
                }
            }
        }
    )
}

function clickDone() {
    $("ul#nav").children("li").removeClass("active");
    $("li#done").addClass("active");
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByFlag?officeId=" + officeId + "&flag=1&team_id=" + teamId;
    var contentdiv = $("div#content");
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                contentdiv.empty();
                for (var i = 0; i < rows.length; i++) {
                    var data = rows[i];
                    var flag = data.flag;
                    var homename = data.homeTeamName;
                    var awayname = data.awayTeamName;
                    var homescore = data.homescore;
                    var awayscore = data.awayscore;
                    var homeicon = data.homeTeamPhoto;
                    if (homeicon == undefined || homeicon.length <= 0) {
                        homeicon = "images/default.png";
                    }
                    var awayicon = data.awayTeamPhoto;
                    if (awayicon == undefined || awayicon.length <= 0) {
                        awayicon = "images/default.png";
                    }
                    var time = data.time;
                    var date = "";
                    // 构造div行
                    var divmid;
                    if (flag == "0") {
                        divmid = "<div class=\"col-xs-4 mid\">"
                            + "<p class=\"notmatch\">未开赛</p>"
                            + "<p class=\"notmatch\">" + date + "</p>"
                            + "<p class=\"notmatch\">" + time + "</p>"
                            + "</div>";
                    } else if (flag == "1") {
                        divmid = "<div class=\"col-xs-4 mid\">"
                            + "<p class=\"match\">" + homescore + ":" + awayscore + "</p>"
                            + "</div>";
                    }

                    var divrow = "<div class=\"row\"><div class=\"col-xs-1\"></div><div class=\"col-xs-3 left\">"
                        + "<img class=\"icon center-block\" src=\"" + homeicon + "\"/>"
                        + "<p class=\"teamname\">" + homename + "</p></div>"
                        + divmid
                        + "<div class=\"col-xs-3 right\">"
                        + "<img class=\"icon center-block\" src=\"" + awayicon + "\"/>"
                        + "<p class=\"teamname\">" + awayname + "</p></div>"
                        + "<div class=\"col-xs-1\"></div></div>"

                    contentdiv.append(divrow);
                }
            }
        }
    )
}

function clickEvalue() {
    $("ul#nav").children("li").removeClass("active");
    $("li#evalue").addClass("active");
}

function clickAll() {
    $("ul#nav").children("li").removeClass("active");
    $("li#all").addClass("active");
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByFlag?officeId=" + officeId + "&flag=&team_id=" + teamId;
    var contentdiv = $("div#content");
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                contentdiv.empty();
                for (var i = 0; i < rows.length; i++) {
                    var data = rows[i];
                    var flag = data.flag;
                    var homename = data.homeTeamName;
                    var awayname = data.awayTeamName;
                    var homescore = data.homescore;
                    var awayscore = data.awayscore;
                    var homeicon = data.homeTeamPhoto;
                    if (homeicon == undefined || homeicon.length <= 0) {
                        homeicon = "images/default.png";
                    }
                    var awayicon = data.awayTeamPhoto;
                    if (awayicon == undefined || awayicon.length <= 0) {
                        awayicon = "images/default.png";
                    }
                    var time = data.time;
                    var date = data.datetime;
                    var place = data.place;
                    // 构造div行
                    var divmid;
                    if (flag == "0") {
                        divmid = "<div class=\"col-xs-4 mid\">"
                            + "<p class=\"notmatch\">" + time + "</p>"
                            + "<p class=\"notmatch\">" + date + "</p>"
                            + "<p class=\"notmatch\">" + place + "</p>"
                            + "</div>";
                    } else if (flag == "1") {
                        divmid = "<div class=\"col-xs-4 mid\">"
                            + "<p class=\"match\">" + homescore + ":" + awayscore + "</p>"
                            + "</div>";
                    }

                    var divrow = "<div class=\"row\"><div class=\"col-xs-1\"></div><div class=\"col-xs-3 left\">"
                        + "<img class=\"icon center-block\" src=\"" + homeicon + "\"/>"
                        + "<p class=\"teamname\">" + homename + "</p></div>"
                        + divmid
                        + "<div class=\"col-xs-3 right\">"
                        + "<img class=\"icon center-block\" src=\"" + awayicon + "\"/>"
                        + "<p class=\"teamname\">" + awayname + "</p></div>"
                        + "<div class=\"col-xs-1\"></div></div>"

                    contentdiv.append(divrow);
                }
            }
        }
    )
}