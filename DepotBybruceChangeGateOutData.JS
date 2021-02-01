 function init() {
        $("#nosee").hide();
        $("#btnChange").attr("disabled", true);
    }
    init();

    $("#btnQuery").click(function () {

        SelectGateOutData();

    });

    var irows = 0;

    function SelectGateOutData() {

        var ctn_no = $("#ctn_no").val();

        if (ctn_no == "") {

            alert("请录入需要修改的箱号");
            $("#ctn_no").focus();
            return false;

        }


        $.ajax({

            type: "get",
            dataType: "json",
            url: "/DepotBusiness/SelectCtnData?ctn_no=" + ctn_no + "&requestName=" + "SelectGateOutInfoByCtnNo",
            success: function (ret) {

                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    window.location.reload();
                }

                var html = "";
                var i = 1;
                html += "<tr>";
                html += "<td>箱号</td>"; //0
                html += "<td>进场时间</td>"; //1
                html += "<td>尺寸</td>"; //2
                html += "<td>箱型</td>"; //3
                html += "<td>业务类型</td>"; //4
                html += "<td>堆场</td>"; //5
                html += "<td>垫付金额</td>"; //6
                html += "<td>超期费率</td>"; //7
                html += "<td>上下车费</td>"; //8
                html += "<td>超期费用</td>"; //9
                html += "<td>出场时间</td>"; //10
                html += "<td>出场确认人</td>"; //11
                html += "<td>出场备注</td>"; //12
                html += "<td>总费用</td>"; //13
                html += "<td>操作</td>"; //14
                html += "</tr>";

                 $(ret).each(function (key) {

                     html += "<tr>";
                     html += "<td>" + ret[key].ctn_no + "</td>"//0
                     html += "<td>" + ret[key].date_in + "</td>"//1
                     html += "<td>" + ret[key].ctn_size + "</td>"//2
                     html += "<td>" + ret[key].ctn_type + "</td>"//3
                     html += "<td>" + ret[key].business_tpe + "</td>"//4
                     html += "<td>" + ret[key].place_id + "</td>"//5
                     html += "<td>" + ret[key].advance_fee + "</td>"//6
                     html += "<td>" + ret[key].save_fee_rate + "</td>"//7
                     html += "<td>" + ret[key].updown_fee + "</td>"//8
                     html += "<td>" + ret[key].save_fee + "</td>"//9
                     html += "<td>" + ret[key].date_out + "</td>"//10
                     html += "<td>" + ret[key].confirm_out_user + "</td>"//11
                     html += "<td>" + ret[key].out_remark + "</td>"//12
                     html += "<td>" + ret[key].total_fee + "</td>"//13
                     html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].ctn_id + "</td>"//14
                     html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑 "
                      + "' onclick = '" + "edit(" + i + ")" + "'" + "/>" + "</td>"//15
                     i++;
                 });

                 $("#ctnInfo").html(html);
                 $("#btnChange").attr("disabled", false);

             },
             error: function (XmlHttpRequest, textStatus, errorThrown) {
                 alert(XmlHttpRequest.responseText);
             }


        })

     }

     function edit(i) {

         $("#ctnInfo").find('tr').eq(irows).css('background-color', '#6495ED');

         var date_out = $("#ctnInfo").find("tr").eq(i).find("td").eq(10).text();
         $("#date_out").val(date_out);
         var save_fee = $("#ctnInfo").find("tr").eq(i).find("td").eq(9).text();
         $("#save_fee").val(save_fee);
         var out_remark = $("#ctnInfo").find("tr").eq(i).find("td").eq(12).text();
         $("#out_remark").val(out_remark);
         var ctn_id = $("#ctnInfo").find("tr").eq(i).find("td").eq(14).text();
         $("#ctn_id").val(ctn_id);
         console.log(ctn_id);

         irows = i;
         console.log(i);

         $("#ctnInfo").find('tr').eq(irows).css('background-color', 'red');

     }

     function ChangeGateOutData() {

         var regu = /^[0-9]+\.?[0-9]*$/;
         var ctn_id = $("#ctn_id").val();
         var save_fee = $("#save_fee").val();
         if (!regu.test(save_fee)) {

             alert("请填入正确的金额");
             $("#save_fee").focus();
             return false;
         }

         var date_out = $("#date_out").val();
         var _reTimeReg = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
         if (!_reTimeReg.test(date_out)) {
             alert("开始时间格式应为yyyy-MM-dd HH:mm:ss");
             $("#date_out").focus();
             return false;

         }

         var out_remark = $("#out_remark").val();


         $.ajax({

             type: "get",
             dataType: "json",
             url: "/DepotBusiness/GateInOutBusiness?ctn_id=" + ctn_id + "&save_fee=" + save_fee + "&dateOut="
                + date_out + "&out_remark=" + out_remark + "&requestName=" + "changeGateOutData",

             success: function (ret) {


                 var result = ret.strResult;
                 if (result == "ok") {

                     alert("修改成功");
                     SelectGateOutData();

                 }
                 else {

                     alert("修改失败");
                 }

             }

         })


     }

     $("#btnChange").click(function () {

         ChangeGateOutData();

     });
