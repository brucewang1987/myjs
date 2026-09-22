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

           

            if ($("table tr").length > 1) {

                //$("#ctnInfo").table2excel({
                //    exclude: ".noExl",
                //    name: "Excel Document Name",
                //    filename: fileName,
                //    exclude_img: true,
                //    exclude_links: true,
                //    exclude_inputs: true
                //});


                var fileName = prompt("请输入文件名", "");

                // 1. 克隆表格，避免影响页面显示
                var table = document.getElementById('ctnInfo');
                var clone = table.cloneNode(true);

                // 2. 给每个单元格加"内联样式"边框和内边距
                //    Excel解析HTML表格时，内联样式兼容性最好（CSS选择器可能不生效）
                var tds = clone.getElementsByTagName('td');
                for (var i = 0; i < tds.length; i++) {
                    tds[i].style.border = '1px solid #333';
                    tds[i].style.padding = '8px 10px';
                }

                // 3. 第一行居中 + 加粗（内联样式，保证Excel识别）
                var firstRow = clone.getElementsByTagName('tr')[0];
                if (firstRow) {
                    var firstTds = firstRow.getElementsByTagName('td');
                    for (var j = 0; j < firstTds.length; j++) {
                        firstTds[j].style.textAlign = 'center';
                        firstTds[j].style.fontWeight = 'bold';
                    }
                }

                // 4. 用Excel命名空间的HTML包装表格
                var excelHtml =
                    '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
                    'xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
                    'xmlns="http://www.w3.org/TR/REC-html40">' +
                    '<head><meta charset="utf-8">' +
                    '<!--[if gte mso 9]>' +
                    '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>' +
                    '<x:Name>Sheet1</x:Name>' +
                    '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>' +
                    '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml>' +
                    '<![endif]-->' +
                    '</head><body>' + clone.outerHTML + '</body></html>';

                // 5. 生成 .xls 文件并触发下载（加BOM防止中文乱码）
                var blob = new Blob(['\uFEFF' + excelHtml], {
                    type: 'application/vnd.ms-excel;charset=utf-8'
                });
                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName + '.xls';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);


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
                    html += "<td colspan=" + "'" + "7" + "'" + ">" + "中集世联达物流服务（上海）有限公司巡检记录" + "</td>";
                    html += "</tr>"


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




                     /*   html += "<tr style=" + "'" + "background-color:" + tempcolor + "'" + ">";*/



                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].check_name + "  " + "</td>"//0
                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].check_date + "  " + "</td>"//1
                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].check_type + "  " + "</td>"//2

                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].loc + "  " + "</td>"//4
                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].area + "  " + "</td>"//5
                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].remark + "  " + "</td>"//6
                        html += "<td style=" + "'" + "background-color:" + tempcolor + "'" + ">" + ret[key].check_result + "  " + "</td>"//3
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
