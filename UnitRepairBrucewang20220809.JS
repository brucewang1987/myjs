 function init() {

             $("#ship_corp").attr("disabled", true);
             $("#box_status").attr("disabled", true);
             $("#seat").attr("disabled", true);
             $("#in_edi_date").attr("disabled", true);
             $("#ctn_make_date").attr("disabled", true);
             $("#nosee").hide();
  $("#box2").hide();

         }

         init();


         function GetRequest() {
             var url = location.search; //获取url中"?"符后的字串
             if (url.indexOf("?") != -1) {    //判断是否有参数
                 var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                 strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                 //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
             }
             var username = strs[1];

             $("#span_username").text(username);

         }
         GetRequest();


         $("#btnRush").click(function () {

             window.location.reload();


         });

         function GetRepairMainInfo() {

             var ctn_no = $("#ctn_no").val();

             ctn_no = ctn_no.toUpperCase();

             $("#ctn_no").val(ctn_no);

             if (ctn_no == "") {

                 alert("箱号不能为空");
                 $("#ctn_no").focus();
                 return false;

             }

             $.ajax({

                 type: "get",
                 dataType: "json",
                 url: "/Unitbusiness/QueryRepairMainInfo?ctn_no=" + ctn_no + "&requestName=" + "selectMainRepInfo",

                 success: function (ret) {

                     var str = JSON.stringify(ret);
                     if (str == "[]") {
                         alert("没有符合条件的数据");
                         window.location.reload();
                     }

                     $(ret).each(function (key) {

                         $("#ship_corp").val(ret[key].ope);
                         $("#ctn_id").val(ret[key].ctn_id);
                         $("#ST").val(ret[key].ST);
                         $("#seat").val(ret[key].seat);
                         $("#in_edi_date").val(ret[key].in_edi_date);
                         $("#ctn_make_date").val(ret[key].ctn_make_date);
                         $("#checkman").val(ret[key].checkman);
                         $("#manhour").val(ret[key].manhour);


                     });


                     SelectRepItem(ctn_no);

                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }

             })


         }

         function SelectRepItem(ctn_no) {

             $.ajax({

                 type: "get",
                 dataType: "json",
                 url: "/Unitbusiness/QueryRepItemInfo?ctn_no=" + ctn_no + "&requestName=" + "selectItemRepInfo",

                 success: function (ret) {

                     var str = JSON.stringify(ret);
                     if (str == "[]") {
                         alert("没有派工数据");

                     }

                     var iNum = 0;
                     var iNum2 = 1;

                     var html = "";
                     var tempcolor = "";

                     $(ret).each(function (key) {

                         //                          html += "<div>";
                         //                          html += "<p>" + iNum + "</p>"
                         //                          html += "<p>" + "部位:" + ret[key].part_code + "</p>"
                         //                          html += "<p>" + "位置:" + ret[key].location_code + "</p>"
                         //                          html += "<p>" + "修理代码:" + ret[key].repair_code + "</p>"
                         //                          html += "<p>" + "数量:" + ret[key].quantity + "</p>"
                         //                          html += "<p>" + "条目描述:" + ret[key].chn_description + "</p>"
                         //                          html += "<p>" + "----------------------------------------" + "</p>"
                         //                          html += "</div>"


                         if (ret[key].repair_status == "未修") {


                             tempcolor = "red";

                         }
                         else {

                             tempcolor = "Yellow  ";

                         }

                         html += "<tr>"
                         html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].item_id + "</td>"//0
                         html += "<td>"
                         html += "<div style=" + "'" + "background-color:" + tempcolor + "'" + ">";
                         html += "<p>" + iNum2 + "</p>"
                         html += "<p>" + "部位:" + ret[key].part_code + "</p>"
                         html += "<p>" + "位置:" + ret[key].location_code + "</p>"
                         html += "<p>" + "修理代码:" + ret[key].repair_code + "</p>"
                         html += "<p>" + "数量:" + ret[key].quantity + "</p>"
                         html += "<p>" + "条目描述:" + ret[key].chn_description + "</p>"
                         html += "<p>" + "修理状态:" + ret[key].repair_status + "</p>"
                         html += "<p>" + "修理人:" + ret[key].worker + "</p>"
                         html += "<p>" + "修理时间:" + ret[key].repair_date + "</p>"
                         html += "<input type = " + "'" + "button" + "' value = " + "'" + "修完"
                      + "' onclick = '" + "itemComp(" + iNum + ")" + "'" + "/>"
                         html += "<p>" + "----------------------------------------" + "</p>"
                         html += "</div>"
                         html += "</td>"
//                         html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "修完"
//                      + "' onclick = '" + "itemComp(" + iNum + ")" + "'" + "/>" + "</td>"//8

                         html += "</tr>"

                         iNum++;
                         iNum2++;
                     });

                     $("#RepItem").html(html);

                 }


             })



         }

         function itemComp(iNum) {


             var item_id = $("#RepItem").find("tr").eq(iNum).find("td").eq(0).text();
             var ctn_id = $("#ctn_id").val();
             var worker = $("#span_username").text();

             console.log("ctn_id:" + ctn_id + "item_id:" + item_id);

             if (!window.confirm('是否确认修完')) {

                 return false;

             }


             $.ajax({


                 type: "get",
                 dataType: "json",
                 url: "/Unitbusiness/UnitRepItemComp?ctn_id=" + ctn_id + "&item_id=" + item_id + "&worker=" + worker +
             "&requestName=" + "RepItemComp",


                 success: function (ret) {

                     var result = ret.strResult;
                     if (result == "ok") {

                         alert("提交成功");
                         GetRepairMainInfo();

                     }
                     else {

                         alert("提交失败");
                     }

                 }

             })




         }


         $("#btnSelect").click(function () {


             GetRepairMainInfo();

         });
     

 function showbox2() {

              var ctn_id = $("#ctn_id").val();
              if (ctn_id == "") {


                  alert("请先查询数据");
                  return false;

              }
              else {

                  $("#box2").show();
              
              }
             
          }


          $("#btnComp").click(function () {

              showbox2();

          });

          $("#btnCancel").click(function () {

              $("#box2").hide();

          });
