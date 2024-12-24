 function getNow(s) {
            return s < 10 ? '0' + s : s;
        }




        function oneYSftpEDI() {

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/OneFTP/ONEYSSendFtp?requestName=" + "openServe",
                success: function (ret) {

                    // var result = ret.isSucess;

                    var myDate = new Date();

                    var year = myDate.getFullYear();        //获取当前年
                    var month = myDate.getMonth() + 1;   //获取当前月
                    var date = myDate.getDate();            //获取当前日


                    var h = myDate.getHours();              //获取当前小时数(0-23)
                    var m = myDate.getMinutes();          //获取当前分钟数(0-59)
                    var s = myDate.getSeconds();

                    var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);

                    $(ret).each(function (key) {

                        if (ret[key].isSucess == "YES") {

                            $("#resbox").append("<p>" + ret[key].fileName + "传输成功" + "传输时间:" + now + "</p>");

                        }
                        else {

                            $("#resbox").append("<p>" + "传输失败" + now + "</p>");
                            console.log(ret[key].strErr);
                        }

                    });

                    //if (result == "YES") {
                    //    $("#resbox").append("<p>" + "传输成功" + now + "</p>");

                    //}


                }

            })

        }


        function oneftpEDI() {

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/OneFTP/ONESendFtp?requestName=" + "openServe",
                success: function (ret) {

                    // var result = ret.isSucess;

                    var myDate = new Date();

                    var year = myDate.getFullYear();        //获取当前年
                    var month = myDate.getMonth() + 1;   //获取当前月
                    var date = myDate.getDate();            //获取当前日


                    var h = myDate.getHours();              //获取当前小时数(0-23)
                    var m = myDate.getMinutes();          //获取当前分钟数(0-59)
                    var s = myDate.getSeconds();

                    var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);
                    console.log("当前时间:"+now);
                    $(ret).each(function (key) {

                        if (ret[key].isSucess == "YES") {

                            $("#resbox").append("<p>" + ret[key].fileName + "传输成功" + "传输时间:" + now + "</p>");

                        }
                        else {

                            $("#resbox").append("<p>" + "传输失败" + now + "</p>");
                            console.log(ret[key].strErr);
                        }

                    });

                    //if (result == "YES") {
                    //    $("#resbox").append("<p>" + "传输成功" + now + "</p>");

                    //}


                }

            })

        }




        $("#btnOpen").click(function () {

            var spServe = $("#spServe").text();
            if (spServe.indexOf("服务未开启") >= 0) {

                oneftpEDI();
                oneYSftpEDI();

            }

            var intervalId = setInterval(function () {
                /*toastData();*/
                oneYSftpEDI();
                oneftpEDI();
                //    window.location.reload();
            }, 3600000)


            $("#spServe").text("服务已开启");


        });

        $("#btnClose").click(function () {

            window.location.reload();

        })
