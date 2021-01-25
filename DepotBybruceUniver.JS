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
                      html += "<td>出时确认人</td>"; //12
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
