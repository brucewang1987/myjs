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
        var passwordtemp = $("#passwordtemp").val();

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

        if (passwordtemp == "") {

            alert("请录入确认密码");
            $("#passwordtemp").focus();
            return false;

        }

        if (password != passwordtemp) {

            alert("两次密码不一致,请重新录入");
            return false;
        
        }



        $.ajax({
            type: "get",
            dataType: "json",
            url: "/Unitbusiness/LoginBusiness?username=" + username + "&password=" + password + "&requestName=" + "RegisterUserInfo",
            success: function (ret) {


                var response = ret.strResponse;
                if (response == "RegisterOK") {

                    // window.location.href = "/TruckRepair/MainIndex?username=" + username;
                    alert("注册成功");

                    location.replace("/Unitbusiness/LoginIndex");


                }
                else {

                    alert("注册失败,用户名或已存在");

                }

            }

        })

    }

    var loginapp = new LoginApp();

    $("#btnOK").click(function () {

        loginapp.login();

    });
    
    
