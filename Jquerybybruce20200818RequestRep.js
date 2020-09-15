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

            }

            init();

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
                var email = $("#email").val();
                var create_user = $("#username").text();

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/RequestRepairbusiness?truck_no=" + truck_no + "&trouble_dec="
                   + trouble_dec + "&create_user=" + create_user + "&receive_email=" + email + "&requestName=" + "InsertReqInfo",

                    success: function (ret) {

                        var is_success = ret.is_success;
                        var smtpResult = ret.smtpResult;
                        var err = ret.err;

                        if (is_success == "OK") {

                            alert("提交成功," + smtpResult);


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
