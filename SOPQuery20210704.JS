 function SelectItemBySop() {

        var subject = $("#subject").val();

        var isBk = $("#isBk").val();


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
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 23:59:59");
            return false;
        }
        if (r2 == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 23:59:59");
            return false;

        }


        $.ajax({

            type: "get",
            dataType: "json",
            url: "/TestSop/SelectData?subject=" + subject + "&isBK=" + isBk + "&startDate="
            + startDate + "&endDate=" + endDate + "&requestName=" + "SelectItemBySubject",


            success: function (ret) {


                console.log(ret);
                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    window.location.reload();
                }

                var html = "";
                html += "<tr>";
                html += "<td>序号</td>"; //0
                html += "<td>姓名</td>"; //1
                html += "<td>科目</td>"; //2
                html += "<td>考试时间</td>"; //3
                html += "<td>总题数</td>"; //4
                html += "<td>正确数</td>"; //5
                html += "<td>错误数</td>"; //6
                html += "<td>提交的答案</td>"; //7
                html += "<td>正确率</td>"; //8
                html += "<td>做错的题</td>"; //9
                html += "</tr>";
                var iTemp = 0;

                $(ret).each(function (key) {

                    var resultPercent = 0;
                    resultPercent = ret[key].rightAmount / ret[key].amount;
                    resultPercent = parseInt(resultPercent.toFixed(2) * 100);

                    iTemp = iTemp + 1;

                    html += "<tr>";
                    html += "<td>" + iTemp + "</td>"//0
                    html += "<td>" + ret[key].name + "</td>"//1
                    html += "<td>" + ret[key].test_type + "</td>"//2
                    html += "<td>" + ret[key].test_date + "</td>"//3
                    html += "<td>" + ret[key].amount + "</td>"//4
                    html += "<td>" + ret[key].rightAmount + "</td>"//5
                    html += "<td>" + ret[key].wrongAmount + "</td>"//6
                    html += "<td>" + ret[key].inputAnswer + "</td>"//7
                    html += "<td>" + resultPercent + "%" + "</td>"//8
                    html += "<td>" + ret[key].where_mistake + "</td>"//9
                    html += "</tr>";
                });

                $("#SopInfo").html(html);

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }

        })


    }


    $("#btnSubject").click(function () {

        SelectItemBySop();

    });


    function SelectInfoByName() {


        var userName = $("#userName").val();

        if (userName == "") {

            alert("请输入需要查询的姓名");
            $("#userName").focus();
            return false;

        }


        $.ajax({
        
        type: "get",
            dataType: "json",
            url: "/TestSop/SelectData?userName=" + userName + "&requestName=" + "SelectItemByName",


            success: function (ret) {


                console.log(ret);
                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    window.location.reload();
                }

                var html = "";
                html += "<tr>";
                html += "<td>序号</td>"; //0
                html += "<td>姓名</td>"; //1
                html += "<td>科目</td>"; //2
                html += "<td>考试时间</td>"; //3
                html += "<td>总题数</td>"; //4
                html += "<td>正确数</td>"; //5
                html += "<td>错误数</td>"; //6
                html += "<td>提交的答案</td>"; //7
                html += "<td>正确率</td>"; //8
                html += "<td>做错的题</td>"; //9
                html += "<td>考试类型</td>"; //10
                html += "</tr>";
                var iTemp = 0;

                $(ret).each(function (key) {

                    var resultPercent = 0;
                    resultPercent = ret[key].rightAmount / ret[key].amount;
                    resultPercent = parseInt(resultPercent.toFixed(2) * 100);

                    iTemp = iTemp + 1;

                    html += "<tr>";
                    html += "<td>" + iTemp + "</td>"//0
                    html += "<td>" + ret[key].name + "</td>"//1
                    html += "<td>" + ret[key].test_type + "</td>"//2
                    html += "<td>" + ret[key].test_date + "</td>"//3
                    html += "<td>" + ret[key].amount + "</td>"//4
                    html += "<td>" + ret[key].rightAmount + "</td>"//5
                    html += "<td>" + ret[key].wrongAmount + "</td>"//6
                    html += "<td>" + ret[key].inputAnswer + "</td>"//7
                    html += "<td>" + resultPercent + "%" + "</td>"//8
                    html += "<td>" + ret[key].where_mistake + "</td>"//9
                    html += "<td>" + ret[key].isBK + "</td>"//10
                    html += "</tr>";
                });

                $("#SopInfo").html(html);

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }
        
        })
    
    
    }


    $("#btnSelectByName").click(function () {

        SelectInfoByName();


    });

    //按照岗位查询考试明细
    function QueryItemBySopType() {

        var sopType = $("#SOP_Type").val();

        var isBk = $("#isBk").val();


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
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 23:59:59");
            return false;
        }
        if (r2 == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 23:59:59");
            return false;

        }





        $.ajax({
            type: "get",
            dataType: "json",
            url: "/TestSop/SelectData?sopType=" + sopType + "&isBK=" + isBk 
            + "&startDate=" + startDate + "&endDate=" + endDate + "&requestName=" + "SelectItemBySopType",

            success: function (ret) {


                console.log(ret);
                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    window.location.reload();
                }

                var html = "";
                html += "<tr>";
                html += "<td>姓名</td>"; //0
                html += "<td>科目</td>"; //1
                html += "<td>考试时间</td>"; //2
                html += "<td>总题数</td>"; //3
                html += "<td>正确数</td>"; //4
                html += "<td>错误数</td>"; //5
                html += "<td>提交的答案</td>"; //6
                html += "<td>正确率</td>"; //7
                html += "<td>错误的题</td>"; //8
                html += "</tr>";


                $(ret).each(function (key) {

                    var resultPercent = 0.00;
                    resultPercent = ret[key].rightAmount / ret[key].amount;
                    resultPercent = parseInt(resultPercent.toFixed(2) * 100);

                    html += "<tr>";
                    html += "<td>" + ret[key].name + "</td>"//0
                    html += "<td>" + ret[key].test_type + "</td>"//1
                    html += "<td>" + ret[key].test_date + "</td>"//2
                    html += "<td>" + ret[key].amount + "</td>"//3
                    html += "<td>" + ret[key].rightAmount + "</td>"//4
                    html += "<td>" + ret[key].wrongAmount + "</td>"//5
                    html += "<td>" + ret[key].inputAnswer + "</td>"//6
                    html += "<td>" + resultPercent + "%" + "</td>"//7
                    html += "<td>" + ret[key].where_mistake + "</td>"//8
                    html += "</tr>";
                });

                $("#SopInfo").html(html);

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }



        })

    }

    function SelectSopTTLInfo() {

        var sopType = $("#SOP_Type").val();

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
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 23:59:59");
            return false;
        }
        if (r2 == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd HH:mm 例    如：2008-08-08 23:59:59");
            return false;

        }


        $.ajax({

            type: "get",
            dataType: "json",
            url: "/TestSop/SelectTotalData?sopType=" + sopType + "&startDate="
                 + startDate + "&endDate=" + endDate + "&requestName=" + "SelectTTLDataBySopTypeANDDate",

            success: function (ret) {

                console.log(ret);
                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    window.location.reload();
                }

                var html = "";
                html += "<tr>";
                html += "<td>姓名</td>"; //0
                html += "<td>总题数</td>"; //1
                html += "<td>总答对数</td>"; //2
                html += "<td>总答错数</td>"; //3
                html += "<td>正确率</td>"; //4
                html += "</tr>";


                $(ret).each(function (key) {

                    var resultPercent = 0.00;
                    resultPercent = ret[key].rightAmount / ret[key].amount;
                    resultPercent = parseInt(resultPercent.toFixed(2) * 100);

                    html += "<tr>";
                    html += "<td>" + ret[key].name + "</td>"//0
                    html += "<td>" + ret[key].amount + "</td>"//1
                    html += "<td>" + ret[key].rightAmount + "</td>"//2
                    html += "<td>" + ret[key].wrongAmount + "</td>"//3
                    html += "<td>" + resultPercent + "%" + "</td>"//4
                    html += "</tr>";



                });
                $("#SopInfo").html(html);
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }


        })


    }


    $("#btnQuery").click(function () {

        var select_type = $("#selectType").val();

        if (select_type == "item") {

            QueryItemBySopType();

        }

        if (select_type == "ttl") {

            SelectSopTTLInfo();

        }

    });


    function exportexcel() {

        var fileName = prompt("请输入文件名", "");

        if ($("table tr").length > 1) {

            $("#SopInfo").table2excel({
                exclude: ".noExl",
                name: "Excel Document Name",
                filename: fileName,
                exclude_img: true,
                exclude_links: true,
                exclude_inputs: true
            });

        }
        else {

            alert("没有数据");
            return false;

        }


    }

    $("#export").click(function () {

        exportexcel();

    });
