 $("#btnAdd").click(function () {

            submitCheckData();


        })

        function submitCheckData() {
            var username = $("#username").val();
            if (username == "") {
                alert("请填写巡查人");
                $("#username").focus();
                return false;
            }

            var editype = $("#editype").val();
            if (editype == "empty") {
                alert("请选择edi");
                $("#editype").focus();
                return false;
            }

            var filecount = $("#filecount").val();
            if (filecount == "") {
                alert("请填写文件数量");
                $("#filecount").focus();
                return false;
            }

            var iswell = $("#iswell").val();
            if (editype == "empty") {
                alert("请选择是否正常");
                $("#iswell").focus();
                return false;
            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/PdaInfoMenu/EdiCheckBusiness?username=" + username + "&filecount=" + filecount + "&ediname=" + editype + "&iswell=" + iswell + "&requestName=" + "AddCheckInfo",
                success: function (ret) {

                    var is_success = ret.is_success;
                    var err = ret.err;
                    if (is_success == "OK") {

                        alert("提交成功");
                        window.location.reload();

                    }
                    else {

                        alert(err);
                    
                    }

                }

            })

        }
