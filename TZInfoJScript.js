function Insert() {
    var TZCtn_no = $("#TZCtn_noId").val();  //箱号
    if (TZCtn_no == "") {
        alert("请输入箱号");
        return false;
    }
    var TZDate = $("#TZDateId").val(); //退租日期

    if (TZDate == "") {
        alert("请选择退租日期");
        return false;

    }
    
    var rTZDate = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (rTZDate == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
            return false;
        }
    
    
    
var regu = /^[0-9]+\.?[0-9]*$/;
    
    var TZNo = $("#TZNoId").val(); //退租号

    if (TZNo == "") {
        alert("请输入退租号");
        return false;

    }
    var TZAddress = $("#TZAddressId").val(); //退租地点

    if (TZAddress == "") {
        alert("请输入起租地点");
        return false;

    }
    var totalrmb = 0;
    var totalUSD = 0;
    var Rent = $("#RentId").val();
    var TZLintCoin = $("#TZLintCoinID").find("option:selected").text(); //退租装卸费币种
    var TZLint = $("#TZLintId").val(); //退租装卸费
    
      if (!regu.test(TZLint)) {
            alert("数量请输入数字");
            $("#TZLintId").focus();
            return false;

        }
    
    
    TZLint = TZLint * 1;
    if (TZLintCoin == "美元") {
        totalUSD = totalUSD + TZLint;
        totalrmb = totalrmb + TZLint * Rent;
    }
    if (TZLintCoin == "人民币") {
        totalrmb = totalrmb + TZLint;
        totalUSD = totalUSD + TZLint / Rent;
    }

    var TZPtiFeeCoin = $("#TZPtiFeeCoinID").find("option:selected").text(); //退租pti费用币种
    var TZPtiFee = $("#TZPtiFeeID").val(); //退租pti费用
    
    
      if (!regu.test(TZPtiFee)) {
            alert("数量请输入数字");
            $("#TZPtiFeeID").focus();
            return false;

        }
    
    
    TZPtiFee = TZPtiFee * 1;

    if (TZPtiFeeCoin == "美元") {
        totalUSD = totalUSD + TZPtiFee;
        totalrmb = totalrmb + TZPtiFee * Rent;
    }
    if (TZPtiFeeCoin == "人民币") {
        totalrmb = totalrmb + TZPtiFee;
        totalUSD = totalUSD + TZPtiFee / Rent;
    }
    var TZTransportFeeCoin = $("#TZTransportFeeCoinID").find("option:selected").text(); //退租运输费币种
    var TZTransportFee = $("#TZTransportFeeId").val(); //退租运输费
    
      if (!regu.test(TZTransportFee)) {
            alert("数量请输入数字");
            $("#TZTransportFeeId").focus();
            return false;

        }
    
    
    TZTransportFee = TZTransportFee * 1;
    if (TZTransportFeeCoin == "美元") {
        totalUSD = totalUSD + TZTransportFee;
        totalrmb = totalrmb + TZTransportFee * Rent;
    }
    if (TZTransportFeeCoin == "人民币") {
        totalrmb = totalrmb + TZTransportFee;
        totalUSD = totalUSD + TZTransportFee / Rent;

    }
    var TZRepairGPCoin = $("#TZRepairGPCoin").find("option:selected").text(); //退租修理费箱体币种
    var TZRepairGPfee = $("#TZRepairGPfeeID").val(); //退租修理费箱体
    
    
      if (!regu.test(TZRepairGPfee)) {
            alert("数量请输入数字");
            $("#TZRepairGPfeeID").focus();
            return false;

        }

    TZRepairGPfee = TZRepairGPfee * 1;

    if (TZRepairGPCoin == "美元") {
        totalUSD = totalUSD + TZRepairGPfee;
        totalrmb = totalrmb + TZRepairGPfee * Rent;
    }
    if (TZRepairGPCoin == "人民币") {
        totalrmb = totalrmb + TZRepairGPfee;
        totalUSD = totalUSD + TZRepairGPfee / Rent;
    }
    var TZRepairRFCoin = $("#TZRepairRFCoin").find("option:selected").text(); //退租修理费机组币种
    var TZRepairRFfee = $("#TZRepairRFfeeID").val(); //退租修理费机组
    
      if (!regu.test(TZRepairRFfee)) {
            alert("数量请输入数字");
            $("#TZRepairRFfeeID").focus();
            return false;

        }
    

    TZRepairRFfee = TZRepairRFfee * 1;

    if (TZRepairRFCoin == "美元") {
        totalUSD = totalUSD + TZRepairRFfee;
        totalrmb = totalrmb + TZRepairRFfee * Rent;
    }
    if (TZRepairRFCoin == "人民币") {
        totalrmb = totalrmb + TZRepairRFfee;
        totalUSD = totalUSD + TZRepairRFfee / Rent;
    }

    alert("美元总金额:" + totalUSD + ",人民币总金额:" + totalrmb + "汇率是" + Rent);

    $.ajax({
        type: "get",
        dataType: "json",
        url: "TZinfoHandler.ashx?val1=" + TZCtn_no + "&val2=" + TZDate + "&val3=" + TZNo + "&val4="
            + TZAddress + "&val5=" + Rent + "&val6=" + TZLintCoin + "&val7=" + TZLint + "&val8="
            + TZPtiFeeCoin + "&val9=" + TZPtiFee + "&val10=" + TZTransportFeeCoin + "&val11="
            + TZTransportFee + "&val12=" + TZRepairGPCoin + "&val13=" + TZRepairGPfee + "&val14="
            + TZRepairRFCoin + "&val15=" + TZRepairRFfee + "&val16=" + totalUSD + "&val17="
            + totalrmb + "&val18=" + "SubmitTZinfo",
        success: function (ret) {
            var str = JSON.stringify(ret.strAddFlag);
            alert(str);

        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }

    })


}

