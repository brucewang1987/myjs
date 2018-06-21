$("#btnExport").click(function(){

exportexcel();


}); 

  function exportexcel() {

           if ($("table tr").length > 1) {

               $("#RepairMaininfoTable").table2excel({
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







function init() {


             $("#btnChange").attr("disabled", true);


         }

         init();


         $("#btnChange").click(function () {


             var regu = /^[0-9]+\.?[0-9]*$/;

             var XCode = $("#XCode").val();

             if (XCode == "") {

                 alert("请输入关联代码");
                 $("#XCode").focus();
                 return false;

             }

             if (XCode.indexOf("PATU") < 0) {

                 alert("请输入正确的关联代码,如PATU1234567");
                 $("#XCode").focus();
                 return false;

             }

             var RepairDate = $("#RepairDate").val();
             if (RepairDate == "") {

                 alert("请选择修理时间");
                 $("#RepairDate").focus();
                 return false;

             }
             var r = RepairDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
             if (r == null) {
                 alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                 return false;
             }



             var jobInfo = $("#jobInfoId").val();
             if (jobInfo == "") {

                 alert("请输入工作内容");
                 $("#jobInfoId").focus();
                 return false;
             }

             var DaysCount = $("#DaysCount").val();
             if (DaysCount == "") {

                 alert("请输入天数");
                 $("#DaysCount").focus();
                 return false;
             }

             var RepairAddress = $("#RepairAddressID").val();
             if (RepairAddress == "") {

                 alert("请输入维修地点");
                 $("#RepairAddressID").focus();
                 return false;
             }

             var total = 0.00;

             var Drop_in_fee = $("#Drop_in_fee_ID").val();
             if (Drop_in_fee == "") {

                 alert("请输入上门费");
                 $("#Drop_in_fee_ID").focus();
                 return false;
             }

             if (!regu.test(Drop_in_fee)) {
                 alert("上门费请输入数字");
                 $("#Drop_in_fee_ID").focus();
                 return false;

             }
             Drop_in_fee = Drop_in_fee * 1.00;
             total = total + Drop_in_fee;

             var TrafficFee = $("#TrafficFeeID").val();
             if (TrafficFee == "") {

                 alert("请输入交通费");

                 $("#TrafficFeeID").focus();
                 return false;
             }
             if (!regu.test(TrafficFee)) {
                 alert("交通费请输入数字");
                 $("#TrafficFeeID").focus();
                 return false;

             }

             TrafficFee = TrafficFee * 1.00;
             total = total + TrafficFee;

             var CheckHourFee = $("#CheckHourFeeID").val();

             if (CheckHourFee == "") {

                 alert("请输入检修工时费");
                 $("#CheckHourFeeID").focus();
                 return false;
             }

             if (!regu.test(CheckHourFee)) {
                 alert("检修工时费请输入数字");
                 $("#CheckHourFeeID").focus();
                 return false;

             }
             CheckHourFee = CheckHourFee * 1.00;
             total = total + CheckHourFee;

             var stayFee = $("#stayFeeId").val();

             if (stayFee == "") {
                 alert("请输入住宿费");
                 $("#stayFeeId").focus();
                 return false;
             }
             if (!regu.test(stayFee)) {
                 alert("住宿费请输入数字");
                 $("#stayFeeId").focus();
                 return false;

             }

             stayFee = stayFee * 1.00;
             total = total + stayFee;


             $.ajax({
             
              type: "get",
                 dataType: "json",
                 url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val2=" + RepairDate + "&val3=" + jobInfo +
                 "&val4=" + DaysCount + "&val5=" + RepairAddress + "&val6=" + Drop_in_fee + "&val7=" + TrafficFee +
                 "&val8=" + CheckHourFee + "&val9=" + stayFee + "&val10=" + total +
                  "&val88=" + "ChangeRepInfo",


                 success: function (ret) {


                     var map = eval('(' + ret + ')');
                     var response = JSON.stringify(map.Response);

                     alert(response);

                     QueryRepInfo();

                 }
             
             
             
             
             })





         });

         $("#btnOK").click(function () {

             var regu = /^[0-9]+\.?[0-9]*$/;

             var XCode = $("#XCode").val();

             if (XCode == "") {

                 alert("请输入关联代码");
                 $("#XCode").focus();
                 return false;

             }

             if (XCode.indexOf("PATU") < 0||XCode.indexOf("patu") < 0) {

                 alert("请输入正确的关联代码,如PATU1234567");
                 $("#XCode").focus();
                 return false;

             }

             var RepairDate = $("#RepairDate").val();
             if (RepairDate == "") {

                 alert("请选择修理时间");
                 $("#RepairDate").focus();
                 return false;

             }
             var r = RepairDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
             if (r == null) {
                 alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                 return false;
             }



             var jobInfo = $("#jobInfoId").val();
             if (jobInfo == "") {

                 alert("请输入工作内容");
                 $("#jobInfoId").focus();
                 return false;
             }

             var DaysCount = $("#DaysCount").val();
             if (DaysCount == "") {

                 alert("请输入天数");
                 $("#DaysCount").focus();
                 return false;
             }

             var RepairAddress = $("#RepairAddressID").val();
             if (RepairAddress == "") {

                 alert("请输入维修地点");
                 $("#RepairAddressID").focus();
                 return false;
             }

             var total = 0.00;

             var Drop_in_fee = $("#Drop_in_fee_ID").val();
             if (Drop_in_fee == "") {

                 alert("请输入上门费");
                 $("#Drop_in_fee_ID").focus();
                 return false;
             }

             if (!regu.test(Drop_in_fee)) {
                 alert("上门费请输入数字");
                 $("#Drop_in_fee_ID").focus();
                 return false;

             }
             Drop_in_fee = Drop_in_fee * 1.00;
             total = total + Drop_in_fee;

             var TrafficFee = $("#TrafficFeeID").val();
             if (TrafficFee == "") {

                 alert("请输入交通费");

                 $("#TrafficFeeID").focus();
                 return false;
             }
             if (!regu.test(TrafficFee)) {
                 alert("交通费请输入数字");
                 $("#TrafficFeeID").focus();
                 return false;

             }

             TrafficFee = TrafficFee * 1.00;
             total = total + TrafficFee;

             var CheckHourFee = $("#CheckHourFeeID").val();

             if (CheckHourFee == "") {

                 alert("请输入检修工时费");
                 $("#CheckHourFeeID").focus();
                 return false;
             }

             if (!regu.test(CheckHourFee)) {
                 alert("检修工时费请输入数字");
                 $("#CheckHourFeeID").focus();
                 return false;

             }
             CheckHourFee = CheckHourFee * 1.00;
             total = total + CheckHourFee;

             var stayFee = $("#stayFeeId").val();

             if (stayFee == "") {
                 alert("请输入住宿费");
                 $("#stayFeeId").focus();
                 return false;
             }
             if (!regu.test(stayFee)) {
                 alert("住宿费请输入数字");
                 $("#stayFeeId").focus();
                 return false;

             }

             stayFee = stayFee * 1.00;
             total = total + stayFee;

             $.ajax({


                 type: "get",
                 dataType: "json",
                 url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val2=" + RepairDate + "&val3=" + jobInfo +
                 "&val4=" + DaysCount + "&val5=" + RepairAddress + "&val6=" + Drop_in_fee + "&val7=" + TrafficFee +
                 "&val8=" + CheckHourFee + "&val9=" + stayFee + "&val10=" + total +
                  "&val88=" + "AddRepInfo",

                 success: function (ret) {


                     var map = eval('(' + ret + ')');
                     var response = JSON.stringify(map.Response);

                     alert(response);

                     window.location.reload();
                 
                 }

             })



         });


         function QueryRepInfo() {


             var XCode = $("#XCode").val();

             if (XCode == "") {

                 alert("请输入关联代码");
                 return false;

             }


             $.ajax({


                 type: "get",
                 dataType: "json",
                 url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val88=" + "SelectRepInfo",

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
                     html += "<td>关联代码</td>"; //1
                     html += "<td>修理日期</td>"; //2
                     html += "<td>工作内容</td>"; //3
                     html += "<td>天数</td>"; //4
                     html += "<td>维修地点</td>"; //5
                     html += "<td>上门费</td>"; //6
                     html += "<td>交通费</td>"; //7
                     html += "<td>检修工时费</td>"; //8
                     html += "<td>住宿费</td>"; //9
                     html += "<td>材料费</td>"; //10
                     html += "<td>总价</td>"; //11
                     html += "<td>输入日期</td>"; //12
                     html += "<td>修改日期</td>"; //13
                     html += "<td>操作</td>"; //14
                     html += "</tr>";



                     $(_json).each(function (key) {

                         html += "<tr>";
                         html += "<td>" + _json[key].XCode + "</td>"; //0
                         html += "<td>" + _json[key].RepairDate + "</td>"; //1
                         html += "<td>" + _json[key].jobInfo + "</td>"; //2
                         html += "<td>" + _json[key].DaysCount + "</td>"; //3
                         html += "<td>" + _json[key].RepairAddress + "</td>"; //4
                         html += "<td>" + _json[key].Drop_in_fee + "</td>"; //5
                         html += "<td>" + _json[key].TrafficFee + "</td>"; //6
                         html += "<td>" + _json[key].CheckHourFee + "</td>"; //7
                         html += "<td>" + _json[key].stayFee + "</td>"; //8
                         html += "<td>" + _json[key].MaterialFee + "</td>"; //9
                         html += "<td>" + _json[key].TotalRMB + "</td>"; //10
                         html += "<td>" + _json[key].InputDate + "</td>"; //11
                         html += "<td>" + _json[key].ChangeDate + "</td>"; //12
                         html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                      + "' onclick = '" + "EditRepinfo(" + i + ")" + "'" + "/>" + "|" + "<input type = " +
                      "'" + "button" + "' value=" + "'" + "删除" + "' onclick = '" + "DeleteRepInfo(" + i + ")" + "'" + "/>" + "</td>";


                         html += "<tr>";
                     });
                     $("#RepairMaininfoTable").html(html);
                     $("#btnChange").attr("disabled", false);
                     $("#btnOK").attr("disabled", true);


                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }


             })
         
         
         }


         $("#btnQuery").click(function () {


             QueryRepInfo();


         });

         function EditRepinfo(i) {

             var XCode = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(0).text();
             $("#XCode").val(XCode);

             var RepairDate = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(1).text();
             $("#RepairDate").val(RepairDate);


             var jobInfo = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(2).text();
             $("#jobInfoId").val(jobInfo);

             var DaysCount = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(3).text();
             $("#DaysCount").val(DaysCount);

             var RepairAddress = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(4).text();
             $("#RepairAddressID").val(RepairAddress);

             var Drop_in_fee = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(5).text();
             $("#Drop_in_fee_ID").val(Drop_in_fee);

             var TrafficFee = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(6).text();
             $("#TrafficFeeID").val(TrafficFee);


             var CheckHourFee = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(7).text();
             $("#CheckHourFeeID").val(CheckHourFee);

             var stayFee = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(8).text();
             $("#stayFeeId").val(stayFee);








         }


         function DeleteRepInfo(i) {


             var XCode = $("#RepairMaininfoTable").find("tr").eq(i).find("td").eq(0).text();

             $.ajax({
             
              type: "get",
                 dataType: "json",
                 url: "/RepairInfo/RepBusiness?val1=" + XCode + "&val88=" + "deleteRepInfo",

                 success: function (ret) {


                     var map = eval('(' + ret + ')');
                     var response = JSON.stringify(map.Response);

                     alert(response);

                     window.location.reload();

                 }

             
             
             })
         
         
         }
