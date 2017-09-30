function InsertInfo() {

    //            var RepairNo = $("#RepairId").val();
    //            if (RepairNo == "") {

    //                alert("请输入修理编号");
    //                return false;
    //            }


    var RepairDate = $("#RepairDateId").val();
    if (RepairDate == "") {

        alert("请选择修理日期");
        return false;
    }
    var JobInfo = $("#jobInfoId").val();

    if (JobInfo == "") {

        alert("请填写工作内容");
        return false;
    }

    var Days = $("#DaysId").val();

    if (Days == "") {

        alert("请输入天数");
        return false;
    }

    var RepairAddress = $("#RepairAddressID").val();

    if (RepairAddress == "") {

        alert("请输入修理地点");
        return false;
    }

    var regu = /^[0-9]+\.?[0-9]*$/;


    var Drop_in_fee = $("#Drop_in_fee_ID").val();

    if (!regu.test(Drop_in_fee)) {




        alert("上门费请输入数字");
        $("#Drop_in_fee_ID").focus();
        return false;

    }


    var TrafficFee = $("#TrafficFeeID").val();

    if (!regu.test(TrafficFee)) {

        alert("交通费请输入数字");
        $("#TrafficFeeID").focus();
        return false;

    }

    var CheckHourFee = $("#CheckHourFeeID").val();


    if (!regu.test(CheckHourFee)) {

        alert("工时费请输入数字");
        $("#CheckHourFeeID").focus();
        return false;

    }


    var stayFee = $("#stayFeeId").val();

    if (!regu.test(stayFee)) {

        alert("住宿费请输入数字");
        $("#stayFeeId").focus();
        return false;

    }




    $.ajax({
        type: "get",
        dataType: "json",
        url: "RepairMainInfoHandler.ashx?val2=" + RepairDate +
                 "&val3=" + JobInfo +
                 "&val4=" + Days + "&val5=" + RepairAddress +
                 "&val6=" + Drop_in_fee +
                 "&val7=" + TrafficFee +
                 "&val8=" + CheckHourFee +
                 "&val9=" + stayFee +
                 "&val10=" + "AddRepairMainInfo"
                 ,

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


function DeleteRepairMainInfo() {

    var RepairNo = $("#RepairId").val();
    if (RepairNo == "") {

        alert("请输入修理编号");
        return false;
    }


    $.ajax({

        type: "get",
        dataType: "json",
        url: "RepairMainInfoHandler.ashx?val1=" + RepairNo +
                          "&val10=" + "DeleteRepairMainInfo",



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


function QueryRepinfo() {

    var RepairNo = $("#RepairId").val();
    if (RepairNo == "") {

        alert("请输入修理编号");
        return false;
    }

    $.ajax({

        type: "get",
        datatype: "json",
        url: "RepairMainInfoHandler.ashx?val1=" + RepairNo
                                   + "&val10=" + "QueryRepInfoByRepNo",




        success: function (ret) {

            var map = eval('(' + ret + ')');

            var str = JSON.stringify(map.DTByRepNo);



            if (str == "[]") {
                alert("没有数据");
                return false;
            }


            var _json = eval(map.DTByRepNo);

            $(_json).each(function (key) {

                $("#RepairDateId").val(_json[key].RepairDate);
                $("#jobInfoId").val(_json[key].Jobinfo);
                $("#DaysId").val(_json[key].Days);
                $("#RepairAddressID").val(_json[key].RepairAddress);
                $("#Drop_in_fee_ID").val(_json[key].Drop_in_fee);
                $("#TrafficFeeID").val(_json[key].Traffic_fee);
                $("#CheckHourFeeID").val(_json[key].CheckHourFee);
                $("#stayFeeId").val(_json[key].Stay_fee);



            });

        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }


    })


}