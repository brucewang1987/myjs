var irows = 0;


     $('#repitemTab tr td').click(
  function () {
      alert($(this).parent().parent().find("tr").index($(this).parent()[0])); //第几行
      //      alert($(this).index()); //第几列
  }
);

  function initrightbox() {

      $.ajax({

          type: "get",
          dataType: "json",
          url: "/WMSbusiness/WMSinitdata?requestName=" + "selectTruckBJinfo",

          success: function (ret) {

              var str = JSON.stringify(ret);

              if (str == "[]") {
                  console.log("没有需要备件的数据");

              }
              var html = "";

              html += "<tr>";
              html += "<td>车号</td>"; //0
              html += "<td>操作</td>"; //1
              html += "</tr>";
              var i = 1;
              $(ret).each(function (key) {

                  html += "<tr>";
                  html += "<td>" + ret[key].truck_no + "</td>"//0
                  html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "查询维修项目 "
                      + "' onclick = '" + "WMSQueryItem(" + i + ")" + "'" + "/>" + "</td>"//8
                  html += "</tr>";
                  console.log(i);
                  i++;
                 

              });
              $("#WMSTrucktab").html(html);

          },
          error: function (XmlHttpRequest, textStatus, errorThrown) {
              alert(XmlHttpRequest.responseText);
          }


      })


  }
  initrightbox();


  function WMSQueryItem(i) {

      

      var truck_no = $("#WMSTrucktab").find("tr").eq(i).find("td").eq(0).text();
      console.log(truck_no);
      $("#truck_no").val(truck_no);
      selectRepitemInfo();




  }




  function SelectWMSBjiteminfoBytruckno() {

      var truck_no = $("#truck_no").val();

      $.ajax({

          type: "get",
          dataType: "json",
          url: "/TruckRepair/WMSSelectBJitemInfo?truck_no=" + truck_no + "&requestName=" + "WMSSelectBJitemInfoBYtruckno",

          success: function (ret) {


              console.log("已添加的备件" + ret);

              var str = JSON.stringify(ret);

              if (str == "[]") {
                  alert("没有数据");
                  window.location.reload();
              }

              var html = "";

              html += "<tr>";
              html += "<td>备件名称</td>"; //0
              html += "<td>备件数量</td>"; //1
              html += "<td>价格</td>"; //2
              html += "</tr>";

              $(ret).each(function (key) {

                  html += "<tr>";
                  html += "<td>" + ret[key].BJname + "</td>"//0
                  html += "<td>" + ret[key].BJcount + "</td>"//1
                  html += "<td>" + ret[key].price + "</td>"//2
                  html += "</tr>";
              });

              $("#WMSitemtab").html(html);

          },
          error: function (XmlHttpRequest, textStatus, errorThrown) {
              alert(XmlHttpRequest.responseText);
          }



      })


  }


  $("#btnBJitem").click(function () {


      SelectWMSBjiteminfoBytruckno();

  });


     function initBJinfo() {

         $("#BJname").val("");
         $("#BJcount").val("");
         $("#price").val("");
         $("#item_id").val("");
//         $("#rep_id").val("");
     }

     function init() {

         var url = location.search; //获取url中"?"符后的字串
         if (url.indexOf("?") != -1) {    //判断是否有参数
             var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
             strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
             //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
         }
         var username = strs[1];

         console.log(username);

         $("#span_username").text(username);

         $("#divbody").hide();

     }

     init();


     function WMSDOBJ(i) {

         var rep_id = $("#repitemTab").find("tr").eq(i).find("td").eq(4).text();
         var item_id = $("#repitemTab").find("tr").eq(i).find("td").eq(5).text();

         irows = i;

         $("#repitemTab").find('tr').eq(irows).css('background-color', 'red');

         $("#rep_id").val(rep_id);
         $("#item_id").val(item_id);

         console.log("rep_id:" + rep_id + ",item_id:" + item_id);

         $("#divbody").show();




     }

     function SelectWMSBjiteminfo() {

         var rep_id = $("#rep_id").val();

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/TruckRepair/WMSSelectBJitemInfo?rep_id=" + rep_id + "&requestName=" + "WMSSelectBJitemInfo",

             success: function (ret) {


                 console.log("已添加的备件"+ret);

                 var str = JSON.stringify(ret);

                 if (str == "[]") {
                     alert("没有备件数据");
//                     window.location.reload();
                 }

                 var html = "";

                 html += "<tr>";
                 html += "<td>备件名称</td>"; //0
                 html += "<td>备件数量</td>"; //1
                 html += "<td>价格</td>"; //2
                 html += "</tr>";

                 $(ret).each(function (key) {

                     html += "<tr>";
                     html += "<td>" + ret[key].BJname + "</td>"//0
                     html += "<td>" + ret[key].BJcount + "</td>"//1
                     html += "<td>" + ret[key].price + "</td>"//2
                     html += "</tr>";
                 });

                 $("#WMSitemtab").html(html);

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }



         })


     }


     $("#btnAdd").click(function () {

         addWMSinfo();


     });

     function addWMSinfo() {

         var BJname = $("#BJname").val();
         var BJcount = $("#BJcount").val();
         var price = $("#price").val();
         var rep_id = $("#rep_id").val();
         var item_id = $("#item_id").val();
         var create_user = $("#span_username").text();


         if (BJname == "") {

             alert("请录入备件");
             $("#BJname").focus();
             return false;

         }

         if (BJcount == "") {

             alert("请录入备件数量");
             $("#BJcount").focus();
             return false;

         }
         var regu = /^[0-9]+\.?[0-9]*$/;

         if (!regu.test(BJcount)) {

             alert("请录入正确的数字");
             $("#BJcount").focus();
             return false;
         }

         if (price == "") {

             alert("请录入金额");
             $("#price").focus();
             return false;
         }


         if (!regu.test(price)) {

             alert("请录入正确的数字");
             $("#price").focus();
             return false;
         }


         $.ajax({

             type: "get",
             dataType: "json",
             url: "/TruckRepair/AddWMSinfo?rep_id=" + rep_id + "&item_id=" + item_id + "&BJname=" + BJname + "&BJcount=" + BJcount
            + "&price=" + price + "&create_user=" + create_user + "&requestName=" + "AddWMSBJinfo"
            ,

             success: function (ret) {

                 var result = ret.is_success;
                 var err = ret.err;
                 if (result == "OK") {

                     alert("新增成功");
                     SelectWMSBjiteminfo();

                     initBJinfo();
                     $("#divbody").hide();
                     selectRepitemInfo();
                     //                     $("#repitemTab").find('tr').eq(irows).css('background-color', 'red');

                     irows = 0;
                 }
                 else {

                     alert("新增失败,原因是" + err);

                 }


             }

         })


     }

     function selectRepitemInfo() {


         var html2 = "";
         $("#WMSitemtab").html("");

         var truck_no = $("#truck_no").val();
         if (truck_no == "") {

             alert("请录入车号");
             return false;

         }

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/TruckRepair/WMSSelectRepitem?truck_no=" + truck_no + "&requestName=" + "WMSSelectRepitem",

             success: function (ret) {


                 console.log(ret);

                 var str = JSON.stringify(ret);

                 if (str == "[]") {
                     alert("没有备件修理数据");
                     // return false;
                     initrightbox();
                     // window.location.reload();
                     var html2 = "";
                     $("#repitemTab").html(html2);
                     return false;
                 }

                 var html = "";
                 var i = 1;

                 html += "<tr>";
                 html += "<td>维修代码</td>"; //0
                 html += "<td>备件名称</td>"; //1
                 html += "<td>备件数量</td>"; //2
                 html += "<td>是否外修</td>"; //3
                 html += "<td>操作</td>"; //4
                 html += "</tr>";

                 $(ret).each(function (key) {
                     html += "<tr>";
                     html += "<td>" + ret[key].item_code + "</td>"//0
                     html += "<td>" + ret[key].BJname + "</td>"//1
                     html += "<td>" + ret[key].BJcount + "</td>"//2
                     html += "<td>" + ret[key].is_outRepair + "</td>"//3
                     html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].rep_id + "</td>"//4
                     html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].item_id + "</td>"//5
                     html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "填写备件 "
                      + "' onclick = '" + "WMSDOBJ(" + i + ")" + "'" + "/>" + "</td>"//8
                     html += "</tr>";
                     i++;

                 });
                 $("#repitemTab").html(html);

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }

         })

     }
