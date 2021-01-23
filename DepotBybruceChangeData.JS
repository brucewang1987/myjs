function init() {
        $("#nosee").hide();
        $("#btnChange").attr("disabled", true);
    }
    init();
    function SelectCtnInfo() {

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

                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    return false;
                }

                $(ret).each(function (key) {


                    $("#ctn_id").val(ret[key].ctn_id);
                    console.log($("#ctn_id").val());
                    $("#ctn_no").val(ret[key].ctn_no);
                    $("#ctn_size").val(ret[key].ctn_size);
                    $("#ctn_type").val(ret[key].ctn_type);
                    if (ret[key].business_tpe == "指定箱号") {
                        $("#business_type").val("ZDCN");

                    }
                    if (ret[key].business_tpe == "暂落箱") {
                        $("#business_type").val("ZLDC");

                    }

                    $("#date_in").val(ret[key].date_in);
                    $("#place_id").val(ret[key].place_id);
                    $("#advance_fee").val(ret[key].advance_fee);
                    $("#savefee_rate").val(ret[key].save_fee_rate);
                    $("#updownfee").val(ret[key].updown_fee);

                    $("#btnChange").attr("disabled", false);

                });

            }

        })

    }

    $("#btnQuery").click(function () {

        SelectCtnInfo();

    });

    function ChangeData() {
        var regu = /^[0-9]+\.?[0-9]*$/;
        var ctn_id = $("#ctn_id").val();
        var ctn_no = $("#ctn_no").val();
        var ctn_size = $("#ctn_size").val();
        var ctn_type = $("#ctn_type").val();
        var business_type = $("#business_type").val();
        var advance_fee = $("#advance_fee").val();
        if (!regu.test(advance_fee)) {

            alert("请录入正确的数字");
            $("#advance_fee").focus();
            return false;
        }
        var savefee_rate = $("#savefee_rate").val();
        if (!regu.test(savefee_rate)) {

            alert("请录入正确的数字");
            $("#savefee_rate").focus();
            return false;
        }
        var updownfee = $("#updownfee").val();
        if (!regu.test(updownfee)) {

            alert("请录入正确的数字");
            $("#updownfee").focus();
            return false;
        }
        var date_in = $("#date_in").val();
        var _reTimeReg = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
        if (!_reTimeReg.test(date_in)) {
            alert("开始时间格式应为yyyy-MM-dd HH:mm:ss");
            $("#date_in").focus();
            return false;

        }

        var place_id = $("#place_id").val();

        $.ajax({

            type: "get",
            dataType: "json",
            url: "/DepotBusiness/GateInOutBusiness?ctn_id=" + ctn_id + "&ctn_no=" + ctn_no + "&ctn_size=" + ctn_size + "&ctn_type=" + ctn_type +
                  "&business_type=" + business_type + "&advance_fee=" + advance_fee + "&save_fee_rate=" + savefee_rate + "&updown_fee="
                  + updownfee + "&date_in=" + date_in + "&place_id=" + place_id + "&requestName=" + "changeCtnInfo",

            success: function (ret) {


                var result = ret.strResult;
                if (result == "ok") {

                    alert("修改成功");
                         window.location.reload();
                   
                }
                else {

                    alert("修改失败");
                }
            
            }


        })


    }

    $("#btnChange").click(function () {

        ChangeData();

    });
