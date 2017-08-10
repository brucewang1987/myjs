









            function PageloadInit() {
                $.ajax({
                    type: "post",
                    dataType: "text",
                    url: "Handler.ashx",
                    success: function (ret) {
                        var _json = eval(ret);



                        var i = 1;
                        $(_json).each(function (key) {


                            var option = "<option value = " + "'" + _json[key].ope + "'>" + _json[key].ope + "</option>";


                            $("#opeSelect").append(option);
                            i++;
                        });
                        $("#opeSelect").prepend("<option value='0'>请选择</option>");



                    }

                })
            }
            PageloadInit();

            function PageCtnsize() {

                $.ajax({
                    type: "post",
                    dataType: "text",
                    url: "SizeHandlee.ashx",
                    success: function (ret) {
                        var _json = eval(ret);

                        var i = 1;
                        $(_json).each(function (key) {

                            var option = "<option value = " + "'" + _json[key].ctn_size + "'>" + _json[key].ctn_size + "</option>";

                            $("#ctn_sizeSelect").append(option);
                            i++;
                        });
                        $("#ctn_sizeSelect").prepend("<option value='0'>请选择</option>");



                    }

                })

            }


            PageCtnsize();


            function PageCtntype() {

                $.ajax({
                    type: "post",
                    dataType: "text",
                    url: "TypeHandler.ashx",
                    success: function (ret) {
                        var _json = eval(ret);
                        var i = 1;
                        $(_json).each(function (key) {

                            var option = "<option value = " + "'" + _json[key].ctn_type + "'>" + _json[key].ctn_type + "</option>";

                            $("#ctn_TypeSelect").append(option);
                            i++;
                        });
                        $("#ctn_TypeSelect").prepend("<option value='0'>请选择</option>");



                    }

                })



            }
            PageCtntype();



            function PageLoc() {

                $.ajax({
                    type: "post",
                    dataType: "text",
                    url: "lochandler.ashx",
                    success: function (ret) {
                        var _json = eval(ret);
                        var i = 1;
                        $(_json).each(function (key) {

                            var option = "<option value = " + "'" + _json[key].place_id + "'>" + _json[key].place_id + "</option>";

                            $("#locSelect").append(option);
                            i++;
                        });
                        $("#locSelect").prepend("<option value='0'>请选择</option>");



                    }

                })



            }


            PageLoc();



            function InvQuery() {
                $("#checktype").val("InvQuery");
                var checktype = $("#checktype").val();
                alert(checktype);


            }

            function checkall() {
                var queryDate = $("#QueryDateId").val();
                var ope = $("#opeSelect").val();

                alert("选择的时间点为:" + queryDate);


                if (queryDate == "") {
                    alert("请选择盘存时间点");
                    return false;
                    if (ope == "" || ope == "请选择") {
                        alert("请选择客户");
                        return false;
                    }

                }

            }



            function GetInv() {

                var queryDate = $("#QueryDateId").val();
                var ope = $("#opeSelect").find("option:selected").text();
                var page = $("#pageIndex").val();

                var datetmp = $("#TempDate").val();

                //            alert("临时时间变量" + datetmp);

                if (queryDate != datetmp) {
                    //                alert("2个时间值不一样");
                    $("#pageIndex").val(1);

                }
                $("#TempDate").val(queryDate);

                //            alert("查盘存时页码" + page);


                //               alert("选择的时间点为:" + queryDate);

                //               alert("选择的客户为:" + ope);

                if (queryDate == "") {
                    alert("请选择盘存时间点");
                    return false;
                    if (ope == "" || ope == "请选择") {
                        alert("请选择客户");
                        return false;
                    }


                }

                $.ajax({
                    type: "get",
                    dataType: "json",
                    url: "QueryInv.ashx?val1=" + $("#QueryDateId").val() + "&val2=" + $("#opeSelect").val() + "&val3=" + $("#ctn_TypeSelect").val() + "&val4=" + $("#ctn_sizeSelect").val() + "&val5=" + $("#pageIndex").val() + "&val6=" + $("#locSelect").val(),

                    success: function (ret) {


                        //                                alert(ret);

                        //                                var _json = eval(ret);

                        var page = eval(ret.PageCount);



                        var _json = eval(ret.DT);

                        var allCount = eval(ret.allCount);



                        //                                        alert("总共:" + allCount + "条记录");

                        $("#allpage").text(page);

                        $("#allCount").text(allCount);

                        var html = "";
                        html += "<tr>";
                        html += "<td>序号</td>";
                        html += "<td>客户</td>";
                        html += "<td>箱号</td>";
                        html += "<td>尺寸</td>";
                        html += "<td>箱型</td>";
                        html += "<td>堆场号</td>";
                        html += "</tr>";
                        $(_json).each(function (key) {
                            html += "<tr>";
                            html += "<td>" + _json[key].id + "</td>";
                            html += "<td>" + _json[key].customer_code + "</td>";
                            html += "<td>" + _json[key].ctn_no + "</td>";
                            html += "<td>" + _json[key].ctn_size + "</td>";
                            html += "<td>" + _json[key].ctn_type + "</td>";
                            html += "<td>" + _json[key].place_id + "</td>";
                            html += "</tr>";
                        });
                        $("#InvTable").html(html);
                        //                                alert(ret);

                        var page = $("#pageIndex").val();

                        $("#pagelabel").text(page);

                        $("#pageDiv").css("display", "inline");


                    }

                }

        )


            }

            function btnPrevious() {

                //               alert("点击了上一页");
                //               return false;
                var allPage = $("#allpage").text();
                var iPage = $("#pageIndex").text();



                if (allPage == "0") {
                    alert("没有数据可以查询");
                    return false;
                }

                if (iPage == "1") {
                    alert("这已经是第一页");
                    return false;
                }



                iPage = Number(iPage);

                iPage = iPage - 1;


                $.ajax({
                    type: "get",
                    dataType: "json",
                    //                url: "QueryInv.ashx?val1=" + $("#QueryDateId").val() + "&val2=" + $("#opeSelect").val() + "&val3=" + $("#ctn_TypeSelect").val() + "&val4=" + $("#ctn_sizeSelect").val() + "&val5=" + $("#pageIndex").val(),
                    url: "QueryInv.ashx?val1=" + $("#QueryDateId").val() + "&val2=" + $("#opeSelect").val() + "&val3=" + $("#ctn_TypeSelect").val() + "&val4=" + $("#ctn_sizeSelect").val() + "&val5=" + iPage + "&val6=" + $("#locSelect").val(),

                    success: function (ret) {


                        var _json = eval(ret.DT);

                        var html = "";
                        html += "<tr>";
                        html += "<td>序号</td>";
                        html += "<td>客户</td>";
                        html += "<td>箱号</td>";
                        html += "<td>尺寸</td>";
                        html += "<td>箱型</td>";
                        html += "<td>堆场号</td>";
                        html += "</tr>";
                        $(_json).each(function (key) {
                            html += "<tr>";
                            html += "<td>" + _json[key].id + "</td>";
                            html += "<td>" + _json[key].customer_code + "</td>";
                            html += "<td>" + _json[key].ctn_no + "</td>";
                            html += "<td>" + _json[key].ctn_size + "</td>";
                            html += "<td>" + _json[key].ctn_type + "</td>";
                            html += "<td>" + _json[key].place_id + "</td>";
                            html += "</tr>";
                        });
                        $("#InvTable").html(html);



                    }

                }

        )



                $("#pageIndex").val(iPage);
                $("#pagelabel").text(iPage);


                //                        alert("现在是第" + $("#pagelabel").text() + "页");
                return false;



            }

            function btnNext() {

                var allPage = $("#allpage").text();
                var iPage = $("#pageIndex").text();


                if (allPage == "0") {
                    alert("没有数据可以查询");
                    return false;
                }

                if (iPage == allPage) {
                    alert("这已是末页");
                    return false;
                }

                iPage = Number(iPage);

                iPage = iPage + 1;



                $.ajax({
                    type: "get",
                    dataType: "json",
                    //                url: "QueryInv.ashx?val1=" + $("#QueryDateId").val() + "&val2=" + $("#opeSelect").val() + "&val3=" + $("#ctn_TypeSelect").val() + "&val4=" + $("#ctn_sizeSelect").val() + "&val5=" + $("#pageIndex").val(),
                    url: "QueryInv.ashx?val1=" + $("#QueryDateId").val() + "&val2=" + $("#opeSelect").val() + "&val3=" + $("#ctn_TypeSelect").val() + "&val4=" + $("#ctn_sizeSelect").val() + "&val5=" + iPage + "&val6=" + $("#locSelect").val(),

                    success: function (ret) {


                        var _json = eval(ret.DT);

                        var html = "";
                        html += "<tr>";
                        html += "<td>序号</td>";
                        html += "<td>客户</td>";
                        html += "<td>箱号</td>";
                        html += "<td>尺寸</td>";
                        html += "<td>箱型</td>";
                        html += "<td>堆场号</td>";
                        html += "</tr>";
                        $(_json).each(function (key) {
                            html += "<tr>";
                            html += "<td>" + _json[key].id + "</td>";
                            html += "<td>" + _json[key].customer_code + "</td>";
                            html += "<td>" + _json[key].ctn_no + "</td>";
                            html += "<td>" + _json[key].ctn_size + "</td>";
                            html += "<td>" + _json[key].ctn_type + "</td>";
                            html += "<td>" + _json[key].place_id + "</td>";
                            html += "</tr>";
                        });
                        $("#InvTable").html(html);



                    }

                }

        )


                $("#pageIndex").text(iPage);
                $("#pagelabel").text(iPage);


                //            alert("现在是第" + $("#pagelabel").text() + "页");
                return false;


            }



            function selectChangeValue() {

                //            alert("改变了值");
                $("#pageIndex").text(1);
                var page = $("#pageIndex").text();
                //            alert("此时页码" + page);

            }


            function InitPage() {
                $("#pageIndex").val(1);

              



                var page = $("#pageIndex").val();

                //            alert("当前页码" + page);

            }
            InitPage();
