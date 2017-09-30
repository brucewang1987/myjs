function init() {

    refresh();
}


function Insert() {

    var QZCtn_no = $("#QZCtn_noId").val();  //箱号

    if (QZCtn_no == "") {
        alert("请输入箱号");
        return false;

    }

    var QZDate = $("#QZDateId").val(); //起租日期

    if (QZDate == "") {
        alert("请选择起租日期");
        return false;

    }

    var rQZDate = INTO_PORT.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (rQZDate == null) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
        return false;
    }




    var QZNo = $("#QZNoId").val(); //起租号

    if (QZNo == "") {
        alert("请输入起租号");
        return false;

    }

    var machineType = $("#machineTypeId").val(); //机型型号

    if (machineType == "") {
        alert("请输入机型型号");
        return false;

    }


    var MakeDate = $("#MakeDateId").val(); //造箱日期

    if (MakeDate == "") {
        alert("请选择起租日期");
        return false;

    }


    var rMakeDate = INTO_PORT.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (rMakeDate == null) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
        return false;
    }


    var QZAddress = $("#QZAddressId").val(); //起租地点

    if (QZAddress == "") {
        alert("请输入起租地点");
        return false;

    }

    var totalrmb = 0;
    var totalUSD = 0;

    var Rent = $("#RentId").val();


    var QZRentCoin = $("#RentDailyCoinId").find("option:selected").text(); //日租金币种
    var RentDaily = $("#RentDailyId").val(); //日租金
    RentDaily = RentDaily * 1;

    if (QZRentCoin == "美元") {
        totalUSD = totalUSD + RentDaily;
        totalrmb = totalrmb + RentDaily * Rent;
    }
    if (QZRentCoin == "人民币") {
        totalrmb = totalrmb + RentDaily;
        totalUSD = totalUSD + RentDaily / Rent;


    }

    var QZLintCoin = $("#QZLintCoinID").find("option:selected").text(); //起租装卸费币种
    var QZLint = $("#QZLintId").val(); //起租装卸费

    QZLint = QZLint * 1;

    if (QZLintCoin == "美元") {
        totalUSD = totalUSD + QZLint;
        totalrmb = totalrmb + QZLint * Rent;
    }
    if (QZLintCoin == "人民币") {
        totalrmb = totalrmb + QZLint;
        totalUSD = totalUSD + QZLint / Rent;


    }

    var QZPtiFeeCoin = $("#QZPtiFeeCoinID").find("option:selected").text(); //起租pti费用币种
    var QZPtiFee = $("#QZPtiFeeID").val(); //起租pti费用


    QZPtiFee = QZPtiFee * 1;

    if (QZPtiFeeCoin == "美元") {
        totalUSD = totalUSD + QZPtiFee;
        totalrmb = totalrmb + QZPtiFee * Rent;
    }
    if (QZPtiFeeCoin == "人民币") {
        totalrmb = totalrmb + QZPtiFee;
        totalUSD = totalUSD + QZPtiFee / Rent;


    }

    var QZTransportFeeCoin = $("#QZTransportFeeCoinID").find("option:selected").text(); //起租运输费币种
    var QZTransportFee = $("#QZTransportFeeId").val(); //起租运输费


    QZTransportFee = QZTransportFee * 1;

    if (QZTransportFeeCoin == "美元") {
        totalUSD = totalUSD + QZTransportFee;
        totalrmb = totalrmb + QZTransportFee * Rent;
    }
    if (QZTransportFeeCoin == "人民币") {
        totalrmb = totalrmb + QZTransportFee;
        totalUSD = totalUSD + QZTransportFee / Rent;


    }

    ////                        alert("提交成功,美元总金额：" + totalUSD + ",人民币总金额:" + totalrmb);

    $.ajax({
        type: "get",
        dataType: "json",
        url: "QzinfoHandler.ashx?val1=" + QZCtn_no + "&val2=" + QZDate + "&val3=" + QZNo + "&val4=" + machineType + "&val5=" + MakeDate + "&val6=" + QZAddress + "&val7=" + QZRentCoin + "&val8=" + RentDaily + "&val9=" + QZLintCoin + "&val10=" + QZLint + "&val11=" + QZPtiFeeCoin + "&val12=" + QZPtiFee + "&val13=" + QZTransportFeeCoin + "&val14=" + QZTransportFee + "&val15=" + Rent + "&val16=" + totalUSD + "&val17=" + totalrmb + "&val18=" + "ADDQzinfo",
        success: function (ret) {

            //                    var _json = eval(ret);
            //                    alert(_json);

            var str = JSON.stringify(ret.strAddFlag);

            alert(str);

            //                    var flag = eval(ret.strAddFlag);

            //                    alert(flag);


            window.location.reload();

            //                    alert("提交成功");



        }

    }

            )
}


