function init() {

          var url = location.search; //获取url中"?"符后的字串
          if (url.indexOf("?") != -1) {    //判断是否有参数
              var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
              strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
              //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
          }
          var username = strs[1];
          $("#username").text(username);

          $("#repdiv").hide();

      }

      init();

      $("#btn_query").click(function () {


          selectReqInfo();

      });

      $("#btnAdd").click(function () {

          AddRepItem();

      });

      $("#btn_queryItem").click(function () {

          selectrepItem();


      });

      function initItem() {

          $("#repItem").val("");
          $("#is_BJ").val("NoSelect");
      
      }

      function selectrepItem() {

          var rep_id = $("#rep_id").text();

          if (rep_id == "") {

              alert("无明细信息");
              return false;
          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/TruckRepair/SelectRepitemInfo?rep_id=" + rep_id + "&requestName=" + "selectRepitemInfo",
              success: function (ret) {


                  console.log(ret);

                  var html = "";

                  html += "<tr>";
                   html += "<td>维修代码</td>"; //0
                   html += "<td>是否需要备件</td>"; //1
                   html += "<td>填报项目时间</td>"; //2
                    html += "<td>填报项目人</td>"; //3
                    html += "<td>是否修理</td>"; //4

                   html += "</tr>";

                              $(ret).each(function (key) {
                        html += "<tr>";
                        html+="<td>"+ret[key].item_code+"</td>"//0
                         html+="<td>"+ret[key].is_need+"</td>"//1
                          html+="<td>"+ret[key].create_date+"</td>"//2
                           html+="<td>"+ret[key].create_user+"</td>"//3
                            html+="<td>"+ret[key].is_worked+"</td>"//4
                        html += "</tr>";
                       
                    });
                    $("#repItemTab").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }
              

          })

      
      }

      function AddRepItem() {

          var create_user = $("#username").text();//操作人
          var rep_id = $("#rep_id").text(); //报修编号
          var repItem = $("#repItem").val(); //维修项目
          var is_need = $("#is_BJ").val(); //是否需要备件

          if (repItem == "") {

              alert("请录入维修代码");
              $("#repItem").focus();
              return false;

          }

          if (is_need == "NoSelect") {

              alert("请选择是否需要备件");
              $("#is_BJ").focus();
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/TruckRepair/AddrepItem?item_code=" + repItem + "&is_need=" + is_need + "&create_user=" + create_user +
              "&rep_id=" + rep_id + "&requestName=" + "AddRepitem",

              success: function (ret) {

                  var result = ret.is_success;
                  var err = ret.err;
                  if (result == "OK") {

                      alert("新增成功");
                      selectrepItem();
                      initItem();

                  }
                  else {

                      alert("新增失败,原因是" + err);

                  }

              }


          })

      
      }

      function selectReqInfo() {

          var truck_no = $("#truck_no").val();
          if (truck_no == "") {
              alert("请输入车号");
              $("#truck_no").focus();
              return false;
          }

          $.ajax({
              type: "get",
              dataType: "json",
              url: "/TruckRepair/RepairBusiness?truck_no=" + truck_no + "&requestName=" + "SelectReqInfo",
              success: function (ret) {



                  var QueryResult = ret.QueryResult;
                  if (QueryResult == "OK") {

                      var _truck_no = ret.truck_no;
                      var _trouble_dec = ret.trouble_dec;
                      var _request_date = ret.request_date;
                      var _requester = ret.requester;
                      var _rep_id = ret.rep_id;

                      $("#rep_id").text(_rep_id);

                      console.log("车号:" + _truck_no + ",故障描述: " + _trouble_dec + ",报修时间:" + _request_date + ",报修人:" + _requester);
                      $("#reqSpan").text("车号:" + _truck_no + ",故障描述: " + _trouble_dec + ",报修时间:" + _request_date + ",报修人:" + _requester);

                      $("#repdiv").show();
                  }
                  else {

                      alert("无相关报修信息");
                      window.location.reload();

                  }


              }


          })


      }