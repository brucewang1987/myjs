$("#confirm_out_user").blur(function () {

          var confirm_out_user = $("#confirm_out_user").val();
          var _confirm_out_user = confirm_out_user.toUpperCase();

          $("#confirm_out_user").val(_confirm_out_user);

      });

      function SelectCtnInfoByCtnNo() {

          var ctn_no = $("#ctn_no").val();

          if (ctn_no == "") {
              alert("请录入箱号");
              $("#ctn_no").focus();
              return false;
          }

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?ctn_no=" + ctn_no + "&requestName=" + "SelectCtnInfoByCtnNo",

              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }


                  var html = "";
                  html += "<tr>";
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "<td>场位</td>"; //16
                  html += "<td>铅封号</td>"; //17
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15
                      html += "<td>" + ret[key].seat + "</td>"//16
                      html += "<td>" + ret[key].seal_no + "</td>"//17

                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })


      }


      function SelectCtnInfoByPlaceId() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?place_id=" + place_id + "&requestName=" + "SelectCtnInfoByPlaceID",

              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      console.log("没有数据");
                      return false;
                  }


                  var html = "";
                  html += "<tr>";
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15

                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })


      }


      //按堆场号查询在场箱
      function SelectNowAtCtnInfoByPlaceId() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?place_id=" + place_id + "&requestName=" + "SelectNowAtCtnInfoByPlaceID",

              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                      //                          return false;
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  //                      html += "<td>出时间场</td>"; //11
                  //                      html += "<td>出时确认人</td>"; //12
                  //                      html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14

                  //                      html += "<td>出场备注</td>"; //15
                  html += "<td>场位</td>"; //16
                  html += "<td>铅封号</td>"; //17
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      //                          html += "<td>" + ret[key].date_out + "</td>"//11
                      //                          html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      //                          html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      //                          html += "<td>" + ret[key].out_remark + "</td>"//15
                      html += "<td>" + ret[key].seat + "</td>"//16
                      html += "<td>" + ret[key].seal_no + "</td>"//17
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })


      }


      //按堆场和业务类型查找在场箱
      function SelectNowAtCtnInfoByPlaceIdAndBusiness() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }

          var business_type = $("#business_type").val();
          if (business_type == "NoSelect") {
              alert("请选择业务类型");
              $("#business_type").focus();
              return false;
          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?place_id=" + place_id + "&business_type=" + business_type + "&requestName=" + "SelectNowAtDepotctnInfoByplaceandbusiness",

              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                      //                          return false;
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  //                      html += "<td>出时间场</td>"; //11
                  //                      html += "<td>出时确认人</td>"; //12
                  //                      html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14

                  //                      html += "<td>出场备注</td>"; //15
                  html += "<td>场位</td>"; //16
                  html += "<td>铅封号</td>"; //17
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      //                          html += "<td>" + ret[key].date_out + "</td>"//11
                      //                          html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      //                          html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      //                          html += "<td>" + ret[key].out_remark + "</td>"//15
                      html += "<td>" + ret[key].seat + "</td>"//16
                      html += "<td>" + ret[key].seal_no + "</td>"//17
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })


      }



      //按堆场和进场时间查询
      function SelectCtnInfoByPlaceAndDateIn() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }

//          var startDate = $("#startdate").val();

//          if (startDate == "") {

//              alert("请选择开始日期");

//              $("#startdate").focus();
//              return false;
//          }

//          var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

//          startDate = startDate + " 00:00:00";

//          var endDate = $("#enddate").val();

//          if (endDate == "") {

//              alert("请选择结束日期");

//              $("#endDate").focus();
//              return false;
//          }

//          r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

          //          endDate = endDate + " 23:59:59";


          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var time1 = startDate.substr(0, 10);
          console.log(time1);
          var time2 = startDate.substr(11, 8);
          console.log(time2);
          var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


          var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }


          time1 = endDate.substr(0, 10);
          time2 = endDate.substr(11, 8);

          r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&place_id=" + place_id + "&requestName=" + "SelectCtnInfoByPlaceIDAndDateIn",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "<td>场位</td>"; //16
                  html += "<td>铅封号</td>"; //17
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"//0
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15
                      html += "<td>" + ret[key].seat + "</td>"//16
                      html += "<td>" + ret[key].seal_no + "</td>"//17
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })




      }


      //按照堆场业务类型进场时间查询

      function SelectGateInByplaceIdAndbusinessType() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }

          var business_type = $("#business_type").val();
          if (business_type == "NoSelect") {
              alert("请选择业务类型");
              $("#business_type").focus();
              return false;
          }

