 function init() {
                     $("#box2").hide();
                     $("#box3").hide();
                     $("#box4").hide();
                     $("#box5").hide();
                     $("#box6").hide();
                     $("#box7").hide();
                     $("#box8").hide();
                     $("#box9").hide();
                     $("#box10").hide();
                 }

                 init();

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

                 //第一题下一题
                 $("#btn1Next").click(function () {


                     var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();

                     if (RadioAnswer1 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box1").hide();
                     $("#box2").show();

                 });

                 //第二题上一题
                 $("#btn2Last").click(function () {
                     $("#box1").show();
                     $("#box2").hide();
                 })
                 //第二题下一题
                 $("#btn2Next").click(function () {
                     var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
                     if (RadioAnswer2 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box2").hide();
                     $("#box3").show();
                 });

                 //第3题上一题
                 $("#btn3Last").click(function () {
                     $("#box2").show();
                     $("#box3").hide();
                 })
                 //第3题下一题
                 $("#btn3Next").click(function () {
                     var RadioAnswer3 = $('input:radio[name="RNum3"]:checked').val();
                     if (RadioAnswer3 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box3").hide();
                     $("#box4").show();
                 });

                 //第4题上一题
                 $("#btn4Last").click(function () {
                     $("#box3").show();
                     $("#box4").hide();
                 })
                 //第4题下一题
                 $("#btn4Next").click(function () {
                     var RadioAnswer4 = $('input:radio[name="RNum4"]:checked').val();
                     if (RadioAnswer4 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box4").hide();
                     $("#box5").show();
                 });

                 //第5题上一题
                 $("#btn5Last").click(function () {
                     $("#box4").show();
                     $("#box5").hide();
                 })
                 //第5题下一题
                 $("#btn5Next").click(function () {
                     var RadioAnswer5 = $('input:radio[name="RNum5"]:checked').val();
                     if (RadioAnswer5 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box5").hide();
                     $("#box6").show();
                 });

                 //第6题上一题
                 $("#btn6Last").click(function () {
                     $("#box5").show();
                     $("#box6").hide();
                 })
                 //第6题下一题
                 $("#btn6Next").click(function () {
                     var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
                     if (pdAnswer1 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box6").hide();
                     $("#box7").show();
                 });

                 //第7题上一题
                 $("#btn7Last").click(function () {
                     $("#box6").show();
                     $("#box7").hide();
                 })
                 //第7题下一题
                 $("#btn7Next").click(function () {
                     var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
                     if (pdAnswer2 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box7").hide();
                     $("#box8").show();
                 });

                 //第8题上一题
                 $("#btn8Last").click(function () {
                     $("#box7").show();
                     $("#box8").hide();
                 })
                 //第8题下一题
                 $("#btn8Next").click(function () {
                     var pdAnswer3 = $('input:radio[name="PDNum3"]:checked').val();
                     if (pdAnswer3 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box8").hide();
                     $("#box9").show();
                 });


                 //第9题上一题
                 $("#btn9Last").click(function () {
                     $("#box8").show();
                     $("#box9").hide();
                 })
                 //第9题下一题
                 $("#btn9Next").click(function () {
                     var pdAnswer4 = $('input:radio[name="PDNum4"]:checked').val();
                     if (pdAnswer4 == null) {
                         alert("请完成答题");
                         return false;
                     }
                     $("#box9").hide();
                     $("#box10").show();
                 });

                 //第10题上一题
                 $("#btn10Last").click(function () {
                     $("#box9").show();
                     $("#box10").hide();
                 });

                 //提交首次成绩
                 $("#submit").click(function () {

                     var iTrue = 0;
                     var iFalse = 0;
                     var where_mistake = "";

                     var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();

                     if (RadioAnswer1 == "C") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake =where_mistake+ "单选1";
                     }


                     var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
                     if (RadioAnswer2 == "A") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选2";
                     }
                     var RadioAnswer3 = $('input:radio[name="RNum3"]:checked').val();
                     if (RadioAnswer3 == "C") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选3";
                     }

                     var RadioAnswer4 = $('input:radio[name="RNum4"]:checked').val();
                     if (RadioAnswer4 == "A") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选4";
                     }

                     var RadioAnswer5 = $('input:radio[name="RNum5"]:checked').val();
                     if (RadioAnswer5 == "C") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选5";
                     }

                     var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
                     if (pdAnswer1 == "Y") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断1";
                     }

                     var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
                     if (pdAnswer2 == "Y") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断2";
                     }

                     var pdAnswer3 = $('input:radio[name="PDNum3"]:checked').val();
                     if (pdAnswer3 == "N") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断3";
                     }

                     var pdAnswer4 = $('input:radio[name="PDNum4"]:checked').val();
                     if (pdAnswer4 == "N") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断4";
                     }

                     var pdAnswer5 = $('input:radio[name="PDNum5"]:checked').val();
                     if (pdAnswer5 == "Y") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断5";
                     }

                     var result = RadioAnswer1 + "," + RadioAnswer2
    + "," + RadioAnswer3 + "," + RadioAnswer4 + "," + RadioAnswer5 + "," + pdAnswer1 + ","
    + pdAnswer2 + "," + pdAnswer3 +
    "," + pdAnswer4 + "," + pdAnswer5;
                     var resultPercent = 0.00;
                     resultPercent = iTrue / 10;
                     resultPercent = resultPercent.toFixed(2) * 100;
                     console.log("正确:" + iTrue);
                     console.log("错误" + iFalse);
                     console.log("正确率" + resultPercent + "%");
                     console.log(result);


                     var userName = $("#span_username").text();

                     var amount = 10;

                     $.ajax({
                         type: "get",
                         dataType: "json",
                         url: "/TestSop/SubmitData?userName=" + userName + "&test_type=" + "APYS" + "&amount="
        + amount + "&rightAmount=" + iTrue + "&wrongAmount=" + iFalse + "&inputAnswer=" 
        + result + "&where_mistake=" + where_mistake + "&requestName=" + "SubmitTestData",


                         success: function (ret) {

                             var result = ret.strResult;
                             var jobuserName = "XG" + userName;

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

                 //提交补考成绩
                 $("#submitBK").click(function () {


                     var iTrue = 0;
                     var iFalse = 0;
                     var where_mistake = "";

                     var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();

                     if (RadioAnswer1 == "C") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + "单选1";
                     }


                     var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
                     if (RadioAnswer2 == "A") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选2";
                     }
                     var RadioAnswer3 = $('input:radio[name="RNum3"]:checked').val();
                     if (RadioAnswer3 == "C") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选2";
                     }

                     var RadioAnswer4 = $('input:radio[name="RNum4"]:checked').val();
                     if (RadioAnswer4 == "A") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选4";
                     }

                     var RadioAnswer5 = $('input:radio[name="RNum5"]:checked').val();
                     if (RadioAnswer5 == "C") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 单选5";
                     }

                     var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
                     if (pdAnswer1 == "Y") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断1";
                     }

                     var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
                     if (pdAnswer2 == "Y") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断2";
                     }

                     var pdAnswer3 = $('input:radio[name="PDNum3"]:checked').val();
                     if (pdAnswer3 == "N") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断3";
                     }

                     var pdAnswer4 = $('input:radio[name="PDNum4"]:checked').val();
                     if (pdAnswer4 == "N") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断4";
                     }

                     var pdAnswer5 = $('input:radio[name="PDNum5"]:checked').val();
                     if (pdAnswer5 == "Y") {
                         iTrue = iTrue + 1;
                     }
                     else {
                         iFalse = iFalse + 1;
                         where_mistake = where_mistake + " 判断5";
                     }

                     var result = RadioAnswer1 + "," + RadioAnswer2
    + "," + RadioAnswer3 + "," + RadioAnswer4 + "," + RadioAnswer5 + "," + pdAnswer1 + ","
    + pdAnswer2 + "," + pdAnswer3 +
    "," + pdAnswer4 + "," + pdAnswer5;
                     var resultPercent = 0.00;
                     resultPercent = iTrue / 10;
                     resultPercent = resultPercent.toFixed(2) * 100;
                     console.log("正确:" + iTrue);
                     console.log("错误" + iFalse);
                     console.log("正确率" + resultPercent + "%");
                     console.log(result);


                     var userName = $("#span_username").text();

                     var amount = 10;

                     $.ajax({
                         type: "get",
                         dataType: "json",
                         url: "/TestSop/SubmitData?userName=" + userName + "&test_type=" + "APYS" + "&amount="
        + amount + "&rightAmount=" + iTrue + "&wrongAmount=" + iFalse + "&inputAnswer=" 
        + result + "&where_mistake=" + where_mistake + "&requestName=" + "SubmitTestDataByBK",


                         success: function (ret) {

                             var result = ret.strResult;
                             var jobuserName = "XG" + userName;

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
