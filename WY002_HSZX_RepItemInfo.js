$("#btnExport").click(function () {

                exportexcel();


            });

            function exportexcel() {

                if ($("table tr").length > 1) {

                    $("#RepairIteminfoTable").table2excel({
                        exclude: ".noExl",
                        name: "Excel Document Name",
                        filename: "myFileName",
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


            function AddRepItem() {


                var XCode = $("#XCode").val();

                if (XCode == "") {

                    alert("请输入关联代码");
                    return false;

                }

                var BJName = $("#BJName").val();

                if (BJName == "") {

                    alert("请输入备件名称");
                    return false;
                
                }

                var BJNo = $("#BJNo").val();

                if (BJNo == "") {

                    alert("请输入备件号");
                    return false;

                }


                var Counts = $("#Counts").val();

                

                var price = $("#price").val();

               
                var ctn_no = $("#ctn_no").val();


                var ptiFee = $("#ptiFee").val();


                $.ajax({
                
                type: "get",
                  dataType: "json",
                  url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val2=" + BJName + "&val3=" + BJNo+
                  "&val4=" + Counts + "&val5=" + price + "&val6=" + ctn_no + "&val7=" + ptiFee +
                   "&val88=" + "AddRepItemInfo",

                  success: function (ret) {


                      var map = eval('(' + ret + ')');
                      var response = JSON.stringify(map.Response);

                      alert(response);

                      window.location.reload();

                  }

                
                })



          }


          $("#btnAdd").click(function () {


          
              AddRepItem();





          });


          function SelectRepItemInfo() {

              var XCode = $("#XCode").val();

              if (XCode == "") {

                  alert("请输入关联代码");
                  return false;

              }

              $.ajax({

                  type: "get",
                  dataType: "json",
                  url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val88=" + "SelectRepItemInfo",

                  success: function (ret) {

                      var map = eval('(' + ret + ')');

                      var str = JSON.stringify(map.dt);
                      if (str == "[]") {
                          alert("没有数据");
                          return false;
                      }

                      var _json = eval(map.dt);

                      var response = JSON.stringify(map.Response);



                      var html = "";
                      var i = 1;

                      html += "<tr>";
                     html += "<td style = " + "'" + "display:none;" + "'" + ">" +"r_id" + "</td>"//0
                      html += "<td>关联代码</td>"; //1
                      html += "<td>备件名称</td>"; //2
                      html += "<td>备件号</td>"; //3
                      html += "<td>数量</td>"; //4
                      html += "<td>价格</td>"; //5
                      html += "<td>对应箱号</td>"; //6
                      html += "<td>录入时间</td>"; //7
                     // html += "<td>修改时间</td>"; //8
                      html += "<td>操作</td>"; //8
                      html += "</tr>";


                      $(_json).each(function (key) {

                          html += "<tr>";
                          html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].r_id + "</td>"//0
                          html += "<td>" + _json[key].XCode + "</td>";  //1
                          html += "<td>" + _json[key].BJName + "</td>";  //2
                          html += "<td>" + _json[key].BJNo + "</td>";  //3
                          html += "<td>" + _json[key].Count + "</td>";  //4
                          html += "<td>" + _json[key].price + "</td>";  //5
                          html += "<td>" + _json[key].ctn_no + "</td>";  //6
                          html += "<td>" + _json[key].input_date + "</td>";  //7
                         // html += "<td>" + _json[key].update_date + "</td>";  //8
                          html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" +
                        "删除" + "' onclick = '" + "return DeleteRepItemSettle(" + i + ")" + "'" + "/>" + "</td>";
                          html += "</tr>";
                          i++;

                      });
                      $("#RepairIteminfoTable").html(html);

                  },
                  error: function (XmlHttpRequest, textStatus, errorThrown) {
                      alert(XmlHttpRequest.responseText);
                  }



              })
          
          
          
          }


          $("#btnQuery").click(function (){
          
          SelectRepItemInfo();
          
          });




          function DeleteRepItemSettle(i)
          {
          var XCode = $("#RepairIteminfoTable").find("tr").eq(i).find("td").eq(1).text();
          var r_id = $("#RepairIteminfoTable").find("tr").eq(i).find("td").eq(0).text();

          if (!window.confirm('确定要删除这条记录吗')) {

             return false;
         }


          $.ajax({
          
          
                 type: "get",
                 dataType: "json",
                 url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val2="+r_id+"&val88=" + "deleteRepItemInfo",


                 success: function (ret) {


                     var map = eval('(' + ret + ')');
                     var response = JSON.stringify(map.Response);

                     alert(response);

                     SelectRepItemInfo();
                 
                 
                 
                 }
          
          
          
          
          })


          }
