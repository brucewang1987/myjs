  function addMinutes(date, minutes) {
           return new Date(date.getTime() + minutes * 60000);
       }


       function getNow(s) {
           return s < 10 ? '0' + s : s;
       }

       function RCLData() {
           var myDate = new Date();

           var year = myDate.getFullYear();        //获取当前年
           var month = myDate.getMonth() + 1;   //获取当前月
           var date = myDate.getDate();            //获取当前日


           var h = myDate.getHours();              //获取当前小时数(0-23)
           var m = myDate.getMinutes();          //获取当前分钟数(0-59)
           var s = myDate.getSeconds();

           var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);

           var startDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + (getNow(h) - 2) + ':' + '00' + ":" + '00';

           var endDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + (getNow(h) - 1) + ':' + '59' + ":" + '59';

           console.log("起始时间:" + startDate);
           console.log("终止时间" + endDate);


           SendRCLEDI(startDate, endDate);

       }


       function SendMSCEDI() {

           var myDate = new Date();

           var year = myDate.getFullYear();        //获取当前年
           var month = myDate.getMonth() + 1;   //获取当前月
           var date = myDate.getDate();            //获取当前日


           var h = myDate.getHours();              //获取当前小时数(0-23)
           var m = myDate.getMinutes();          //获取当前分钟数(0-59)
           var s = myDate.getSeconds();

           var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);

           var startdate = $("#startDate").val();
           var enddate = $("#endDate").val();

           var ctn_no = "";

           var ReportName = "MSCOutEDI";

           console.log("edi查询开始时间:" + startdate);
           console.log("edi查询结束时间:" + enddate);

           var checkStartdate = startdate;
           var checkEnddate = enddate;


           $.ajax({
           
            type: "get",
                dataType: "json",
                url: "/AutoEDI/AutoSendEDI?start_date=" + startdate + "&end_date=" + enddate + "&requestName=" + ReportName + "&ctn_no=" + ctn_no,


                success: function (ret) {

                    console.log(ret);
                    //                    var str = JSON.stringify(ret);
                    //                    if (str == "[]") {
                    //                        alert("没有数据");
                    //                        window.location.reload();
                    //                    }

                    $(ret).each(function (key) {

                        if (ret[key].isSucess == "YES") {

                            $("#resbox").append("<p>" + ret[key].fileName + "  " + ret[key].create_is + "  " + ret[key].send_is + "时间范围" + checkStartdate + "至" + checkEnddate + "</p>");

//                            alert(ret[key].fileName + "  " + ret[key].create_is + "  " + ret[key].send_is);


                        }
                        else {

                            //                            alert(ret[key].strErr);
                            $("#resbox").append("<p>" + ret[key].fileName + "  " + ret[key].create_is + "  " + ret[key].send_is + "原因:" + ret[key].strErr + "</p>");

                        }


                    });


                }

           })






           var startDateNext = new Date(startdate);
           var endDateNext = new Date(enddate);

           startDateNext = addMinutes(startDateNext, 15);
           endDateNext = addMinutes(endDateNext, 15);

           var startYear = startDateNext.getFullYear(); //获取起始时间的年份
           var startMonth = startDateNext.getMonth() + 1; //获取起始时间的月份
           var startDay = startDateNext.getDate(); //获取起始时间的日
           var startHour = startDateNext.getHours();              //获取起始时间小时数(0-23)
           var startMinute = startDateNext.getMinutes();          //获取起始时间分钟数(0-59)
           var startSecond = startDateNext.getSeconds();

           startdate = startYear + '-' + getNow(startMonth) + "-" + getNow(startDay) + " " + getNow(startHour) + ':' + getNow(startMinute) + ':' + getNow(startSecond);

           //终止时间
           var endtYear = endDateNext.getFullYear(); //获取起始时间的年份
           var endMonth = endDateNext.getMonth() + 1; //获取起始时间的月份
           var endDay = endDateNext.getDate(); //获取起始时间的日
           var endHour = endDateNext.getHours();              //获取起始时间小时数(0-23)
           var endMinute = endDateNext.getMinutes();          //获取起始时间分钟数(0-59)
           var endSecond = endDateNext.getSeconds();

           enddate = endtYear + '-' + getNow(endMonth) + "-" + getNow(endDay) + " " + getNow(endHour) + ':' + getNow(endMinute) + ':' + getNow(endSecond);


           console.log("下次起始时间:" + startdate);
           console.log("下次终止时间:" + enddate);




           $("#startDate").val(startdate);

           $("#endDate").val(enddate);
           console.log("执行时间:  "+now);
       
       
       
       
       }


       function SendRCLEDI(startdate, enddate) {

           var reportName = "RCLEDI";

           $.ajax({


               type: "get",
               dataType: "json",
               url: "/AutoEDI/CreateEDI?start_date=" + startdate + "&end_date=" + enddate + "&requestName=" + "RCLEDI",

               success: function (ret) {

                   $(ret).each(function (key) {

                       if (ret[key].isSucess == "YES") {

                           $("#resbox").append("<p>" + ret[key].fileName + "  " + ret[key].create_is + "  " + ret[key].send_is + "时间范围" + startdate + "至" + enddate + "</p>");




                       }
                       else {

                           $("#resbox").append("<p>" + ret[key].fileName + "  " + ret[key].create_is + "  " + ret[key].send_is + "原因:" + ret[key].strErr + "</p>");


                       }


                   });

               }


           })


       }


       $("#btnHand").click(function () {


           window.open('', '_blank').location.href = "/AutoEDI/TestIndex";



       });


       $("#btnOpen").click(function () {


           var spServe = $("#spServe").text();

           if (spServe.indexOf("服务未开启") >= 0) {

               SendMSCEDI();

           }

           var intervalId = setInterval(function () {
               SendMSCEDI();
               //    window.location.reload();
           }, 900000)

           $("#spServe").text("服务已开启");

       });

//       $("#btnOpen").click(function () {


//           var spServe = $("#spServe").text();

//           if (spServe.indexOf("服务未开启") >= 0) {

//               RCLData();

//           }

//           var intervalId = setInterval(function () {
//               RCLData();
//               //    window.location.reload();
//           }, 7200000)


//           $("#spServe").text("服务已开启");


//       });

       $("#btnClose").click(function () {

           window.location.reload();

       })
