 function SelectLogInfo() {


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
                    url: "/MSKEDI/SelectLogInfo?startDate=" + startDate + "&endDate=" + endDate + "&requestName=" + "SelectLog",
                    success: function (ret) {

                        console.log(ret);
                        var str = JSON.stringify(ret);
                        if (str == "[]") {
                            alert("没有数据");
                            window.location.reload();
                        }

                        var html = "";
                        html += "<tr>";
                        html += "<td>日志描述</td>"; //0
                        html += "<td>上传时间</td>"; //1
                        html += "<td>上传结果</td>"; //2
                        html += "<td>错误描述</td>"; //3
                        html += "</tr>";

                        $(ret).each(function (key) {

                            html += "<tr>";
                            html += "<td>" + ret[key].LogDesc + "</td>"//0
                            html += "<td>" + ret[key].create_date + "</td>"//1
                            console.log(ret[key].create_date);
                            html += "<td>" + ret[key].is_sucess + "</td>"//2
                            html += "<td>" + ret[key].err_desc + "</td>"//3

                            html += "</tr>";

                        });
                        $("#LogInfo").html(html);


                    },
                    error: function (XmlHttpRequest, textStatus, errorThrown) {
                        alert(XmlHttpRequest.responseText);
                    }

                })


             }

             $("#submit").click(function () {

                 SelectLogInfo();

             });
