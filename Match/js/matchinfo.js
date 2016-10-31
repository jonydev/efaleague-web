/**
 * Created by baidu on 2016/9/30.
 */

var star1 = 0;
var star2 = 0;
var star3 = 0;
var homemember;
var awaymenber;

$(document).ready(docready);

function docready() {
    star();
    loadData();
}

function loadData() {
    var officeid = localStorage.getItem("officeid");
    var scheduleid = localStorage.getItem("scheduleid");
    // var officeid = "372ccd0399674ba5aabd5b984a25cf40";
    // var scheduleid = "48";
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleById?officeId=" + officeid + "&id=" + scheduleid;
    console.log(url);
    var diviconscore = $("#iconscore");
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var matchinfo = rows[i];
                    var flag = matchinfo.flag;
                    var homename = matchinfo.homeTeamName;
                    var awayname = matchinfo.awayTeamName;
                    var date = matchinfo.datetime;
                    var time = matchinfo.time;
                    var place = matchinfo.place;
                    var homeicon = matchinfo.homeTeamPhoto;
                    if (homeicon == undefined || homeicon.length <= 0) {
                        homeicon = "images/default.png";
                    }
                    var awayicon = matchinfo.awayTeamPhoto;
                    if (awayicon == undefined || awayicon.length <= 0) {
                        awayicon = "images/default.png";
                    }
                    homemember = matchinfo.homeTeamMember;
                    awaymember = matchinfo.awayTeamMember;
                    var referee = matchinfo.refereeName;
                    var leftref = matchinfo.leftUmpireName;
                    var rightref = matchinfo.rightUmpireName;
                    diviconscore.empty();
                    if (flag == "0") {
                        // 未开赛
                        // 隐藏下方面板
                        $("#divreferee").hide();
                        $("#divstar1").hide();
                        $("#divstar2").hide();
                        $("#divstar3").hide();
                        $("#submit").hide();
                        // 图标比分
                        var tmp = "<div class=\"col-xs-1\"></div><div class=\"col-xs-3 left\">"
                        + "<img class=\"icon center-block\" src=\"" + homeicon + "\"/>"
                        + "<p class=\"teamname\">" + homename + "</p></div>"
                        + "<div class=\"col-xs-4 mid\">"
                        + "<p class=\"notmatch\">" + time + "</p>"
                        + "<p class=\"notmatch\">" + date + "</p>"
                        + "<p class=\"notmatch\">" +  place + "</p></div>"
                        + "<div class=\"col-xs-3 right\">"
                            + "<img class=\"icon center-block\" src=\"" + awayicon + "\"/>"
                            + "<p class=\"teamname\">" + awayname + "</p></div>"
                        + "<div class=\"col-xs-1\"></div></div>";

                        diviconscore.html(tmp);
                    } else if (flag == "1") {
                        // 已完成
                        // 参赛人员
                        $("#member").html(homemember);
                        // 裁判
                        $("#referee").html("主裁：" + referee);
                        $("#assistref").html("边裁：" + leftref + "," + rightref);
                        $("#fourth").html("第四官员：");
                        var score = matchinfo.homescore + ":" + matchinfo.awayscore;
                        var tmp = "<div class=\"col-xs-1\"></div><div class=\"col-xs-3 left\">"
                            + "<img class=\"icon center-block\" src=\"" + homeicon + "\"/>"
                            + "<p class=\"teamname\">" + homename + "</p></div>"
                            + "<div class=\"col-xs-4 mid\">"
                            + "<p class=\"match\">" + score + "</p></div>"
                            + "<div class=\"col-xs-3 right\">"
                            + "<img class=\"icon center-block\" src=\"" + awayicon + "\"/>"
                            + "<p class=\"teamname\">" + awayname + "</p></div>"
                            + "<div class=\"col-xs-1\"></div></div>";

                        diviconscore.html(tmp);
                    }
                }
            }
        }
    )
}

function clickhome() {
    $("ul#nav").children("li").removeClass("active");
    $("li#home").addClass("active");
    // 参赛人员]
    if (homemember == undefined) {
        homemember = "";
    }
    $("#member").html(homemember);
}

function clickaway() {
    $("ul#nav").children("li").removeClass("active");
    $("li#away").addClass("active");
    // 参赛人员
    if (awaymenber == undefined) {
        awaymenber = "";
    }
    $("#member").html(awaymenber);
}

function star() {
    $(".star1").each(function(index){
        var star='images/star.png';	//普通灰色星星图片的存储路径
        var starRed='images/star_red.png';		//红色星星图片存储路径
        var prompt=['很差','比较差','一般','比较好','非常好'];	//评价提示语
        this.id=index;		//遍历img元素，设置单独的id
        $(this).on("mouseover click",function(){	//设置鼠标滑动和点击都会触发事件
            star1 = this.id;
            $(".star1").attr('src',star);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
            $(this).attr('src',starRed);		//设置鼠标当前所在图片为打星颜色图
            $(this).prevAll().attr('src',starRed);	//设置鼠标当前的前面星星图片为打星颜色图
            $(this).siblings('span').text(prompt[this.id]);		//根据id的索引值作为数组的索引值
        });
    });
    $(".star2").each(function(index){
        var star='images/star.png';	//普通灰色星星图片的存储路径
        var starRed='images/star_red.png';		//红色星星图片存储路径
        var prompt=['很差','比较差','一般','比较好','非常好'];	//评价提示语
        this.id=index;		//遍历img元素，设置单独的id
        $(this).on("mouseover click",function(){	//设置鼠标滑动和点击都会触发事件
            star2 = this.id;
            $(".star2").attr('src',star);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
            $(this).attr('src',starRed);		//设置鼠标当前所在图片为打星颜色图
            $(this).prevAll().attr('src',starRed);	//设置鼠标当前的前面星星图片为打星颜色图
            $(this).siblings('span').text(prompt[this.id]);		//根据id的索引值作为数组的索引值
        });
    });
    $(".star3").each(function(index){
        var star='images/star.png';	//普通灰色星星图片的存储路径
        var starRed='images/star_red.png';		//红色星星图片存储路径
        var prompt=['很差','比较差','一般','比较好','非常好'];	//评价提示语
        this.id=index;		//遍历img元素，设置单独的id
        $(this).on("mouseover click",function(){	//设置鼠标滑动和点击都会触发事件
            star3 = this.id;
            $(".star3").attr('src',star);//当“回滚”、“改变主意”时，先复位所有图片为木有打星的图片颜色
            $(this).attr('src',starRed);		//设置鼠标当前所在图片为打星颜色图
            $(this).prevAll().attr('src',starRed);	//设置鼠标当前的前面星星图片为打星颜色图
            $(this).siblings('span').text(prompt[this.id]);		//根据id的索引值作为数组的索引值
        });
    });
}

function submit() {
    alert("评论成功");
}