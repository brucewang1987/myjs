 function init() {

            $("#ctn_size").attr("disabled", true);
            $("#ctn_type").attr("disabled", true);
            $("#place_id").attr("disabled", true);

            $("#nosee").hide();

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
                        alert("未查询到结果");
                        window.location.reload();

                    }

                    $(ret).each(function (key) {


                        $("#ctn_id").val(ret[key].ctn_id);
                        console.log($("#ctn_id").val());
                        $("#ctn_no").val(ret[key].ctn_no);
                        $("#ctn_type").val(ret[key].ctn_type);
                        $("#ctn_size").val(ret[key].ctn_size);
                        $("#place_id").val(ret[key].place_id);

                    });

                }

            })

        }

        $("#btnQuery").click(function () {
            SelectCtnInfo();

        });

        function SettingSeat() {

            var ctn_id = $("#ctn_id").val();
            var place_id = $("#place_id").val();
            var seat = $("#seat").val();
            
            var iLength = seat.length;

            if (iLength < 2) {

                alert("设置场位不得少于2位");
                $("#seat").focus();
                return false;

            }
            if (iLength >7) {

                alert("设置场位不得大于7位");
                $("#seat").focus();
                return false;

            }

            var seat_one = seat.substr(0, 1);
            var seat_two = seat.substr(1, 1);

            if (seat_one != place_id) {

                alert("场位首字符与堆场号不匹配");
                $("#seat").focus();
                return false;
            
            }
            if (!/^[a-zA-Z]+$/.test(seat_two)) {

                alert("场位第二个字符必须是字母");
                $("#seat").focus();
                return false;

            }


            $.ajax({
            
            type: "get",
                dataType: "json",
                url: "/DepotBusiness/GateInOutBusiness?ctn_id=" + ctn_id + "&seat=" + seat + "&requestName="+"settingseat",

                success: function (ret) {

                    var result = ret.strResult;
                    if (result == "ok") {

                        alert("设置成功");
                        window.location.reload();
                    }
                    else {

                        alert("设置失败");
                    }

                }
            
            })

        }


        $("#btnSetting").click(function () {

            SettingSeat();

        });
