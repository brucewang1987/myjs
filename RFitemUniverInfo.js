function QueryPtidate() {

          var ctn_no = $("#ctn_no_ID").val();

          if (ctn_no == "") {

              alert("请输入箱号");
              return false;
          }

          var vol = $("#volID").val();

          if (vol == "") {

              alert("请输入船名");
              return false;
          
          }

          var vsl = $("#vsl_id").val();

          if (vsl == "") {

              alert("请输入航次");
              return false;
          }


          var dateIN = $("#ptiDateID").val();

          if (dateIN == "") {

              alert("请输入进场日期");
              return false;
          
          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "RFjianhuHandler.ashx?val1=" + ctn_no + "&val2=" + vol + "&val3="
             + vsl + "&val4=" + dateIN + "&val8=" + "RFItemUniver",

              success: function (ret) {


                  var str = JSON.stringify(ret.dtRFUniver);
                  if (str == "[]") {
                      alert("没有数据");
                      return false;
                  }

                  var html = "";
                  html += "<tr>";

                  var _json = eval(ret.dtRFUniver);


//                  for (var i = 0, l = _json.length; i < l; i++) {
//                      for (var key in _json[i]) {
//                          alert(key + ':' + _json[i][key]);
//                      }
                  //                  }



                  for (var i = 0, l = _json.length; i < l; i++) {
                      for (var key in _json[i]) {
                         
                          html += "<td>" + key+"</td>"

                      }
                  }

                  html += "</tr>";


                  html += "<tr>";


                                    for (var i = 0, l = _json.length; i < l; i++) {
                                        for (var key in _json[i]) {
                                            

                                            html += "<td>" + _json[i][key]+"</td>"

                                        }
                                    }

                                    html += "</tr>";




                  $("#RFInfotableByptidate").html(html);

              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }


          })




      }


      function exportexcel() {
          $("#RFInfotableByptidate").table2excel({
              exclude: ".noExl",
              name: "Excel Document Name",
              filename: "myFileName",
              exclude_img: true,
              exclude_links: true,
              exclude_inputs: true
          });
      }
