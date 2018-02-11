 function exportexcel() {

            if ($("table tr").length > 1) {

                $("#QZUniverinfoTable").table2excel({
                    exclude: ".noExl",
                    name: "Excel Document Name",
                    filename: "myFileName",
                    exclude_img: true,
                    exclude_links: true,
                    exclude_inputs: true
                });

            }
            else {

                alert("没有数据");
                return false;
            
            }

            
        }


        function QueryQZUniverInfo() {

            var QZStartDate = $("#QZStartDate").val();

            if (QZStartDate == "") {

                alert("请选择起租开始日期");
                return false;

            }


            var r = QZStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }


            var QZEndDate = $("#QZEndDate").val();

            if (QZEndDate == "") {

                alert("请选择起租结束日期");
                return false;
            
            }


            r = QZEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/QZInfo/QZBusiness?val1=" + QZStartDate + "&val2=" + QZEndDate + "&val88=" + "QueryQzUniverinfo",
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var str = JSON.stringify(map.dt);
                    if (str == "[]") {
                        alert("没有数据");
                        return false;
                    }

                    var _json = eval(map.dt);

                    var response = JSON.stringify(map.Response);



                    var html = "";

                    html += "<tr>";
                    html += "<td>箱号</td>"; //1
                    html += "<td>起租日期</td>"; //2
                    html += "<td>起租号</td>"; //3
                    html += "<td>机型型号</td>"; //4
                    html += "<td>制造日期</td>"; //5
                    html += "<td>起租地点</td>"; //6
                    html += "<td>日租金币种</td>"; //7
                    html += "<td>日租金</td>"; //8
                    html += "<td>起租装卸费币种</td>"; //9
                    html += "<td>起租装卸费</td>"; //10
                    html += "<td>起租pti检验费币种</td>"; //11
                    html += "<td>起租pti检验费</td>"; //12
                    html += "<td>起租运输费币种</td>"; //13
                    html += "<td>起租运输费</td>"; //14
                    html += "<td>起租录入时间</td>"; //15
                    html += "<td>起租修改时间</td>"; //16
                    html += "</tr>";


                    $(_json).each(function (key) {
                        html += "<tr>";
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].ctn_id + "</td>"//0
                        html += "<td>" + _json[key].ctn_no + "</td>";  //1
                        html += "<td>" + _json[key].QZDate + "</td>"; //2
                        html += "<td>" + _json[key].QZNo + "</td>"; //3
                        html += "<td>" + _json[key].MachineNo + "</td>"; //4
                        html += "<td>" + _json[key].MakeDate + "</td>"; //5
                        html += "<td>" + _json[key].QZAddress + "</td>"; //6
                        html += "<td>" + _json[key].RentDailyCoin + "</td>"; //7
                        html += "<td>" + _json[key].RentDaily + "</td>"; //8
                        html += "<td>" + _json[key].QZLoadFeeCoin + "</td>"; //9
                        html += "<td>" + _json[key].QZLoadFee + "</td>"; //10
                        html += "<td>" + _json[key].QZPtiFeeCoin + "</td>"; //11
                        html += "<td>" + _json[key].QZPtiFee + "</td>"; //12
                        html += "<td>" + _json[key].QZTranFeeCoin + "</td>"; //13
                        html += "<td>" + _json[key].QZTranFee + "</td>"; //14
                        html += "<td>" + _json[key].QZInputDate + "</td>"; //15
                        html += "<td>" + _json[key].QZChangeDate + "</td>"; //16
                        html += "</tr>";

                    });
                    $("#QZUniverinfoTable").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })
        
        
         }
