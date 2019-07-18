 function init() {


        //  $("#r_cntsize").attr("disabled", true);
         // $("#r_cnttype").attr("disabled", true);
        //  $("#r_cntsize").attr("disabled", true);
        //  $("#r_cntweight").attr("disabled", true);
         // $("#r_cnt_netweight").attr("disabled", true);
        //  $("#r_cnt_grossweight").attr("disabled", true);
        //  $("#r_av").attr("disabled", true);
        //  $("#r_cntym").attr("disabled", true);
          $("#btnUnitInfoUpdate").attr("disabled", true);
       //   $("#r_date").attr("disabled", true);
      //    $("#inspection_Remark").attr("disabled", true);
      //    $("#r_user").attr("disabled", true);
          $("#r_id").hide();
          $("#p_r_id").hide();

      }

      init();

      $("#btnRush").click(function () {

          window.location.reload();

      });

      function ToUnitMenu() {

          var ctn_no = $("#ctn_no").val();

          window.location.href = "/RepairbillInfo/UnitDataUpdate?ctn_no=" + ctn_no;

      }

      $("#btnToUnitMenu").click(function () {

          ToUnitMenu();

      });



      function SelectRepInfo() {

          var ctn_no = $("#ctn_no").val();

          if (ctn_no == "") {

              alert("请输入箱号");
              return false;

          }

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/RepairbillInfo/AddColdCtnInfo?val1=" + ctn_no + "&val88=" + "QueryRepInfo",

              success: function (ret) {


                  var map = eval('(' + ret + ')');

                  var str = JSON.stringify(map.dt);
                  if (str == "[]") {
                      alert("此箱未上传或已被读取");
                      //return false;
                      window.location.reload();
                  }

                  var _json = eval(map.dt);

                  var response = JSON.stringify(map.Response);

                  var html = "";
                  var i = 1;
                  html += "<tr>";
                  html += "<td style = " + "'" + "display:none;" + "'" + ">" + "r_id" + "</td>"//0
                  html += "<td>箱号</td>"; //1
                  html += "<td>箱毛重</td>"; //2
                  html += "<td>箱自重</td>"; //3
                  html += "<td>箱载重</td>"; //4
                  html += "<td>箱型</td>"; //5
                  html += "<td>尺寸</td>"; //6
                  html += "<td>箱况</td>"; //7
                  html += "<td>造箱年份</td>"; //8
                  html += "<td>验箱时间</td>"; //9
                  html += "<td>验箱人</td>"; //10
                  html += "<td>验箱备注</td>"; //11
                  html += "<td>是否已被读取</td>"; //12
                  html += "</tr>"


                  $(_json).each(function (key) {


//                      $("#r_cntsize").val(_json[key].r_cntsize);
//                      $("#r_cnttype").val(_json[key].r_cnttype);
//                      $("#r_cntweight").val(_json[key].r_cntweight);
//                      $("#r_cnt_netweight").val(_json[key].r_cnt_netweight);
//                      $("#r_cnt_grossweight").val(_json[key].r_cnt_grossweight);
//                      $("#r_av").val(_json[key].r_av);
//                      $("#r_cntym").val(_json[key].r_cntym);
//                      $("#r_date").val(_json[key].r_date);
//                      $("#inspection_Remark").val(_json[key].inspection_Remark);
//                      $("#r_user").val(_json[key].r_user);
                      //                      $("#r_id").val(_json[key].r_id);

                      html += "<tr>";
                      html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_id + "</td>"//0
                      html += "<td>" + _json[key].r_cntno + "</td>"; //1
                      html += "<td>" + _json[key].r_cntweight + "</td>"; //2
                      html += "<td>" + _json[key].r_cnt_netweight + "</td>"; //3
                      html += "<td>" + _json[key].r_cnt_grossweight + "</td>"; //4
                      html += "<td>" + _json[key].r_cnttype + "</td>"; //5
                      html += "<td>" + _json[key].r_cntsize + "</td>"; //6
                      html += "<td>" + _json[key].r_av + "</td>"; //7
                      html += "<td>" + _json[key].r_cntym + "</td>"; //8
                      html += "<td>" + _json[key].r_date + "</td>"; //9
                      html += "<td>" + _json[key].r_user + "</td>"; //10
                      html += "<td>" + _json[key].inspection_Remark + "</td>"; //11
                      html += "<td>" + _json[key].r_isGetData + "</td>"; //12
                      html += "</tr>";

                  });

                  $("#RepairbillInfotable").html(html);

                  var ctn_type =  $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(5).text();

                  if (ctn_type.substr(0, 1) == "R") {

                      $("#btnUnitInfoUpdate").attr("disabled", false);
                      $("#ctn_no").attr("disabled", true);

                  }


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }


          })

      }

      $("#btnQuery").click(function () {

          SelectRepInfo();

      });


      function SelectRepInfoByCtn_no() {


          var ctn_no = $("#ctn_no").val();

          if (ctn_no == "") {

              alert("请输入箱号");
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/RepairbillInfo/AddColdCtnInfo?val1=" + ctn_no + "&val88=" + "QueryRepInfoByctn_no",

              success: function (ret) {

                  var map = eval('(' + ret + ')');

                  var str = JSON.stringify(map.dt);
                  if (str == "[]") {
                      alert("没有数据");
                      return false;
                  }

                  var _json = eval(map.dt);
                  var html = "";
                  var i = 1;

                  html += "<tr>";
                  html += "<td>操作</td>"; //0
                  html += "<td style = " + "'" + "display:none;" + "'" + ">" + "r_id" + "</td>"//1
                  html += "<td>箱号</td>"; //2
                  html += "<td>箱毛重</td>"; //3
                  html += "<td>箱自重</td>"; //4
                  html += "<td>箱载重</td>"; //5
                  html += "<td>箱型</td>"; //6
                  html += "<td>尺寸</td>"; //7
                  html += "<td>箱况</td>"; //8
                  html += "<td>造箱年份</td>"; //9
                  html += "<td>验箱时间</td>"; //10
                  html += "<td>验箱人</td>"; //11
                  html += "<td>验箱备注</td>"; //12
                  html += "<td>是否已被读取</td>"; //13
                  html += "<td>机组品牌</td>"; //14
                  html += "<td>机组型号</td>"; //15
                  html += "<td>机组序列号</td>"; //16
                  html += "<td>机组冷冻液</td>"; //17
                  html += "<td>机组电压</td>"; //18
                  html += "<td>pti动作</td>"; //19
                  html += "<td>pti状态</td>"; //20
                  html += "<td>机组日期</td>"; //21
                  html += "</tr>"



                  $(_json).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "查看详细"
                      + "' onclick = '" + "return  Settlement(" + i + ")" + "'" + "/>" + "</td>"; //0
                      html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_id + "</td>"//1
                      html += "<td>" + _json[key].r_cntno + "</td>"; //2
                      html += "<td>" + _json[key].r_cntweight + "</td>"; //3
                      html += "<td>" + _json[key].r_cnt_netweight + "</td>"; //4
                      html += "<td>" + _json[key].r_cnt_grossweight + "</td>"; //5
                      html += "<td>" + _json[key].r_cnttype + "</td>"; //6
                      html += "<td>" + _json[key].r_cntsize + "</td>"; //7
                      html += "<td>" + _json[key].r_av + "</td>"; //8
                      html += "<td>" + _json[key].r_cntym + "</td>"; //9
                      html += "<td>" + _json[key].r_date + "</td>"; //10
                      html += "<td>" + _json[key].r_user + "</td>"; //11
                      html += "<td>" + _json[key].inspection_Remark + "</td>"; //12
                      html += "<td>" + _json[key].r_isGetData + "</td>"; //13
                      html += "<td>" + _json[key].MACH_TYPE + "</td>"; //14
                      html += "<td>" + _json[key].MODEL_NUM + "</td>"; //15
                      html += "<td>" + _json[key].UNIT_SERIAL_NUM + "</td>"; //16
                      html += "<td>" + _json[key].SnowSeed + "</td>"; //17
                      html += "<td>" + _json[key].unit_voltage + "</td>"; //18
                      html += "<td>" + _json[key].pti_type + "</td>"; //19
                      html += "<td>" + _json[key].pti_status + "</td>"; //20
                      html += "<td>" + _json[key].unit_date + "</td>"; //21
                      html += "</tr>";
                      i++;



                  });
                  $("#RepairbillInfotable").html(html);



              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }


          })


      }


      function Settlement(i) {

          var r_id = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(1).text();
          $("#r_id").val(r_id);
          var ctn_no = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(2).text();
          $("#ctn_no").val(ctn_no);
//          var r_cntsize = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(7).text();
//          $("#r_cntsize").val(r_cntsize);
//          var r_cnttype = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(6).text();
//          $("#r_cnttype").val(r_cnttype);
//          var r_cntweight = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(3).text();
//          $("#r_cntweight").val(r_cntweight);
//          var r_cnt_netweight = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(4).text();
//          $("#r_cnt_netweight").val(r_cnt_netweight);
//          var r_cnt_grossweight = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(5).text();
//          $("#r_cnt_grossweight").val(r_cnt_grossweight);
//          var r_av = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(8).text();
//          $("#r_av").val(r_av);
//          var r_cntym = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(9).text();
//          $("#r_cntym").val(r_cntym);
//          var r_date = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(10).text();
//          $("#r_date").val(r_date);
//          var inspection_Remark = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(12).text();
//          $("#inspection_Remark").val(inspection_Remark);
//          var r_user = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(11).text();
//          $("#r_user").val(r_user);
          var MODEL_NUM = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(15).text();
          $("#MODEL_NUM").val(MODEL_NUM);
          var MACH_TYPE = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(14).text();
          $("#MACH_TYPE").val(MACH_TYPE);
          var UNIT_SERIAL_NUM = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(16).text();
          $("#UNIT_SERIAL_NUM").val(UNIT_SERIAL_NUM);
          var SnowSeed = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(17).text();
          $("#SnowSeed").val(SnowSeed);
          var unit_voltage = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(18).text();
          $("#unit_voltage").val(unit_voltage);
          var pti_type = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(19).text();
          $("#pti_type").val(pti_type);
          var pti_status = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(20).text();
          $("#pti_status").val(pti_status);
          var unit_date = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(21).text();
          $("#unit_date").val(unit_date);
          var r_isGetData = $("#RepairbillInfotable").find("tr").eq(i).find("td").eq(13).text();

          if (r_isGetData == "未被读取" && r_cnttype.substr(0, 1) == "R") {

              $("#btnUnitInfoUpdate").attr("disabled", false);

          }

          $("#ctn_no").attr("disabled", true);


      }

      $("#btnCtnInfoQuery").click(function () {

          SelectRepInfoByCtn_no();

      });





      $("#btnPing").click(function () {

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/RepairbillInfo/AddColdCtnInfo?val88=" + "pingServer",

              success: function (ret) {

                  var map = eval('(' + ret + ')');
                  var response = JSON.stringify(map.Response);

                  alert(response);

                  window.location.reload();

              }


          })



      });

      function UpdateUnitData() {

          var MACH_TYPE = $("#MACH_TYPE").val();
          var MODEL_NUM = $("#MODEL_NUM").val();
          var UNIT_SERIAL_NUM = $("#UNIT_SERIAL_NUM").val();
          var SnowSeed = $("#SnowSeed").val();
          var unit_voltage = $("#unit_voltage").val();
          var pti_type = $("#pti_type").val();
          var r_id = $("#r_id").val();
          var unit_date = $("#unit_date").val();
          var pti_status = $("#pti_status").val();

          var r = unit_date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }


          if (MACH_TYPE == "" && MODEL_NUM == "" && UNIT_SERIAL_NUM == "" && SnowSeed == "" && unit_voltage == "" && pti_type == "" && unit_date == "" && pti_status == "") {

              alert("机组信息都为空，不允许录入");
              return false;
              window.location.reload();
          }

          if (!window.confirm('机组信息将更新，是否确定')) {
              return false;

          }



          $.ajax({

              type: "get",
              dataType: "json",
              url: "/RepairbillInfo/AddColdCtnInfo?val1=" + MACH_TYPE + "&val2=" + MODEL_NUM + "&val3=" + UNIT_SERIAL_NUM
               + "&val4=" + SnowSeed + "&val5=" + unit_voltage + "&val6=" + pti_type + "&val7=" + r_id +
                "&val8=" + unit_date + "&val9=" + pti_status + "&val88=" + "UpdateUnitData",

              success: function (ret) {

                  var map = eval('(' + ret + ')');
                  var response = JSON.stringify(map.Response);

                  alert(response);

                  window.location.reload();

              }



          })




      }

      $("#btnUnitInfoUpdate").click(function () {


          UpdateUnitData();

      });
