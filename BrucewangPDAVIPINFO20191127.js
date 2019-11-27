  
          $("#btnRush").click(function () {

              window.location.reload();

          });

          function closeWin() {
              window.opener = null;
              window.open('', '_self');
              window.close();
          }

          $("#btnClose").click(function () {


              closeWin();

          });


          $("#btnVIPQuery").click(function () {


              SelectVipInfo();

          });

          function SelectVipInfo() {


              var bl_no = $("#bl_no").val();
              var ope = $("#ope").val();

              if (bl_no == "" && ope == "") {


                  alert("请录入提单号或者箱公司作为查询条件");
                  return false;

              }


              $.ajax({

                  type: "get",
                  dataType: "json",
                  url: "/PdaInfoMenu/PdaInfoBusiness?val1=" + bl_no + "&val2=" + ope + "&val88=" + "QueryVIPInfo",

                  success: function (ret) {


                      var map = eval('(' + ret + ')');


                      var str = JSON.stringify(map.dt);


                      if (str == "[]") {
                          alert("无vip信息");
                          return false;
                          //                         window.location.reload();
                      }

                      var _json = eval(map.dt);

                      var response = JSON.stringify(map.Response);


                      var html = "";

                      html += "<tr>";
                      html += "<td>箱公司</td>"; //0
                      html += "<td>提单号</td>"; //1
                      html += "<td>尺寸</td>"; //2
                      html += "<td>已进数量</td>"; //3
                      html += "<td>计划数量</td>"; //4
                      html += "<td>创建人</td>"; //5
                      html += "<td>创建时间</td>"; //6
                      html += "</tr>"

                      $(_json).each(function (key) {

                         
                          html += "<tr>";
                          html += "<td>" + _json[key].customer_code + "</td>"; //0
                          html += "<td>" + _json[key].bl_no + "</td>"; //1
                          html += "<td>" + _json[key].ctn_size + "</td>"; //2
                          html += "<td>" + _json[key].in_mount + "</td>"; //3
                          html += "<td>" + _json[key].plan_mount + "</td>"; //4
                          html += "<td>" + _json[key].create_user_name + "</td>"; //5
                          html += "<td>" + _json[key].create_date + "</td>"; //6
                          html += "</tr>";

                      });

                      $("#VIPInfotable").html(html);


                  }

              })



          }

          $("#btnTZQuery").click(function () {

              QueryTZinfo();

          });

          function QueryTZinfo() {


              var ctn_no = $("#ctn_no").val();

              if (ctn_no == "") {

                  alert("查询退租信息需录入箱号");
                  return false;

              }

              $.ajax({

                  type: "get",
                  dataType: "json",
                  url: "/PdaInfoMenu/PdaInfoBusiness?val1=" + ctn_no + "&val88=" + "QueryTZInfo",

                  success: function (ret) {

                      var map = eval('(' + ret + ')');


                      var str = JSON.stringify(map.dt);


                      if (str == "[]") {
                          alert("无退租信息");
                          return false;
                          //                         window.location.reload();
                      }


                      var _json = eval(map.dt);

                      var response = JSON.stringify(map.Response);


                      var html = "";

                      html += "<tr>";
                      html += "<td>箱号</td>"; //0
                      html += "<td>箱公司</td>"; //1
                      html += "<td>备注</td>"; //2
                     
                      html += "</tr>"

                      $(_json).each(function (key) {

                        
                          html += "<tr>";
                          html += "<td>" + _json[key].ctn_no + "</td>"; //0
                          html += "<td>" + _json[key].customer_code + "</td>"; //1
                          html += "<td>" + _json[key].remark + "</td>"; //2
                         
                          html += "</tr>";

                      });

                      $("#VIPInfotable").html(html);
                  
                  
                  }


              })

          
          }
