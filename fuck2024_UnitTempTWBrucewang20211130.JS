  function SelectTWtempInfo() {

            var ctn_no = $("#ctn_no").val();

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Unitbusiness/QueryTempTWInfo?ctn_no=" + ctn_no + "&requestName=" + "selectTWTempDataByNo",
                success: function (ret) {


                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }

                    var html = "";
                    var i = 1;

                    html += "<tr>";
                    html += "<td>箱号</td>"; //0
                    html += "<td>箱主</td>"; //1
                    html += "<td>机组状态</td>"; //2
                    html += "<td>温度</td>"; //3
                    html += "<td>pti状态</td>"; //4
                    html += "<td>pti动作</td>"; //5
                    html += "<td>湿度</td>"; //6
                    html += "<td>通风窗</td>"; //7
                    html += "<td>pti有效期</td>"; //8
                    html += "<td>调温日期</td>"; //9
                    html += "<td>pti备注</td>"; //10
                    html += "<td>电工</td>"; //11
                    html += "<td>删除</td>"; //12
                    html += "<td>导入</td>"; //13
                    html += "</tr>";

                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].ctn_no +"  "+ "</td>"//0
                        html += "<td>" + ret[key].ope + "  " + "</td>"//1
                        html += "<td>" + ret[key].unit_status + "  " + "</td>"//2
                        html += "<td>" + ret[key].temperature + "  " + "</td>"//3
                        html += "<td>" + ret[key].pti_status + "  " + "</td>"//4
                        html += "<td>" + ret[key].pti_type + "  " + "</td>"//5
                        html += "<td>" + ret[key].humidity + "  " + "</td>"//6
                        html += "<td>" + ret[key].ventilation_opening + "  " + "</td>"//7
                        html += "<td>" + ret[key].pti_valid_date + "  " + "</td>"//8
                        html += "<td>" + ret[key].tw_date + "  " + "</td>"//9
                        html += "<td>" + ret[key].pti_remark + "  " + "</td>"//10
                        html += "<td>" + ret[key].electrician_user_name + "  " + "</td>"//11
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "删除 "
                      + "' onclick = '" + "deleteTWtemp(" + i + ")" + "'" + "/>" + "</td>"//12

                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "导入 "
                      + "' onclick = '" + "ImportTWtemp(" + i + ")" + "'" + "/>" + "</td>"//13
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].ctn_id + "</td>"//14
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].electrician + "</td>"//15
                        html += "</tr>";
                        i++;


                    });

                    $("#TWtempTab").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })
        
        
        }

        $("#btnQuery").click(function () {

            SelectTWtempInfo();

        });


        function deleteTWtemp(i) {


            var ctn_id = $("#TWtempTab").find("tr").eq(i).find("td").eq(14).text();
            var ctn_no = $("#TWtempTab").find("tr").eq(i).find("td").eq(0).text();
            var ope = $("#TWtempTab").find("tr").eq(i).find("td").eq(1).text();
            var temperature = $("#TWtempTab").find("tr").eq(i).find("td").eq(3).text();
            var pti_status = $("#TWtempTab").find("tr").eq(i).find("td").eq(4).text();
            var pti_type = $("#TWtempTab").find("tr").eq(i).find("td").eq(5).text();
            var electrician_user_name = $("#TWtempTab").find("tr").eq(i).find("td").eq(11).text();
            var remark = $("#TWtempTab").find("tr").eq(i).find("td").eq(10).text();
            var humidity = $("#TWtempTab").find("tr").eq(i).find("td").eq(6).text();
            var ventilation = $("#TWtempTab").find("tr").eq(i).find("td").eq(7).text();
            var pti_valid_date = $("#TWtempTab").find("tr").eq(i).find("td").eq(8).text();
            var electrician = $("#TWtempTab").find("tr").eq(i).find("td").eq(15).text();

            if (!window.confirm('确认要删除箱号为' + ctn_no + '的调温信息')) {

                return false;

            }

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&requestName=" + "DeleteTempTWData",

                success: function (ret) {

                    var result = ret.strResult;
                    if (result == "ok") {

                        alert("删除成功");
                        $("#ctn_no").val("");

                        SelectTWtempInfo();

                    }
                    else {

                        alert("删除失败");

                    }

                }


            })

            console.log("要删除的ctn_id: " + ctn_id);

        }

        function ImportTWtemp(i) {


            var ctn_id = $("#TWtempTab").find("tr").eq(i).find("td").eq(14).text();
            var ctn_no = $("#TWtempTab").find("tr").eq(i).find("td").eq(0).text();
            var ope = $("#TWtempTab").find("tr").eq(i).find("td").eq(1).text();
            var temperature = $("#TWtempTab").find("tr").eq(i).find("td").eq(3).text();
            var pti_status = $("#TWtempTab").find("tr").eq(i).find("td").eq(4).text();
            var pti_type = $("#TWtempTab").find("tr").eq(i).find("td").eq(5).text();
            var electrician_user_name = $("#TWtempTab").find("tr").eq(i).find("td").eq(11).text();
            var remark = $("#TWtempTab").find("tr").eq(i).find("td").eq(10).text();
            var humidity = $("#TWtempTab").find("tr").eq(i).find("td").eq(6).text();
            var ventilation = $("#TWtempTab").find("tr").eq(i).find("td").eq(7).text();
            var pti_valid_date = $("#TWtempTab").find("tr").eq(i).find("td").eq(8).text();
            var electrician = $("#TWtempTab").find("tr").eq(i).find("td").eq(15).text();

            if (!window.confirm('确认要导入箱号:' + ctn_no + ',温度:' + temperature + ',湿度:' + humidity + ',通风窗:' + ventilation + ',电工:' + electrician_user_name+'的调温信息')) {

                return false;
            
            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&ope=" + ope + "&temperature=" + temperature +
                "&pti_status=" + pti_status + "&pti_type=" + pti_type + "&electrician_user_name=" + electrician_user_name +
                "&remark=" + remark + "&humidity=" + humidity + "&ventilation=" + ventilation + "&pti_valid_date=" + pti_valid_date +
                "&electrician=" + electrician + "&requestName=" + "ImportTempTWData",

                success: function (ret) {

                    var result = ret.strResult;
                    if (result == "ok") {

                        alert("导入成功");
                        $("#ctn_no").val("");
                        SelectTWtempInfo();

                    }
                    else {

                        alert("导入失败");

                    }


                }

            })


        }
