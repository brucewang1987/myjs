 $("#username").blur(function () {

        var username = $("#username").val();
        var _username = username.toUpperCase();

        $("#username").val(_username);

    });

    function LoginApp() {


    }



    LoginApp.prototype.login = function () {

        var username = $("#username").val();
        var password = $("#password").val();
       

        if (username == "") {

            alert("请输入用户名");
            $("#username").focus();
            return false;

        }
        //登入账号自动转换大小写

        if (password == "") {

            alert("请输入密码");
            $("#password").focus();
            return false;

        }

       

        $.ajax({
            type: "get",
            dataType: "json",
            url: "/DepotBusiness/LoginSystem?username=" + username + "&password=" + password,
            success: function (ret) {


                var response = ret.strResponse;
                if (response == "loginOK") {

                    // window.location.href = "/TruckRepair/MainIndex?username=" + username;

                    location.replace("/DepotBusiness/MainIndex?username=" + username);


                }
                else {

                    alert("用户名或密码错误");

                }

            }

        })

    }

    var loginapp = new LoginApp();

    $("#btnOK").click(function () {

        loginapp.login();

    });
