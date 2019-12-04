 var isCheck = 0;

    $("#MODEL_NUM").blur(function () {

        var MODEL_NUM = $("#MODEL_NUM").val();
        var _MODEL_NUM = MODEL_NUM.toUpperCase();

        $("#MODEL_NUM").val(_MODEL_NUM);

    });

    $("#UNIT_SERIAL_NUM").blur(function () {

        var UNIT_SERIAL_NUM = $("#UNIT_SERIAL_NUM").val();
        var _UNIT_SERIAL_NUM = UNIT_SERIAL_NUM.toUpperCase();

        $("#UNIT_SERIAL_NUM").val(_UNIT_SERIAL_NUM);

    });



    $("#btnTest").click(function () {

        var MODEL_NUM = $("#MODEL_NUM").val();
        console.log("机组型号录入的值为:" + MODEL_NUM);

        //        $("#btnUnitInfoUpdate").attr("disabled", false);


        //        $("#btnUnitInfoUpdate").prop("disabled", false);





        //        $("#btnUnitInfoUpdate").attr("disabled", "disabled");

    });


    function init() {



        //                $("#btnUnitInfoUpdate").attr("disabled", true);
        //        $("#r_compcode").attr("disabled", true);
        //        $("#r_pos").attr("disabled", true);
        //        $("#r_damcode").attr("disabled", true);
        //        $("#r_repaircode").attr("disabled", true);
        //        $("#r_length").attr("disabled", true);
        //        $("#r_width").attr("disabled", true);
        //        $("#r_count").attr("disabled", true);
        //        $("#r_resp").attr("disabled", true);
        //        $("#r_desc").attr("disabled", true);
        //        $("#btnItemSelect").attr("disabled", true);

        $("#r_id").hide();
        $("#rr_id").hide();
        $("#p_r_id").hide();
        alert("页面加载完成");

    }

    init();



    $("#btnRush").click(function () {

        window.location.reload();

    });

    function SelectRepInfo() {

        var ctn_no = $("#ctn_no").val();

        if (ctn_no == "") {

            alert("请输入箱号");
            return false;

        }

        $.ajax({

            type: "get",
            dataType: "json",
            url: "/RepairbillInfo/AddColdCtnInfo?val1=" + ctn_no + "&val88=" + "QueryRepInfo",

            success: function (ret) {


                var map = eval('(' + ret + ')');


                var str = JSON.stringify(map.dt);


                if (str == "[]") {
                    alert("此箱未上传或已被读取");
                    //return false;
                    window.location.reload();
                }

                var _json = eval(map.dt);




                var response = JSON.stringify(map.Response);

                var html = "";
                var i = 1;
                //                html += "<tr>";
                //                html += "<td style = " + "'" + "display:none;" + "'" + ">" + "r_id" + "</td>"//0
                //                html += "<td style = " +"'" + "display:none;" + "'" + ">" + "箱号" +"</td>"; //1
                //                html += "<td>箱毛重</td>"; //2
                //                html += "<td>箱自重</td>"; //3
                //                html += "<td>箱载重</td>"; //4
                //                html += "<td>箱型</td>"; //5
                //                html += "<td>尺寸</td>"; //6
                //                html += "<td>箱况</td>"; //7
                //                html += "<td>造箱年份</td>"; //8
                //                html += "<td>验箱时间</td>"; //9
                //                html += "<td>验箱人</td>"; //10
                //                html += "<td>验箱备注</td>"; //11
                //                html += "<td>是否已被读取</td>"; //12
                //                html += "</tr>"

                var _r_id = "";
                var _ctn_no = "";

                $(_json).each(function (key) {

                    _r_id = _json[key].r_id;
                    _ctn_no = _json[key].r_cntno;

                    $("#ctn_no").val(_ctn_no);

                    html += "<tr>";
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_id + "</td>"//0
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_cntno + "</td>"//1
                    //                    html += "<td>" + _json[key].r_cntno + "</td>"; //1
                    html += "<td>" + _json[key].r_cntweight + "</td>"; //2
                    html += "<td>" + _json[key].r_cnt_netweight + "</td>"; //3
                    html += "<td>" + _json[key].r_cnt_grossweight + "</td>"; //4
                    html += "<td>" + _json[key].r_cnttype + "</td>"; //5
                    html += "<td>" + _json[key].r_cntsize + "</td>"; //6
                    html += "<td>" + _json[key].r_av + "</td>"; //7
                    html += "<td>" + _json[key].r_cntym + "</td>"; //8
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_date + "</td>"//1
                    //html += "<td>" + _json[key].r_date + "</td>"; //9
                    html += "<td>" + _json[key].r_user + "</td>"; //10
                    html += "<td>" + _json[key].inspection_Remark + "</td>"; //11
                    html += "<td>" + _json[key].r_isGetData + "</td>"; //12
                    html += "</tr>";

                });

                $("#RepairbillInfotable").html(html);
                // var r_id = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(0).text();
                var r_id = _r_id;
                $("#r_id").val(r_id);



                var IsGetData = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(12).text();

                if (IsGetData == "未被读取") {

                    $("#btnUnitInfoUpdate").attr("disabled", false);
                    $("#ctn_no").attr("disabled", true);
                    $("#btnItemSelect").attr("disabled", false);

                }
                isCheck = 1;

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }


        })

    }

    $("#btnQuery").click(function () {

        SelectRepInfo();

    });



    function SelectRepInfoByCtn_no() {


        var ctn_no = $("#ctn_no").val();

        if (ctn_no == "") {

            alert("请输入箱号");
            return false;

        }


        $.ajax({

            type: "get",
            dataType: "json",
            url: "/RepairbillInfo/AddColdCtnInfo?val1=" + ctn_no + "&val88=" + "QueryRepInfoByctn_no",

            success: function (ret) {

                var map = eval('(' + ret + ')');

                var str = JSON.stringify(map.dt);
                if (str == "[]") {
                    alert("没有数据");
                    return false;
                }

                var _json = eval(map.dt);
                var html = "";
                var i = 1;

                html += "<tr>";
                html += "<td>操作</td>"; //0
                html += "<td style = " + "'" + "display:none;" + "'" + ">" + "r_id" + "</td>"//1
                html += "<td>箱号</td>"; //2
                html += "<td>是否已被读取</td>"; //3
                html += "<td>机组品牌</td>"; //4
                html += "<td>机组型号</td>"; //5
                html += "<td>机组序列号</td>"; //6
                html += "<td>机组冷冻液</td>"; //7
                html += "<td>机组电压</td>"; //8
                html += "<td>pti动作</td>"; //9
                html += "<td>pti状态</td>"; //10
                html += "<td>机组日期</td>"; //11
                html += "</tr>"



                $(_json).each(function (key) {

                    html += "<tr>";
                    html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "查看详细"
                      + "' onclick = '" + "return  Settlement(" + i + ")" + "'" + "/>" + "</td>"; //0
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_id + "</td>"//1
                    html += "<td>" + _json[key].r_cntno + "</td>"; //2
                    html += "<td>" + _json[key].r_isGetData + "</td>"; //3
                    html += "<td>" + _json[key].MACH_TYPE + "</td>"; //4
                    html += "<td>" + _json[key].MODEL_NUM + "</td>"; //5
                    html += "<td>" + _json[key].UNIT_SERIAL_NUM + "</td>"; //6
                    html += "<td>" + _json[key].SnowSeed + "</td>"; //7
                    html += "<td>" + _json[key].unit_voltage + "</td>"; //8
                    html += "<td>" + _json[key].pti_type + "</td>"; //9
                    html += "<td>" + _json[key].pti_status + "</td>"; //10
                    html += "<td>" + _json[key].unit_date + "</td>"; //11
                    html += "</tr>";
                    i++;



                });
                $("#RepairbillInfotable").html(html);

                isCheck = 1;

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }


        })


    }

    function Settlement(i) {

        var r_id = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(1).text();
        $("#r_id").val(r_id);
        var ctn_no = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(2).text();
        $("#ctn_no").val(ctn_no);
        var MODEL_NUM = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(5).text();
        $("#MODEL_NUM").val(MODEL_NUM);
        var MACH_TYPE = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(4).text();
        $("#MACH_TYPE").val(MACH_TYPE);
        $("#MACH_TYPE").selectmenu('refresh', true);

        var UNIT_SERIAL_NUM = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(6).text();
        $("#UNIT_SERIAL_NUM").val(UNIT_SERIAL_NUM);
        var SnowSeed = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(7).text();
        $("#SnowSeed").val(SnowSeed);
        $("#SnowSeed").selectmenu('refresh', true);

        var unit_voltage = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(8).text();
        $("#unit_voltage").val(unit_voltage);
        $("#unit_voltage").selectmenu('refresh', true);

        var pti_type = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(9).text();

        $("#pti_type").val(pti_type);
        $("#pti_type").selectmenu('refresh', true);

        var pti_status = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(10).text();
        $("#pti_status").val(pti_status);
        $("#pti_status").selectmenu('refresh', true);

        var unit_date = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(11).text();
        if (unit_date == "null") {

            unit_date = "";

        }

        $("#unit_date").val(unit_date);
        var r_isGetData = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(3).text();

        if (r_isGetData == "未被读取") {

            $("#btnUnitInfoUpdate").attr("disabled", false);

        }

        $("#ctn_no").attr("disabled", true);


    }

    $("#btnCtnInfoQuery").click(function () {

        SelectRepInfoByCtn_no();

    });

    function UpdateUnitData() {




        var MACH_TYPE = $("#MACH_TYPE").val();
        var MODEL_NUM = $("#MODEL_NUM").val();
        var UNIT_SERIAL_NUM = $("#UNIT_SERIAL_NUM").val();
        var SnowSeed = $("#SnowSeed").val();
        var unit_voltage = $("#unit_voltage").val();
        var pti_type = $("#pti_type").val();
        var r_id = $("#r_id").val();

        var pti_status = $("#pti_status").val();

        var _unit_date = $("#unit_date").val();
        var unit_date = "";


        if (_unit_date != "") {

            var year = _unit_date.substr(0, 4);

            var month = _unit_date.substr(4, 2);

            var day = _unit_date.substr(6, 2);

            unit_date = year + "-" + month + "-" + day;

            var r = unit_date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：20080808");
                return false;
            }




        }














        if (MACH_TYPE == "" && MODEL_NUM == "" && UNIT_SERIAL_NUM == "" && SnowSeed == "" && pti_type == "" && unit_date == "" && pti_status == "") {

            alert("机组信息都为空，不允许录入");
            return false;
            window.location.reload();
        }

        if (!window.confirm('机组信息将更新，是否确定')) {
            return false;

        }



        $.ajax({

            type: "get",
            dataType: "json",
            url: "/RepairbillInfo/AddColdCtnInfo?val1=" + MACH_TYPE + "&val2=" + MODEL_NUM + "&val3=" + UNIT_SERIAL_NUM
               + "&val4=" + SnowSeed + "&val5=" + unit_voltage + "&val6=" + pti_type + "&val7=" + r_id +
                "&val8=" + unit_date + "&val9=" + pti_status + "&val88=" + "UpdateUnitData",

            success: function (ret) {

                var map = eval('(' + ret + ')');
                var response = JSON.stringify(map.Response);

                alert(response);

                if (response == "提交成功") {
                    window.location.reload();
                }


            }



        })




    }

    $("#btnUnitInfoUpdate").click(function () {

        if (isCheck == 0) {

            alert("请先查询箱体验箱数据");
            return false;

        }

        UpdateUnitData();

    });


    $("#btnItemSelect").click(function () {

        var ctn_no = $("#ctn_no").val();

        if (ctn_no == "") {

            alert("请录入箱号");
            return false;
        }



        var tempwindow = window.open('_blank');
        tempwindow.location = "/RepairbillInfo/UnitItemUpdate?ctn_no=" + ctn_no;


        //            var ctn_no = $("#ctn_no").val();

        //            window.location.href = "/RepairbillInfo/UnitItemUpdate?ctn_no=" + ctn_no;

        //            ToUnitMenu();

        //            divdisplay();

        //            QueryItem();



    });
