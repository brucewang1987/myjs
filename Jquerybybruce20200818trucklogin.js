 function login() {
                var username = $("#username").val();
                var password = $("#password").val();

                if (username == "") {

                    alert("请输入用户名");
                    $("#username").focus();
                    return false;

                }

                if (password == "") {

                    alert("请输入密码");
                    $("#password").focus();
                    return false;
                
                }


                $.ajax({
                    type: "get",
                    dataType: "json",
                    url: "/TruckRepair/LoginSystem?username=" + username + "&password=" + password,
                    success: function (ret) {


                        var response = ret.strResponse;
                        if (response == "loginOK") {

                            // window.location.href = "/TruckRepair/MainIndex?username=" + username;

                            location.replace("/TruckRepair/MainIndex?username=" + username);


                        }
                        else {

                            alert("用户名或密码错误");

                        }

                    }

                })
                
            }
            $("#btnOK").click(function () {

                login();

            });
