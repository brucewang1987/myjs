function init() {

          $("#btnOut").attr("disabled", true);
          $("#nosee").hide();
          $("#ctn_no").focus();
      }

      init();

      $("#btnOutMod").click(function () {

          var dateout = prompt("请输入出场日期", "");
          var ctn_id = $("#ctn_id").val();
          var confirm_out_user = $("#span_username").text();

          $.ajax({
              type: "get",
              dataType: "json",
              url: "/DepotBusiness/GateInOutBusiness?ctn_id=" + ctn_id + "&dateOut=" + dateout + "&confirm_out_user=" + confirm_out_user + "&requestName=" + "confirmGateOutMod",

              success: function (ret) {

                  var result = ret.strResult;
                  if (result == "ok") {

                      alert("出场成功");
                      SelectGateOutData();
                  }
                  else {

                      alert("出场失败");
                  }

              }


          })


      });

      function GetRequest() {
          var url = location.search; //获取url中"?"符后的字串
          if (url.indexOf("?") != -1) {    //判断是否有参数
              var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
              strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
              //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
          }
          var username = strs[1];

          $("#span_username").text(username);




      }
      GetRequest();
      $("#btnOK").click(function () {

          SubmitGateIn();

      });


      $("#btnQuery").click(function () {

          SelectGateINData();
          $("#btnOut").attr("disabled", false);

      });

      $("#btnRush").click(function () {

          window.location.reload();

      });

      $("#btnOut").click(function () {

          ConfirmGateOut();

      });

      //箱号大小写转换
      $("#ctn_no").blur(function () {

          var ctn_no = $("#ctn_no").val();
          var _ctn_no = ctn_no.toUpperCase();

          $("#ctn_no").val(_ctn_no);

      });

      //箱型大小写转换
      $("#ctn_type").blur(function () {

          var ctn_type = $("#ctn_type").val();
          var _ctn_type = ctn_type.toUpperCase();

          $("#ctn_type").val(_ctn_type);

      });

      function SelectGateINData() {

          var ctn_no = $("#ctn_no").val();

          if (ctn_no == "") {

              alert("请录入箱号");
              $("#ctn_no").focus();
              return false;
          }

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?ctn_no=" + ctn_no + "&requestName=" + "SelectGateInData",
              success: function (ret) {

                  console.log(ret);



                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有数据");
                      window.location.reload();
                  }

                  var html = "";
                  html += "<tr>";
                  html += "<td>箱号</td>"; //0
                  html += "<td>尺寸</td>"; //1
                  html += "<td>箱型</td>"; //2
                  html += "<td>进场时间</td>"; //3
                  html += "<td>业务类型</td>"; //4
                  html += "<td>提交人</td>"; //5
                  html += "<td>提交时间</td>"; //6
                  html += "<td>堆场</td>"; //7
                  html += "<td>垫付金额</td>"; //8
                  html += "<td>超期费率</td>"//9
                  html += "<td>上下车费</td>"//10
                  html += "<td>进场备注</td>"//11
                  html += "<td>场位</td>"//12
                  html += "<td>铅封号</td>"//13
                  html += "<td>空重</td>"//14
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      $("#ctn_id").val(ret[key].ctn_id);
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].ctn_size + "</td>"//1
                      html += "<td>" + ret[key].ctn_type + "</td>"//2
                      html += "<td>" + ret[key].date_in + "</td>"//3
                      html += "<td>" + ret[key].business_tpe + "</td>"//4
                      html += "<td>" + ret[key].create_user + "</td>"//5
                      html += "<td>" + ret[key].create_date + "</td>"//6
                      html += "<td>" + ret[key].place_id + "</td>"//7
                      html += "<td>" + ret[key].advance_fee + "</td>"//8
                      html += "<td>" + ret[key].save_fee_rate + "</td>"//9
                      html += "<td>" + ret[key].updown_fee + "</td>"//10
                      html += "<td>" + ret[key].in_remark + "</td>"//11
                      html += "<td>" + ret[key].seat + "</td>"//12
                      html += "<td>" + ret[key].seal_no + "</td>"//13
                      html += "<td>" + ret[key].what_type + "</td>"//14
                      html += "</tr>";


                      var what_type2 = ret[key].what_type;

                      if (what_type2 == "空箱") {

                          what_type2 = "Empty";

                      }

                      if (what_type2 == "重箱") {

                          what_type2 = "Heavy";

                      }


                      $("#what_type").val(what_type2);
                      $("#ctn_size").val(ret[key].ctn_size);
                    

                  });
                  $("#GateInTab").html(html);


              }

          })

      }

      function SubmitGateIn() {

          var regu = /^[0-9]+\.?[0-9]*$/;
          var create_user = $("#span_username").text();
          var ctn_no = $("#ctn_no").val();
          if (ctn_no == "") {

              alert("请录入箱号");
              $("#ctn_no").focus();
              return false;
          }

          var iLength = ctn_no.length;
          if (iLength != 11) {
              alert("箱号有误");
              $("#ctn_no").focus();
              return false;
          }

          var ctn7 = ctn_no.substr(4, 7);
          var ctn4 = ctn_no.substr(0, 4);

          if (!/^[a-zA-Z]+$/.test(ctn4)) {

              alert("箱号前4位必须是字母");
              $("#ctn_no").focus();
              return false;

          }

          //              var ctn4_4 = ctn_no.substr(3, 1);
          //              if (ctn4_4 != "U") {

          //                  alert("箱号第4位有误");
          //                  $("#ctn_no").focus();
          //                  return false;

          //              }

          if (isNaN(ctn7)) {
              alert("箱号后7位必须为数字");
              $("#ctn_no").focus();
              return false;
          }

          var ctn_size = $("#ctn_size").val();
          if (ctn_size == "") {

              alert("请录入尺寸");
              $("#ctn_size").focus();
              return false;
          }


          if (!regu.test(ctn_size)) {

              alert("尺寸必须是数字");
              $("#ctn_size").focus();
              return false;
          }

          var ctn_type = $("#ctn_type").val();
          if (ctn_type == "") {

              alert("请录入箱型");
              $("#ctn_type").focus();
              return false;
          }

          if (!/^[a-zA-Z]+$/.test(ctn_type)) {

              alert("箱型必须是字母");
              $("#ctn_type").focus();
              return false;

          }

          var what_type = $("#what_type").val();

          if (what_type == "NoSelect") {

              alert("请选择空重");
              $("#what_type").focus();
              return false;
          }


          var business_type = $("#business_type").val();
          if (business_type == "NoSelect") {
              alert("请选择业务类型");
              $("#business_type").focus();
              return false;
          }

          if (what_type == "Heavy" && business_type != "ZLDC") {


              alert("重箱业务类型必须是暂落箱,请重新选择");
              $("#business_type").focus();
              return false;
          
          }

          var create_user = $("#span_username").text();



          var business_type_text = "";

          if (business_type == "ZDCN") {

              business_type_text = "指定箱号";
          }
          if (business_type == "ZLDC") {


              business_type_text = "暂落箱";
          }

          var isPayByself = $("#isPayByself").val();
          if (isPayByself == "NoSelect") {
              alert("请选择是否垫付");
              $("#isPayByself").focus();
              return false;
          }



          var advance_fee = $("#advance_fee").val();

          if (!regu.test(advance_fee)) {

              alert("请录入正确的数字");
              $("#advance_fee").focus();
              return false;
          }

          if (isPayByself == "Y") {

              if (advance_fee <= 0.00) {

                  alert("垫付金额必须大于0元");
                  $("#advance_fee").focus();
                  return false;
              }


          }
          else {

              advance_fee = 0.00;

          }

          var save_fee_rate = $("#save_fee_rate").val();

          if (what_type != "Heavy") {

              if (save_fee_rate == "") {
                  alert("请录入超期费率");
                  $("#save_fee_rate").focus();
                  return false;

              }

              if (!regu.test(save_fee_rate)) {
                  alert("请录入正确的数字");
                  $("#save_fee_rate").focus();
                  return false;
              }
              else {

                  if (save_fee_rate <= 0.00) {

                      alert("超期费率不得低于0.00元");
                      $("#save_fee_rate").focus();
                      return false;
                  }

              }



          }
          else {

              save_fee_rate = 0.00;

          
          }

    


          var updownfee = $("#updownfee").val();

          if (business_type == "ZLDC") {

              if (updownfee == 0.00) {

                  alert("暂落箱业务必须录入上下车费");
                  $("#updownfee").focus();
                  return false;

              }
              else {

                  if (!regu.test(updownfee)) {

                      alert("请录入正确的数字");
                      $("#updownfee").focus();
                      return false;
                  }

                  if (updownfee < 0.00) {
                      alert("暂落箱业务上下车费金额必须大于等于0元");
                      $("#updownfee").focus();
                      return false;

                  }


              }

          }

          var place_id = $("#place_id").val();

          if (place_id == "") {

              alert("请录入堆场");
              $("#place_id").focus();
              return false;
          }

          var in_remark = $("#remark").val();

          var seal_no = $("#seal_no").val();


          if (!window.confirm('录入信息为箱号:' + ctn_no + ',尺寸:' + ctn_size + ',箱型:' + ctn_type + ',业务类型:'
               + business_type_text + ',垫付金额:' + advance_fee + '超期费率:' + save_fee_rate + ',上下车费:' + updownfee
               + ',堆场号:' + place_id + ',铅封号:' + seal_no + ',备注:' + in_remark + '是否确认进场')) {
              return false;

          }

          $.ajax({


              type: "get",
              dataType: "json",
              url: "/DepotBusiness/GateInOutBusiness?ctn_no=" + ctn_no + "&ctn_size=" + ctn_size + "&ctn_type=" + ctn_type +
                "&business_tpe=" + business_type + "&create_user=" + create_user + "&advance_fee="
                + advance_fee + "&save_fee_rate=" + save_fee_rate + "&updownfee=" + updownfee
                + "&place_id=" + place_id + "&seal_no=" + seal_no + "&what_type=" + what_type + "&remark=" + in_remark + "&requestName=" + "submitGateInData",

              success: function (ret) {

                  var result = ret.strResult;
                  if (result == "ok") {

                      alert("提交成功");
                      SelectGateINData();
                  }
                  else {

                      alert("提交失败");
                  }

              }


          })

      }
      //确认出场
      function ConfirmGateOut() {

          var create_user = $("#span_username").text();
          var ctn_id = $("#ctn_id").val();
          var out_remark = $("#remark").val();
          var ctn_no = $("#ctn_no").val();
          var ctn_size = $("#ctn_size").val();
          var what_type = $("#what_type").val();

          if (!window.confirm('箱号:' + ctn_no + '是否确认出场')) {
              return false;

          }

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/GateInOutBusiness?ctn_id=" + ctn_id + "&confirm_out_user="
                 + create_user + "&remark=" + out_remark +"&ctn_size="+ctn_size+ "&what_type=" + what_type + "&requestName=" + "confirmGateOut",

              success: function (ret) {

                  var result = ret.strResult;
                  if (result == "ok") {

                      alert("出场成功");
                      SelectGateOutData();
                  }
                  else {

                      alert("出场失败");
                  }

              }

          })
      }

      function SelectGateOutData() {

          var ctn_id = $("#ctn_id").val();

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/DepotBusiness/SelectCtnData?ctn_id=" + ctn_id + "&requestName=" + "SelectGateOutData",

              success: function (ret) {

                  console.log(ret);
                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      console.log("没有数据");
                      return false;
                  }


                  var html = "";
                  html += "<tr>";
                  html += "<td>箱号</td>"; //0
                  html += "<td>出场时间</td>"; //1
                  html += "<td>尺寸</td>"; //2
                  html += "<td>箱型</td>"; //3
                  html += "<td>堆存费</td>"; //4
                  html += "<td>上下车费</td>"; //5
                  html += "<td>出场确认人</td>"; //6
                  html += "<td>堆场</td>"; //7
                  html += "<td>垫付金额</td>"; //8
                  html += "<td>总金额金额</td>"; //9
                  html += "<td>出场备注</td>"; //10
                  html += "<td>提箱场位</td>"; //11       
                  html += "</tr>";


                  $(ret).each(function (key) {

                      html += "<tr>";
                      html += "<td>" + ret[key].ctn_no + "</td>"//0
                      html += "<td>" + ret[key].date_out + "</td>"//1
                      html += "<td>" + ret[key].ctn_size + "</td>"//2
                      html += "<td>" + ret[key].ctn_type + "</td>"//3
                      html += "<td>" + ret[key].save_fee + "</td>"//4
                      html += "<td>" + ret[key].updown_fee + "</td>"//5
                      html += "<td>" + ret[key].confirm_out_user + "</td>"//6
                      html += "<td>" + ret[key].place_id + "</td>"//7
                      html += "<td>" + ret[key].advance_fee + "</td>"//8
                      html += "<td>" + ret[key].total_fee + "</td>"//9
                      html += "<td>" + ret[key].out_remark + "</td>"//10
                      html += "<td>" + ret[key].seat + "</td>"//11
                      html += "</tr>";

                  });

                  $("#GateInTab").html(html);


              },
              error: function (XmlHttpRequest, textStatus, errorThrown) {
                  alert(XmlHttpRequest.responseText);
              }

          })

      }





      jQuery(function () {
          jQuery('input:text:first').focus();
          var $inp = jQuery('input:text');
          $inp.bind('keydown', function (e) {
              var key = e.which;
              if (key == 13) {
                  e.preventDefault();
                  var nxtIdx = $inp.index(this) + 1;
                  jQuery(":input:text:eq(" + nxtIdx + ")").focus();
              }
          });
      }); 
