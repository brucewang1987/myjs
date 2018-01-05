 function QueryGateIN() {

           var CTNR_NO = $("#CTNR_NOID").val();

           var vol = $("#volID").val();

           var vsl = $("#vslId").val();



  

           var startDate = $("#RFStartDate_ID").val();

           if (startDate == "") {
               alert("请选择开始时间");
               return false;

           }

           var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }


           var endDate = $("#RFEndDate_ID").val();
           if (endDate == "") {

               alert("请选择结束时间");
               return false;
           }

           var r2 = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r2 == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }



           $.ajax({

               type: "get",
               dataType: "json",
               url: "RFjianhuHandler.ashx?val1=" + startDate + "&val2=" + endDate +
                "&val3=" + CTNR_NO + "&val4=" + vol + "&val5=" + vsl + "&val8=" + "RFInfoInout",
               success: function (ret) {

//                   alert(ret);

                   var str = JSON.stringify(ret.dtByGateIn);
                   if (str == "[]") {
                       alert("没有数据");
                       return false;
                   }

                   var _json = eval(ret.dtByGateIn);

                   var html = "";
                   html += "<tr>";
                   html += "<td>箱号</td>"
                   html += "<td>营运人</td>"
                   html += "<td>通风口</td>"
                   html +="<td>尺寸</td>"
                   html +="<td>箱型</td>"
                   html += "<td>进场时间</td>";
                   html += "<td>船名</td>";
                   html += "<td>航次</td>";
                   html += "<td>进场设定温度</td>";
                   html += "<td>出场时间</td>";
                   html += "</tr>"


                   $(_json).each(function (key) {

                       html += "<tr>";
                       html += "<td>" + _json[key].CTNR_NO + "</td>";
                       html += "<td>" + _json[key].operator + "</td>";
                       html += "<td>" + _json[key].YENT + "</td>";
                       html += "<td>" + _json[key].ctn_size + "</td>";
                       html += "<td>" + _json[key].ctn_type + "</td>";
                       html += "<td>" + _json[key].INTO_PORT + "</td>";
                       html += "<td>" + _json[key].vol + "</td>";
                       html += "<td>" + _json[key].vsl + "</td>";
                       html += "<td>" + _json[key].SET_Temp + "</td>";
                       html += "<td>" + _json[key].OUT_PORT + "</td>";

                       html += "</tr>";

                   });
                   $("#RFInfotableBygateIN").html(html);
                   



               },
               error: function (XmlHttpRequest, textStatus, errorThrown) {
                   alert(XmlHttpRequest.responseText);
               }





           })


       }


       function exportexcel() {
           $("#RFInfotableBygateIN").table2excel({
               exclude: ".noExl",
               name: "Excel Document Name",
               filename: "myFileName",
               exclude_img: true,
               exclude_links: true,
               exclude_inputs: true
           });
       }



