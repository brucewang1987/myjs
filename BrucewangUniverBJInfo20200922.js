   function init() {

            $("#loading").hide();

        }

        init();

        $("#btnSelect").click(function () {

            var datatype = $("#datatype").val();

            if (datatype == "empty") {

                alert("请选择查询类型");
                $("#datatype").focus();
                return false;

            }

            if (datatype == "selectitembyNo") {

                selectitembytruckNo();

            }

            if (datatype == "selectitembyNoanddate") {


                selectuniverdatabytruckandtime();

            }


            if (datatype == "selectitembyplace") {

                selectuniverdatabyplace();

            }

            if (datatype == "selectitembyPlaceanddate") {



            }

            //            if (datatype == "fee") {

            //                SelectBJAmuntByNo();

            //            }


        });


        $("#btnSelectBytime").click(function () {

            var datatype = $("#datatype").val();

            if (datatype == "empty") {

                alert("请选择查询类型");
                $("#datatype").focus();
                return false;

            }

            if (datatype == "item") {

                selectitembytime();

            }

            if (datatype == "fee") {

                SelectBJAmuntByTime();

            }


        });


        function selectuniverdatabyplaceandtime() {

            var place_id = $("#place_id").val();

            if (place_id == "") {

                alert("请录入堆场号");
                $("#place_id").focus();
                return false;

            }


            var startDate = $("#startdate").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            startDate = startDate + " 00:00:00";




            var endDate = $("#enddate").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            endDate = endDate + " 23:59:59";


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverSelectitem?place_id=" + place_id
                + "&startDate=" + startDate + "&endDate=" + endDate + "&requestName=" + "SelectUniverDatabyplaceandtime",

                success: function (ret) {

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>维修项目</td>"; //1
                    html += "<td>额定工时</td>"; //2
                    html += "<td>实际工时</td>"; //3
                    html += "<td>备件名称</td>"; //4
                    html += "<td>备件数量</td>"; //5
                    html += "<td>备件价格</td>"; //6
                    html += "<td>报修人</td>"; //7
                    html += "<td>报修时间</td>"; //8
                    html += "<td>维修项目填写人</td>"; //9
                    html += "<td>修理项目确认人</td>"; //10
                    html += "<td>确认完工时间</td>"; //11
                    html += "<td>项目修理完毕时间</td>"; //12
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].item_code + "</td>"//1
                        html += "<td>" + ret[key].rated_hour + "</td>"//2
                        html += "<td>" + ret[key].actual_hour + "</td>"//3
                        html += "<td>" + ret[key].BJname + "</td>"//4
                        html += "<td>" + ret[key].BJcount + "</td>"//5
                        html += "<td>" + ret[key].price + "</td>"//6
                        html += "<td>" + ret[key].requestPerson + "</td>"//7
                        html += "<td>" + ret[key].request_date + "</td>"//8
                        html += "<td>" + ret[key].repairPerson + "</td>"//9
                        html += "<td>" + ret[key].comp_confirm_user_name + "</td>"//10
                        html += "<td>" + ret[key].comp_date + "</td>"//11
                        html += "<td>" + ret[key].worked_date + "</td>"//12
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })


        }

        function selectuniverdatabytruckandtime() {

            var truck_no = $("#truck_no").val();

            if (truck_no == "") {

                alert("请录入车号");
                $("#truck_no").focus();
                return false;

            }


            var startDate = $("#startdate").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            startDate = startDate + " 00:00:00";




            var endDate = $("#enddate").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            endDate = endDate + " 23:59:59";


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverSelectitem?truck_no=" + truck_no
                + "&startDate=" + startDate + "&endDate=" + endDate + "&requestName=" + "SelectUniverDatabytruckandtime",

                success: function (ret) {

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>维修项目</td>"; //1
                    html += "<td>额定工时</td>"; //2
                    html += "<td>实际工时</td>"; //3
                    html += "<td>备件名称</td>"; //4
                    html += "<td>备件数量</td>"; //5
                    html += "<td>备件价格</td>"; //6
                    html += "<td>报修人</td>"; //7
                    html += "<td>报修时间</td>"; //8
                    html += "<td>维修项目填写人</td>"; //9
                    html += "<td>修理项目确认人</td>"; //10
                    html += "<td>确认完工时间</td>"; //11
                    html += "<td>项目修理完毕时间</td>"; //12
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].item_code + "</td>"//1
                        html += "<td>" + ret[key].rated_hour + "</td>"//2
                        html += "<td>" + ret[key].actual_hour + "</td>"//3
                        html += "<td>" + ret[key].BJname + "</td>"//4
                        html += "<td>" + ret[key].BJcount + "</td>"//5
                        html += "<td>" + ret[key].price + "</td>"//6
                        html += "<td>" + ret[key].requestPerson + "</td>"//7
                        html += "<td>" + ret[key].request_date + "</td>"//8
                        html += "<td>" + ret[key].repairPerson + "</td>"//9
                        html += "<td>" + ret[key].comp_confirm_user_name + "</td>"//10
                        html += "<td>" + ret[key].comp_date + "</td>"//11
                        html += "<td>" + ret[key].worked_date + "</td>"//12
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })


        }

        function selectuniverdatabyplace() {

            var place_id = $("#place_id").val();

            if (place_id == "") {

                alert("请录入堆场号");
                $("#place_id").focus();
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverSelectitem?place_id=" + place_id + "&requestName=" + "SelectUniverDataByplace",
                success: function (ret) {


                    console.log(ret);

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>维修项目</td>"; //1
                    html += "<td>额定工时</td>"; //2
                    html += "<td>实际工时</td>"; //3
                    html += "<td>备件名称</td>"; //4
                    html += "<td>备件数量</td>"; //5
                    html += "<td>备件价格</td>"; //6
                    html += "<td>报修人</td>"; //7
                    html += "<td>报修时间</td>"; //8
                    html += "<td>维修项目填写人</td>"; //9
                    html += "<td>修理项目确认人</td>"; //10
                    html += "<td>确认完工时间</td>"; //11
                    html += "<td>项目修理完毕时间</td>"; //12
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].item_code + "</td>"//1
                        html += "<td>" + ret[key].rated_hour + "</td>"//2
                        html += "<td>" + ret[key].actual_hour + "</td>"//3
                        html += "<td>" + ret[key].BJname + "</td>"//4
                        html += "<td>" + ret[key].BJcount + "</td>"//5
                        html += "<td>" + ret[key].price + "</td>"//6
                        html += "<td>" + ret[key].requestPerson + "</td>"//7
                        html += "<td>" + ret[key].request_date + "</td>"//8
                        html += "<td>" + ret[key].repairPerson + "</td>"//9
                        html += "<td>" + ret[key].comp_confirm_user_name + "</td>"//10
                        html += "<td>" + ret[key].comp_date + "</td>"//11
                        html += "<td>" + ret[key].worked_date + "</td>"//12
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })


        }

        function selectitembytruckNo() {

            var truck_no = $("#truck_no").val();

            if (truck_no == "") {

                alert("请录入车号");
                $("#truck_no").focus();
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverSelectitem?truck_no=" + truck_no + "&requestName=" + "SelectUniverItemByNO",
                success: function (ret) {


                    console.log(ret);

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>维修项目</td>"; //1
                    html += "<td>额定工时</td>"; //2
                    html += "<td>实际工时</td>"; //3
                    html += "<td>备件名称</td>"; //4
                    html += "<td>备件数量</td>"; //5
                    html += "<td>备件价格</td>"; //6
                    html += "<td>报修人</td>"; //7
                    html += "<td>报修时间</td>"; //8
                    html += "<td>维修项目填写人</td>"; //9
                    html += "<td>修理项目确认人</td>"; //10
                    html += "<td>确认完工时间</td>"; //11
                    html += "<td>项目修理完毕时间</td>"; //12
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].item_code + "</td>"//1
                        html += "<td>" + ret[key].rated_hour + "</td>"//2
                        html += "<td>" + ret[key].actual_hour + "</td>"//3
                        html += "<td>" + ret[key].BJname + "</td>"//4
                        html += "<td>" + ret[key].BJcount + "</td>"//5
                        html += "<td>" + ret[key].price + "</td>"//6
                        html += "<td>" + ret[key].requestPerson + "</td>"//7
                        html += "<td>" + ret[key].request_date + "</td>"//8
                        html += "<td>" + ret[key].repairPerson + "</td>"//9
                        html += "<td>" + ret[key].comp_confirm_user_name + "</td>"//10
                        html += "<td>" + ret[key].comp_date + "</td>"//11
                        html += "<td>" + ret[key].worked_date + "</td>"//12
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })


        }

        function selectitembytime() {

            var startDate = $("#startdate").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            startDate = startDate + " 00:00:00";




            var endDate = $("#enddate").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            endDate = endDate + " 23:59:59";




            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverSelectitem?startDate=" + startDate + "&endDate=" + endDate + "&requestName=" + "SelectUniverItemByTime",
                success: function (ret) {


                    console.log(ret);

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>维修项目</td>"; //1
                    html += "<td>额定工时</td>"; //2
                    html += "<td>实际工时</td>"; //3
                    html += "<td>备件名称</td>"; //4
                    html += "<td>备件数量</td>"; //5
                    html += "<td>备件价格</td>"; //6
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].item_code + "</td>"//1
                        html += "<td>" + ret[key].rated_hour + "</td>"//2
                        html += "<td>" + ret[key].actual_hour + "</td>"//3
                        html += "<td>" + ret[key].BJname + "</td>"//4
                        html += "<td>" + ret[key].BJcount + "</td>"//5
                        html += "<td>" + ret[key].price + "</td>"//6
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })

        }

        function SelectBJAmuntByNo() {

            var truck_no = $("#truck_no").val();

            if (truck_no == "") {

                alert("请录入车号");
                $("#truck_no").focus();
                return false;

            }
            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverBJAmount?truck_no=" + truck_no + "&requestName=" + "UniverSelectBJAmountByTruckNo",

                success: function (ret) {

                    console.log(ret);

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }

                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>备件总额</td>"; //1
                    html += "</tr>"

                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].amount + "</td>"//1
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })


        }


        function SelectBJAmuntByTime() {

            var startDate = $("#startdate").val();

            if (startDate == "") {

                alert("请选择开始日期");

                $("#startdate").focus();
                return false;
            }

            var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            startDate = startDate + " 00:00:00";




            var endDate = $("#enddate").val();

            if (endDate == "") {

                alert("请选择结束日期");

                $("#endDate").focus();
                return false;
            }

            r = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            endDate = endDate + " 23:59:59";

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UniverBJAmount?startDate=" + startDate + "&endDate=" + endDate + "&requestName=" + "UniverSelectBJAmountByTime",

                success: function (ret) {

                    console.log(ret);

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }

                    var html = "";

                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>备件总额</td>"; //1
                    html += "</tr>"

                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].amount + "</td>"//1
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }




            })

        }


        $("#btnexcel").click(function () {
            $("#loading").show();
            exportexcel();

            $("#loading").hide();
        });

        function exportexcel() {

            var fileName = prompt("请输入文件名", "");

            if ($("table tr").length > 1) {

                $("#univerTab").table2excel({
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



 $("#btnSelectNotComp").click(function () {

            selectNotComp();

        });

        function selectNotComp() {


            $.ajax({
                type: "get",
                dataType: "json",
                url: "/TruckRepair/UNCompTruckData?requestName=" + "SelectUnCompTruckInfo",
                success: function (ret) {

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";
                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>堆场</td>"; //1
                    html += "<td>报修人</td>"; //2
                    html += "<td>报修时间</td>"; //3
                    html += "<td>修理项目名称</td>"; //4
                    html += "<td>修理备件名</td>"; //5
                    html += "<td>修理备件数量</td>"; //6
                    html += "<td>修理状态</td>"; //7
                    html += "<td>修理人</td>"; //8
                    html += "<td>是否需要仓库确认</td>"; //9
                    html += "<td>仓库填写备件名</td>"; //10
                    html += "<td>仓库填写的备件数量</td>"; //11
                    html += "<td>价格</td>"; //12
//                    html += "<td></td>"; //13
                    html += "</tr>";

                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].place_id + "</td>"//1
                        html += "<td>" + ret[key].requestPerson + "</td>"//2
                        html += "<td>" + ret[key].request_date + "</td>"//3
                        html += "<td>" + ret[key].item_code + "</td>"//4
                        html += "<td>" + ret[key].repBjname + "</td>"//5
                        html += "<td>" + ret[key].repBJCount + "</td>"//6
                        html += "<td>" + ret[key].rep_isworked + "</td>"//7
                        html += "<td>" + ret[key].repairPerson + "</td>"//8
                        html += "<td>" + ret[key].isWMSconfirm + "</td>"//9
                        html += "<td>" + ret[key].BJname + "</td>"//10
                        html += "<td>" + ret[key].BJcount + "</td>"//11
                        html += "<td>" + ret[key].price + "</td>"//12
                        html += "</tr>";
                    });

                    $("#univerTab").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })
        
        
        }

