  $("#truck_no").blur(function () {

                var truck_no = $("#truck_no").val();
                var _truck_no = truck_no.toUpperCase();

                $("#truck_no").val(_truck_no);

            });

            function init() {

                var url = location.search; //获取url中"?"符后的字串
                if (url.indexOf("?") != -1) {    //判断是否有参数
                    var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                    strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                    //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
                }
                var username = strs[1];
                $("#username").text(username);

                $("#user").hide();
                $("#btnConfirmAV").attr('disabled', true);

            }

            init();

            $("#btnConfirmAV").click(function () {

                confirmtruckAV();

            });

            function confirmtruckAV() {

                var truck_no = $("#truck_no").val();

                if (truck_no == "") {

                    alert("请输入车号");
                    return false;

                }


                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/RequestRepairbusiness?truck_no=" + truck_no + "&requestName=" + "confirmtruck",
                    success: function (ret) {


                        var is_success = ret.is_success;
                       
                        var err = ret.err;

                        if (is_success == "OK") {

                            alert("确认成功");
                            window.location.reload();

                        }
                        else {

                            alert(err);

                        }
                    
                    }


                })
            
            }

            function sendmail() {

                var trouble_dec = $("#trouble_dec").val();
                var email = $("#email").val();

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/RequestRepairbusiness?trouble_dec=" + trouble_dec + "&receive_email=" + email + "&requestName=" + "SendEmail",
                    success: function (ret) {

                        var smtpResult = ret.smtpResult;
                        alert(smtpResult);

                    }



                })


            }

            $("#btnOk").click(function () {

                submitReqInfo();



            });

            function submitReqInfo() {

                var truck_no = $("#truck_no").val();
                if (truck_no == "") {

                    alert("铲车编号");
                    return false;

                }
                var trouble_dec = $("#trouble_dec").val();
                if (trouble_dec == "") {

                    alert("请录入故障描述");
                    return false;

                }

                var is_worked = $("#is_worked").val();
                if (is_worked == "NoSelect") {

                    alert(" 请选择是否可用");
                    $("#is_worked").focus();
                    return false;
                
                }

                var email = $("#email").val();
                var create_user = $("#username").text();

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/RequestRepairbusiness?truck_no=" + truck_no + "&trouble_dec="
                   + trouble_dec + "&create_user=" + create_user + "&is_worked=" + is_worked + "&receive_email=" + email + "&requestName=" + "InsertReqInfo",

                    success: function (ret) {

                        var is_success = ret.is_success;
                        var smtpResult = ret.smtpResult;
                        var err = ret.err;

                        if (is_success == "OK") {

                            alert("提交成功," + smtpResult);
                            window.location.reload();

                        }
                        else {

                            alert(err);

                        }

                    }

                })


            }


            $("#btnSendEmail").click(function () {

                sendmail();


            });


            $("#btnSelectRepInfo").click(function () {

                SelectRepItemByTruckNo();


            });

            function SelectRepItemByTruckNo() {

                var truckNo = $("#truck_no").val();

                if (truckNo == "") {

                    alert("请输入车号");
                    return false;

                }

                if (!window.confirm('是否确认修完')) {

                    return false;
                }

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/SelectRepitemInfo?truck_no=" + truckNo + "&requestName=" + "selectRepitemInfoByTruckNo",

                    success: function (ret) {


                        console.log(ret);

                        var str = JSON.stringify(ret);

                        if (str == "[]") {
                            alert("没有数据");
                            window.location.reload();
                        }

                        var html = "";
                        var i = 1;
                        html += "<tr>";
                        html += "<td>维修代码</td>"; //0
                        html += "<td>是否需要备件</td>"; //1
                      
                        html += "<td>是否修理</td>"; //4
                        html += "<td>备件名称</td>"; //5
                        html += "<td>备件数量</td>"; //6
                        html += "<td>是否外修</td>"; //7
                       

                        html += "</tr>";

                        $(ret).each(function (key) {
                            html += "<tr>";
                            html += "<td>" + ret[key].item_code + "</td>"//0
                            html += "<td>" + ret[key].is_need + "</td>"//1   
                            html += "<td>" + ret[key].is_worked + "</td>"//4
                            html += "<td>" + ret[key].BJname + "</td>"//5
                            html += "<td>" + ret[key].BJcount + "</td>"//6
                            html += "<td>" + ret[key].is_outRepair + "</td>"//7
                            html += "</tr>";
                            i++;

                        });
                        $("#repItemTab").html(html);
                        $("#btnConfirmAV").attr('disabled', false);

                    },
                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                        alert(XmlHttpRequest.responseText);
                    }


                })



            }
