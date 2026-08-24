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

      

  
        $("#btnReturn").click(function () {

            if (!window.confirm('确定返回主页？')) {

                return false;

            }

            window.location.href = "/Material/NewDaohangIndex";

        });



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
                url: "/Material/HSEInfoSelect?start_date=" + startDate + "&end_date=" + endDate + "&loc=" + loc+ "&requestName=" + "selectHSEInfo",

                success: function (ret) {


                                        var str = JSON.stringify(ret);
                                        if (str == "[]") {
                                            alert("没有数据");
                                            window.location.reload();
                    }


                    var html = "";
                  

                   


                    $(ret).each(function (key) {


                        html += "<tr>"
                        html += "<td>"
                        html += "<div>"

                        html += "<p>" + "检查人:" + ret[key].check_name + "</p>"
                        html += "<p>" + "检查日期:" + ret[key].check_date + "</p>"
                        html += "<p>" + "检查类型:" + ret[key].check_type + "</p>"
                        html += "<p>" + "检查结果:" + ret[key].check_result + "</p>"
                        html += "<p>" + "堆场:" + ret[key].loc + "</p>"
                        html += "<p>" + "区域:" + ret[key].area + "</p>"
                        html += "<p>" + "不合格内容:" + ret[key].remark + "</p>"

                        //                         html += "<p>"+" ------------------------------------------------ "+"</p>"
                        html += "</div>"
                        html += "</td>"
                        html += "</tr>"

                       



                    });
                    $("#ctnInfo").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })


        }
