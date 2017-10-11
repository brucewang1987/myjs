  function QueryRepByRepDate()
      {

          var RepairStartDate = $("#RepairStartDateId").val();
          if (RepairStartDate == "") {

              alert("请输入修理开始日期");
              return false;

          }
          var rstart = RepairStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (rstart == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }



          var RepairEndDate = $("#RepairEndDateId").val();


          if (RepairEndDate == "") {

              alert("请输入修理结束日期");
              return false;
          
          }

          var rEnd = RepairEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (rEnd == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }


          $.ajax({

              type: "get",
              datatype: "json",
              url: "RepairMainInfoHandler.ashx?val1=" + RepairStartDate + "&val2=" + RepairEndDate +
          "&val10=" + "QueryRepInfoByRepdate",
              success: function (ret) {

                  var map = eval('(' + ret + ')');
                  var str = JSON.stringify(map.DTByRepdate);
                  if (str == "[]") {
                      alert("没有数据");
                      return false;
                  }

                  var _json = eval(map.DTByRepdate);

                  var html = "";
                  html += "<tr>";
                  html += "<td>修理编号</td>";
                  html += "<td>修理日期</td>";
                  html += "<td>工作内容</td>";
                  html += "<td>天数</td>";
                  html += "<td>维修地点</td>";
                  html += "<td>上门费</td>";
                  html += "<td>交通费</td>";
                  html += "<td>检修工时费</td>";
                  html += "<td>材料费</td>";
                  html += "<td>住宿费</td>";
                  html += "</tr>";


                   $(_json).each(function (key) {

                       html += "<tr>";
                       html += "<td>" + _json[key].RepairNo + "</td>";
                       html += "<td>" + _json[key].RepairDate + "</td>";
                       html += "<td>" + _json[key].Jobinfo + "</td>";
                       html += "<td>" + _json[key].Days + "</td>";
                       html += "<td>" + _json[key].RepairAddress + "</td>";
                       html += "<td>" + _json[key].Drop_in_fee + "</td>";
                       html += "<td>" + _json[key].Traffic_fee + "</td>";
                       html += "<td>" + _json[key].CheckHourFee + "</td>";
                       html += "<td>" + _json[key].Material_fee + "</td>";
                       html += "<td>" + _json[key].Stay_fee + "</td>";



                       html += "</tr>";


                   });
                   $("#RepairInfotable").html(html);
               },
               error: function (XmlHttpRequest, textStatus, errorThrown) {
                   alert(XmlHttpRequest.responseText);
               }



          })
      
      
      }
