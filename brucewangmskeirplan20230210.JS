 function init() {

          $("#setDiv").hide();
      
      }

      init();

      $("#btnCloseSet").click(function () {


          $("#setDiv").hide();

      });

      $("#btnSet").click(function () {

          var password = prompt("请输入管理员密码:", "xxxxxx");

          if (password == "fuckdw") {

              $("#setDiv").show();

          }
          else {

              alert("密码错误");

          }

      });

     

      function getNow(s) {
          return s < 10 ? '0' + s : s;
      }


      $("#btnSend").click(function () {


          //window.location.href = "/MskEirPlan/SendByMan";
            window.open("/MskEirPlan/SendByMan");

      });


      function toastData() {
          //            alert("垃圾公司");

          var morningCheck = $("#morningIssend").val();

          var afternoonCheck = $("#afternoonIssend").val();


          var myDate = new Date();

          var year = myDate.getFullYear();        //获取当前年
          var month = myDate.getMonth() + 1;   //获取当前月
          var date = myDate.getDate();            //获取当前日

          var preDate = myDate.getDate() - 1; //前一天

          var h = myDate.getHours();              //获取当前小时数(0-23)
          var m = myDate.getMinutes();          //获取当前分钟数(0-59)
          var s = myDate.getSeconds();

          var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);

          var startDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + (getNow(h) - 1) + ':' + '00' + ":" + '00';

          var endDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + (getNow(h) - 1) + ':' + '59' + ":" + '59';

          //            $("#resbox").append("<p>" + "起始时间" + startDate + "-" + "终止时间" + endDate + "</p>");

          var eightDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + '08' + ':' + '30' + ":" + '00';
          var twoDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + '14' + ':' + '30' + ":" + '00';

          var date1 = year + '-' + getNow(month) + "-" + getNow(date) + " " + '08:30:00'
          var date2 = year + '-' + getNow(month) + "-" + getNow(date) + " " + '14:30:00'

          console.log("当前时间:" + now);

          var _date1 = new Date(date1);
          var _date2 = new Date(date2);
          var _now = new Date(now);
          var _eightDate = new Date(eightDate);
          var _twoDate = new Date(twoDate);


          //执行早上8点半的服务




          if (_now > _date1 && _now < _date2) {


              if (morningCheck == 0) {


                  console.log("当前时间大于上午8点小于下午2点");
                  var _startDate = year + '-' + getNow(month) + "-" + getNow(preDate) + " " + '14' + ':' + '30' + ":" + '00';
                  var _enddate = year + '-' + getNow(month) + "-" + getNow(date) + " " + '07' + ':' + '59' + ":" + '59';


                  console.log("查询起始时间" + _startDate);
                  console.log("查询结束时间" + _enddate);

                   selectData(_startDate, _enddate);



                  $("#morningIssend").val("1");
                  $("#afternoonIssend").val("0");

                 
              }
              else {
                  console.log("上午数据已执行过,无需再执行");
              }
          }
          else {
              console.log("上午执行时间未到，不执行服务");
          }



          if (_now > _date2) {
              if (afternoonCheck == 0) {
                  console.log("当前时间大于下午2点")

                   _startDate = year + '-' + getNow(month) + "-" + getNow(date) + " " + '08' + ':' + '00' + ":" + '00';
                   _enddate = year + '-' + getNow(month) + "-" + getNow(date) + " " + '13' + ':' + '59' + ":" + '59';

                  console.log("查询起始时间" + _startDate);
                  console.log("查询结束时间" + _enddate);


                   selectData(_startDate, _enddate);

                

                  $("#morningIssend").val("0");
                  $("#afternoonIssend").val("1");

                 

              }
              else {
                  console.log("下午数据已执行过,无需再执行");
              }
          }
          else {
              console.log("下午执行时间未到，不执行服务");
          }





          // console.log("起始时间"+startDate);

          // console.log("终止时间"+endDate);


      }


      function selectData(startDate,endDate) {
      

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/MskEirPlan/QueryData?startdate=" + startDate + "&endDate=" +
                endDate + "&requestName=" + "QueryData",

              success: function (ret) {


                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (ret == "[]") {

                      $("#resbox").append("<p>" + startDate + "-" + endDate + "无数据需要发送" + "</p>");
                      return false;

                  }

                   sendData(startDate, endDate);



                  

              }


          })


      }


      $("#btnOpen").click(function () {

          var spServe = $("#spServe").text();

          if (spServe.indexOf("服务未开启") >= 0) {

              toastData();

          }

          // var intervalId = setInterval(function () {
          //     toastData();
          //     //    window.location.reload();
          // }, 3600000)   //1小时

          var intervalId = setInterval(function () {
              toastData();
              //    window.location.reload();
          }, 600000)   //10分钟


          $("#spServe").text("服务已开启");


      });


      $("#btnClose").click(function () {

          window.location.reload();

      })



      function sendData(startDate,endDate) {

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/MskEirPlan/SendMessage?startdate=" + startDate + "&endDate=" +
                endDate + "&requestName=" + "sendData",

              success: function (ret) {

                //  console.log(ret);

                  //                    var result = ret.toString();

                  //                    var _result = JSON.parse(result);

                  //                    var status = _result.status;

                  //                    var message = _result.message;




                  //                    alert("返回状态为:" + status + "返回信息为:" + message);


                  

                  var result = "";

                  $(ret).each(function (key) {

                      //                        var planNo = ret[key].planNo;
                      //                        var status = ret[key].status;
                      //                        var message = ret[key].message;


                      var status = ret[key].status;

                      if (status == "S") {

                          $("#resbox").append("<p>" + startDate + "-" + endDate + "计划号:" + ret[key].planNo + ",传输成功" + "</p>");
//                          alert("计划号:" + ret[key].planNo + ",传输成功");

                      }
                      else {

                          $("#resbox").append("<p>" + startDate + "-" + endDate + "计划号:" + ret[key].planNo + ",传输结果为:" + ret[key].status + ",返回信息为:" + ret[key].message + "</p>");

                       //   console.log("计划号:" + ret[key].planNo + ",传输结果为:" + ret[key].status + ",返回信息为:" + ret[key].message);

                      }

                      


//                      $("#resbox").append("<p>" + startDate + "-" + endDate + "计划号:" +ret[key].planNo + ",传输结果为:" + ret[key].status + ",返回信息为:" + ret[key].message+ "</p>");

                  });





              }



          })



      }
