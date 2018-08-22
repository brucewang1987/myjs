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

        $("#btnDownLoad").click(function () {

            exportexcel();


        });


        $("#btnOK").click(function () {


            QueryQZUniverInfo();

        });


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





        $("#btnQZSettle").click(function () {



            RentSettlePL();


        });


        function RentSettlePL() {

            var QZRentStartDate = prompt("请输入起租结算开始日期", "2018-08-01");
           
           if (prompt("input", "") === null) {
    /* todo : cancel */
    return false;
}
           

            var r = QZRentStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }



            var QZRentEndDate = prompt("请输入起租结算结束日期", "2018-09-01");

            r = QZRentEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            var oDate1 = new Date(QZRentStartDate);
            var oDate2 = new Date(QZRentEndDate);

            if (oDate1.getTime() > oDate2.getTime()) {
                alert("起始时间必须小于结束时间");
                return false;
            }

            var regu = /^[0-9]+\.?[0-9]*$/;

            var Rate = prompt("请输入结算汇率", "6.50");


            if (!regu.test(Rate)) {

                alert("请输入正确的数字");
            
            
            }

            var QZSrart = $("#QZStartDate").val();

            var QZEnd = $("#QZEndDate").val();

            //            alert("点击了批量租金结算");



            $.ajax({

                type: "get",
                dataType: "json",
                url: "/QZInfo/QZBusiness?val1=" + QZSrart + "&val2=" + QZEnd + "&val3=" + QZRentStartDate
                + "&val4=" + QZRentEndDate + "&val5=" + Rate+"&val88="+"QZRentSettlePL",

                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);

                    

                }
            
            
            
            
            })


        }



        $("#btnQZUpdateRent").click(function () {


            RentUpdatePL();


        });



        function RentUpdatePL() {


            var RentDaily = prompt("请输入新的租金", "7.00");


            var regu = /^[0-9]+\.?[0-9]*$/;

      
            if (!regu.test(RentDaily)) {

                alert("请输入正确的数字");


            }

            var QZSrart = $("#QZStartDate").val();

            var QZEnd = $("#QZEndDate").val();


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/QZInfo/QZBusiness?val1=" + QZSrart + "&val2=" + QZEnd + "&val3=" + RentDaily +
                "&val88=" + "QZRentUpdatePL",


                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);
                    QueryQZUniverInfo();


                }


            });



