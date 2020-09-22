  $("#btnAdd").click(function () {


                AddItemCode();

            });


            $("#btnSelect").click(function () {

                selectItemCode();

            });

            function selectItemCode() {

                var chDec = $("#chDec").val();
                if (chDec == "") {

                    alert("请录入中文描述");
                    return false;

                }

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/SelectItemCode?chs_dec=" + chDec + "&requestName=" + "SelectItemCode",
                    success: function (ret) {


                        console.log(ret);

                        var str = JSON.stringify(ret);

                        if (str == "[]") {
                            alert("没有数据");
                            window.location.reload();
                        }

                        var html = "";

                        html += "<tr>";
                        html += "<td>维修代码</td>"; //0
                        html += "<td>中文描述</td>"; //1
                        html += "<td>额定工时</td>"; //2
                        html += "</tr>";

                        $(ret).each(function (key) {

                            html += "<tr>";
                            html += "<td>" + ret[key].rep_code + "</td>"//0
                            html += "<td>" + ret[key].chs_dec + "</td>"//1
                            html += "<td>" + ret[key].rate_hour + "</td>"//2
                            html += "</tr>";
                        });

                        $("#itemTab").html(html);


                    },
                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                        alert(XmlHttpRequest.responseText);
                    }

                })

            
            }

            function AddItemCode() {

                var rep_code = $("#itemCode").val();
                if (rep_code == "") {

                    alert("请录入维修代码");
                    return false;

                }

                var chDec = $("#chDec").val();
                if (chDec == "") {

                    alert("请录入中文描述");
                    return false;

                }


                var rate_hour = $("#rate_hour").val();

                if (rate_hour == "") {

                    alert("请录入额定工时");
                    return false;

                }

                var regu = /^[0-9]+\.?[0-9]*$/;

                if (!regu.test(rate_hour)) {

                    alert("请录入正确的数字");
                    $("#rate_hour").focus();
                    return false;
                }

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/ItemCodeManage?itemCode=" + rep_code + "&chDec=" + chDec + "&rate_hour=" + rate_hour + "&requestName=" + "itemCodeAdd",
                    success: function (ret) {

                        var result = ret.is_success;
                        var err = ret.err;
                        if (result == "OK") {

                            alert("新增成功");
                            window.location.reload();
                        
                        }


                    }

                })

            
            }
