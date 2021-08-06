
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
        $("#box11").hide();
        $("#box12").hide();
        $("#box13").hide();
        $("#box14").hide();
        $("#box15").hide();
        $("#box16").hide();
        $("#box17").hide();
        $("#box18").hide();
        $("#box19").hide();
        $("#box20").hide();
        $("#box21").hide();
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

    //单选3

    $("#btn3Last").click(function () {


        $("#btn3Last").parent().hide();
        $("#btn3Last").parent().prev().show();

    });

    $("#btn3Next").click(function () {
        var RadioAnswer3 = $('input:radio[name="RNum3"]:checked').val();
        if (RadioAnswer3 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn3Next").parent().hide();
        $("#btn3Next").parent().next().show();

    });

    //单选4
    $("#btn4Last").click(function () {


        $("#btn4Last").parent().hide();
        $("#btn4Last").parent().prev().show();

    });

    $("#btn4Next").click(function () {
        var RadioAnswer4 = $('input:radio[name="RNum4"]:checked').val();
        if (RadioAnswer4 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn4Next").parent().hide();
        $("#btn4Next").parent().next().show();

    });


    //多选1
    $("#btn5Last").click(function () {

        $("#btn5Last").parent().hide();
        $("#btn5Last").parent().prev().show();

    });

    $("#btn5Next").click(function () {
        var CBAnswer1 = "";
        $('input[name="CBNum1"]:checked').each(function () {
            CBAnswer1 = CBAnswer1 + $(this).val();

        });

        if (CBAnswer1 == "") {
            alert("请完成答题");
            return false;
        }

        $("#btn5Next").parent().hide();
        $("#btn5Next").parent().next().show();

    });

    //多选2
    $("#btn6Last").click(function () {

        $("#btn6Last").parent().hide();
        $("#btn6Last").parent().prev().show();

    });

    $("#btn6Next").click(function () {
        var CBAnswer2 = "";
        $('input[name="CBNum2"]:checked').each(function () {
            CBAnswer2 = CBAnswer2 + $(this).val();

        });

        if (CBAnswer2 == "") {
            alert("请完成答题");
            return false;
        }

        $("#btn6Next").parent().hide();
        $("#btn6Next").parent().next().show();

    });

    //多选3
    $("#btn7Last").click(function () {

        $("#btn7Last").parent().hide();
        $("#btn7Last").parent().prev().show();

    });

    $("#btn7Next").click(function () {
        var CBAnswer3 = "";
        $('input[name="CBNum3"]:checked').each(function () {
            CBAnswer3 = CBAnswer3 + $(this).val();

        });

        if (CBAnswer3 == "") {
            alert("请完成答题");
            return false;
        }

        $("#btn7Next").parent().hide();
        $("#btn7Next").parent().next().show();

    });

    //多选4
    $("#btn8Last").click(function () {

        $("#btn8Last").parent().hide();
        $("#btn8Last").parent().prev().show();

    });

    $("#btn8Next").click(function () {
        var CBAnswer4 = "";
        $('input[name="CBNum4"]:checked').each(function () {
            CBAnswer4 = CBAnswer4 + $(this).val();

        });

        if (CBAnswer4 == "") {
            alert("请完成答题");
            return false;
        }

        $("#btn8Next").parent().hide();
        $("#btn8Next").parent().next().show();

    });


    //多选5
    $("#btn9Last").click(function () {

        $("#btn9Last").parent().hide();
        $("#btn9Last").parent().prev().show();

    });

    $("#btn9Next").click(function () {
        var CBAnswer5 = "";
        $('input[name="CBNum5"]:checked').each(function () {
            CBAnswer5 = CBAnswer5 + $(this).val();

        });

        if (CBAnswer5 == "") {
            alert("请完成答题");
            return false;
        }

        $("#btn9Next").parent().hide();
        $("#btn9Next").parent().next().show();

    });


    //多选6
    $("#btn10Last").click(function () {

        $("#btn10Last").parent().hide();
        $("#btn10Last").parent().prev().show();

    });

    $("#btn10Next").click(function () {
        var CBAnswer6 = "";
        $('input[name="CBNum6"]:checked').each(function () {
            CBAnswer6 = CBAnswer6 + $(this).val();

        });

        if (CBAnswer6 == "") {
            alert("请完成答题");
            return false;
        }

        $("#btn10Next").parent().hide();
        $("#btn10Next").parent().next().show();

    });


    //判断1

    $("#btn11Last").click(function () {

        $("#btn11Last").parent().hide();
        $("#btn11Last").parent().prev().show();


    });

    $("#btn11Next").click(function () {
        var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
        if (pdAnswer1 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn11Next").parent().hide();
        $("#btn11Next").parent().next().show();

    });

    //判断2

    $("#btn12Last").click(function () {

        $("#btn12Last").parent().hide();
        $("#btn12Last").parent().prev().show();


    });

    $("#btn12Next").click(function () {
        var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
        if (pdAnswer2 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn12Next").parent().hide();
        $("#btn12Next").parent().next().show();

    });

    //判断3

    $("#btn13Last").click(function () {

        $("#btn13Last").parent().hide();
        $("#btn13Last").parent().prev().show();


    });

    $("#btn13Next").click(function () {
        var pdAnswer3 = $('input:radio[name="PDNum3"]:checked').val();
        if (pdAnswer3 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn13Next").parent().hide();
        $("#btn13Next").parent().next().show();

    });


    //判断4

    $("#btn14Last").click(function () {

        $("#btn14Last").parent().hide();
        $("#btn14Last").parent().prev().show();


    });

    $("#btn14Next").click(function () {
        var pdAnswer4 = $('input:radio[name="PDNum4"]:checked').val();
        if (pdAnswer4 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn14Next").parent().hide();
        $("#btn14Next").parent().next().show();

    });

    //判断5

    $("#btn15Last").click(function () {

        $("#btn15Last").parent().hide();
        $("#btn15Last").parent().prev().show();


    });

    $("#btn15Next").click(function () {
        var pdAnswer5 = $('input:radio[name="PDNum5"]:checked').val();
        if (pdAnswer5 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn15Next").parent().hide();
        $("#btn15Next").parent().next().show();

    });

    //判断6

    $("#btn16Last").click(function () {

        $("#btn16Last").parent().hide();
        $("#btn16Last").parent().prev().show();


    });

    $("#btn16Next").click(function () {
        var pdAnswer6 = $('input:radio[name="PDNum6"]:checked').val();
        if (pdAnswer6 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn16Next").parent().hide();
        $("#btn16Next").parent().next().show();

    });


    //判断7

    $("#btn17Last").click(function () {

        $("#btn17Last").parent().hide();
        $("#btn17Last").parent().prev().show();


    });

    $("#btn17Next").click(function () {
        var pdAnswer7 = $('input:radio[name="PDNum7"]:checked').val();
        if (pdAnswer7 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn17Next").parent().hide();
        $("#btn17Next").parent().next().show();

    });


    //判断8

    $("#btn18Last").click(function () {

        $("#btn18Last").parent().hide();
        $("#btn18Last").parent().prev().show();


    });

    $("#btn18Next").click(function () {
        var pdAnswer8 = $('input:radio[name="PDNum8"]:checked').val();
        if (pdAnswer8 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn18Next").parent().hide();
        $("#btn18Next").parent().next().show();

    });


    //判断9

    $("#btn19Last").click(function () {

        $("#btn19Last").parent().hide();
        $("#btn19Last").parent().prev().show();


    });

    $("#btn19Next").click(function () {
        var pdAnswer9 = $('input:radio[name="PDNum9"]:checked').val();
        if (pdAnswer9 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn19Next").parent().hide();
        $("#btn19Next").parent().next().show();

    });


    //判断10

    $("#btn20Last").click(function () {

        $("#btn20Last").parent().hide();
        $("#btn20Last").parent().prev().show();


    });

    $("#btn20Next").click(function () {
        var pdAnswer10 = $('input:radio[name="PDNum10"]:checked').val();
        if (pdAnswer10 == null) {
            alert("请完成答题");
            return false;
        }

        $("#btn20Next").parent().hide();
        $("#btn20Next").parent().next().show();

    });

    //判断11

    $("#btn21Last").click(function () {

        $("#btn21Last").parent().hide();
        $("#btn21Last").parent().prev().show();


    });


    $("#submitBK").click(function () {

        var iTrue = 0;
        var iFalse = 0;
        var where_mistake = "";

        var amount = 0; //计算有多少题

        var RadioAnswer1 = $('input:radio[name="RNum1"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer1 == "C") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选1";

        }

        var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer2 == "A") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选2";

        }

        var RadioAnswer3 = $('input:radio[name="RNum3"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer3 == "C") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选3";

        }

        var RadioAnswer4 = $('input:radio[name="RNum4"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer4 == "A") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选4";

        }

        var CBAnswer1 = "";
        $('input[name="CBNum1"]:checked').each(function () {
            CBAnswer1 = CBAnswer1 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer1 == "ABCD") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选1";
        }

        var CBAnswer2 = "";
        $('input[name="CBNum2"]:checked').each(function () {
            CBAnswer2 = CBAnswer2 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer2 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选2";
        }

        var CBAnswer3 = "";
        $('input[name="CBNum3"]:checked').each(function () {
            CBAnswer3 = CBAnswer3 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer3 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选3";
        }

        var CBAnswer4 = "";
        $('input[name="CBNum4"]:checked').each(function () {
            CBAnswer4 = CBAnswer4 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer4 == "ABCDE") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选4";
        }

        var CBAnswer5 = "";
        $('input[name="CBNum5"]:checked').each(function () {
            CBAnswer5 = CBAnswer5 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer5 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选5";
        }


        var CBAnswer6 = "";
        $('input[name="CBNum6"]:checked').each(function () {
            CBAnswer6 = CBAnswer6 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer6 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选6";
        }

        var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
        amount = amount + 1;
        if (pdAnswer1 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断1";
        }

        var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
        amount = amount + 1;
        if (pdAnswer2 == "N") {
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

        var pdAnswer4 = $('input:radio[name="PDNum4"]:checked').val();
        amount = amount + 1;
        if (pdAnswer4 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断4";
        }

        var pdAnswer5 = $('input:radio[name="PDNum5"]:checked').val();
        amount = amount + 1;
        if (pdAnswer5 == "N") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断5";
        }

        var pdAnswer6 = $('input:radio[name="PDNum6"]:checked').val();
        amount = amount + 1;
        if (pdAnswer6 == "N") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断6";
        }

        var pdAnswer7 = $('input:radio[name="PDNum7"]:checked').val();
        amount = amount + 1;
        if (pdAnswer7 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断7";
        }

        var pdAnswer8 = $('input:radio[name="PDNum8"]:checked').val();
        amount = amount + 1;
        if (pdAnswer8 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断8";
        }

        var pdAnswer9 = $('input:radio[name="PDNum9"]:checked').val();
        amount = amount + 1;
        if (pdAnswer9 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断9";
        }


        var pdAnswer10 = $('input:radio[name="PDNum10"]:checked').val();
        amount = amount + 1;
        if (pdAnswer10 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断10";
        }

        var pdAnswer11 = $('input:radio[name="PDNum11"]:checked').val();

        if (pdAnswer11 == null) {
            alert("请完成答题");
            return false;
        }
        amount = amount + 1;
        if (pdAnswer11 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断11";
        }

        var result = RadioAnswer1 + "," + RadioAnswer2 + ","
                              + RadioAnswer3 + "," + RadioAnswer4 + "," + CBAnswer1
                              + CBAnswer2 + "," + CBAnswer3 + "," +
                              CBAnswer4 + "," + CBAnswer5 + "," + CBAnswer6 + "," +
                              pdAnswer1 + ","
                     + pdAnswer2 + "," + pdAnswer3 + "," + pdAnswer4 + "," + pdAnswer5 +
                     "," + pdAnswer6 + "," + pdAnswer7 + "," + pdAnswer8 + "," + pdAnswer9 + ","
                     + pdAnswer10 + "," + pdAnswer11;
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

            type: "get",
            dataType: "json",
            url: "/TestSop/SubmitData?userName=" + userName + "&test_type=" + testType +
                                 "&amount=" + amount + "&rightAmount=" + iTrue + "&wrongAmount=" + iFalse + "&inputAnswer="
                 + result + "&where_mistake=" + where_mistake + "&requestName=" + "SubmitTestDataByBK",
            success: function (ret) {

                var result = ret.strResult;
                var jobuserName = "DG" + userName;

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
        if (RadioAnswer1 == "C") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选1";

        }

        var RadioAnswer2 = $('input:radio[name="RNum2"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer2 == "A") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选2";

        }

        var RadioAnswer3 = $('input:radio[name="RNum3"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer3 == "C") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选3";

        }

        var RadioAnswer4 = $('input:radio[name="RNum4"]:checked').val();
        amount = amount + 1;
        if (RadioAnswer4 == "A") {
            iTrue = iTrue + 1;

        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + "单选4";

        }

        var CBAnswer1 = "";
        $('input[name="CBNum1"]:checked').each(function () {
            CBAnswer1 = CBAnswer1 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer1 == "ABCD") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选1";
        }

        var CBAnswer2 = "";
        $('input[name="CBNum2"]:checked').each(function () {
            CBAnswer2 = CBAnswer2 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer2 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选2";
        }

        var CBAnswer3 = "";
        $('input[name="CBNum3"]:checked').each(function () {
            CBAnswer3 = CBAnswer3 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer3 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选3";
        }

        var CBAnswer4 = "";
        $('input[name="CBNum4"]:checked').each(function () {
            CBAnswer4 = CBAnswer4 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer4 == "ABCDE") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选4";
        }

        var CBAnswer5 = "";
        $('input[name="CBNum5"]:checked').each(function () {
            CBAnswer5 = CBAnswer5 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer5 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选5";
        }


        var CBAnswer6 = "";
        $('input[name="CBNum6"]:checked').each(function () {
            CBAnswer6 = CBAnswer6 + $(this).val();

        });
        amount = amount + 1;
        if (CBAnswer6 == "ABC") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 多选6";
        }

        var pdAnswer1 = $('input:radio[name="PDNum1"]:checked').val();
        amount = amount + 1;
        if (pdAnswer1 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断1";
        }

        var pdAnswer2 = $('input:radio[name="PDNum2"]:checked').val();
        amount = amount + 1;
        if (pdAnswer2 == "N") {
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

        var pdAnswer4 = $('input:radio[name="PDNum4"]:checked').val();
        amount = amount + 1;
        if (pdAnswer4 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断4";
        }

        var pdAnswer5 = $('input:radio[name="PDNum5"]:checked').val();
        amount = amount + 1;
        if (pdAnswer5 == "N") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断5";
        }

        var pdAnswer6 = $('input:radio[name="PDNum6"]:checked').val();
        amount = amount + 1;
        if (pdAnswer6 == "N") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断6";
        }

        var pdAnswer7 = $('input:radio[name="PDNum7"]:checked').val();
        amount = amount + 1;
        if (pdAnswer7 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断7";
        }

        var pdAnswer8 = $('input:radio[name="PDNum8"]:checked').val();
        amount = amount + 1;
        if (pdAnswer8 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断8";
        }

        var pdAnswer9 = $('input:radio[name="PDNum9"]:checked').val();
        amount = amount + 1;
        if (pdAnswer9 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断9";
        }


        var pdAnswer10 = $('input:radio[name="PDNum10"]:checked').val();
        amount = amount + 1;
        if (pdAnswer10 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断10";
        }

        var pdAnswer11 = $('input:radio[name="PDNum11"]:checked').val();

        if (pdAnswer11 == null) {
            alert("请完成答题");
            return false;
        }
        amount = amount + 1;
        if (pdAnswer11 == "Y") {
            iTrue = iTrue + 1;
        }
        else {
            iFalse = iFalse + 1;
            where_mistake = where_mistake + " 判断11";
        }

        var result = RadioAnswer1 + "," + RadioAnswer2 + ","
                              + RadioAnswer3 + "," + RadioAnswer4 + "," + CBAnswer1
                              + CBAnswer2 + "," + CBAnswer3 + "," +
                              CBAnswer4 + "," + CBAnswer5 + "," + CBAnswer6 + "," +
                              pdAnswer1 + ","
                     + pdAnswer2 + "," + pdAnswer3 + "," + pdAnswer4 + "," + pdAnswer5 +
                     "," + pdAnswer6 + "," + pdAnswer7 + "," + pdAnswer8 + "," + pdAnswer9 + ","
                     + pdAnswer10 + "," + pdAnswer11;
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
         var jobuserName = "DG" + userName;

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
