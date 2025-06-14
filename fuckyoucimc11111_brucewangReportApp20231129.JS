 lay('#version').html('-v' + laydate.v);

        //执行一个laydate实例
        laydate.render({
            elem: '#startDate' //指定元素

        , type: 'datetime'

        });




        //执行一个laydate实例
        laydate.render({
            elem: '#endDate' //指定元素
          , type: 'datetime'
        });

        $("#btnExport").click(function () {

            exportexcel();

        });

        $("#btnQuery").click(function () {

            console.log("点击了查询");
            var ReportName = $("#ReportName").val();

            if (ReportName == "HLC_tran_updownList") {

                hlcdata();

            }
            else {

                console.log("其他");

            }


        });


        function hlcdata() {

            var startDate = $("#startDate").val();
            var endDate = $("#endDate").val();


            console.log("开始时间:" + startDate + "结束时间:" + endDate);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/ReporMenu/QueryHLCInfo?startDate=" + startDate + "&endDate=" +
            endDate + "&requestName=" + "selectHLCInfo",


                success: function (ret) {

                    console.log(ret);
                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }

                    var html = "";
                    var iNum = 1;
                    html += "<tr>";
                    html += "<td>序号</td>"; //0
                    html += "<td>进场日期</td>"; //1
                    html += "<td>箱号</td>"; //2
                    html += "<td>箱型</td>"; //3
                    html += "<td>进场来源</td>"; //4
                    html += "<td>东华堆场</td>"; //5
                    html += "<td>船名航次</td>"; //6
                    html += "<td>运费</td>"; //7
                    html += "<td>上下车费</td>"; //8
                    html += "<td>进场原因</td>"; //9
                    html += "<td>出场原因</td>"; //10
                    html += "<td>出场日期</td>"; //11
                    html += "<td>出场目的地</td>"; //12
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + iNum + "</td>"//0
                        html += "<td>" + ret[key].in_date + "</td>"//0
                        html += "<td>" + ret[key].ctn_no + "</td>"//1
                        html += "<td>" + ret[key].st + "</td>"//2
                        html += "<td>" + ret[key].where_from + "</td>"//3
                        html += "<td>" + ret[key].LOC + "</td>"//4
                        html += "<td>" + ret[key].vv + "</td>"//5
                        html += "<td>" + ret[key].tran_fee + "</td>"//6
                        html += "<td>" + ret[key].up_down_fee + "</td>"//7
                        html += "<td>" + ret[key].in_reason + "</td>"//8
                        html += "<td>" + ret[key].out_reason + "</td>"//9
                        html += "<td>" + ret[key].out_date + "</td>"//10
                        html += "<td>" + ret[key].where_to + "</td>"//11

                        iNum = iNum + 1;
                    });

                    $("#ctnInfo").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }



            })
        
        
        }
        
        function exportexcel() {

            var fileName = prompt("请输入文件名", "");

            if ($("table tr").length > 1) {

                $("#ctnInfo").table2excel({
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
