 $("#username").blur(function () {

            var username = $("#username").val();
            var _username = username.toUpperCase();

            $("#username").val(_username);

        });

        function changePassword() {

            var newpassward = $("#newpassword").val();
            var username = $("#username").val();
            var password = $("#oldpassword").val();
            if (newpassward.length < 6 || newpassward.length > 8) {

                alert("密码长度不对");
                $("#newpassword").focus();
                return false;
            }
            else {

                if (!window.confirm('新密码为' + newpassward + '是否进行修改')) {

                    return false;

                }

                $.ajax({
                    type: "get",
                    dataType: "json",
                    url: "/DepotBusiness/ChangePassword?username=" + username + "&password=" + password + "&newpassward=" + newpassward,
                    success: function (ret) {


                        var response = ret.strResponse;
                        if (response == "OK") {

                            // window.location.href = "/TruckRepair/MainIndex?username=" + username;

                            alert("修改成功");
                            window.location.href = "http://192.168.42.230:9014/";

                        }
                        else {

                            alert("修改失败");

                        }

                    }

                })

            }

        }

        $("#btnChange").click(function () {

            changePassword();

        });
