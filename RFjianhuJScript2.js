 function init() {

         $("#ctn_id").val("");
         $("#CTNR_NO2ID").val("");
         $("#RET_ID").val("");
         $("#ptiDateID").val("");


     }



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



         $.ajax({

             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + CTNR_NO2 + "&val2=" + RET + "&val3=" + ptiDate + "&val8=" + "ADDRfiteminfo",
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

         var ctn_id = $("#RFInfotable").find("tr").eq(i).find("td").eq(0).text();

         if (ctn_id == "") {

             alert("请输入需要删除的ctn_id");
             return false;


         }

         if (!window.confirm('确定要删除箱id为' + ctn_id + '的记录吗')) {

             return false;
         }


         $.ajax({
             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + ctn_id + "&val8=" + "DeleteRfiteminfo",

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
                 html += "<td>CTN_ID</td>"
                 html += "<td>CTNR_NO</td>";
                 html += "<td>PTIDate</td>";
                 html += "<td>RET</td>";
                 html += "<td>INTO_PORT</td>";
                 html += "<td>vol</td>";
                 html += "<td>SET_Temp</td>";
                 html += "<td>YENT</td>";
                 html += "<td>操作</td>"
                 html += "</tr>"


                 $(_json).each(function (key) {

                     html += "<tr>";
                     html += "<td>" + _json[key].ctn_id + "</td>";
                     html += "<td>" + _json[key].ctn_no + "</td>";
                     html += "<td>" + _json[key].pti_date + "</td>";
                     html += "<td>" + _json[key].pti_temperature + "</td>";
                     html += "<td>" + _json[key].INTO_PORT + "</td>";
                     html += "<td>" + _json[key].vol + "</td>";
                     html += "<td>" + _json[key].SET_Temp + "</td>";
                     html += "<td>" + _json[key].YENT + "</td>";
                     html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "修改"
                      + "' onclick = '" + "divAppearnew(" + i + ")" + "'" + "/>" + "|"
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



     function RFitemupdate() {

         var ctn_id = $("#ctn_id").val();

         if (ctn_id == "") {
             alert("请输入需要打冷的ctn_id");
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



         $.ajax({

             type: "get",
             dataType: "json",
             url: "RFjianhuHandler.ashx?val1=" + ctn_id + "&val2=" + RET + "&val3=" + ptiDate + "&val8=" + "UpdateRfiteminfo",
             success: function (ret) {
                 var str = JSON.stringify(ret.strAddFlag);

                 alert(str);

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

