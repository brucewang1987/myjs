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



        $("#btnQuery").click(function () {

            console.log("点击了查询");

            var startDate = $("#startDate").val();
            var endDate = $("#endDate").val();
            var loc = $("#loc").val();

            console.log("开始时间:" + startDate + "结束时间:" + endDate + "堆场是" + loc);

            SelectHSEINFO();

        });




        function SelectHSEINFO() {


            var startDate = $("#startDate").val();

            if (startDate == "") {

                alert("请选择开始日期");
                $("#startDate").focus();
                return false;


            }


            var endDate = $("#endDate").val();

            if (endDate == "") {

                alert("请选择结束日期");
                $("#endDate").focus();
                return false;


            }
            var loc = $("#loc").val();

            console.log("开始时间:" + startDate + "结束时间:" + endDate);





            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Material/HSEInfoSelect?start_date=" + startDate + "&end_date=" + endDate + "&loc=" + loc + "&requestName=" + "selectHSEInfo",

                success: function (ret) {


                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有数据");
                        window.location.reload();
                    }


                    var html = "";
                    var i = 1;

                    var tempcolor = "";






                    html += "<tr>";
                   

                    html += "<td>检查人</td>"; //0
                    html += "<td>检查日期</td>"; //1
                    html += "<td>检查类型</td>"; //2
                    
                    html += "<td>堆场</td>"; //4
                    html += "<td>区域</td>"; //5
                    html += "<td>不合格内容</td>"; //6

                    html += "<td>检查结果</td>"; //3
                 

                    html += "</tr>";


                    $(ret).each(function (key) {

                        if (ret[key].check_result == "不合格") {


                            tempcolor = "red";

                        }
                        else {

                            tempcolor = "Yellow  ";

                        }




                        html += "<tr style=" + "'" + "background-color:" + tempcolor + "'" + ">";

                     

                        html += "<td>" + ret[key].check_name + "  " + "</td>"//0
                        html += "<td>" + ret[key].check_date + "  " + "</td>"//1
                        html += "<td>" + ret[key].check_type + "  " + "</td>"//2
                       
                        html += "<td>" + ret[key].loc + "  " + "</td>"//4
                        html += "<td>" + ret[key].area + "  " + "</td>"//5
                        html += "<td>" + ret[key].remark + "  " + "</td>"//6
                        html += "<td>" + ret[key].check_result + "  " + "</td>"//3
                        html += "</tr>";
                        i++;



                    });
                    $("#ctnInfo").html(html);
                   

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })


        }
