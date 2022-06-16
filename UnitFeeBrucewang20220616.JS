 $("#btnQuery").click(function () {

                selectFeeInfo();


            });

            function selectFeeInfo() {

                var ctn_no = $("#ctn_no").val();

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/Unitbusiness/QueryFeeInfo?ctn_no=" + ctn_no + "&requestName=" + "selectFeeDataByNo",
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
                        html += "<td>费用名称</td>"; //1
                        html += "<td>金额</td>"; //2
                        html += "<td>收费方式</td>"; //3
                        html += "<td>删除</td>"; //4
                        html += "</tr>";

                        $(ret).each(function (key) {

                            html += "<tr>";
                            html += "<td>" + ret[key].ctn_no + "  " + "</td>"//0
                            html += "<td>" + ret[key].fee_name + "  " + "</td>"//1
                            html += "<td>" + ret[key].price + "  " + "</td>"//2
                            html += "<td>" + ret[key].cost_type + "  " + "</td>"//3
                            html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].fee_id + "</td>"//4
                            html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "删除 "
                      + "' onclick = '" + "deleteFee(" + i + ")" + "'" + "/>" + "</td>"//5
                            html += "</tr>";
                            i++;


                        });

                        $("#FeeTab").html(html);
                    },
                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                        alert(XmlHttpRequest.responseText);
                    }


                })



            }

            function deleteFee(i) {

                var fee_id = $("#FeeTab").find("tr").eq(i).find("td").eq(4).text();
                var ctn_no = $("#FeeTab").find("tr").eq(i).find("td").eq(0).text();
                var fee_name = $("#FeeTab").find("tr").eq(i).find("td").eq(1).text();

                if (!window.confirm('确认删除箱号' + ctn_no + '的' + fee_name + '?')) {

                    return false;

                }


                console.log(fee_id);


                $.ajax({
                    type: "get",
                    dataType: "json",
                    url: "/Unitbusiness/FeeBusiness?fee_id=" + fee_id + "&requestName=" + "deleteFeeInfo",

                    success: function (ret) {

                        var result = ret.strResult;
                        if (result == "ok") {

                            alert("删除成功");
                           
                            selectFeeInfo();

                        }
                        else {

                            alert("删除失败");

                        }

                    }


                })

            
            }