//            alert("点击了批量租金修改按钮");
        
        
        
        }


  $("#btnQZTotalPL").click(function () {


            QZTotalPL();

        });


        function QZTotalPL() {



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

            var QZRate = prompt("请输入汇率", "6.32");


            $.ajax({
            
             type: "get",
               dataType: "json",
               url: "/QZInfo/QZBusiness?val1=" + QZStartDate + "&val2="
                 + QZEndDate +"&val3="+QZRate+ "&val88=" + "SettlementQZInfoPL",


               success: function (ret) {

                   var map = eval('(' + ret + ')');
                   var response = JSON.stringify(map.Response);

                   alert(response);

                   QueryQZUniverInfo();


               }


            
            })

        
        
        }



 $("#btnQZTotalPL").click(function () {


            QZTotalPL();

        });


        function QZTotalPL() {



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

            var QZRate = prompt("请输入汇率", "6.32");


            $.ajax({
            
             type: "get",
               dataType: "json",
               url: "/QZInfo/QZBusiness?val1=" + QZStartDate + "&val2="
                 + QZEndDate +"&val3="+QZRate+ "&val88=" + "SettlementQZInfoPL",


               success: function (ret) {

                   var map = eval('(' + ret + ')');
                   var response = JSON.stringify(map.Response);

                   alert(response);

                   QueryQZUniverInfo();


               }


            
            })

        
        
        }



 function divdisappear() {

          $("#div2").hide();

      }

      divdisappear();


      function divdisplay() {


          $("#div2").show();

      }


      $("#btnTZSettlePL").click(function () {

          if ($("table tr").length > 1) {


              if (!window.confirm('确定要对这部分数据做退租，一旦做了退租就不能做租金结算操作')) {

                  return false;
              }
             
             if($("table tr").length ==2)
             {
             
                alert("此模块只做批量退租处理单箱请至退租模块做退租操作");
                return false;
             }


              divdisplay();

          }
          else {

              alert("请先查询起租数据");
              return false;

          }


      });


      $("#btnCancel").click(function () {


          divdisappear();

      });


      $("#btnTZAdd").click(function () {

     
              TZInfoPL();
         


      });

      function TZInfoPL() {


         var startDate = $("#QZStartDate").val();

         var endDate = $("#QZEndDate").val();


          var regu = /^[0-9]+\.?[0-9]*$/;

          var TZDate = $("#TZDate").val();

          if (TZDate == "") {

              alert("请输入退租日期");
              return false;
          
          }

          var r = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
          if (r == null) {
              alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
              return false;
          }

          var TZNO = $("#TZNo").val();

          if (TZNO == "") {

              alert("请输入退租号");
              return false;
          
          }

          var TZAdress = $("#TZAdress").val();

          var TZLoadFeeCoin = $("#TZLoadFeeCoin").find("option:selected").text();

          var TZLoadFee = $("#TZLoadFee").val();

          if (TZLoadFee == "") {

              $("#TZLoadFee").val(0.00);

          }

          if (!regu.test(TZLoadFee)) {
              alert("退租装卸费格式不正确");
              $("#TZLoadFee").focus();
              return false;

          }


          var TZPtiFeeCoin = $("#TZPtiFeeCoin").find("option:selected").text();

          var TZPtiFee = $("#TZPtiFee").val();

          if (TZPtiFee == "") {

              $("#TZPtiFee").val(0.00);

          }
          if (!regu.test(TZPtiFee)) {
              alert("退租pti费格式不正确");
              $("#TZPtiFee").focus();
              return false;

          }


          var TZTranFeeCoin = $("#TZTranFeeCoin").find("option:selected").text();

          var TZTranFee = $("#TZTranFee").val();

          if (TZTranFee == "") {

              $("#TZTranFee").val(0.00);

          }
          if (!regu.test(TZTranFee)) {
              alert("退租运输费格式不正确");
              $("#TZTranFee").focus();
              return false;

          }

          var TZXTFeeCoin = $("#TZXTFeeCoin").find("option:selected").text();

          var TZXTFee = $("#TZXTFee").val();


          if (TZXTFee == "") {

              $("#TZXTFee").val(0.00);

          }
          if (!regu.test(TZXTFee)) {
              alert("退租箱体修理费格式不正确");
              $("#TZXTFee").focus();
              return false;

          }



          var TZJZFeeCoin = $("#TZJZFeeCoin").find("option:selected").text();

          var TZJZFee = $("#TZJZFee").val();


          if (TZJZFee == "") {

              $("#TZJZFee").val(0.00);

          }
          if (!regu.test(TZJZFee)) {
              alert("退租机组修理费格式不正确");
              $("#TZJZFee").focus();
              return false;

          }


          $.ajax({

              type: "get",
              dataType: "json",
              url: "/TZInfo/TZBusiness?val1=" + TZDate + "&val2=" + TZNO + "&val3=" + TZAdress
              + "&val4=" + TZLoadFeeCoin + "&val5=" + TZLoadFee + "&val6=" + TZPtiFeeCoin+
              "&val7=" + TZPtiFee + "&val8=" + TZTranFeeCoin + "&val9=" + TZTranFee+
              "&val10=" + TZXTFeeCoin + "&val11=" + TZXTFee + "&val12=" + TZJZFeeCoin+
              "&val13=" + TZJZFee + "&val14=" + startDate + "&val15=" + endDate + "&val88=" + "TZinfoAddPL",

              success: function (ret) {

                  var map = eval('(' + ret + ')');
                  var response = JSON.stringify(map.Response);

                  alert(response);

                  window.location.reload();

              }
          
                  
          })     
      
      }





