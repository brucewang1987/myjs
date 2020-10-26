 function getRequest() {

            var url = location.search; //获取url中"?"符后的字串
            if (url.indexOf("?") != -1) {    //判断是否有参数
                var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            }
            var username = strs[1];

            $("#span_username").text(username);

            $("#file1").attr("disabled", true);
            $("#btnOk").attr("disabled",true);

        }

        getRequest();


        function ajaxFileUpload() {
            var result = "";
            $.ajaxFileUpload
            (
                {
                    url: '/TaskManager/SaveImg', //用于文件上传的服务器端请求地址
                    secureuri: false, //是否需要安全协议，一般设置为false
                    fileElementId: 'file1', //文件上传域的ID
                    //dataType: 'json', //返回值类型 一般设置为json
                    dataType: 'content', //设置为json报错
                    success: function (data, status)  //服务器成功响应处理函数
                    {
                        //                        $("#img1").attr("src", data.imgurl);
                        //                        if (typeof (data.error) != 'undefined') {
                        //                            if (data.error != '') {
                        //                                alert(data.error);
                        //                            } else {
                        //                                alert(data.msg);
                        //                            }
                        //                        }
                        console.log("成功");
                        result = data.toString();
                        result = result.replace(/<.*?>/g, '');
                        var _result = JSON.parse(result);
                        console.log(_result);
                        console.log(_result.IsSuccess);

                    },
                    error: function (data, status, e)//服务器响应失败处理函数
                    {
                        //                        alert(e);

                        console.log(e);
                        console.log(data);
                    }
                }
            )
            return false;
        }


        $("#file1").change(function () {
            ajaxFileUpload();
        });


        $("#btnCheck").click(function () {

            checkCtnNo();

        });

        function checkCtnNo() {

            var ctn_no = $("#ctn_no").val();
            if (ctn_no == "") {

                alert("请录入箱号");
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Pdabusiness/CheckCtnNo?ctn_no=" + ctn_no,

                success: function (ret) {


                    console.log(ret);

                    var result = ret.strResponse;

                    if (result == "exist") {

                        alert("此箱已在场,不可二次验箱");

                    }
                    else {

                        console.log("可以开始验箱");

                        $("#file1").attr("disabled", false);
                        $("#btnOk").attr("disabled", false);
                    }

                }

            })
        
        
        }
