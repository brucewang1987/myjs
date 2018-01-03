 function QueryInfo() {

               var startDate = $("#startDateID").val();

               if (startDate == "") {

                   alert("请输入记录开始时间");
                   return false;


               }


               var time1 = startDate.substr(0, 10);
               var time2 = startDate.substr(11, 5);

               var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


               var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):([0-5]\d{1})$/);

               if (r == null) {
                   alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00");
                   return false;
               }
               if (r2 == null) {
                   alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00");
                   return false;

               }






               var endDate = $("#endDateID").val();



               if (endDate == "") {

                   alert("请输入记录结束时间");
                   return false;
               
               }
               time1 = endDate.substr(0, 10);
               time2 = endDate.substr(11, 5);


                r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


                r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):([0-5]\d{1})$/);

               if (r == null) {
                   alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00");
                   return false;
               }
               if (r2 == null) {
                   alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00");
                   return false;

               }



               $.ajax({


                   type: "get",
                   dataType: "json",
                   url: "RFjianhuHandler.ashx?val1=" + startDate + "&val2=" + endDate + "&val8=" + "QueryRfinfoBYPtiDate",

                   success: function (ret) {

                       var str = JSON.stringify(ret.dtByptidate);



                       if (str == "[]") {
                           alert("没有数据");
                           return false;
                       }

                       var _json = eval(ret.dtByptidate);

                       var html = "";
                       html += "<tr>";
                       html += "<td>箱号</td>";
                       html += "<td>船名</td>";
                       html += "<td>航次</td>";
                       html += "<td>进场温度</td>";
                       html += "<td>通风口</td>";
                       html += "<td>进场时间</td>";
                       html += "<td>记录时间</td>";
                       html += "<td>记录温度</td>";

                       html += "</tr>";


                        $(_json).each(function (key) {

                            html += "<tr>";
                            html += "<td>" + _json[key].ctn_no + "</td>";
                            html += "<td>" + _json[key].vol + "</td>";
                            html += "<td>" + _json[key].vsl + "</td>";
                            html += "<td>" + _json[key].SET_Temp + "</td>";
                            html += "<td>" + _json[key].YENT + "</td>";
                            html += "<td>" + _json[key].INTO_PORT + "</td>";
                            html += "<td>" + _json[key].pti_date + "</td>";
                            html += "<td>" + _json[key].pti_temperature + "</td>";



                            html += "</tr>";

                        });
                        $("#RFInfotable").html(html);

                    },
                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                        alert(XmlHttpRequest.responseText);
                    }


               })



            }

            function exportexcel() {
                $("#RFInfotable").table2excel({
                    exclude: ".noExl",
                    name: "Excel Document Name",
                    filename: "myFileName",
                    exclude_img: true,
                    exclude_links: true,
                    exclude_inputs: true
                });
            }
