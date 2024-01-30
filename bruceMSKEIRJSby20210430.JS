function getNow(s) {
            return s < 10 ? '0' + s : s;
        }
        //3堆场
        function AutoSendLOC3Data(startdate, enddate) {

            var place_id = "3";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "东三数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "东三数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }

        //H堆场
        function AutoSendLOCHData(startdate, enddate) {

            var place_id = "H";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "东十数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "东十数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }

        //8堆场
        function AutoSendLOC8Data(startdate, enddate) {

            var place_id = "8";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "东八数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "东八数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }

        //6堆场
        function AutoSendLOC6Data(startdate, enddate) {

            var place_id = "6";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "东六数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "东六数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }

        //7堆场
        function AutoSendLOC5Data(startdate, enddate) {

            var place_id = "7";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "东七数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "东七数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }

        //y堆场

        function AutoSendLOCYData(startdate, enddate) {

            var place_id = "Y";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "洋山数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "洋山数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }



        //I堆场

        function AutoSendLOCIData(startdate, enddate) {

            var place_id = "I";

            console.log("起始时间:" + startdate + ",终止时间:" + enddate + ",堆场:" + place_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/EirUrl/AutoSendEir/?RequestName=" + "SendData" + "&place_id=" + place_id + "&startdate=" + startdate + "&endDate=" + enddate,
                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var rtnFlag = JSON.stringify(map.rtnFlag);
                    rtnFlag = rtnFlag.replace(/\"/g, "");
                    var rtnInfo = JSON.stringify(map.rtnInfo);
                    rtnInfo = rtnInfo.replace(/\"/g, "");

                    if (rtnFlag == "T") {

                        $("#resbox").append("<p>" + "凌海数据上传成功,时间段为:" + startdate + "-" + enddate + "</p>");
                    }
                    else {
                        $("#resbox").append("<p>" + "凌海数据上传失败,原因为" + rtnInfo + "</p>");
                    }

                }

            })


        }







        function toastData() {
            //            alert("垃圾公司");

            var myDate = new Date();

            var year = myDate.getFullYear();        //获取当前年
            var month = myDate.getMonth() + 1;   //获取当前月
            var date = myDate.getDate();            //获取当前日


            var h = myDate.getHours();              //获取当前小时数(0-23)
            var m = myDate.getMinutes();          //获取当前分钟数(0-59)
            var s = myDate.getSeconds();

            var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);

            var startDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + (getNow(h) - 1) + ':' + '00' + ":" + '00';

            var endDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + (getNow(h) - 1) + ':' + '59' + ":" + '59';

            //            $("#resbox").append("<p>" + "起始时间" + startDate + "-" + "终止时间" + endDate + "</p>");

            AutoSendLOC3Data(startDate, endDate);
            AutoSendLOCHData(startDate, endDate);
            AutoSendLOC8Data(startDate, endDate);
            AutoSendLOC6Data(startDate, endDate);
            AutoSendLOC5Data(startDate, endDate);
            AutoSendLOCYData(startDate, endDate);
           // AutoSendLOCIData(startDate, endDate);

        }
        $("#btnOpen").click(function () {


            var spServe = $("#spServe").text();

            if (spServe.indexOf( "服务未开启")>=0) {

                toastData();
            
            }

            var intervalId = setInterval(function () {
                toastData();
                //    window.location.reload();
            }, 3600000)


            $("#spServe").text("服务已开启");


        });

        $("#btnClose").click(function () {

            window.location.reload();

        })
