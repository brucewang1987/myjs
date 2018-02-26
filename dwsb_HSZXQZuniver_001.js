  function exportexcel() {

           if ($("table tr").length > 1) {

               $("#QZUniverinfoTable").table2excel({
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


       function QueryQZUniverInfo() {

           var QZStartDate = $("#QZStartDate").val();

           if (QZStartDate == "") {

               alert("请选择起租开始日期");
               return false;

           }


           var r = QZStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }


           var QZEndDate = $("#QZEndDate").val();

           if (QZEndDate == "") {

               alert("请选择起租结束日期");
               return false;

           }


           r = QZEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }

           var ctn_no = $("#ctn_no").val();


           $.ajax({

               type: "get",
               dataType: "json",
               url: "/QZInfo/QZBusiness?val1=" + QZStartDate + "&val2=" + QZEndDate + "&val3=" + ctn_no + "&val88=" + "QueryQzUniverinfo",
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
                   html += "<td style = " + "'" + "display:none;" + "'" + ">" + "ctn_id" + "</td>"//0
                   html += "<td>箱号</td>"; //1
                   html += "<td>起租日期</td>"; //2
                   html += "<td>起租号</td>"; //3
                   html += "<td>机型型号</td>"; //4
                   html += "<td>制造日期</td>"; //5
                   html += "<td>起租地点</td>"; //6
                   html += "<td>日租金币种</td>"; //7
                   html += "<td>日租金</td>"; //8
                   html += "<td>起租装卸费币种</td>"; //9
                   html += "<td>起租装卸费</td>"; //10
                   html += "<td>起租pti检验费币种</td>"; //11
                   html += "<td>起租pti检验费</td>"; //12
                   html += "<td>起租运输费币种</td>"; //13
                   html += "<td>起租运输费</td>"; //14
                   html += "<td>起租录入时间</td>"; //15
                   html += "<td>起租修改时间</td>"; //16
                   html += "<td>起租美金总费用</td>"//17
                   html += "<td>起租人民币总费用</td>"//18
                   html += "<td>起租汇率</td>"//19
                   html += "<td>操作</td>"//20
                   html += "</tr>";


                   $(_json).each(function (key) {
                       html += "<tr>";
                       html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].ctn_id + "</td>"//0
                       html += "<td>" + _json[key].ctn_no + "</td>";  //1
                       html += "<td>" + _json[key].QZDate + "</td>"; //2
                       html += "<td>" + _json[key].QZNo + "</td>"; //3
                       html += "<td>" + _json[key].MachineNo + "</td>"; //4
                       html += "<td>" + _json[key].MakeDate + "</td>"; //5
                       html += "<td>" + _json[key].QZAddress + "</td>"; //6
                       html += "<td>" + _json[key].RentDailyCoin + "</td>"; //7
                       html += "<td>" + _json[key].RentDaily + "</td>"; //8
                       html += "<td>" + _json[key].QZLoadFeeCoin + "</td>"; //9
                       html += "<td>" + _json[key].QZLoadFee + "</td>"; //10
                       html += "<td>" + _json[key].QZPtiFeeCoin + "</td>"; //11
                       html += "<td>" + _json[key].QZPtiFee + "</td>"; //12
                       html += "<td>" + _json[key].QZTranFeeCoin + "</td>"; //13
                       html += "<td>" + _json[key].QZTranFee + "</td>"; //14
                       html += "<td>" + _json[key].QZInputDate + "</td>"; //15
                       html += "<td>" + _json[key].QZChangeDate + "</td>"; //16
                       html += "<td>" + _json[key].QZTotalUSD + "</td>"; //17
                       html += "<td>" + _json[key].QZTotalRMB + "</td>"; //18
                       html += "<td>" + _json[key].QZRate + "</td>"; //19
                       html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "结算"
                      + "' onclick = '" + "return  Settlement(" + i + ")" + "'" + "/>" + "</td>";
                       html += "</tr>";
                       i++;
                   });
                   $("#QZUniverinfoTable").html(html);

               },
               error: function (XmlHttpRequest, textStatus, errorThrown) {
                   alert(XmlHttpRequest.responseText);
               }

           })


       }

       function Settlement(i) {



           var QZRateTemp = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(19).text();

           if (QZRateTemp != "1") {

               if (!window.confirm('是否需要重置汇率')) {

                   return false;
               }
           
           }




           var QZRate = prompt("请输入汇率", "6.32");


           if (QZRate != null) {


               var QZLoadFeeCoin = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(9).text();



               var QZLoadFee = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(10).text();

               QZLoadFee = QZLoadFee * 1.00;

               var QZPtiFeeCoin = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(11).text();

               var QZPtiFee = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(12).text();

               QZPtiFee = QZPtiFee * 1.00;

               var QZTranFeeCoin = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(13).text();

               var QZTranFee = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(14).text();

               QZTranFee = QZTranFee * 1.00;

               var totalUSD = 0.00;
               var totalRMB = 0.00;


               if (QZLoadFeeCoin == "USD") {

                   totalUSD = totalUSD + QZLoadFee;
                   totalRMB = totalRMB + (QZLoadFee * QZRate);


               }

               if (QZLoadFeeCoin == "RMB") {

                   totalUSD = totalUSD + (QZLoadFee / QZRate);
                   totalRMB = totalRMB + QZLoadFee;


               }

               if (QZPtiFeeCoin == "USD") {

                   totalUSD = totalUSD + QZPtiFee;
                   totalRMB = totalRMB + (QZPtiFee * QZRate);

               }

               if (QZPtiFeeCoin == "RMB") {

                   totalUSD = totalUSD + (QZPtiFee / QZRate);
                   totalRMB = totalRMB + QZPtiFee;

               }

               if (QZTranFeeCoin == "USD") {

                   totalUSD = totalUSD + QZTranFee;
                   totalRMB = totalRMB + (QZTranFee * QZRate);

               }

               if (QZTranFeeCoin == "RMB") {

                   totalUSD = totalUSD + (QZTranFee / QZRate);
                   totalRMB = totalRMB + QZTranFee;

               }

               var ctn_id = $("#QZUniverinfoTable").find("tr").eq(i).find("td").eq(0).text();



               $.ajax({

                   type: "get",
                   dataType: "json",
                   url: "/QZInfo/QZBusiness?val1=" + totalUSD + "&val2=" + totalRMB
               + "&val3=" + ctn_id + "&val4=" + QZRate + "&val88=" + "QZInfoSettlement",


                   success: function (ret) {

                       var map = eval('(' + ret + ')');
                       var response = JSON.stringify(map.Response);

                       alert(response);

                       QueryQZUniverInfo();


                   }



               })
           
           
           }

          

       
       
       
       
       }
