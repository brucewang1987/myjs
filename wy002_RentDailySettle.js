 $("#btnOK").click(function () {


           QZrentQuery();

       });


       function QZrentQuery() {

           var QZStartDate = $("#QZStartDate").val();

           if (QZStartDate == "") {
               alert("请选择起租开始日期");
               $("#QZStartDate").focus();
               return false;
           }

           var r = QZStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               $("#QZStartDate").focus();
               return false;
           }


           var QZEndDate = $("#QZEndDate").val();
           if (QZEndDate == "") {
               alert("请选择起租结束日期");
               $("#QZEndDate").focus();
               return false;
           }

           r = QZEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

           if (r == null) {
               alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
               $("#QZEndDate").focus();
               return false;
           }


           var d1 = new Date(QZStartDate.replace(/\-/g, "\/"));
           var d2 = new Date(QZEndDate.replace(/\-/g, "\/"));


           if (d1 >= d2) {
               alert("开始时间不能大于结束时间！");
               return false;
           }

           $.ajax({

               type: "get",
               dataType: "json",
               url: "/QZInfo/QZBusiness?val1=" + QZStartDate + "&val2="
                 + QZEndDate + "&val88=" + "SelectQZRentSettleData",

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
                   html += "<td style = " + "'" + "display:none;" + "'" + ">" + "Rent_id" + "</td>"//0
                   html += "<td>箱号</td>"; //1
                   html += "<td>起租日期</td>"; //2
                   html += "<td>日租金</td>"; //3
                   html += "<td>日租金币种</td>"; //4
                   html += "<td>租金结算开始日期</td>"; //5
                   html += "<td>租金结算结束日期</td>"; //6
                   html += "<td>租金总额(美元)</td>"; //7
                   html += "<td>租金总额(人民币)</td>"; //8
                   html += "<td>租金汇率</td>"; //9
                   html += "<td>结算天数</td>"; //10
                   html += "<td>起租号</td>"; //11
                   html += "<td>机组型号</td>"; //12
                   html += "<td>制造日期</td>"; //13
                   html += "<td>起租地点</td>"; //14
                   html += "<td>起租装卸费</td>"; //15
                   html += "<td>起租装卸费币种</td>"; //16
                   html += "<td>起租pti费</td>"; //17
                   html += "<td>起租pti费币种</td>"; //18
                   html += "<td>起租运输费费</td>"; //19
                   html += "<td>起租运输费币种</td>"; //20

                   html += "</tr>";


                   $(_json).each(function (key) {

                       html += "<tr>";
                       html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].Rent_id + "</td>"//0
                       html += "<td>" + _json[key].ctn_no + "</td>";  //1
                       html += "<td>" + _json[key].QZDate + "</td>";  //2
                       html += "<td>" + _json[key].RentDaily + "</td>";  //3
                       html += "<td>" + _json[key].RentDailyCoin + "</td>";  //4
                       html += "<td>" + _json[key].RentStartDate + "</td>";  //5
                       html += "<td>" + _json[key].RentEndDate + "</td>";  //6
                       html += "<td>" + _json[key].RentTotal + "</td>";  //7
                       html += "<td>" + _json[key].RentTotalRMB + "</td>";  //8
                       html += "<td>" + _json[key].RentRate + "</td>";  //9
                       html += "<td>" + _json[key].RentDays + "</td>";  //10
                       html += "<td>" + _json[key].QZNo + "</td>";  //11
                       html += "<td>" + _json[key].MachineNo + "</td>";  //12
                       html += "<td>" + _json[key].MakeDate + "</td>";  //13
                       html += "<td>" + _json[key].QZAddress + "</td>";  //14
                       html += "<td>" + _json[key].QZLoadFee + "</td>";  //15
                       html += "<td>" + _json[key].QZLoadFeeCoin + "</td>";  //16
                       html += "<td>" + _json[key].QZPtiFee + "</td>";  //17
                       html += "<td>" + _json[key].QZPtiFeeCoin + "</td>";  //18
                       html += "<td>" + _json[key].QZTranFee + "</td>";  //19
                       html += "<td>" + _json[key].QZTranFeeCoin + "</td>";  //20
                       html += "</tr>";
                       i++;

                   });
                   $("#QZRentUniverinfoTable").html(html);

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

               $("#QZRentUniverinfoTable").table2excel({
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
