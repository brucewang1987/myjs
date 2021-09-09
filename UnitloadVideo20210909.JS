
        function init() {

            $("#aa1").hide();

        }

        init();

        $("#btnupload").click(function () {

            var ctn_no2 = $("#ctn_no").val();

            ctn_no = ctn_no2;

            console.log("上传视频的箱号:" + ctn_no);

            $("#aa1").show();



        });

        $("#btnRush").click(function () {

            window.location.reload();

        });

        function SelectInfoByCtnNo() {

            var ctn_no = $("#ctn_no").val();
            if (ctn_no == "") {

                alert("请录入箱号");
                $("#ctn_no").focus();
                return false;
            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Unitbusiness/QueryCtnInfo?ctn_no=" + ctn_no + "&requestName=" + "selectDataByNo",
                success: function (ret) {

                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有符合条件的数据");
                        window.location.reload();
                    }
                    $(ret).each(function (key) {
                        $("#ctn_no").val(ret[key].ctn_no);
                    });
                    

                }


            })

        }


        $("#btnSelect").click(function () {

            SelectInfoByCtnNo();

        });

        function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
            if (url.indexOf("?") != -1) {    //判断是否有参数
                var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            }
            var username = strs[1];

            $("#span_username").text(username);

        }
        GetRequest();


        $("#upload").click(function () {


            var ctn_no2 = $("#ctn_no").val();

            console.log(ctn_no2);

            $("#upload").fileupload({

                autoUpload: true,

                type: 'post',
                //文件上传地址，当然也可以直接写在input的data-url属性内
                //           
                url: '/Unitbusiness/UploadVideo?ctn_no=' + ctn_no2,

                dataType: "json", //如果不指定json类型，则传来的json字符串就需要解析jQuery.parseJSON(data.result);

                progressall: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    $('#progress .bar').css(
                    'width',
                    progress + '%'
                );
                },

                done: function (e, data) {
                    //done方法就是上传完毕的回调函数，其他回调函数可以自行查看api
                    //注意data要和jquery的ajax的data参数区分，这个对象包含了整个请求信息
                    //返回的数据在data.result中，这里dataType中设置的返回的数据类型为json
                    if (data.result.sta) {
                        // 上传成功：
                        $(".preview").html("<video width='640' id='video111' height='360' src=" + data.result.previewSrc +
                        " id='player1'controls='controls' preload='none'></video> ");
                    } else {
                        // 上传失败：
                        alert(data.result.msg);
                    }

                }
            });


        });
