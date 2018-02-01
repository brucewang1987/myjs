 function AddInfo() {

         var ctn_no = $("#ctn_noId").val();

         if (ctn_no == "") {

             alert("请输入箱号");
             return false;

         }

         var QZDate = $("#QZDate").val();
         if (QZDate == "") {

             alert("请选择起租日期");
             return false;

         }
         var r = QZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
         if (r == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
             return false;
         }



         var QZAdress = $("#QZAdress").val();

         if (QZAdress == "") {

             alert("请输入起租地点");
             return false;
         }

         var QZNo = $("#QZNoID").val();

         if (QZNo == "") {

             alert("请输入起租号");
             return false;
         }

         var MachineNo = $("#MachineId").val();

         if (MachineNo == "") {

             alert("请输入机型型号");
             return false;

         }

         var MakeDate = $("#MakeDate").val();

         if (MakeDate == "") {

             alert("请选择制造日期");
             return false;
         }



         var Rent = $("#RentId").val();

         if (Rent == "") {

             alert("请输入日租金");
             return false;

         }

         Rent = Rent * 1;

         var total = 0;
         var regu = /^[0-9]+\.?[0-9]*$/;

         var QZLoadFee = $("#QZLoadFee").val();

         if (QZLoadFee == "") {

             alert("请输入起租装卸费");
             return false;

         }

         if (!regu.test(QZLoadFee)) {

             alert("起租装卸费请输入数字");
             $("#QZLoadFee").focus();
             return false;

         }

         QZLoadFee = QZLoadFee * 1;

         total = total + QZLoadFee;


         var QZCheckpti = $("#QZCheckpti").val();
         if (QZCheckpti == "") {

             alert("请输入起租pti费");
             return false;

         }

         if (!regu.test(QZCheckpti)) {

             alert("起租pti费请输入数字");
             $("#QZCheckpti").focus();
             return false;

         }

         QZCheckpti = QZCheckpti * 1;

         total = total + QZCheckpti;

         var QZTranFee = $("#QZTranFee").val();

         if (QZTranFee == "") {

             alert("请输入起租运输费");
             return false;

         }

         if (!regu.test(QZTranFee)) {

             alert("起租运输费请输入数字");
             $("#QZTranFee").focus();
             return false;

         }

         QZTranFee = QZTranFee * 1;

         total = total + QZTranFee;



         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZBusiness/QZBusiness?val1=" + ctn_no + "&val2=" + QZDate +
            "&val3=" + QZAdress + "&val4=" + QZNo + "&val5=" + MachineNo +
            "&val6=" + MakeDate + "&val7=" + Rent + "&val8=" + QZLoadFee +
            "&val9=" + QZCheckpti + "&val10=" + QZTranFee + "&val11=" + total + "&val88=" + "AddQzInfo",

             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 window.location.reload();

             }


         })


     }

     function QueryQZinfo() {

         var ctn_no = $("#ctn_noId").val();

         if (ctn_no == "") {

             alert("请输入箱号");
             return false;

         }

         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZBusiness/QZBusiness?val1=" + ctn_no + "&val88=" + "QueryQZInfo",

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
                     $("#ctn_noId").val(_json[key].ctn_no);
                     $("#QZDate").val(_json[key].QZDate);
                     $("#QZNoID").val(_json[key].QZNo);
                     $("#MachineId").val(_json[key].MachineNo);
                     $("#MakeDate").val(_json[key].MakeDate);
                     $("#QZAdress").val(_json[key].QZAddress);
                     $("#RentId").val(_json[key].RentDaily);
                     $("#QZLoadFee").val(_json[key].QZLoadFee);
                     $("#QZCheckpti").val(_json[key].QZPtiFee);
                     $("#QZTranFee").val(_json[key].QZTranFee);

                 });
                 var html = "";
                 html += "<tr>";
                 html += "<td>箱号</td>";
                 html += "<td>起租日期</td>";
                 html += "<td>起租号</td>";
                 html += "<td>机型型号</td>";
                 html += "<td>制造日期</td>";
                 html += "<td>起租地点</td>";
                 html += "<td>日租金</td>";
                 html += "<td>起租装卸费</td>";
                 html += "<td>起租pti检验费</td>";
                 html += "<td>起租运输费</td>";
                 html += "<td>起租总费用</td>";
                 html += "<td>录入时间</td>";
                 html += "<td>修改时间</td>";
                 html += "</tr>";

                 $(_json).each(function (key) {

                     html += "<tr>";
                     html += "<td>" + _json[key].ctn_no + "</td>";
                     html += "<td>" + _json[key].QZDate + "</td>";
                     html += "<td>" + _json[key].QZNo + "</td>";
                     html += "<td>" + _json[key].MachineNo + "</td>";
                     html += "<td>" + _json[key].MakeDate + "</td>";
                     html += "<td>" + _json[key].QZAddress + "</td>";
                     html += "<td>" + "$" + _json[key].RentDaily + "</td>";
                     html += "<td>" + "$" + _json[key].QZLoadFee + "</td>";
                     html += "<td>" + "$" + _json[key].QZPtiFee + "</td>";
                     html += "<td>" + "$" + _json[key].QZTranFee + "</td>";
                     html += "<td>" + "$" + _json[key].QZTotal + "</td>";
                     html += "<td>" + _json[key].inputDate + "</td>";
                     html += "<td>" + _json[key].changeDate + "</td>";
                     html += "</tr>";


                 });
                 $("#QZinfoTable").html(html);
                 $("#btnOk").attr("disabled", true);

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }


         })


     }


     function UpdateQZinfo() {


         var ctn_no = $("#ctn_noId").val();

         if (ctn_no == "") {

             alert("请输入箱号");
             return false;

         }

         var QZDate = $("#QZDate").val();
         if (QZDate == "") {

             alert("请选择起租日期");
             return false;

         }
         var r = QZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
         if (r == null) {
             alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
             return false;
         }



         var QZAdress = $("#QZAdress").val();

         if (QZAdress == "") {

             alert("请输入起租地点");
             return false;
         }

         var QZNo = $("#QZNoID").val();

         if (QZNo == "") {

             alert("请输入起租号");
             return false;
         }

         var MachineNo = $("#MachineId").val();

         if (MachineNo == "") {

             alert("请输入机型型号");
             return false;

         }

         var MakeDate = $("#MakeDate").val();

         if (MakeDate == "") {

             alert("请选择制造日期");
             return false;
         }



         var Rent = $("#RentId").val();

         if (Rent == "") {

             alert("请输入日租金");
             return false;

         }

         Rent = Rent * 1;

         var total = 0;
         var regu = /^[0-9]+\.?[0-9]*$/;

         var QZLoadFee = $("#QZLoadFee").val();

         if (QZLoadFee == "") {

             alert("请输入起租装卸费");
             return false;

         }

         if (!regu.test(QZLoadFee)) {

             alert("起租装卸费请输入数字");
             $("#QZLoadFee").focus();
             return false;

         }

         QZLoadFee = QZLoadFee * 1;

         total = total + QZLoadFee;


         var QZCheckpti = $("#QZCheckpti").val();
         if (QZCheckpti == "") {

             alert("请输入起租pti费");
             return false;

         }

         if (!regu.test(QZCheckpti)) {

             alert("起租pti费请输入数字");
             $("#QZCheckpti").focus();
             return false;

         }

         QZCheckpti = QZCheckpti * 1;

         total = total + QZCheckpti;

         var QZTranFee = $("#QZTranFee").val();

         if (QZTranFee == "") {

             alert("请输入起租运输费");
             return false;

         }

         if (!regu.test(QZTranFee)) {

             alert("起租运输费请输入数字");
             $("#QZTranFee").focus();
             return false;

         }

         QZTranFee = QZTranFee * 1;

         total = total + QZTranFee;


         $.ajax({

             type: "get",
             dataType: "json",
             url: "/QZBusiness/QZBusiness?val1=" + ctn_no + "&val2=" + QZDate +
            "&val3=" + QZAdress + "&val4=" + QZNo + "&val5=" + MachineNo +
            "&val6=" + MakeDate + "&val7=" + Rent + "&val8=" + QZLoadFee +
            "&val9=" + QZCheckpti + "&val10=" + QZTranFee + "&val11=" + total + "&val88=" + "UpdateQZinfo",

             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 QueryQZinfo();



             }


         })


     }
