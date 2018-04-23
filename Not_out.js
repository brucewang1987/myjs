  $("#btnQuery").click(function () {

                  $.ajax({

                      type: "get",
                      dataType: "json",
                      url: "RFjianhuHandler.ashx?val8=" + "notOutList",

                      success: function (ret) {

                          var str = JSON.stringify(ret.dtNotOutList);
                          if (str == "[]") {
                              alert("没有数据");
                              return false;
                          }


                          var _json = eval(ret.dtNotOutList);

                          var html = "";
                          html += "<tr>";

                          html += "<td>箱号</td>";
                          html += "<td>是否记录</td>"

                          html += "</tr>"


                          $(_json).each(function (key) {

                              html += "<tr>";
                              html += "<td>" + _json[key].ctn_no + "</td>";
                              html += "<td>" + _json[key].is_record + "</td>";
                              html += "</tr>";


                          });

                          $("#notouttable").html(html);

                      },
                      error: function (XmlHttpRequest, textStatus, errorThrown) {
                          alert(XmlHttpRequest.responseText);
                      }


                  })

              });


              $("#btnTableToExcel").click(function () {

                  $("#notouttable").table2excel({
                      exclude: ".noExl",
                      name: "Excel Document Name",
                      filename: "myFileName",
                      exclude_img: true,
                      exclude_links: true,
                      exclude_inputs: true
                  });

              });