//          var startDate = $("#startdate").val();

//          if (startDate == "") {

//              alert("请选择开始日期");

//              $("#startdate").focus();
//              return false;
//          }

//          var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

//          startDate = startDate + " 00:00:00";

//          var endDate = $("#enddate").val();

//          if (endDate == "") {

//              alert("请选择结束日期");

//              $("#endDate").focus();
//              return false;
//          }

//          r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

          //          endDate = endDate + " 23:59:59";


          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var time1 = startDate.substr(0, 10);
          console.log(time1);
          var time2 = startDate.substr(11, 8);
          console.log(time2);
          var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


          var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }


          time1 = endDate.substr(0, 10);
          time2 = endDate.substr(11, 8);

          r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&place_id=" + place_id + "&business_type=" + business_type + "&requestName=" + "SelectGateInByplaceIdAndbusinessType",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "<td>场位</td>"; //16
                  html += "<td>铅封号</td>"; //17
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"//0
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15
                      html += "<td>" + ret[key].seat + "</td>"//16
                      html += "<td>" + ret[key].seal_no + "</td>"//17
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })

      }

      //按照收费人和时间查询
      function SelectGateOutFeeByChargerAndTime() {

          var confirm_out_user = $("#confirm_out_user").val();
          if (confirm_out_user == "") {
              alert("请录入出场收费人");
              $("#confirm_out_user").focus();
              return false;
          }

          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var time1 = startDate.substr(0, 10);
          console.log(time1);
          var time2 = startDate.substr(11, 8);
          console.log(time2);
          var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


          var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }


          time1 = endDate.substr(0, 10);
          time2 = endDate.substr(11, 8);

          r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }



          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&confirm_out_user=" + confirm_out_user + "&requestName=" + "SelectGateOutFeeByChargerAndTime",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"//0
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })

      
      }


      //按照堆场和出场时间查询
      function SelectCtnInfoByPlaceAndDateOut() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }

//          var startDate = $("#startdate").val();

//          if (startDate == "") {

//              alert("请选择开始日期");

//              $("#startdate").focus();
//              return false;
//          }

//          var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

//          startDate = startDate + " 00:00:00";

//          var endDate = $("#enddate").val();

//          if (endDate == "") {

//              alert("请选择结束日期");

//              $("#endDate").focus();
//              return false;
//          }

