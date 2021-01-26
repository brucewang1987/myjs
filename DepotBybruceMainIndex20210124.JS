function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
            strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
            //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        }
        var username = strs[1];

        $("#span_username").text(username);

     
        if (username.substring(0, 1) == "C") {

            $("#FeeIndex").hide();
            $("#ChangeDataIndex").hide();
            
        }

        console.log(username.substring(0, 1));

    }
    GetRequest();

    $("#gotoGateIn").click(function () {

        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/GateInMenu?username=" + username;

    });

    $("#gotoGateOut").click(function () {

        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/GateOutMenu?username=" + username;

    });


    $("#gotoFeeIndex").click(function () {

        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/FeeIndex?username=" + username;

    });


    $("#gotoChangeDataIndex").click(function () {

        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/ChangeDataMenu?username=" + username;

    });

    $("#gotounitQuerymenu").click(function () {
        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/UniverSelectMenu?username=" + username;

    });

    $("#gotoChangePlaceIndex").click(function () {
        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/ChangePlaceIndex?username=" + username;

    });

        $("#gotoSetSeat").click(function () {
        var username = $("#span_username").text();

        window.location.href = "/DepotBusiness/SettingSeatIndex?username=" + username;

    });