function Delete() {

    var QZCtn_no = $("#QZCtn_noId").val();  //箱号

    if (QZCtn_no == "") {
        alert("请输入箱号");
        return false;

    }

    $.ajax({
        type: "get",
        dataType: "json",
        url: "QzinfoHandler.ashx?val1=" + QZCtn_no + "&val18=" + "DeletQzinfo",

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



function QzInfoSingleQuery() {
    var QZCtn_no = $("#QZCtn_noId").val();  //箱号

    if (QZCtn_no == "") {
        alert("请输入箱号");
        return false;

    }


    $.ajax({

        type: "get",
        dataType: "json",
        url: "QzinfoHandler.ashx?val1=" + QZCtn_no + "&val18=" + "QueryQzinfo",

        success: function (ret) {

            //                    alert("后台传来的ret" + ret);

            var data = JSON.stringify(ret);

            //                    alert("data:" + data);

            var str = JSON.stringify(ret.DT);
            //                    alert(str);
            if (str == "[]") {
                alert("没有数据");
                return false;
            }

            var _json = eval(ret.DT);

            //                    alert(_json);

            var html = "";
            html += "<tr>";
            html += "<td>箱号</td>";
            html += "<td>起租日期</td>";
            html += "<td>起租号</td>";
            html += "<td>机型型号</td>";
            html += "<td>造箱日期</td>";
            html += "<td>起租地点</td>";
            html += "<td>日租金币种</td>";
            html += "<td>日租金</td>";
            html += "<td>起租装卸费币种</td>";
            html += "<td>起租装卸费</td>";
            html += "<td>起租pti检验费币种</td>";
            html += "<td>起租pti检验费</td>";
            html += "<td>起租运输费币种</td>";
            html += "<td>起租运输费</td>";
            html += "<td>汇率</td>";
            html += "<td>总金额(美元)</td>";
            html += "<td>总金额(人民币)</td>";
            html += "</tr>";


            $(_json).each(function (key) {
                html += "<tr>";
                html += "<td>" + _json[key].QZCtn_no + "</td>";
                html += "<td>" + _json[key].QZDate + "</td>";
                html += "<td>" + _json[key].QZNo + "</td>";
                html += "<td>" + _json[key].Machine_No + "</td>";
                html += "<td>" + _json[key].MakeDate + "</td>";
                html += "<td>" + _json[key].QzAddress + "</td>";
                html += "<td>" + _json[key].RentDailyCoin + "</td>";
                html += "<td>" + _json[key].RentDaily + "</td>";
                html += "<td>" + _json[key].LintCoin + "</td>";
                html += "<td>" + _json[key].QZLint + "</td>";
                html += "<td>" + _json[key].QZPtiCoin + "</td>";
                html += "<td>" + _json[key].QZPti + "</td>";
                html += "<td>" + _json[key].TransportCoin + "</td>";
                html += "<td>" + _json[key].TransportFee + "</td>";
                html += "<td>" + _json[key].Rate + "</td>";
                html += "<td>" + _json[key].TotalUSD + "</td>";
                html += "<td>" + _json[key].TotalRMB + "</td>";

                html += "</tr>";
            });
            $("#QZInfotable").html(html);


            $(_json).each(function (key) {

                $("#QZCtn_noId").val(_json[key].QZCtn_no);
                $("#QZDateId").val(_json[key].QZDate);
                $("#QZNoId").val(_json[key].QZNo);
                $("#machineTypeId").val(_json[key].Machine_No);
                $("#MakeDateId").val(_json[key].MakeDate);
                $("#QZAddressId").val(_json[key].QzAddress);
                $("#RentId").val(_json[key].Rate);
                $("#RentDailyCoinId").find("option:selected").text(_json[key].RentDailyCoin);
                $("#RentDailyId").val(_json[key].RentDaily);
                $("#QZLintCoinID").find("option:selected").text(_json[key].LintCoin);
                //                        $("#QZLintCoinID").val(_json[key].LintCoin);
                $("#QZLintId").val(_json[key].QZLint);
                $("#QZPtiFeeCoinID").find("option:selected").text(_json[key].QZPtiCoin);
                //                        $("#QZPtiFeeCoinID").val(_json[key].QZPtiCoin);
                $("#QZPtiFeeID").val(_json[key].QZPti);
                $("#QZTransportFeeCoinID").find("option:selected").text(_json[key].TransportCoin);
                //                        $("#QZTransportFeeCoinID").val(_json[key].TransportCoin);
                $("#QZTransportFeeId").val(_json[key].TransportFee);
            });



        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }


    })



}