//          r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

          //          endDate = endDate + " 23:59:59";

          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var time1 = startDate.substr(0, 10);
          console.log(time1);
          var time2 = startDate.substr(11, 8);
          console.log(time2);
          var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


          var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }


          time1 = endDate.substr(0, 10);
          time2 = endDate.substr(11, 8);

          r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }



          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&place_id=" + place_id + "&requestName=" + "SelectCtnInfoByPlaceIDAndDateOut",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"//0
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })




      }




      //按照堆场业务类型进场时间查询

      function SelectGateOutByplaceIdAndbusinessType() {

          var place_id = $("#place_id").val();
          if (place_id == "") {
              alert("请录入堆场");
              $("#place_id").focus();
              return false;

          }

          var business_type = $("#business_type").val();
          if (business_type == "NoSelect") {
              alert("请选择业务类型");
              $("#business_type").focus();
              return false;
          }

//          var startDate = $("#startdate").val();

//          if (startDate == "") {

//              alert("请选择开始日期");

//              $("#startdate").focus();
//              return false;
//          }

//          var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

//          startDate = startDate + " 00:00:00";

//          var endDate = $("#enddate").val();

//          if (endDate == "") {

//              alert("请选择结束日期");

//              $("#endDate").focus();
//              return false;
//          }

//          r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
//          if (r == null) {
//              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
//              return false;
//          }

          //          endDate = endDate + " 23:59:59";


          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var time1 = startDate.substr(0, 10);
          console.log(time1);
          var time2 = startDate.substr(11, 8);
          console.log(time2);
          var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


          var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }


          time1 = endDate.substr(0, 10);
          time2 = endDate.substr(11, 8);

          r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;
          }
          if (r2 == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&place_id=" + place_id + "&business_type=" + business_type + "&requestName=" + "SelectGateOutByplaceIdAndbusinessType",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }

                  var iNum = 1;
                  var html = "";
                  html += "<tr>";
                  html += "<td>序号</td>"; //0
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "<td>场位</td>"; //16
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + iNum + "</td>"//0
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15
                      html += "<td>" + ret[key].seat + "</td>"//16
                      iNum++;
                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })

      }


      function SelectCtnInfoByDateIn() {

          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }

          startDate = startDate + " 00:00:00";

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }

          r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }

          endDate = endDate + " 23:59:59";

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&requestName=" + "SelectCtnInfoByDateIn",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      console.log("没有数据");
                      return false;
                  }


                  var html = "";
                  html += "<tr>";
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15

                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })


      }

      function SelectCtnInfoByDateOut() {


          var startDate = $("#startdate").val();

          if (startDate == "") {

              alert("请选择开始日期");

              $("#startdate").focus();
              return false;
          }

          var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }

          startDate = startDate + " 00:00:00";

          var endDate = $("#enddate").val();

          if (endDate == "") {

              alert("请选择结束日期");

              $("#endDate").focus();
              return false;
          }

          r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }

          endDate = endDate + " 23:59:59";

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?startDate=" + startDate + "&endDate=" +
                endDate + "&requestName=" + "SelectCtnInfoByDateOut",


              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      console.log("没有数据");
                      return false;
                  }


                  var html = "";
                  html += "<tr>";
                  html += "<td>箱号</td>"; //0
                  html += "<td>进场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>进场登记人</td>"; //5
                  html += "<td>堆场</td>"; //6
                  html += "<td>垫付金额</td>"; //7
                  html += "<td>超期费率</td>"; //8
                  html += "<td>上下车费</td>"; //9
                  html += "<td>超期费用</td>"; //10
                  html += "<td>出场时间</td>"; //11
                  html += "<td>出场确认人</td>"; //12
                  html += "<td>总费用</td>"; //13
                  html += "<td>进场备注</td>"; //14
                  html += "<td>出场备注</td>"; //15
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_in + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].place_id + "</td>"//6
                      html += "<td>" + ret[key].advance_fee + "</td>"//7
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//8
                      html += "<td>" + ret[key].updown_fee + "</td>"//9
                      html += "<td>" + ret[key].save_fee + "</td>"//10
                      html += "<td>" + ret[key].date_out + "</td>"//11
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//12
                      html += "<td>" + ret[key].total_fee + "</td>"//13
                      html += "<td>" + ret[key].in_remark + "</td>"//14
                      html += "<td>" + ret[key].out_remark + "</td>"//15

                  });

                  $("#ctnInfo").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })


      }

      $("#btnQuery").click(function () {

          var select_type = $("#select_type").val();

          if (select_type == "NoSelect") {

              alert("请选择查询类型");
              $("#select_type").focus();
              return false;
          }

          if (select_type == "queryByctnNo") {

              SelectCtnInfoByCtnNo();

          }
          if (select_type == "queryByDateIn") {

              SelectCtnInfoByDateIn();

          }
          if (select_type == "queryByDateOut") {

              SelectCtnInfoByDateOut();

          }

          if (select_type == "queryByplaceId") {


              SelectCtnInfoByPlaceId();

          }

          if (select_type == "queryNowByplaceId") {

              SelectNowAtCtnInfoByPlaceId();

          }

          if (select_type == "queryByplaceIdandDateIn") {

              SelectCtnInfoByPlaceAndDateIn();

          }

          if (select_type == "queryByplaceIdandDateOut") {


              SelectCtnInfoByPlaceAndDateOut();


          }

          if (select_type == "queryByplaceIdandDateInAndBusinessType") {

              SelectGateInByplaceIdAndbusinessType();

          }

          if (select_type == "queryByplaceIdandDateOutAndBusinessType") {

              SelectGateOutByplaceIdAndbusinessType();

          }

          if (select_type == "queryNowByplaceIdAndBusiness") {

              SelectNowAtCtnInfoByPlaceIdAndBusiness();


          }

          if (select_type == "queryFeeByChargerAndTime") {

              SelectGateOutFeeByChargerAndTime();

          }

      });

      $("#btnexcel").click(function () {

          exportexcel();


      });


      function exportexcel() {

          var fileName = prompt("请输入文件名", "");

          if ($("table tr").length > 1) {

              $("#ctnInfo").table2excel({
                  exclude: ".noExl",
                  name: "Excel Document Name",
                  filename: fileName,
                  exclude_img: true,
                  exclude_links: true,
                  exclude_inputs: true
              });

          }
          else {

              alert("没有数据");
              return false;

          }


      }
