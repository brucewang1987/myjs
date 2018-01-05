 function LogIn() {

            var name = $("#username").val();

            if (name == "") {

                alert("请输入用户名");
                return false;
            
            }

            
            var pass = $("#pass").val();
            if (pass == "") {

                alert("请输入密码");
                return false;

            }

            if (name == "001" && pass == "123456") {

                window.location.href = "Default.aspx?backurl=" + window.location.href;
             window.close();

            }
            else {

                alert("用户名或密码不正确");
                window.location.reload();
            }


        
        }

       
