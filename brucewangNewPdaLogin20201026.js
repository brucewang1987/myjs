 function login() {

            var username  = $("#rep_user").val();

            if (username  == "") {

                alert("请输入验箱人");

                return false;

            }

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/Pdabusiness/LoginSystem?username=" + username,
                success: function (ret) {

                    var response = ret.strResponse;
                    if (response == "loginOK") {

                        location.replace("/Pdabusiness/PdaMainIndex?username=" + username);
                    
                    }


                }

            })


        }

        $("#login").click(function () {


            login();

        });
