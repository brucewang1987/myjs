 function init() {

             $("#btnAdd").attr("disabled", true);
             $("#btnUpdate").attr("disabled", true);
             $("#RentDailyCoin").attr("disabled", true);
             $("#RentDaily").attr("disabled", true);
             $("#QZDate").attr("disabled", true);


         }
         init();



         function QueryQZinfo() {


             var ctn_no = $("#ctn_no").val();

             if (ctn_no == "") {

                 alert("请输入箱号");
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
                         window.location.reload();
                     }

                     var _json = eval(map.dt);

                     var response = JSON.stringify(map.Response);



                     var html = "";


                     $(_json).each(function (key) {


                         $("#QZDate").val(_json[key].QZDate);
                         $("#RentDailyCoin").find("option:selected").text(_json[key].RentDailyCoin);
                         $("#RentDaily").val(_json[key].RentDaily);




                     });

                     $("#btnAdd").attr("disabled", false);
                    $("#ctn_no").attr("disabled", true);

                 }


             })


         }


         function TZInfoAdd() {

             var regu = /^[0-9]+\.?[0-9]*$/;

             var ctn_no = $("#ctn_no").val();

             var QZDate = $("#QZDate").val();

             var QZ = new Date(QZDate.replace("-", "/").replace("-", "/"));


             var RentDailyCoin = $("#RentDailyCoin").find("option:selected").text();

             var RentDaily = $("#RentDaily").val();

             var TZDate = $("#TZDate").val();

             var TZ = new Date(TZDate.replace("-", "/").replace("-", "/"));


             if (TZ < QZ) {

                 alert("退租日期不可小于起租日期");
                 $("#TZDate").focus();
                 return false;
             
             }



             var r = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
             if (r == null) {
                 alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                 return false;
             }


             var TZNO = $("#TZNO").val();

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

             var Rate = $("#Rate").val();

             if (Rate == "") {

                 $("#Rate").val(1);
             }

             if (!regu.test(Rate)) {
                 alert("汇率格式不正确");
                 $("#Rate").focus();
                 return false;

             }


             $.ajax({
             
             type: "get",
             dataType: "json",
             url: "/TZInfo/TZBusiness?val1=" + ctn_no + "&val2=" + QZDate + "&val3=" + RentDailyCoin
             + "&val4=" + RentDaily + "&val5=" + TZDate + "&val6=" + TZNO + "&val7=" + TZAdress+
             "&val8=" + TZLoadFeeCoin + "&val9=" + TZLoadFee + "&val10=" + TZPtiFeeCoin+
             "&val11=" + TZPtiFee + "&val12=" + TZTranFeeCoin + "&val13=" + TZTranFee+
             "&val14=" + TZXTFeeCoin + "&val15=" + TZXTFee + "&val16=" + TZJZFeeCoin+
             "&val17=" + TZJZFee + "&val18=" + Rate + "&val88=" + "AddTZinfo",

             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 window.location.reload();

             }



         })






     }

     function QueryTZSingleInfo() {


         

         var ctn_no = $("#ctn_no").val();

         if (ctn_no == "") {

             alert("请输入查询箱号");
             return false;
         }



         $.ajax({


             type: "get",
             dataType: "json",
             url: "/TZInfo/TZBusiness?val1=" + ctn_no + "&val88=" + "QueryTZSingleInfo",

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
                 html += "<td>退租机组修理费币种</td>"; //15
                 html += "<td>退租机组修理费</td>"; //16
                 html += "<td>退租录入日期</td>"; //17
                 html += "<td>退租修改日期</td>"; //18
                 html += "<td>汇率</td>"; //19
                 html += "<td>人民币总租金</td>"; //20
                 html += "<td>美元总租金</td>"; //21
                 html+="<td>操作</td>"
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
                     html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                      + "' onclick = '" + "EditTZinfo(" + i + ")" + "'" + "/>" + "|" + "<input type = " +
                      "'"+"button"+"' value="+"'"+"删除"+"' onclick = '"+"DeleteInfo("+i+")"+"'"+"/>" + "</td>";
                     html += "</tr>";
                 });
                 $("#TZinfoTable").html(html);
                 $("#btnAdd").attr("disabled", true);
                 $("#btnUpdate").attr("disabled", false);
                 $("#ctn_no").attr("disabled", true);
                 $("#QZDate").attr("disabled", true);
             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }




         })


     }


     function EditTZinfo(i) {

         var ctn_id = $("#TZinfoTable").find("tr").eq(i).find("td").eq(0).text();
         $("#ctn_id").val(ctn_id);
         var ctn_no = $("#TZinfoTable").find("tr").eq(i).find("td").eq(1).text();
         $("#ctn_no").val(ctn_no);
         var QZDate = $("#TZinfoTable").find("tr").eq(i).find("td").eq(2).text();
         $("#QZDate").val(QZDate);
         var RentDailyCoin = $("#TZinfoTable").find("tr").eq(i).find("td").eq(3).text();
         $("#RentDailyCoin").find("option:selected").text(RentDailyCoin);
         var RentDaily = $("#TZinfoTable").find("tr").eq(i).find("td").eq(4).text();
         $("#RentDaily").val(RentDaily);
         var TZDate = $("#TZinfoTable").find("tr").eq(i).find("td").eq(5).text();
         $("#TZDate").val(TZDate);
         var TZNO = $("#TZinfoTable").find("tr").eq(i).find("td").eq(7).text();
         $("#TZNO").val(TZNO);
         var TZAdress = $("#TZinfoTable").find("tr").eq(i).find("td").eq(8).text();
         $("#TZAdress").val(TZAdress);
         var TZLoadFeeCoin = $("#TZinfoTable").find("tr").eq(i).find("td").eq(9).text();
         $("#TZLoadFeeCoin").find("option:selected").text(TZLoadFeeCoin);
         var TZLoadFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(10).text();
         $("#TZLoadFee").val(TZLoadFee);
         var TZPtiFeeCoin = $("#TZinfoTable").find("tr").eq(i).find("td").eq(11).text();
         $("#TZPtiFeeCoin").find("option:selected").text(TZPtiFeeCoin);
         var TZPtiFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(12).text();
         $("#TZPtiFee").val(TZPtiFee);
         var TZTranFeeCoin = $("#TZinfoTable").find("tr").eq(i).find("td").eq(13).text();
         $("#TZTranFeeCoin").find("option:selected").text(TZTranFeeCoin);
         var TZTranFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(14).text();
         $("#TZTranFee").val(TZTranFee);
         var TZXTFeeCoin = $("#TZinfoTable").find("tr").eq(i).find("td").eq(15).text();
         $("#TZXTFeeCoin").find("option:selected").text(TZXTFeeCoin);
         var TZXTFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(16).text();
         $("#TZXTFee").val(TZXTFee);
         var TZJZFeeCoin = $("#TZinfoTable").find("tr").eq(i).find("td").eq(17).text();
         $("#TZJZFeeCoin").find("option:selected").text(TZJZFeeCoin);
         var TZJZFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(18).text();
         $("#TZJZFee").val(TZJZFee);
         var Rate = $("#TZinfoTable").find("tr").eq(i).find("td").eq(21).text();
         $("#Rate").val(Rate);

     }


     function TZInfoUpdate() {

         var ctn_id = $("#ctn_id").val();
         var regu = /^[0-9]+\.?[0-9]*$/;

         

         var QZDate = $("#QZDate").val();

         var QZ = new Date(QZDate.replace("-", "/").replace("-", "/"));


         var RentDailyCoin = $("#RentDailyCoin").find("option:selected").text();

         var RentDaily = $("#RentDaily").val();

         var TZDate = $("#TZDate").val();

         var TZ = new Date(TZDate.replace("-", "/").replace("-", "/"));


         if (TZ < QZ) {

             alert("退租日期不可小于起租日期");
             $("#TZDate").focus();
             return false;

         }



         var r = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
         if (r == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
             return false;
         }


         var TZNO = $("#TZNO").val();

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

         var Rate = $("#Rate").val();

         if (Rate == "") {

             $("#Rate").val(1);
         }

         if (!regu.test(Rate)) {
             alert("汇率格式不正确");
             $("#Rate").focus();
             return false;

         }

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/TZInfo/TZBusiness?val1=" + ctn_id + "&val2=" + QZDate + "&val3=" + RentDailyCoin
             + "&val4=" + RentDaily + "&val5=" + TZDate + "&val6=" + TZNO + "&val7=" + TZAdress +
             "&val8=" + TZLoadFeeCoin + "&val9=" + TZLoadFee + "&val10=" + TZPtiFeeCoin +
             "&val11=" + TZPtiFee + "&val12=" + TZTranFeeCoin + "&val13=" + TZTranFee +
             "&val14=" + TZXTFeeCoin + "&val15=" + TZXTFee + "&val16=" + TZJZFeeCoin +
             "&val17=" + TZJZFee + "&val18=" + Rate + "&val88=" + "ChangeTZinfo",

             success: function (ret) {


                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 QueryTZSingleInfo();



             }


         })


     }


     function DeleteInfo(i) {

         var ctn_id = $("#TZinfoTable").find("tr").eq(i).find("td").eq(0).text();

         if (!window.confirm('确定要删除这条记录吗')) {

             return false;
         }

         $.ajax({
             type: "get",
             dataType: "json",
             url: "/TZInfo/TZBusiness?val1=" + ctn_id + "&val88=" + "DeleteQTinfo",

             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);
                 window.location.reload();
             
             }



         })
     
     }
