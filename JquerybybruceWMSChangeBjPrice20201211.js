  var irows = 0;

        function init() {

            $("#truck_no").attr("disabled", true);
            $("#bjname").attr("disabled", true);
            $("#BJcount").attr("disabled", true);
            $("#remark").attr("disabled", true);
            SelectBjinfo();

        }

        init();

        function SelectBjinfo() {

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/UnCompBJinfo?requestName=" + "SelectUnCompBJInfo",

                success: function (ret) {

                    var str = JSON.stringify(ret);

                    if (str == "[]") {
                        console.log("没有数据");

                    }

                    var html = "";
                    var i = 1;
                    html += "<tr>";
                    html += "<td>车号</td>"; //0
                    html += "<td>备件名</td>"; //1
                    html += "<td>数量</td>"; //2
                    html += "<td>备注</td>"//3
                    html += "<td>操作</td>"; //4
                    html += "</tr>";


                    $(ret).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + ret[key].truck_no + "</td>"//0
                        html += "<td>" + ret[key].BJname + "</td>"//1
                        html += "<td>" + ret[key].BJcount + "</td>"//2
                        html += "<td>" + ret[key].remark + "</td>"//3
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].item_id + "</td>"//4
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "填写价格 "
                      + "' onclick = '" + "DOprice(" + i + ")" + "'" + "/>" + "</td>"//5
                        html += "</tr>";
                        i++;
                    });

                    $("#feetable").html(html);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })


        }


        function DOprice(i) {

            irows = i;

            $("#feetable").find('tr').eq(irows).css('background-color', 'red');

            var item_id = $("#feetable").find("tr").eq(i).find("td").eq(4).text();
            console.log(item_id);
            $("#item_id").val(item_id);
            var truck_no = $("#feetable").find("tr").eq(i).find("td").eq(0).text();
            $("#truck_no").val(truck_no);
            var BJname = $("#feetable").find("tr").eq(i).find("td").eq(1).text();
            $("#bjname").val(BJname);
            var BJcount = $("#feetable").find("tr").eq(i).find("td").eq(2).text();
            $("#BJcount").val(BJcount);
            var remark = $("#feetable").find("tr").eq(i).find("td").eq(3).text();
            $("#remark").val(remark);

        }


        $("#btnSubmit").click(function () {

            ChangeBJprice();

        });

        function ChangeBJprice() {

            var item_id = $("#item_id").val();

            var price = $("#price").val();
            if (price == "") {

                alert("请录入金额");
                $("#price").focus();
                return false;
            }

            var regu = /^[0-9]+\.?[0-9]*$/;

            if (!regu.test(price)) {

                alert("请录入正确的数字");
                $("#price").focus();
                return false;
            }

            if (price <= 0.00) {

                alert("金额为0");
                $("#price").focus();
                return false;

            }
          
          var bjname = $("#bjname").val();
          if(bjname=="")
          {
            alert("备件名不能为空");
            return false;
          }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/AddWMSinfo?item_id=" + item_id + "&price=" + price +"&bjname="+bjname+ "&requestName=" + "ChangeBJPrice",
                success: function (ret) {

                    var result = ret.is_success;
                    var err = ret.err;
                    if (result == "OK") {

                        alert("提交成功");
                        window.location.reload();

                    }
                    else {

                        alert("提交失败,原因是" + err);

                    }

                }


            })

        }
