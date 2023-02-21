 $("#btnQuery").click(function () {


            selectData();

        });


        $("#btnSend").click(function () {


            sendData();

        });

        $("#btnQueryByCtnNo").click(function () {

            selectDataByCtnNo();

        });

        function sendDataByCtnNo() {


            var ctn_no = $("#ctn_no").val();

            if (ctn_no == "") {

                alert("箱号不能为空");
                return false;


            }


            var startDate = $("#startdate").val();
            var startHH = $("#startHH").val();
            var startmm = $("#startmm").val();
            var startss = $("#startss").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            startDate = startDate + " " + startHH + ":" + startmm + ":" + startss;
            console.log(startDate);

            var time1 = startDate.substr(0, 10);
            console.log(time1);
            var time2 = startDate.substr(11, 8);
            console.log(time2);
            var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


            var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }

            var endDate = $("#enddate").val();
            var endHH = $("#endHH").val();
            var endmm = $("#endmm").val();
            var endss = $("#endss").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            endDate = endDate + " " + endHH + ":" + endmm + ":" + endss;
            console.log(endDate);

            time1 = endDate.substr(0, 10);
            time2 = endDate.substr(11, 8);

            r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/MskEirPlan/SendMessage?startdate=" + startDate + "&endDate=" +
                endDate + "&ctn_no=" + ctn_no + "&requestName=" + "sendDataByCtnNo",

                success: function (ret) {

                    console.log(ret);

                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("无数据");

                    }

                    console.log(str);

                    var result = "";


                    $(ret).each(function (key) {

                        //                        var planNo = ret[key].planNo;
                        //                        var status = ret[key].status;
                        //                        var message = ret[key].message;

                        var status = ret[key].status;
                        var _ctn_no = ret[key].ctn_no;

                        if (status == "S") {

                            alert("箱号:" + _ctn_no + "计划号:" + ret[key].planNo + ",传输成功");

                        }
                        else {

                            alert("箱号:" + _ctn_no + "计划号:" + ret[key].planNo + ",传输结果失败" + ",返回信息为:" + ret[key].message);

                        }



                        //                        console.log("计划号:" + ret[key].planNo + ",传输结果为:" + ret[key].status + ",返回信息为:" + ret[key].message);


                    });
                
                }


            })
        
        
        }
        

        function sendData() {

            var startDate = $("#startdate").val();
            var startHH = $("#startHH").val();
            var startmm = $("#startmm").val();
            var startss = $("#startss").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            startDate = startDate + " " + startHH + ":" + startmm + ":" + startss;
            console.log(startDate);

            var time1 = startDate.substr(0, 10);
            console.log(time1);
            var time2 = startDate.substr(11, 8);
            console.log(time2);
            var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


            var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }

            var endDate = $("#enddate").val();
            var endHH = $("#endHH").val();
            var endmm = $("#endmm").val();
            var endss = $("#endss").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            endDate = endDate + " " + endHH + ":" + endmm + ":" + endss;
            console.log(endDate);

            time1 = endDate.substr(0, 10);
            time2 = endDate.substr(11, 8);

            r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/MskEirPlan/SendMessage?startdate=" + startDate + "&endDate=" +
                endDate + "&requestName=" + "sendData",

                success: function (ret) {

                    console.log(ret);

                    //                    var result = ret.toString();

                    //                    var _result = JSON.parse(result);

                    //                    var status = _result.status;

                    //                    var message = _result.message;




                    //                    alert("返回状态为:" + status + "返回信息为:" + message);


                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("无数据");

                    }

                    console.log(str);

                    var result = "";

                    $(ret).each(function (key) {

                        //                        var planNo = ret[key].planNo;
                        //                        var status = ret[key].status;
                        //                        var message = ret[key].message;

                        var status = ret[key].status;

                        if (status == "S") {

                            alert("计划号:" + ret[key].planNo + ",传输成功");

                        }
                        else {

                            alert("计划号:" + ret[key].planNo + ",传输结果失败" + ",返回信息为:" + ret[key].message);
                        
                        }

                       

                        //                        console.log("计划号:" + ret[key].planNo + ",传输结果为:" + ret[key].status + ",返回信息为:" + ret[key].message);


                    });





                }



            })



        }


        function selectDataByCtnNo() {

            var ctn_no = $("#ctn_no").val();

            if (ctn_no == "") {

                alert("箱号不能为空");
                return false;
            
            
            }


            var startDate = $("#startdate").val();
            var startHH = $("#startHH").val();
            var startmm = $("#startmm").val();
            var startss = $("#startss").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            startDate = startDate + " " + startHH + ":" + startmm + ":" + startss;
            console.log(startDate);

            var time1 = startDate.substr(0, 10);
            console.log(time1);
            var time2 = startDate.substr(11, 8);
            console.log(time2);
            var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


            var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }

            var endDate = $("#enddate").val();
            var endHH = $("#endHH").val();
            var endmm = $("#endmm").val();
            var endss = $("#endss").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            endDate = endDate + " " + endHH + ":" + endmm + ":" + endss;
            console.log(endDate);

            time1 = endDate.substr(0, 10);
            time2 = endDate.substr(11, 8);

            r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/MskEirPlan/QueryData?startdate=" + startDate + "&endDate=" +
                endDate + "&ctn_no=" + ctn_no + "&requestName=" + "QueryDataByCtnNo",

                success: function (ret) {


                    console.log(ret);
                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    $("#textres").text(str);

                }


            })
            
        
        }

        function selectData() {


            

            var startDate = $("#startdate").val();
            var startHH = $("#startHH").val();
            var startmm = $("#startmm").val();
            var startss = $("#startss").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            startDate = startDate + " " + startHH + ":" + startmm + ":" + startss;
            console.log(startDate);

            var time1 = startDate.substr(0, 10);
            console.log(time1);
            var time2 = startDate.substr(11, 8);
            console.log(time2);
            var r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);


            var r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);

            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }

            var endDate = $("#enddate").val();
            var endHH = $("#endHH").val();
            var endmm = $("#endmm").val();
            var endss = $("#endss").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            endDate = endDate + " " + endHH + ":" + endmm + ":" + endss;
            console.log(endDate);

            time1 = endDate.substr(0, 10);
            time2 = endDate.substr(11, 8);

            r2 = time1.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            r = time2.match(/^(0\d{1}|1\d{1}|2[0-3]):[0-5]\d{1}:([0-5]\d{1})$/);


            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;
            }
            if (r2 == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 00:00:00");
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/MskEirPlan/QueryData?startdate=" + startDate + "&endDate=" +
                endDate + "&requestName=" + "QueryData",

                success: function (ret) {


                    console.log(ret);
                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    $("#textres").text(str);

                }


            })

        
        }
