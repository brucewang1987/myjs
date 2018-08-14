
        $("#btnQuerySettle").click(function () {

         QuerySettleInfo();

     });


     function QuerySettleInfo() {

         var ctn_no = $("#ctn_no").val();

         if (ctn_no == "") {

             alert("请输入箱号");
             return false;

         }

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZInfo/QZBusiness?val1=" + ctn_no + "&val88=" + "QueryQZRentSettle",

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
                 html += "<td>箱号</td>"; //1
                 html += "<td>日租金</td>"; //2
                 html += "<td>结算起始日期</td>"; //3
                 html += "<td>结算结束日期</td>"; //4
                 html += "<td>结算天数</td>"; //5
                 html += "<td>结算金额</td>"; //6
                 html += "</tr>";

                 $(_json).each(function (key) {

                     html += "<tr>";
                     html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].Rent_id + "</td>"//0
                     html += "<td>" + _json[key].ctn_no + "</td>";  //1
                     html += "<td>" + _json[key].RentDaily + "</td>";  //2
                     html += "<td>" + _json[key].RentStartDate + "</td>";  //3
                     html += "<td>" + _json[key].RentEndDate + "</td>";  //4
                     html += "<td>" + _json[key].RentDays + "</td>";  //5
                     html += "<td>" + _json[key].RentTotal + "</td>";  //6
                     //                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                     //                           + "' onclick = '" + "EditQZRentinfo(" + i + ")" + "'" + "/>"  +"|"
                     //                       + "<input type = " + "'" + "button" + "' value = " + "'" +
                     //                        "删除" + "' onclick = '" + "return DeleteQZRentSettle(" + i + ")" + "'" + "/>" + "</td>";

                     html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" +
                        "删除" + "' onclick = '" + "return DeleteQZRentSettle(" + i + ")" + "'" + "/>" + "</td>";

                     html += "</tr>";
                     i++;

                 });
                 $("#QZRentinfoTable").html(html);


             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }





         })



     }


     function DeleteQZRentSettle(i) {


         var Rent_id = $("#QZRentinfoTable").find("tr").eq(i).find("td").eq(0).text();

         if (!window.confirm('确定要删除这条记录吗')) {

             return false;
         }

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZInfo/QZBusiness?val1=" + Rent_id + "&val88=" + "DeleteRentSettleInfo",

             success: function (ret) {


                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 QuerySettleInfo();



             }



         })


     }



     function EditQZRentinfo(i) {


         var Rent_id = $("#QZRentinfoTable").find("tr").eq(i).find("td").eq(0).text();
         $("#rent_id").val(Rent_id);

         var RentDaily = $("#QZRentinfoTable").find("tr").eq(i).find("td").eq(2).text();
         $("#RentDaily").val(RentDaily);

         var RentStartDate = $("#QZRentinfoTable").find("tr").eq(i).find("td").eq(3).text();
         $("#QZRentStartDate").val(RentStartDate);

         var RentEndDate = $("#QZRentinfoTable").find("tr").eq(i).find("td").eq(4).text();
         $("#QZRentEndDate").val(RentEndDate);


     }


     function InitMenu() {

         $("#RentDailyCoin").attr("disabled", true);
         $("#RentDaily").attr("disabled", true);

     }

     InitMenu();

     $("#btnSettle").click(function () {

         AddRentSettle();

     });

     function AddRentSettle() {

         var ctn_no = $("#ctn_no").val();


         if (ctn_no == "") {

             alert("请输入需要结算的箱号");
             return false;
         }

         var RentDaily = $("#RentDaily").val();


         if (RentDaily == "0") {

             alert("请先查询当前日租金");
             return false;
         }

         var RentDailyCoin = $("#RentDailyCoin").find("option:selected").text();


         var QZRentStartDate = $("#QZRentStartDate").val();

         if (QZRentStartDate == "") {
             alert("请选择结算起始时间");
             return false;
         }

         var r = QZRentStartDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
         if (r == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
             return false;
         }

         var QZRentEndDate = $("#QZRentEndDate").val();

         if (QZRentEndDate == "") {
             alert("请选择结算终止日期");
             return false;
         }

         r = QZRentEndDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
         if (r == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
             return false;
         }

         var start = new Date(QZRentStartDate.replace("-", "/").replace("-", "/"));
         var end = new Date(QZRentEndDate.replace("-", "/").replace("-", "/"));
         if (end < start) {
             alert("起始日期必须小于终止日期");
             return false;
         }

         var QZrentRate = $("#QZRentRate").val();

         var regu = /^[0-9]+\.?[0-9]*$/;

         if (!regu.test(QZrentRate)) {

             alert("请输入正确的数字");


         }

         var QZdate = $("#QZDate").val();


         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZInfo/QZBusiness?val1=" + ctn_no + "&val2=" + RentDaily + "&val3=" + QZRentStartDate +
                  "&val4=" + QZRentEndDate + "&val5=" + RentDailyCoin + "&val6=" + QZrentRate +
                   "&val7=" + QZdate + "&val88=" + "AddQZRentSettle",
             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 window.location.reload();

             }



         })


     }

     function QueryQZRent() {

         var ctn_no = $("#ctn_no").val();


         if (ctn_no == "") {

             alert("请输入需要结算的箱号");
             return false;
         }

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZInfo/QZBusiness?val1=" + ctn_no + "&val88=" + "QueryQZInfo",

             success: function (ret) {


                 var map = eval('(' + ret + ')');

                 var str = JSON.stringify(map.dt);
                 if (str == "[]") {
                     alert("没有数据");
                     return false;
                 }

                 var _json = eval(map.dt);

                 var response = JSON.stringify(map.Response);


                 $(_json).each(function (key) {


                     $("#RentDaily").val(_json[key].RentDaily);

                     $("#RentDailyCoin").find("option:selected").text(_json[key].RentDailyCoin);


                     $("#QZDate").val(_json[key].QZDate);

                 });


             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }



         })


     }


     $("#btnQueryRent").click(function () {


         QueryQZRent();


     });
