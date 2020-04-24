 function init() {

            $("#r_id").hide();


        }

        init();

        $("#btnCtnInfo").click(function () {



            QueryCtnInfo();

        });

        function RepairInfoReset(i) {


            //            var r_isGetData = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(14).text();

            //            if (r_isGetData == "未被读取") {

            //                alert("数据未被读取，不能执行此操作");

            //                return false;
            //            
            //            }


            var r_id = $("#r_id").val();

            if (!window.confirm('验箱信息即将重置，是否确定')) {
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/RepairbillInfo/AddColdCtnInfo?val1=" + r_id + "&val88=" + "RepairInfoReset",

                success: function (ret) {


                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);


                }


            })


        }

        $("#btnReset").click(function () {


            RepairInfoReset(i);


        });

        function QueryCtnInfo() {


            var ctn_no = $("#ctn_no").val();

            if (ctn_no == "") {


                alert("请输入需要查询的箱号");
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/PdaInfoMenu/PdaInfoBusiness?val1=" + ctn_no + "&val88=" + "QueryCtnInfo",

                success: function (ret) {


                    var map = eval('(' + ret + ')');


                    var str = JSON.stringify(map.dt);


                    if (str == "[]") {
                        alert("无该箱数据");
                        //return false;
                        window.location.reload();
                    }

                    var _json = eval(map.dt);




                    var response = JSON.stringify(map.Response);


                    var html = "";
                    var i = 1;

                    html += "<tr>";
                    html += "<td>操作</td>";
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + "r_id" + "</td>"//0
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + "箱号" + "</td>"; //1
                    html += "<td>箱毛重</td>"; //2
                    html += "<td>箱自重</td>"; //3
                    html += "<td>箱载重</td>"; //4
                    html += "<td>箱型</td>"; //5
                    html += "<td>尺寸</td>"; //6
                    html += "<td>箱况</td>"; //7
                    html += "<td>造箱年份</td>"; //8
                    html += "<td>机组品牌</td>"; //9
                    html += "<td>机组型号</td>"; //10
                    html += "<td>机组序列号</td>"; //11
                    html += "<td>机组冷冻液</td>"; //12
                    html += "<td>机组电压</td>"; //13
                    html += "<td>pti动作</td>"; //14
                    html += "<td>pti状态</td>"; //15
                    html += "<td>机组日期</td>"; //16
                    html += "<td>验箱时间</td>"; //17
                    html += "<td>验箱人</td>"; //18
                    html += "<td>验箱备注</td>"; //19
                    html += "<td>是否已被读取</td>"; //20
                    html += "</tr>"


                    $(_json).each(function (key) {

                        var _r_id = _json[key].r_id;



                        html += "<tr>";
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "查看验箱明细"
                      + "' onclick = '" + "return  Settlement(" + i + ")" + "'" + "/>" + "</td>"; //
//                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "重置验箱信息"
//                      + "' onclick = '" + "return  RepairInfoReset(" + i + ")" + "'" + "/>" + "</td>"; //1
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
                        html += "<td>" + _json[key].MACH_TYPE + "</td>"; //9
                        html += "<td>" + _json[key].MODEL_NUM + "</td>"; //10
                        html += "<td>" + _json[key].UNIT_SERIAL_NUM + "</td>"; //11
                        html += "<td>" + _json[key].SnowSeed + "</td>"; //12
                        html += "<td>" + _json[key].unit_voltage + "</td>"; //13
                        html += "<td>" + _json[key].pti_type + "</td>"; //14
                        html += "<td>" + _json[key].pti_status + "</td>"; //15
                        html += "<td>" + _json[key].unit_date + "</td>"; //16
                        html += "<td>" + _json[key].r_date + "</td>"; //17
                        html += "<td>" + _json[key].r_user + "</td>"; //18
                        html += "<td>" + _json[key].inspection_Remark + "</td>"; //19
                        html += "<td>" + _json[key].r_isGetData + "</td>"; //20
                        html += "</tr>";
                        i++;
                    });

                    $("#RepairbillInfotable").html(html);




                }


            })


        }


        function Settlement(i) {

            var r_id = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(2).text();


            var tempwindow = window.open('_blank');
            tempwindow.location = "/PdaInfoMenu/PdaItemMenu?r_id=" + r_id;


        }

        $("#btnRush").click(function () {

            window.location.reload();

        });


        function closeWin() {
            window.opener = null;
            window.open('', '_self');
            window.close();
        }

        $("#btnClose").click(function () {


            closeWin();

        });
