 function InsertRepairItem() {


             var BJID = $("#BJItemID").val();
             if (BJID != "") {

                 alert("增加数据无需填写id");
                 return false;

             }


             var RepairNo2 = $("#RepairNoitemID").val();

             if (RepairNo2 == "") {

                 alert("请输入修理编号");
                 return false;
             
             }

             var BJ = $("#BJID").val();
             if (BJ == "") {

                 alert("请输入备件名称");
                 return false;

             }

             var BJNo = $("#BJNoId").val();
             if (BJNo == "") {

                 alert("请输入备件号");
                 return false;
             
             }

             var Count = $("#CountID").val();

             Count = Count * 1;

             var price = $("#PriceID").val();

             price = price * 1;


             var Material_fee = price * Count;

             var ctn_no = $("#ctn_noID").val();

             if (ctn_no == "") {

                 alert("请输入箱号");
                 return false;
             
             }

             var ptifee = $("#PtiID").val();

             ptifee = ptifee * 1;


             $.ajax({

                 type: "get",
                 datatype: "json",
                 url: "RepiarItemHandler.ashx?val1=" + RepairNo2 + "&val2=" + BJ + "&val3=" + BJNo
             + "&val4=" + Count + "&val5=" + price + "&val6=" + Material_fee +
             "&val7=" + ctn_no + "&val8=" + ptifee + "&val9=" + "InsertRepItemInfo",
                 success: function (ret) {

                     var map = eval('(' + ret + ')');
                     var str = JSON.stringify(map.strAddFlag);

                     alert(str);

                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }



             })


         }


         function DeleteRepiteminfo() {

             var BJID = $("#BJItemID").val();

             if (BJID == "") {

                 alert("请输入需要删除的明细id");
                 return false;

             }

             $.ajax({

                 type: "get",
                 datatype: "json",
                 url: "RepiarItemHandler.ashx?val1=" + BJID + "&val9=" + "deleteRepItemInfo",
                 success: function (ret) {

                     var map = eval('(' + ret + ')');
                     var str = JSON.stringify(map.strAddFlag);

                     alert(str);

                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }

             })


         }


         function QueryRepItemInfo() {
             var BJID = $("#BJItemID").val();

             if (BJID == "") {

                 alert("请输入需要查询的明细id");
                 return false;

             }


             $.ajax({
                 type: "get",
                 datatype: "json",
                 url: "RepiarItemHandler.ashx?val1=" + BJID + "&val9=" + "QueryRepItemByBJID",
                 success: function (ret) {

                     var map = eval('(' + ret + ')');
//                     alert(map);




                     var str = JSON.stringify(map.dtRepairItemInfoByBJID);

//                     alert(str);

                     if (str == "[]") {
                         alert("没有数据");
                         return false;
                     }


                     var _json = eval(map.dtRepairItemInfoByBJID);


                     $(_json).each(function (key) {

                         $("#BJItemID").val(_json[key].BJID);
                         $("#RepairNoitemID").val(_json[key].Repair_No);
                         $("#BJID").val(_json[key].BJName);
                         $("#BJNoId").val(_json[key].BJNO);

                         $("#CountID").val(_json[key].Counts);

                         $("#PriceID").val(_json[key].prices);

                         $("#ctn_noID").val(_json[key].Ctn_no);

                         $("#PtiID").val(_json[key].pti_fee);
                         
                       


                     });


                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }

             })


         }



         function QueryRepItemInfoByRepNo() {

             var RepairNo2 = $("#RepairNoitemID").val();

             if (RepairNo2 == "") {

                 alert("请输入修理编号");
                 return false;

             }


             $.ajax({

                 type: "get",
                 datatype: "json",
                 url: "RepiarItemHandler.ashx?val1=" + RepairNo2 + "&val9=" + "QueryRepItemByRepNo",
                 success: function (ret) {

                     var map = eval('(' + ret + ')');
                     var str = JSON.stringify(map.drRepairItemInfoByRepNo);
                     if (str == "[]") {
                         alert("没有数据");
                         return false;
                     }


                     var _json = eval(map.drRepairItemInfoByRepNo);

                     var html = "";
                     html += "<tr>";
                     html += "<td>备件id</td>";
                     html += "<td>修理编号</td>";
                     html += "<td>备件名称</td>";
                     html += "<td>备件号</td>";
                     html += "<td>数量</td>";
                     html += "<td>单价</td>";
                     html += "<td>箱号</td>";
                     html += "<td>pti费用</td>";
                     html += "</tr>";

                     $(_json).each(function (key) {
                         html += "<tr>";
                         html += "<td>" + _json[key].BJID + "</td>";
                         html += "<td>" + _json[key].Repair_No + "</td>";
                         html += "<td>" + _json[key].BJName + "</td>";
                         html += "<td>" + _json[key].BJNO + "</td>";
                         html += "<td>" + _json[key].Counts + "</td>";
                         html += "<td>" + _json[key].prices + "</td>";
                         html += "<td>" + _json[key].Ctn_no + "</td>";
                         html += "<td>" + _json[key].pti_fee + "</td>";
                         html += "</tr>";

                     });
                     $("#RepItemTable").html(html);


                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }



             })


         }


         function exportexcel() {
             $("#RepItemTable").table2excel({
                 exclude: ".noExl",
                 name: "Excel Document Name",
                 filename: "myFileName",
                 exclude_img: true,
                 exclude_links: true,
                 exclude_inputs: true
             });
         }
