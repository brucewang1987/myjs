   function init() {


         $("#btnUpdate").attr("disabled", true);


     }

     init();


     $("#btnAdd").click(function () {

         AddQZInfo();

     });





          function AddQZInfo() {


              var ctn_no = $("#ctn_no").val();

              if (ctn_no == "") {

                  alert("请输入箱号");
                  return false;

              }

              var itotal = 0;

              var ctnnoLen = ctn_no.length;

              var regu = /^[0-9]+\.?[0-9]*$/;

              var ctn7 = ctn_no.substr(4, 7);
              var ctn4 = ctn_no.substr(0, 4);

              if (ctnnoLen != 11) {

                  alert("箱号长度应为11位,请重新输入");
                  return false;

              }
              else if (!/^[a-zA-Z]+$/.test(ctn4)) {

                  alert("箱号前4位必须是字母");
                  return false;

              }
              if (isNaN(ctn7)) {
                  alert("箱号后7位必须为数字");
                  return false;
              }
             


              var iChar = 0;
              for (var i = 0; i < ctn4.length; i++) {

                  var sChar = ctn4.substr(i, 1);

                  if (sChar == "A") {

                      iChar = 10;

                  }
                  if (sChar == "B") {

                      iChar = 12;

                  }
                  if (sChar == "C") {

                      iChar = 13;

                  }
                  if (sChar == "D") {

                      iChar = 14;

                  }
                  if (sChar == "E") {

                      iChar = 15;

                  }
                  if (sChar == "F") {

                      iChar = 16;

                  }
                  if (sChar == "G") {

                      iChar = 17;

                  }
                  if (sChar == "H") {

                      iChar = 18;

                  }
                  if (sChar == "I") {

                      iChar = 19;

                  }
                  if (sChar == "J") {

                      iChar = 20;

                  }
                  if (sChar == "K") {

                      iChar = 21;

                  }
                  if (sChar == "L") {

                      iChar = 23;

                  }
                  if (sChar == "M") {

                      iChar = 24;

                  }
                  if (sChar == "N") {

                      iChar = 25;

                  }
                  if (sChar == "O") {

                      iChar = 26;

                  }
                  if (sChar == "P") {

                      iChar = 27;

                  }
                  if (sChar == "Q") {

                      iChar = 28;

                  }
                  if (sChar == "Q") {

                      iChar = 28;

                  }
                  if (sChar == "R") {

                      iChar = 29;

                  }
                  if (sChar == "S") {

                      iChar = 30;

                  }
                  if (sChar == "T") {

                      iChar = 31;

                  }
                  if (sChar == "U") {

                      iChar = 32;

                  }
                  if (sChar == "V") {

                      iChar = 34;

                  }
                  if (sChar == "W") {

                      iChar = 35;

                  }
                  if (sChar == "X") {

                      iChar = 36;

                  }
                  if (sChar == "Y") {

                      iChar = 37;

                  }
                  if (sChar == "Z") {

                      iChar = 38;

                  }
                  //                iChar = ConvertChar(sChar);


                  var temp = iChar * Math.pow(2, i);

                  itotal = itotal + temp;
              }

              for (var j = 4; j < 10; j++) {

                  iChar = ctn_no.substr(j, 1) * 1;

                  console.log(iChar);

                  itotal = itotal + iChar * Math.pow(2, j);
              }


              var sCRC = (itotal % 11) + '';

              if (sCRC == "10") {


                  sCRC = "0";

              }

              if (sCRC == ctn_no.substr(10, 1)) {


                  console.log("箱号正确");

              }
              else {


                  // alert("箱号非法,校验码为" + sCRC + "!");
                  // return false;

                  if (!window.confirm('不符合箱号规则是否强制录入')) {
                      return false;

                  }

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

              var QZNo = $("#QZNo").val();


              var Machine_No = $("#Machine_No").val();


              var Make_date = $("#Make_date").val();

              if (Make_date == "") {

                  alert("请选择制造日期");
                  return false;

              }

              var QZAdress = $("#QZAdress").val();

              var RentDailyCoin = $("#RentDailyCoin").find("option:selected").text();

              var RentDaily = $("#RentDaily").val();

              var QZLoadFeeCoin = $("#QZLoadFeeCoin").find("option:selected").text();
              var QZLoadFee = $("#QZLoadFee").val();
              var QZPtiFeeCoin = $("#QZPtiFeeCoin").find("option:selected").text();
              var QZPtiFee = $("#QZPtiFee").val();
              var QZTranFeeCoin = $("#QZTranFeeCoin").find("option:selected").text();
              var QZTranFee = $("#QZTranFee").val();


              $.ajax({


                  type: "get",
                  dataType: "json",
                  url: "/QZInfo/QZBusiness?val1=" + ctn_no + "&val2=" + QZDate + "&val3=" + QZNo +
                     "&val4=" + Machine_No + "&val5=" + Make_date + "&val6=" + QZAdress +
                     "&val7=" + RentDaily + "&val8=" + RentDailyCoin + "&val9=" + QZLoadFee +
                     "&val10=" + QZLoadFeeCoin + "&val11=" + QZPtiFee + "&val12=" + QZPtiFeeCoin +
                     "&val13=" + QZTranFee + "&val14=" + QZTranFeeCoin + "&val88=" + "AddQzinfo",

                  success: function (ret) {

                      var map = eval('(' + ret + ')');
                      var response = JSON.stringify(map.Response);

                      alert(response);

                      window.location.reload();

                  }



              })


          }


          $("#btnQuery").click(function () {

              QueryQZinfo();

          });


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
                      }

                      var _json = eval(map.dt);

                      var response = JSON.stringify(map.Response);



                      var html = "";
                      var i = 1;

                      html += "<tr>";
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
                      html += "<td>操作</td>"; //17
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
                          html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                           + "' onclick = '" + "EditQZinfo(" + i + ")" + "'" + "/>" + "</td>";

                          html += "</tr>";

                      });
                      $("#QZinfoTable").html(html);
                      $("#btnAdd").attr("disabled", true);
                      $("#btnUpdate").attr("disabled", false);

                  },
                  error: function (XmlHttpRequest, textStatus, errorThrown) {
                      alert(XmlHttpRequest.responseText);
                  }


              })


          }


     function EditQZinfo(i) {

         var ctn_id = $("#QZinfoTable").find("tr").eq(i).find("td").eq(0).text();
         $("#ctn_id").val(ctn_id);
         var ctn_no = $("#QZinfoTable").find("tr").eq(i).find("td").eq(1).text();
         $("#ctn_no").val(ctn_no);
         var QZNo = $("#QZinfoTable").find("tr").eq(i).find("td").eq(3).text();
         $("#QZNo").val(QZNo);
         var QZDate = $("#QZinfoTable").find("tr").eq(i).find("td").eq(2).text();
         $("#QZDate").val(QZDate);
         var Machine_No = $("#QZinfoTable").find("tr").eq(i).find("td").eq(4).text();
         $("#Machine_No").val(Machine_No);
         var Make_date = $("#QZinfoTable").find("tr").eq(i).find("td").eq(5).text();
         $("#Make_date").val(Make_date);
         var QZAdress = $("#QZinfoTable").find("tr").eq(i).find("td").eq(6).text();
         $("#QZAdress").val(QZAdress);
         var RentDailyCoin = $("#QZinfoTable").find("tr").eq(i).find("td").eq(7).text();
         $("#RentDailyCoin").find("option:selected").text(RentDailyCoin);
         var RentDaily = $("#QZinfoTable").find("tr").eq(i).find("td").eq(8).text();
         $("#RentDaily").val(RentDaily);
         var QZLoadFeeCoin = $("#QZinfoTable").find("tr").eq(i).find("td").eq(9).text();
         $("#QZLoadFeeCoin").find("option:selected").text(QZLoadFeeCoin);
         var QZLoadFee = $("#QZinfoTable").find("tr").eq(i).find("td").eq(10).text();
         $("#QZLoadFee").val(QZLoadFee);
         var QZPtiFeeCoin = $("#QZinfoTable").find("tr").eq(i).find("td").eq(11).text();
         $("#QZPtiFeeCoin").find("option:selected").text(QZPtiFeeCoin);
         var QZPtiFee = $("#QZinfoTable").find("tr").eq(i).find("td").eq(12).text();
         $("#QZPtiFee").val(QZPtiFee);
         var QZTranFeeCoin = $("#QZinfoTable").find("tr").eq(i).find("td").eq(13).text();
         $("#QZTranFeeCoin").find("option:selected").text(QZTranFeeCoin);
         var QZTranFee = $("#QZinfoTable").find("tr").eq(i).find("td").eq(14).text();
         $("#QZTranFee").val(QZTranFee);

     }



     $("#btnUpdate").click(function () {

         ChangeQZInfo();

     });


          function ChangeQZInfo() {

              var regu = /^[0-9]+\.?[0-9]*$/;

              var ctn_id = $("#ctn_id").val(); //val1
              var QZDate = $("#QZDate").val(); //val2

              if (QZDate == "") {

                  alert("请选择起租日期");
                  return false;

              }


              var r = QZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
              if (r == null) {
                  alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                  return false;
              }

              var QZNo = $("#QZNo").val(); //val3


              var Machine_No = $("#Machine_No").val(); //val4


              var Make_date = $("#Make_date").val(); //val5

              if (Make_date == "") {

                  alert("请选择制造日期");
                  return false;

              }

              var QZAdress = $("#QZAdress").val(); //val6

              var RentDailyCoin = $("#RentDailyCoin").find("option:selected").text(); //val7

              var RentDaily = $("#RentDaily").val(); //val8

              if (RentDaily != "") {

                  if (!regu.test(RentDaily)) {
                      alert("日租金请输入数字");
                      $("#RentDaily").focus();
                      return false;

                  }


              }





              var QZLoadFeeCoin = $("#QZLoadFeeCoin").find("option:selected").text(); //val9
              var QZLoadFee = $("#QZLoadFee").val(); //val10


              if (QZLoadFee != "") {

                  if (!regu.test(QZLoadFee)) {
                      alert("起租装卸费请输入数字");
                      $("#QZLoadFee").focus();
                      return false;

                  }


              }


              var QZPtiFeeCoin = $("#QZPtiFeeCoin").find("option:selected").text(); //val11
              var QZPtiFee = $("#QZPtiFee").val(); //val12

              if (QZPtiFee != "") {

                  if (!regu.test(QZPtiFee)) {
                      alert("起租pti费请输入数字");
                      $("#QZPtiFee").focus();
                      return false;

                  }


              }


              var QZTranFeeCoin = $("#QZTranFeeCoin").find("option:selected").text(); //val13
              var QZTranFee = $("#QZTranFee").val(); //val14


              if (QZTranFee != "") {

                  if (!regu.test(QZTranFee)) {
                      alert("起租运输费请输入数字");
                      $("#QZTranFee").focus();
                      return false;

                  }

              }


              $.ajax({

                  type: "get",
                  dataType: "json",
                  url: "/QZInfo/QZBusiness?val1=" + ctn_id + "&val2=" + QZDate + "&val3=" + QZNo +
                     "&val4=" + Machine_No + "&val5=" + Make_date + "&val6=" + QZAdress + "&val7=" + RentDailyCoin
                      + "&val8=" + RentDaily + "&val9=" + QZLoadFeeCoin + "&val10=" + QZLoadFee + "&val11=" + QZPtiFeeCoin
                     + "&val12=" + QZPtiFee + "&val13=" + QZTranFeeCoin + "&val14=" + QZTranFee
                      + "&val88=" + "ChangeQZInfo",


                  success: function (ret) {


                      var map = eval('(' + ret + ')');
                      var response = JSON.stringify(map.Response);

                      alert(response);

                      QueryQZinfo();

                  }



              })




          }
