 function init() {
                    $("#box2").hide();
                    $("#box3").hide();
                    $("#box4").hide();
                    $("#box5").hide();
                    $("#testType").hide();
                }

                init();

                $("#back").click(function () {

                    location.replace("/TestSop/LoginIndex");

                });

                function GetRequest() {
                    var url = location.search; //获取url中"?"符后的字串
                    if (url.indexOf("?") != -1) {    //判断是否有参数
                        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                        strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                        //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
                    }
                    var username = strs[1];





                    var user = decodeURI(username);



                    $("#span_username").text(user);

                }
                GetRequest();

                $("#btn1Next").click(function () {
                    var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();
                    if (RadioAnswer1 == null) {
                        alert("请完成答题");
                        return false;
                    }

                    $("#btn1Next").parent().hide();
                    $("#btn1Next").parent().next().show();

                });


                $("#btn2Last").click(function () {


                    $("#btn2Last").parent().hide();
                    $("#btn2Last").parent().prev().show();

                });

                $("#btn2Next").click(function () {
                    var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
                    if (RadioAnswer2 == null) {
                        alert("请完成答题");
                        return false;
                    }

                    $("#btn2Next").parent().hide();
                    $("#btn2Next").parent().next().show();

                });


                $("#btn3Last").click(function () {

                    $("#btn3Last").parent().hide();
                    $("#btn3Last").parent().prev().show();


                });


                $("#btn3Next").click(function () {
                    var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
                    if (pdAnswer1 == null) {
                        alert("请完成答题");
                        return false;
                    }

                    $("#btn3Next").parent().hide();
                    $("#btn3Next").parent().next().show();

                });

                //判断第二题

                $("#btn4Last").click(function () {

                    $("#btn4Last").parent().hide();
                    $("#btn4Last").parent().prev().show();


                });


                $("#btn4Next").click(function () {
                    var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
                    if (pdAnswer2 == null) {
                        alert("请完成答题");
                        return false;
                    }

                    $("#btn4Next").parent().hide();
                    $("#btn4Next").parent().next().show();

                });

                //判断第三题

                $("#btn5Last").click(function () {

                    $("#btn5Last").parent().hide();
                    $("#btn5Last").parent().prev().show();


                });


                $("#submitBK").click(function () {

                    var iTrue = 0;
                    var iFalse = 0;
                    var where_mistake = "";

                    var amount = 0; //计算有多少题

                    var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();
                    amount = amount + 1;
                    if (RadioAnswer1 == "D") {
                        iTrue = iTrue + 1;

                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + "单选1";

                    }

                    var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
                    amount = amount + 1;
                    if (RadioAnswer2 == "D") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 单选2";
                    }

                    var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
                    amount = amount + 1;
                    if (pdAnswer1 == "N") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 判断1";
                    }

                    var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
                    amount = amount + 1;
                    if (pdAnswer2 == "Y") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 判断2";
                    }

                    var pdAnswer3 = $('input:radio[name="PDNum3"]:checked').val();
                    amount = amount + 1;
                    if (pdAnswer3 == "Y") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 判断3";
                    }

                    var result = RadioAnswer1 + "," + RadioAnswer2 + ","
                 + pdAnswer1 + "," + pdAnswer2 + "," + pdAnswer3;
                    var resultPercent = 0.00;
                    resultPercent = iTrue / amount;
                    resultPercent = resultPercent.toFixed(2) * 100;
                    console.log("正确:" + iTrue);
                    console.log("错误" + iFalse);
                    console.log("正确率" + resultPercent + "%");
                    console.log(result);

                    var userName = $("#span_username").text();
                    var testType = $("#testType").val();
                    console.log("考试题目:" + testType);
                    console.log("错误的题:" + where_mistake);

                                          $.ajax({

                                             type:"get",
                                             dataType:"json",
                                             url:"/TestSop/SubmitData?userName="+userName+"&test_type="+testType+
                                             "&amount="+amount + "&rightAmount=" + iTrue + "&wrongAmount=" + iFalse + "&inputAnswer="
                             + result + "&where_mistake=" + where_mistake + "&requestName=" + "SubmitTestDataByBK",
                             success: function (ret) {

                     var result = ret.strResult;
                     var jobuserName = "YX" + userName;

                     console.log("返回的用户名:" + jobuserName);

                     if (result == "ok") {

                         alert("提交成功");
                         location.replace("/TestSop/DaoHangIndex?username=" + jobuserName);

                     }
                     else {

                         alert("提交失败");
                     }

                     }

                                          })

                });

                $("#submit").click(function () {

                    var iTrue = 0;
                    var iFalse = 0;
                    var where_mistake = "";

                    var amount = 0; //计算有多少题

                    var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();
                    amount = amount + 1;
                    if (RadioAnswer1 == "D") {
                        iTrue = iTrue + 1;

                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + "单选1";

                    }

                    var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
                    amount = amount + 1;
                    if (RadioAnswer2 == "D") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 单选2";
                    }

                    var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
                    amount = amount + 1;
                    if (pdAnswer1 == "N") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 判断1";
                    }

                    var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
                    amount = amount + 1;
                    if (pdAnswer2 == "Y") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 判断2";
                    }

                    var pdAnswer3 = $('input:radio[name="PDNum3"]:checked').val();
                    amount = amount + 1;
                    if (pdAnswer3 == "Y") {
                        iTrue = iTrue + 1;
                    }
                    else {
                        iFalse = iFalse + 1;
                        where_mistake = where_mistake + " 判断3";
                    }

                    var result = RadioAnswer1 + "," + RadioAnswer2 + ","
                 + pdAnswer1 + "," + pdAnswer2 + "," + pdAnswer3;
                    var resultPercent = 0.00;
                    resultPercent = iTrue / amount;
                    resultPercent = resultPercent.toFixed(2) * 100;
                    console.log("正确:" + iTrue);
                    console.log("错误" + iFalse);
                    console.log("正确率" + resultPercent + "%");
                    console.log(result);

                    var userName = $("#span_username").text();
                    var testType = $("#testType").val();
                    console.log("考试题目:" + testType);
                    console.log("错误的题:" + where_mistake);

                                          $.ajax({

                                             type:"get",
                                             dataType:"json",
                                             url:"/TestSop/SubmitData?userName="+userName+"&test_type="+testType+
                                             "&amount="+amount + "&rightAmount=" + iTrue + "&wrongAmount=" + iFalse + "&inputAnswer=" 
                             + result + "&where_mistake=" + where_mistake + "&requestName=" + "SubmitTestData",
                             success: function (ret) {

                     var result = ret.strResult;
                     var jobuserName = "YX" + userName;

                     console.log("返回的用户名:" + jobuserName);

                     if (result == "ok") {

                         alert("提交成功");
                         location.replace("/TestSop/DaoHangIndex?username=" + jobuserName);

                     }
                     else {

                         alert("提交失败");
                     }

                     }

                                          })


                });
