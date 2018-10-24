   $("#btnTZSettlePL").click(function () {

        if ($("table tr").length < 1)
        {
        alert("无数据操作");
        }
      else
      {
      TZSettlePL();
      }
      
      
           


       });

       function TZSettlePL() {


           var TZStartDate = $("#TZStartDate").val();

           var r = TZStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }

           var TZEndDate = $("#TZEndDate").val();
           r = TZEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }

           var QZDate = prompt("请输入起租日期", "2016-01-01");


           r = QZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }

          

           var TZRate = prompt("请输入退租结算汇率", "6.25");

           var regu = /^[0-9]+\.?[0-9]*$/;

           if (!regu.test(TZRate)) {

               alert("请输入正确的数字");


           }

           $.ajax({
           
           type: "get",
               dataType: "json",
               url: "/TZInfo/TZBusiness?val1=" + TZStartDate + "&val2=" + TZEndDate + "&val3=" + TZRate + "&val4="
               + QZDate + "&val88=" + "SettleTZPL",

               success: function (ret) {

                   var map = eval('(' + ret + ')');
                   var response = JSON.stringify(map.Response);

                   alert(response);

                   QueryTZUniverInfo();

               }
           
           
           
           })
       


       }




       $("#btnOK").click(function () {


           QueryTZUniverInfo();



       });


       function QueryTZUniverInfo() {


           var ctn_no = $("#ctn_no").val();

           var TZStartDate = $("#TZStartDate").val();

           if (TZStartDate == "") {

               alert("请选择退租开始日期");
               return false;

           }


           var r = TZStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }

           var Start = new Date(TZStartDate.replace("-", "/").replace("-", "/"));


           var TZEndDate = $("#TZEndDate").val();

           if (TZEndDate == "") {

               alert("请选择退租结束日期");
               return false;

           }


           r = TZEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               return false;
           }

           var End = new Date(TZEndDate.replace("-", "/").replace("-", "/"));

           if (End < Start) {

               alert("结束日期不可小于开始日期");
               $("#TZEndDate").focus();
               return false;

           }



           $.ajax({

               type: "get",
               dataType: "json",
               url: "/TZInfo/TZBusiness?val1=" + TZStartDate + "&val2=" + TZEndDate + "&val3=" + ctn_no + "&val88=" + "QueryUniverTZInfo",

               success: function (ret) {


                   var map = eval('(' + ret + ')');

                   var str = JSON.stringify(map.dt);
                   if (str == "[]") {
                       alert("没有数据");
                       return false;
                   }

                   var _json = eval(map.dt);
                   var html = "";
                   var i = 1;

                   html += "<tr>";
                   html += "<td style = " + "'" + "display:none;" + "'" + ">" + "ctn_id" + "</td>"//0
                   html += "<td>箱号</td>"; //1
                   html += "<td>起租日期</td>"; //2
                   html += "<td>日租金币种</td>"; //3
                   html += "<td>日租金金额</td>"; //4
                   html += "<td>退租日期</td>"; //5
                   html += "<td>租期</td>"; //6
                   html += "<td>退租号</td>"; //7
                   html += "<td>退租地点</td>"; //8
                   html += "<td>退租装卸费币种</td>"; //9
                   html += "<td>退租装卸费</td>"; //10
                   html += "<td>退租pti费币种</td>"; //11
                   html += "<td>退租pti费</td>"; //12
                   html += "<td>退租运输费币种</td>"; //13
                   html += "<td>退租运输费</td>"; //14
                   html += "<td>退租箱体修理费币种</td>"; //15
                   html += "<td>退租箱体修理费</td>"; //16
                   html += "<td>退租机组修理费币种</td>"; //17
                   html += "<td>退租机组修理费</td>"; //18
                   html += "<td>退租录入日期</td>"; //19
                   html += "<td>退租修改日期</td>"; //20
                   html += "<td>租金汇率</td>"; //21
                   html += "<td>人民币总租金</td>"; //22
                   html += "<td>美元总租金</td>"; //23
                   html += "<td>退租美元总费用</td>"; //24
                   html += "<td>退租人民币总费用</td>"; //25
                   html += "<td>退租汇率</td>"; //26
                   html += "<td>操作</td>"; //27
                   html += "</tr>"


                   $(_json).each(function (key) {


                       html += "<tr>";
                       html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].ctn_id + "</td>"//0
                       html += "<td>" + _json[key].ctn_no + "</td>"; //1
                       html += "<td>" + _json[key].QZDate + "</td>"; //2
                       html += "<td>" + _json[key].RentDailyCoin + "</td>"; //3
                       html += "<td>" + _json[key].RentDaily + "</td>"; //4
                       html += "<td>" + _json[key].TZDate + "</td>"; //5
                       html += "<td>" + _json[key].RentDays + "</td>"; //6
                       html += "<td>" + _json[key].TZNo + "</td>"; //7
                       html += "<td>" + _json[key].TZAddress + "</td>"; //8
                       html += "<td>" + _json[key].TZLoadFeeCoin + "</td>"; //9
                       html += "<td>" + _json[key].TZLoadFee + "</td>"; //10
                       html += "<td>" + _json[key].TZPtiFeeCoin + "</td>"; //11
                       html += "<td>" + _json[key].TZPtiFee + "</td>"; //12
                       html += "<td>" + _json[key].TZTranFeeCoin + "</td>"; //13
                       html += "<td>" + _json[key].TZTranFee + "</td>"; //14
                       html += "<td>" + _json[key].TZXTFeeCoin + "</td>"; //15
                       html += "<td>" + _json[key].TZXTFee + "</td>"; //16
                       html += "<td>" + _json[key].TZJZFeeCoin + "</td>"; //17
                       html += "<td>" + _json[key].TZJZFee + "</td>"; //18
                       html += "<td>" + _json[key].TZinputDate + "</td>"; //19
                       html += "<td>" + _json[key].TZChangeDate + "</td>"; //20
                       html += "<td>" + _json[key].Rate + "</td>"; //21
                       html += "<td>" + _json[key].RentTotalRMB + "</td>"; //22
                       html += "<td>" + _json[key].RentTotalUSD + "</td>"; //23
                       html += "<td>" + _json[key].TZTotalUSD + "</td>"; //24
                       html += "<td>" + _json[key].TZTotalRMB + "</td>"; //25
                       html += "<td>" + _json[key].TZRate + "</td>"; //26
                       html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "结算"
                      + "' onclick = '" + "return  Settlement(" + i + ")" + "'" + "/>" + "</td>"; //27
                       html += "</tr>";
                       i++;

                   });
                   $("#TZUniverinfoTable").html(html);


               },
               error: function (XmlHttpRequest, textStatus, errorThrown) {
                   alert(XmlHttpRequest.responseText);
               }


           })


       }


       $("#btnDownLoad").click(function () {


           exportexcel();



       });


       function exportexcel() {

           if ($("table tr").length > 1) {

               $("#TZUniverinfoTable").table2excel({
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


       function Settlement(i) {

           var TZRateTemp = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(26).text();

           if (TZRateTemp != "1") {

               if (!window.confirm('是否需要重置汇率')) {

                   return false;
               }

           }

           var TZRate = prompt("请输入汇率", "6.32");


           if (TZRate != null) {


               var ctn_id = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(0).text();

               var TZLoadFeeCoin = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(9).text();
               var TZLoadFee = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(10).text();
               TZLoadFee = TZLoadFee * 1.00;
               var TZPtiFeeCoin = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(11).text();
               var TZPtiFee = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(12).text();
               TZPtiFee = TZPtiFee * 1.00;
               var TZTranFeeCoin = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(13).text();
               var TZTranFee = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(14).text();
               TZTranFee = TZTranFee * 1.00;
               var TZXTFeeCoin = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(15).text();
               var TZXTFee = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(16).text();
               TZXTFee = TZXTFee * 1.00;
               var TZJZFeeCoin = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(17).text();
               var TZJZFee = $("#TZUniverinfoTable").find("tr").eq(i).find("td").eq(18).text();
               TZJZFee = TZJZFee * 1.00;

               var totalUSD = 0.00;
               var totalRMB = 0.00;



               if (TZLoadFeeCoin == "USD") {

                   totalUSD = totalUSD + TZLoadFee;
                   totalRMB = totalRMB + (TZLoadFee * TZRate);


               }

               if (TZLoadFeeCoin == "RMB") {


                   totalUSD = totalUSD + (TZLoadFee / TZRate);
                   totalRMB = totalRMB + TZLoadFee;

               }

               if (TZPtiFeeCoin == "USD") {

                   totalUSD = totalUSD + TZPtiFee;
                   totalRMB = totalRMB + (TZPtiFee * TZRate);


               }

               if (TZPtiFeeCoin == "RMB") {


                   totalUSD = totalUSD + (TZPtiFee / TZRate);
                   totalRMB = totalRMB + TZPtiFee;

               }

               if (TZTranFeeCoin == "USD") {

                   totalUSD = totalUSD + TZTranFee;
                   totalRMB = totalRMB + (TZTranFee * TZRate);


               }

               if (TZTranFeeCoin == "RMB") {


                   totalUSD = totalUSD + (TZTranFee / TZRate);
                   totalRMB = totalRMB + TZTranFee;

               }


               if (TZXTFeeCoin == "USD") {

                   totalUSD = totalUSD + TZXTFee;
                   totalRMB = totalRMB + (TZXTFee * TZRate);


               }

               if (TZXTFeeCoin == "RMB") {


                   totalUSD = totalUSD + (TZXTFee / TZRate);
                   totalRMB = totalRMB + TZXTFee;

               }

               if (TZJZFeeCoin == "USD") {

                   totalUSD = totalUSD + TZJZFee;
                   totalRMB = totalRMB + (TZJZFee * TZRate);


               }

               if (TZJZFeeCoin == "RMB") {


                   totalUSD = totalUSD + (TZJZFee / TZRate);
                   totalRMB = totalRMB + TZJZFee;

               }



               $.ajax({

                   type: "get",
                   dataType: "json",
                   url: "/TZInfo/TZBusiness?val1=" + totalUSD + "&val2=" + totalRMB
               + "&val3=" + ctn_id + "&val4=" + TZRate + "&val88=" + "TZInfoSettlement",

                   success: function (ret) {

                       var map = eval('(' + ret + ')');
                       var response = JSON.stringify(map.Response);

                       alert(response);

                       QueryTZUniverInfo();


                   }


               })



           }



       }
