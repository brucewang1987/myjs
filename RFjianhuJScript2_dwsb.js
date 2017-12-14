   function init() {

         $("#ctn_id").val("");
         $("#CTNR_NO2ID").val("");
         $("#RET_ID").val("");
         $("#ptiDateID").val("");

         //将箱号只读去除
         $("#CTNR_NO2ID").attr("readonly", false);
     }

     init();

     function AddRFitem() {


         var CTNR_NO2 = $("#CTNR_NO2ID").val();

         if (CTNR_NO2 == "") {
             alert("请输入需要打冷的箱号");
             return false;

         }

         var RET = $("#RET_ID").val();

         if (RET == "") {

             alert("请输入温度");
             return false;

         }

         var ptiDate = $("#ptiDateID").val();


         if (ptiDate == "") {

             alert("请选择打冷的日期");
             return false;
         }

         var time1 = ptiDate.substr(0, 10);
         var time2 = ptiDate.substr(11, 8);

         var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

         var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

         if (r == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm:ss例    如：2008-08-08 00:00:00");
             return false;
         }
         if (r2 == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm:ss例    如：2008-08-08 00:00:00");
             return false;

         }


         var datein = $("#DateIn").val();


         if (datein == "") {

             alert("请输入进场日期");
             return false;
         
         }



         $.ajax({

             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + CTNR_NO2 + "&val2=" + RET + "&val3="
              + ptiDate + "&val8=" + "ADDRfiteminfo" + "&val9=" + datein,

             success: function (ret) {
                 var str = JSON.stringify(ret.strAddFlag);

                 alert(str);
                 window.location.reload();

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }



         })





     }


     function DeleteRFitem() {

         var ctn_id = $("#ctn_id").val();

         if (ctn_id == "") {

             alert("请输入需要删除的ctn_id");
             return false;


         }



         $.ajax({
             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + ctn_id + "&val8=" + "DeleteRfiteminfo",

             success: function (ret) {


                 var str = JSON.stringify(ret.strAddFlag);

                 alert(str);

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }


         })




     }



     function DeleteRFitemNew(i) {

         var Record_ID = $("#RFInfotable").find("tr").eq(i).find("td").eq(4).text();



         if (!window.confirm('确定要删除这条记录吗')) {

             return false;
         }


         $.ajax({
             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + Record_ID + "&val8=" + "DeleteRfiteminfo",

             success: function (ret) {


                 var str = JSON.stringify(ret.strAddFlag);

                 alert(str);
                 window.location.reload();
             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }


         })




     }



     function QueryItemByctn_no() {

         var CTNR_NO2 = $("#CTNR_NO2ID").val();

         if (CTNR_NO2 == "") {
             alert("请输入需要查询的箱号");
             return false;

         }


         $.ajax({
             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + CTNR_NO2 + "&val8=" + "QueryRfiteminfoByctn_no",
             success: function (ret) {

                 var str = JSON.stringify(ret.DTByctn_no);
                 if (str == "[]") {
                     alert("没有数据");
                     return false;
                 }

                 var i = 1;

                 var _json = eval(ret.DTByctn_no);
                 var html = "";
                 html += "<tr>";
//                 html += "<td>CTN_ID</td>"
                 html += "<td>箱号</td>";
                 html += "<td>记录时间</td>";
                 html += "<td>记录温度</td>";
                 html += "<td>进场时间</td>";
                 html += "<td style = " + "'" + "display:none;" + "'" + ">" + "Record_ID</td>"
//                 html += "<td>vol</td>";
//                 html += "<td>SET_Temp</td>";
//                 html += "<td>YENT</td>";
                 html += "<td>操作</td>"
                 html += "</tr>"


                 $(_json).each(function (key) {

                     html += "<tr>";
//                     html += "<td>" + _json[key].ctn_id + "</td>";
                     html += "<td>" + _json[key].ctn_no + "</td>";
                     html += "<td>" + _json[key].pti_date + "</td>";
                     html += "<td>" + _json[key].pti_temperature + "</td>";
                     html += "<td>" + _json[key].INTO_PORT + "</td>";
                     html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].Record_ID + "</td>"
//                     html += "<td>" + _json[key].vol + "</td>";
//                     html += "<td>" + _json[key].SET_Temp + "</td>";
//                     html += "<td>" + _json[key].YENT + "</td>";
                     html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                      + "' onclick = '" + "EditItem(" + i + ")" + "'" + "/>" + "|"
                       + "<input type = " + "'" + "button" + "' value = " + "'" +
                        "删除" + "' onclick = '" + "return DeleteRFitemNew(" + i + ")" + "'" + "/>" + "</td>";

                     html += "</tr>";

                     i++;

                 });
                 $("#RFInfotable").html(html);
                 init();



             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }

         })




     }


     function QueryItemByctn_id() {

         var ctn_id = $("#ctn_id").val();

         if (ctn_id == "") {

             alert("请输入需要查询的ctn_id");
             return false;


         }


         $.ajax({

             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + ctn_id + "&val8=" + "QueryRfiteminfoByctn_id",
             success: function (ret) {
                 var str = JSON.stringify(ret.DTByctn_id);
                 if (str == "[]") {
                     alert("没有数据");
                     return false;
                 }

                 var _json = eval(ret.DTByctn_id);
                 //                     alert(_json);

                 $(_json).each(function (key) {
                     $("#ctn_id").val(_json[key].ctn_id);
                     $("#CTNR_NO2ID").val(_json[key].ctn_no);
                     $("#ptiDateID").val(_json[key].pti_date);
                     $("#RET_ID").val(_json[key].pti_temperature);



                 });
             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }

         })



     }


     function EditItem(i) {

         var Record_ID = $("#RFInfotable").find("tr").eq(i).find("td").eq(4).text();
         $("#Record_ID").val(Record_ID);

         var ctn_no = $("#RFInfotable").find("tr").eq(i).find("td").eq(0).text();
         $("#CTNR_NO2ID").val(ctn_no);

         var ptiDate = $("#RFInfotable").find("tr").eq(i).find("td").eq(1).text();
         $("#ptiDateID").val(ptiDate);

         var RET = $("#RFInfotable").find("tr").eq(i).find("td").eq(2).text();

         $("#RET_ID").val(RET);

         //将箱号设为只读
         $("#CTNR_NO2ID").attr("readonly", true);


     }



     function RFitemupdate() {

//         var ctn_id = $("#ctn_id").val();

//         if (ctn_id == "") {
//             alert("请输入需要打冷的ctn_id");
//             return false;

//         }

//         var RET = $("#RET_ID").val();

//         if (RET == "") {

//             alert("请输入温度");
//             return false;

//         }

//         var ptiDate = $("#ptiDateID").val();


//         if (ptiDate == "") {

//             alert("请选择打冷的日期");
//             return false;
         //         }


         var Record_ID = $("#Record_ID").val();

         var RET = $("#RET_ID").val();

         var ptiDate = $("#ptiDateID").val();

       


         $.ajax({

             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + Record_ID + "&val2=" + RET + "&val3=" + ptiDate + "&val8=" + "UpdateRfiteminfo",
             success: function (ret) {
                 var str = JSON.stringify(ret.strAddFlag);

                 alert(str);
                 window.location.reload();

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }



         })



     }



     function RFitemupdateNew() {


         var ctn_id = $("#modctn_id").val();

         if (ctn_id == "") {
             alert("请输入需要打冷的ctn_id");
             return false;

         }

         var RET = $("#modRetid").val();

         if (RET == "") {

             alert("请输入温度");
             return false;

         }

         var ptiDate = $("#modPtiDate").val();


         if (ptiDate == "") {

             alert("请选择打冷的日期");
             return false;
         }



         $.ajax({

             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + ctn_id + "&val2=" + RET + "&val3=" + ptiDate + "&val8=" + "UpdateRfiteminfo",
             success: function (ret) {
                 var str = JSON.stringify(ret.strAddFlag);

                 alert(str);
                 window.location.reload();
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
