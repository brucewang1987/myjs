 function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
            if (url.indexOf("?") != -1) {    //判断是否有参数
                var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            }
            var username = strs[1];

            $("#span_username").text(username);

            if (username.substring(0, 1) == "B") {

                $("#Repairmenu").hide();
                $("#WarehouseIndex").hide();
                $("#code").hide();
                $("#unitQuery").hide();
                $("#RepairCompmenu").hide();

            }

            if (username.substring(0, 1) == "X") {

                $("#RequestRepair").hide();
                $("#WarehouseIndex").hide();
                $("#code").hide();
                $("#unitQuery").hide();
            }

            if (username.substring(0, 1) == "C") {

                $("#RequestRepair").hide();
                $("#Repairmenu").hide();
                $("#code").hide();
                $("#unitQuery").hide();
                $("#RepairCompmenu").hide();

            }

            console.log(username.substring(0, 1));

        }
        GetRequest();

        $("#gotoRequestRepair").click(function () {

            var username = $("#span_username").text();

            window.location.href = "/TruckRepair/RequestRepair?username=" + username;

        });

        $("#gotoRepairmenu").click(function () {

            var username = $("#span_username").text();

            window.location.href = "/TruckRepair/Repairmenu?username=" + username;

        });


        $("#gotoWarehouseIndex").click(function () {

            var username = $("#span_username").text();

            window.location.href = "/TruckRepair/WarehouseIndex?username=" + username;

        });


        $("#gotoCodeMaintenance").click(function () {

            var username = $("#span_username").text();

            window.location.href = "/TruckRepair/CodeMaintenance?username=" + username;

        });

        $("#gotoRepairCompmenu").click(function () {
            var username = $("#span_username").text();

            window.location.href = "/TruckRepair/RepairItemComp?username=" + username;

        });