function DeleteTZinfo() {

    var TZCtn_no = $("#TZCtn_noId").val();  //箱号
    if (TZCtn_no == "") {
        alert("请输入箱号");
        return false;
    }
    
    
    if (!window.confirm('确定要删除箱号为' + TZCtn_no + '的记录吗')) {

            return false;
        }


    $.ajax({
        type: "get",
        datatype: "json",
        url: "TZinfoHandler.ashx?val1=" + TZCtn_no + "&val18=" + "DeleteTZinfo",
        success: function (ret) {

            var str = JSON.stringify(ret.strAddFlag);
            alert(str);


        }

    })


}


function QuerySingleTZinfo() {


    var TZCtn_no = $("#TZCtn_noId").val();  //箱号
    if (TZCtn_no == "") {
        alert("请输入箱号");
        return false;
    }
    $.ajax({

        type: "get",
        datatype: "json",
        url: "TZinfoHandler.ashx?val1=" + TZCtn_no + "&val18=" + "QueryTZinfo",
        success: function (ret) {


            var map = eval('(' + ret + ')');
            alert(map);




            var str = JSON.stringify(map.DTTZ);

            alert(str);

            if (str == "[]") {
                alert("没有数据");
                return false;
            }

            var _json = eval(map.DTTZ);
            alert(_json);


            var html = "";
            html += "<tr>";
            html += "<td>箱号</td>";
            html += "<td>退租日期</td>";
            html += "<td>退租号</td>";
            html += "<td>退租地点</td>";
            html += "<td>退租装卸费币种</td>";
            html += "<td>退租装卸费</td>";
            html += "<td>退租pti币种</td>";
            html += "<td>退租pti费用</td>";
            html += "<td>退租运输费币种</td>";
            html += "<td>退租运输费</td>";
            html += "<td>退租修理费(箱体)币种</td>";
            html += "<td>退租修理费(箱体)</td>";
            html += "<td>退租修理费(机组)币种</td>";
            html += "<td>退租修理费(机组)</td>";
            html += "<td>美元总金额</td>";
            html += "<td>人民币总金额</td>";
            html += "<td>汇率</td>";
            html += "</tr>";

            $(_json).each(function (key) {




                html += "<tr>";
                html += "<td>" + _json[key].ctn_no + "</td>";


                html += "<td>" + _json[key].TZDate + "</td>";
                html += "<td>" + _json[key].TZ_No + "</td>";
                html += "<td>" + _json[key].TZAddress + "</td>";
                html += "<td>" + _json[key].TZlintCoin + "</td>";
                html += "<td>" + _json[key].TZlint + "</td>";
                html += "<td>" + _json[key].TZptiCoin + "</td>";
                html += "<td>" + _json[key].TZpti + "</td>";
                html += "<td>" + _json[key].TZtransportCoin + "</td>";
                html += "<td>" + _json[key].TZtransportfee + "</td>";
                html += "<td>" + _json[key].TZRepfeeGPCoin + "</td>";
                html += "<td>" + _json[key].TZRepfeeGP + "</td>";
                html += "<td>" + _json[key].TZRepfeeRFCoin + "</td>";
                html += "<td>" + _json[key].TZRepfeeRF + "</td>";
                html += "<td>" + _json[key].TotalUSD + "</td>";
                html += "<td>" + _json[key].TotalRMB + "</td>";
                html += "<td>" + _json[key].Rent + "</td>";
                html += "</tr>";

            });
            $("#TZInfotable").html(html);


            $(_json).each(function (key) {

                $("#TZCtn_noId").val(_json[key].ctn_no);
                $("#TZDateId").val(_json[key].TZDate);
                $("#TZNoId").val(_json[key].TZ_No);
                $("#TZAddressId").val(_json[key].TZAddress);
                $("#TZLintCoinID").find("option:selected").text(_json[key].TZlintCoin);
                $("#TZLintId").val(_json[key].TZlint);
                $("#TZPtiFeeCoinID").find("option:selected").text(_json[key].TZptiCoin);
                $("#TZPtiFeeID").val(_json[key].TZpti);
                $("#TZTransportFeeCoinID").find("option:selected").text(_json[key].TZtransportCoin);
                $("#TZTransportFeeId").val(_json[key].TZtransportfee);
                $("#TZRepairGPCoin").find("option:selected").text(_json[key].TZRepfeeGPCoin);
                $("#TZRepairGPfeeID").val(_json[key].TZRepfeeGP);
                $("#TZRepairRFCoin").find("option:selected").text(_json[key].TZRepfeeRFCoin);
                $("#TZRepairRFfeeID").val(_json[key].TZRepfeeRF);
                $("#RentId").val(_json[key].Rent);


            });


        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }

    })



}
