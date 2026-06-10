 var iPage = 1;

      var ipageCount = 0;

      var ipageTemp = 0;

      var ipageIndex = 0;


      function init() {

          $("#pageMenu").hide();


      }

      init();

      $("#btnReturn").click(function () {

          window.location.reload();


      });


      function GetInfo() {

          var materialInput = $("#materialInput").val();

          if (materialInput == "") {

              alert("物料信息不能为空");
              $("#materialInput").focus();
              return false;
          }

          materialInput = materialInput.toUpperCase();
          $("#materialInput").val(materialInput);

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/Material/QueryMaterialInfo?material_name=" + materialInput + "&requestName=" + "selectMaterialInfo",


              success: function (ret) {

                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有符合条件的数据");
                      window.location.reload();
                  }

                  var html = "";



                  $(ret).each(function (key) {

                      //                     iNum=iNum+1;

                      html += "<tr>"
                      html += "<td>"
                      html += "<div>"

                      html += "<p>" + "物料描述:" + ret[key].material_desc + "</p>"
                      html += "<p>" + "存放地点:" + ret[key].save_loc + "</p>"
                      html += "<p>" + "数量:" + ret[key].counnt + "</p>"
                      //                         html += "<p>"+" ------------------------------------------------ "+"</p>"
                      html += "</div>"
                      html += "</td>"
                      html += "</tr>"


                  });

                  $("#RepItem").html(html);
              }

          })


      }


      function GetInfoByPage() {


          var materialInput = $("#materialInput").val();

          if (materialInput == "") {

              alert("物料信息不能为空");
              $("#materialInput").focus();
              return false;
          }

          materialInput = materialInput.toUpperCase();
          $("#materialInput").val(materialInput);


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/Material/QueryMaterialInfoByPage?material_name=" + materialInput + "&pageNumber=" + iPage + "&requestName=" + "selectMaterialInfo",


              success: function (ret) {

                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有符合条件的数据");
                      window.location.reload();
                  }
                  else {

                      var html = "";

                      ipageCount = ret[0].ipageCount;

                      console.log("总页数为" + ipageCount);

                      $("#pagetotal").text(ipageCount);

                      $(ret).each(function (key) {



                          html += "<tr>"
                          html += "<td>"
                          html += "<div>"
                          html += "<p>" + "序号:" + ret[key].iNum + "</p>"
                          html += "<p>" + "物料描述:" + ret[key].material_desc + "</p>"
                          html += "<p>" + "存放地点:" + ret[key].save_loc + "</p>"
                          html += "<p>" + "数量:" + ret[key].counnt + "</p>"
                          //                        html += "<p>" + " ------------------------------------------------ " + "</p>"
                          html += "</div>"
                          html += "</td>"
                          html += "</tr>"


                      });

                      $("#RepItem").html(html);
                      $("#pageMenu").show();
                      $("#mainmenudiv").hide();


                      ipageTemp = 1;
                      ipageIndex = ipageTemp;

                      $("#pageIndex").text(ipageIndex);
                  
                  }


//                  var html = "";

//                  ipageCount = ret[0].ipageCount;

//                  console.log("总页数为" + ipageCount);

//                  $("#pagetotal").text(ipageCount);

//                  $(ret).each(function (key) {



//                      html += "<tr>"
//                      html += "<td>"
//                      html += "<div>"
//                      html += "<p>" + "序号:" + ret[key].iNum + "</p>"
//                      html += "<p>" + "物料描述:" + ret[key].material_desc + "</p>"
//                      html += "<p>" + "存放地点:" + ret[key].save_loc + "</p>"
//                      html += "<p>" + "数量:" + ret[key].counnt + "</p>"
//                      //                        html += "<p>" + " ------------------------------------------------ " + "</p>"
//                      html += "</div>"
//                      html += "</td>"
//                      html += "</tr>"


//                  });

//                  $("#RepItem").html(html);



              }



              //                
              //    $("#datadiv").show();

          })


//          $("#pageMenu").show();
//          $("#mainmenudiv").hide();


//          ipageTemp = 1;
//          ipageIndex = ipageTemp;

//          $("#pageIndex").text(ipageIndex);
      }

      $("#nextBtn").click(function () {

          ipageTemp = ipageTemp + 1;

          if (ipageTemp > ipageCount) {

              alert("已经是最后一页");
              ipageTemp = ipageTemp - 1;
              return false;

          }


          var materialInput = $("#materialInput").val();

          if (materialInput == "") {

              alert("物料信息不能为空");
              $("#materialInput").focus();
              return false;
          }

          materialInput = materialInput.toUpperCase();
          $("#materialInput").val(materialInput);


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/Material/QueryMaterialInfoByPage?material_name=" + materialInput + "&pageNumber=" + ipageTemp + "&requestName=" + "selectMaterialInfo",


              success: function (ret) {

                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有符合条件的数据");
                      window.location.reload();
                  }

                  var html = "";



                  $(ret).each(function (key) {



                      html += "<tr>"
                      html += "<td>"
                      html += "<div>"
                      html += "<p>" + "序号:" + ret[key].iNum + "</p>"
                      html += "<p>" + "物料描述:" + ret[key].material_desc + "</p>"
                      html += "<p>" + "存放地点:" + ret[key].save_loc + "</p>"
                      html += "<p>" + "数量:" + ret[key].counnt + "</p>"
                      //                        html += "<p>" + " ------------------------------------------------ " + "</p>"
                      html += "</div>"
                      html += "</td>"
                      html += "</tr>"


                  });

                  $("#RepItem").html(html);
              }

          })


          ipageIndex = ipageTemp;

          $("#pageIndex").text(ipageIndex);

      });

      $("#previousBtn").click(function () {

          ipageTemp = ipageTemp - 1;

          if (ipageTemp < 1) {

              alert("已经是第一页");
              ipageTemp = ipageTemp + 1;
              return false;
          }


          var materialInput = $("#materialInput").val();

          if (materialInput == "") {

              alert("物料信息不能为空");
              $("#materialInput").focus();
              return false;
          }

          materialInput = materialInput.toUpperCase();
          $("#materialInput").val(materialInput);


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/Material/QueryMaterialInfoByPage?material_name=" + materialInput + "&pageNumber=" + ipageTemp + "&requestName=" + "selectMaterialInfo",


              success: function (ret) {

                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有符合条件的数据");
                      window.location.reload();
                  }

                  var html = "";


                  $(ret).each(function (key) {



                      html += "<tr>"
                      html += "<td>"
                      html += "<div>"
                      html += "<p>" + "序号:" + ret[key].iNum + "</p>"
                      html += "<p>" + "物料描述:" + ret[key].material_desc + "</p>"
                      html += "<p>" + "存放地点:" + ret[key].save_loc + "</p>"
                      html += "<p>" + "数量:" + ret[key].counnt + "</p>"
                      //                        html += "<p>" + " ------------------------------------------------ " + "</p>"
                      html += "</div>"
                      html += "</td>"
                      html += "</tr>"


                  });

                  $("#RepItem").html(html);
              }

          })


          ipageIndex = ipageTemp;

          $("#pageIndex").text(ipageIndex);

      });



      $("#searchBtn").click(function () {

          //            GetInfo();
          GetInfoByPage();

          //            $("#materialInput").val("");
          $("#materialInput").focus();

      });



      $("#rushBtn").click(function () {

          window.location.reload();

      });
