  function init() {
            $("#outer").hide();
        }

        init();

        lay('#version').html('-v' + laydate.v);

        //执行一个laydate实例
        laydate.render({
            elem: '#startDate' //指定元素

            , type: 'datetime'

        });



        //执行一个laydate实例
        laydate.render({
            elem: '#endDate' //指定元素
            , type: 'datetime'
        });



        var imgArr = [];
        var index = 0;

        function SelectPicByNo() {

            imgArr = [];
            index = 0;

            var startDate = $("#startDate").val();

            if (startDate == "") {

                alert("请选择开始日期");
                $("#startDate").focus();
                return false;


            }


            var endDate = $("#endDate").val();

            if (endDate == "") {

                alert("请选择结束日期");
                $("#endDate").focus();
                return false;


            }


            var loc = $("#loc").val();
            if (loc == "") {

                alert("请选择堆场");
                $("#loc").focus();
                return false;

            }



            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Material/GetHSEPhotoInfo?start_date=" + startDate + "&end_date=" + endDate + "&loc=" + loc + "&requestName=" + "selectHSEPhotoInfo",
                success: function (ret) {

                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有符合条件的数据");
                        window.location.reload();
                    }

                    $(ret).each(function (key) {

                        imgArr.push(ret[key].path);


                    });

                    $("#ctnpic").attr('src', imgArr[index]);
                    $("#totalPage").text(imgArr.length)
                    $("#PageNumber").text(index+1);
                    $("#outer").show();
                    console.log(imgArr[index]);

                    console.log("数组长度:"+imgArr.length);

                    console.log( "总共有"+imgArr.length - 1+"页");
                   
                }


            })

        }

        $("#btnSelect").click(function () {

            SelectPicByNo();

        });

 $("#btnReturn").click(function () {

            if (!window.confirm('确定返回主页？')) {

                return false;

            }

            window.location.href = "/Material/NewDaohangIndex";

        });


        $("#preBtn").click(function () {

            console.log("点击了上一张");
            index--;

            if (index < 0) {

                index = 0;
                alert("已经是第一张");
            }

            $("#ctnpic").attr('src', imgArr[index]);
            console.log(imgArr[index]);
            $("#PageNumber").text(index + 1);


        });

        $("#nextBtn").click(function () {

            console.log("点击了下一张");
            if (index >= imgArr.length - 1) {
                index = imgArr.length - 1;
                alert("已经是最后一张");
                return false;
            }
            else {
                index++;
                $("#ctnpic").attr('src', imgArr[index]);
                $("#PageNumber").text(index + 1);
            }
           
            console.log(imgArr[index]);
            

        });
