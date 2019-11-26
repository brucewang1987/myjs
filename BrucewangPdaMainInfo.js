 function init() {

            $("#r_id").hide();


        }

        init();

        $("#btnCtnInfo").click(function () {



            QueryCtnInfo();

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
                    html += "<td>验箱时间</td>"; //9
                    html += "<td>验箱人</td>"; //10
                    html += "<td>验箱备注</td>"; //11
                    html += "<td>是否已被读取</td>"; //12
                    html += "</tr>"


                    $(_json).each(function (key) {

                        _r_id = _json[key].r_id;
                        html += "<tr>";
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "查看验箱明细"
                      + "' onclick = '" + "return  Settlement(" + i + ")" + "'" + "/>" + "</td>"; //0
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
                        html += "<td>" + _json[key].r_date + "</td>"; //9
                        html += "<td>" + _json[key].r_user + "</td>"; //10
                        html += "<td>" + _json[key].inspection_Remark + "</td>"; //11
                        html += "<td>" + _json[key].r_isGetData + "</td>"; //12
                        html += "</tr>";
                        i++;
                    });

                    $("#RepairbillInfotable").html(html);




                }


            })


        }


        function Settlement(i) {

            var r_id = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(1).text();

            
            var tempwindow = window.open('_blank');
            tempwindow.location = "/PdaInfoMenu/PdaItemMenu?r_id=" + r_id;
        
        
        }

$("#btnRush").click(function(){

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
