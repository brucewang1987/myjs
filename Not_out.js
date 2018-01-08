 function QueryNotOut() {


                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "RFjianhuHandler.ashx?val8=" + "notOutList",

                    success: function (ret) {

                        var str = JSON.stringify(ret.dtNotOutList);
                        if (str == "[]") {
                            alert("没有数据");
                            return false;
                        }


                        var _json = eval(ret.dtNotOutList);

                        var html = "";
                        html += "<tr>";

                        html += "<td>箱号</td>";
                        html += "</tr>"


                        $(_json).each(function (key) {

                            html += "<tr>";
                            html += "<td>" + _json[key].CTNR_NO + "</td>";
                            html += "</tr>";


                        });

                        $("#notouttable").html(html);

                    },
                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                        alert(XmlHttpRequest.responseText);
                    }


                })


            }


            function exportexcel() {
                $("#notouttable").table2excel({
                    exclude: ".noExl",
                    name: "Excel Document Name",
                    filename: "myFileName",
                    exclude_img: true,
                    exclude_links: true,
                    exclude_inputs: true
                });
            }
