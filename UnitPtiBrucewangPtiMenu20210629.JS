 function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
            strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
            //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        }
        var username = strs[1];

        $("#span_username").text(username);

    }
    GetRequest();

    function init() {
        $("#ship_corp").attr("disabled", true);
        $("#ctn_size").attr("disabled", true);
        $("#ctn_type").attr("disabled", true);
        $("#unit_status").attr("disabled", true);
        $("#in_edi_date").attr("disabled", true);
        $("#in_entrust_remark").attr("disabled", true);
        $("#in_ctn_remark").attr("disabled", true);
        $("#btnInputpti").attr("disabled", true);
        $("#ctn_id").hide();
        $("#box2").hide();
        $("#box3").hide();
    }

    init();

    $("#btnRush").click(function () {

        window.location.reload();

    });

    function showpti() {
        $("#box2").show();
        $("#box3").show();
        //        var myDate = new Date();
        //        var year = myDate.getFullYear();
        //        var mon = myDate.getMonth() + 1;
        //        var mon2 = "";
        //        if (mon < 10) {
        //            mon2 = "0" + mon + "";
        //        }
        //        else {
        //            mon2 = mon + "";
        //        }
        //        var day = myDate.getDate();
        //        $("#pti_date").val(year + "-" + mon2 + "-" + day + " 00:00:00");
    }

    $("#btnInputpti").click(function () {

        var ctn_id = $("#ctn_id").val();

        if (ctn_id == "") {

            alert("请先查询数据");
            return false;
        }
        showpti();
    });

    $("#temperature").blur(function () {

        var temperature = $("#temperature").val();
        var _temperature = temperature.toUpperCase();

        $("#temperature").val(_temperature);

    });


    $("#ctn_no").blur(function () {

        var ctn_no = $("#ctn_no").val();
        var _ctn_no = ctn_no.toUpperCase();

        $("#ctn_no").val(_ctn_no);

    });


    $("#pti_status").blur(function () {

        var pti_type = $("#pti_type").val();
        var pti_status = $("#pti_status").val();
        if (pti_type == "DL" && pti_status == "PTO") {
            //            $("#temperature").val("-18C");

            $("#ZF").val("-");
            $("#temperature").val("18");

        }

    });

    function SubmitPTIData() {

        var electrician_user_name = $("#span_username").text();
        var ctn_id = $("#ctn_id").val();
        var pti_type = $("#pti_type").val();
        if (pti_type == "empty") {
            alert("pti动作不能为空");
            $("#pti_type").focus();
            return false;
        }
        var pti_status = $("#pti_status").val();
        if (pti_status == "empty") {
            alert("pti状态不能为空");
            $("#pti_status").focus();
            return false;
        }

        var temperature = $("#temperature").val();

        


        if (temperature == "") {

            if (pti_type == "DL" && pti_status == "PTO") {
                alert("pti动作为打冷,pti状态为通过的情况温度不能为空");
                $("#temperature").focus();
                return false;
            }

        }

        var ZF = $("#ZF").val();
        temperature = ZF + temperature + "C";

        var humidity = $("#humidity").val();

        if (humidity != "") {

            humidity = humidity + "%";

        }

        var ope = $("#ship_corp").val();

        var unit_status = $("#unit_status").val();

        var remark = $("#remark").val();

        var ctn_no = $("#ctn_no").val();

        console.log('ctn_id:' + ctn_id + ',箱号:' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
        + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',备注:' + remark);

        var logInfo = '箱号:' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
        + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',备注:' + remark;

        if (!window.confirm('箱号:' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
        + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',备注:' + remark + ',请确认信息是否提交')) {

            return false;

        }

        $.ajax({

            type: "get",
            dataType: "json",
            url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&ope=" + ope + "&temperature=" + temperature
         + "&pti_status=" + pti_status + "&pti_type=" + pti_type + "&electrician_user_name=" + electrician_user_name
         + "&unit_status=" + unit_status + "&remark=" + remark + "&logInfo=" + logInfo
         + "&humidity=" + humidity + "&requestName=" + "SubmitPtiData",

            success: function (ret) {

                var result = ret.strResult;
                if (result == "ok") {

                    alert("提交成功");
                    window.location.reload();

                }
                else {

                    alert("提交失败");
                }

            }


        })

    }

    $("#btnSubmit").click(function () {

        SubmitPTIData();

    })


    function SelectInfoByCtnNo() {

        var ctn_no = $("#ctn_no").val();
        if (ctn_no == "") {

            alert("请录入箱号");
            $("#ctn_no").focus();
            return false;
        }

        $.ajax({

            type: "get",
            dataType: "json",
            url: "/Unitbusiness/QueryCtnInfo?ctn_no=" + ctn_no + "&requestName=" + "selectDataByNo",
            success: function (ret) {

                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有符合条件的数据");
                    window.location.reload();
                }

                $(ret).each(function (key) {
                    $("#ctn_id").val(ret[key].ctn_id);
                    $("#ship_corp").val(ret[key].ope);
                    $("#ctn_size").val(ret[key].ctn_size);
                    $("#ctn_type").val(ret[key].ctn_type);
                    $("#unit_status").val(ret[key].unit_status);
                    $("#in_edi_date").val(ret[key].in_edi_date);
                    $("#in_entrust_remark").val(ret[key].in_entrust_remark);
                    $("#in_ctn_remark").val(ret[key].in_ctn_remark);
                    $("#ctn_no").val(ret[key].ctn_no);
                });

                $("#btnInputpti").attr("disabled", false);
            }


        })

    }


    $("#btnSelect").click(function () {

        SelectInfoByCtnNo();

    });
