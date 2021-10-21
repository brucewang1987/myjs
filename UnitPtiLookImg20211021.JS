 function init() {
            $("#outer").hide();
        }

        init();

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

        var imgArr = [];
        var index = 0;

        function SelectPicByNo() {

            var ctn_no = $("#ctn_no").val();

            if (ctn_no == "") {

                alert("请输入需要查询的箱号");
                return false;
            }

            var _ctn_no = ctn_no.toUpperCase();

            $("#ctn_no").val(_ctn_no);


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Unitbusiness/QueryImgPath?ctn_no=" + ctn_no + "&requestName=" + "GetImgPath",
                success: function (ret) {

                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有符合条件的数据");
                        window.location.reload();
                    }

                    $(ret).each(function (key) {

                        imgArr.push(ret[key].file_path);


                    });

                    $("#ctnpic").attr('src', imgArr[index]);
                    $("#outer").show();


                }


            })

        }

        $("#btnSelect").click(function () {

            SelectPicByNo();

        });


        $("#preBtn").click(function () {

            console.log("点击了上一张");
            index--;

            if (index < 0) {

                index = 0;
                alert("已经是第一张");
            }

            $("#ctnpic").attr('src', imgArr[index]);



        });

        $("#nextBtn").click(function () {

            console.log("点击了下一张");
            if (index > imgArr.length - 1) {
                index = imgArr.length - 1;
                alert("已经是最后一张");
            }
            index++;
            $("#ctnpic").attr('src', imgArr[index]);


        });
