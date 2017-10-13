function InsertBJInfo()
    {

        var Number = $("#NumberId").val();

        var date = $("#StartDate_ID").val();
        if (date == "") {

            alert("请选择日期");
            return false;

        }
        var r = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
            return false;
        }

        var BJName = $("#BJNameID").val();

        if (BJName == "") {
            alert("请输入备件名称");
            return false;
        
        }


        var BJNO = $("#BJNoID").val();
        if (BJNO == "") {

            alert("请输入备件号");
            return false;
        }

        var count = $("#CountsID").val();
        count = count * 1;



        var regu = /^[0-9]+\.?[0-9]*$/;


        if (!regu.test(count)) {
            alert("数量请输入数字");
            $("#CountsID").focus();
            return false;

        }


        var price = $("#PriceID").val();
        price = price * 1;


        if (!regu.test(price)) {
            alert("单价请输入数字");
            $("#PriceID").focus();
            return false;

        }


        var receiver = $("#ReceiverID").val();

        if (receiver == "") {

            alert("请输入收件人");
            return false;

        }

        var TransportFee = $("#TransportFeeID").val();

        TransportFee = TransportFee * 1;
        if (!regu.test(TransportFee)) {
            alert("运输费请输入数字");
            $("#TransportFeeID").focus();
            return false;

        }


        var totalprice = count * price + TransportFee;


        $.ajax({

            type: "get",
            dataType: "json",
            url: "BJinfoHandler.ashx?val1=" + Number +
                               "&val2=" + date +
                               "&val3=" + BJName +
                               "&val4=" + BJNO +
                               "&val5=" + count +
                               "&val6=" + price +
                               "&val7=" + receiver +
                               "&val8=" + TransportFee +
                               "&val9=" + totalprice +
                               "&val10=" + "InsertBJinfo",

            success: function (ret) {
               
//                var map = eval('(' + ret + ')');
                var str = JSON.stringify(ret.strAddFlag);

                alert(str);

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }



        })



    }

    function DeleteBJinfo() {

        var Number = $("#NumberId").val();
        if (Number == "") {

            alert("请输入顺序号");
            $("#NumberId").focus();
            return false;

        }

        if (!window.confirm('确定要删除序列号为' + Number + '的记录吗')) {

            return false;
        }


        $.ajax({
            type: "get",
            dataType: "json",
            url: "BJinfoHandler.ashx?val1=" + Number +
            "&val10=" + "DeleteBJinfo",

            success: function (ret) {

                var str = JSON.stringify(ret.strAddFlag);

                alert(str);

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }


        })

    
    
    }

    function QueryBJinfoByNumber() {

        var Number = $("#NumberId").val();
        if (Number == "") {

            alert("请输入顺序号");
            $("#NumberId").focus();
            return false;

        }

        $.ajax({

            type: "get",
            dataType: "json",
            url: "BJinfoHandler.ashx?val1=" + Number +
            "&val10=" + "QueryBJinfoByNumber",

            success: function (ret) {

                var str = JSON.stringify(ret.dtBJinfoByNumber);

                if (str == "[]") {
                    alert("没有数据");
                    return false;
                }

                var _json = eval(ret.dtBJinfoByNumber);


                var html = "";
                html += "<tr>";
                html += "<td>顺序号</td>";
                html += "<td>日期</td>";
                html += "<td>备件名称</td>";
                html += "<td>备件号</td>";
                html += "<td>数量</td>";
                html += "<td>单价</td>";
                html += "<td>收件人</td>";
                html += "<td>运输费</td>";
                html += "<td>总价</td>";

                html += "</tr>";


                $(_json).each(function (key) {

                    html += "<tr>";
                    html += "<td>" + _json[key].Number + "</td>";
                    html += "<td>" + _json[key].BJDate + "</td>";
                    html += "<td>" + _json[key].BJName + "</td>";
                    html += "<td>" + _json[key].BJNo + "</td>";
                    html += "<td>" + _json[key].Counts + "</td>";
                    html += "<td>" + _json[key].price + "</td>";
                    html += "<td>" + _json[key].receiver + "</td>";
                    html += "<td>" + _json[key].transportfee + "</td>";
                    html += "<td>" + _json[key].totalprice + "</td>";


                    html += "</tr>";
                });
                $("#BJInfotable").html(html);


                $(_json).each(function (key) {

                    $("#NumberId").val(_json[key].Number);
                    $("#StartDate_ID").val(_json[key].BJDate);
                    $("#BJNameID").val(_json[key].BJName);
                    $("#BJNoID").val(_json[key].BJNo);
                    $("#CountsID").val(_json[key].Counts);
                    $("#PriceID").val(_json[key].price);
                    $("#ReceiverID").val(_json[key].receiver);
                    $("#TransportFeeID").val(_json[key].transportfee);




                });



            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }


        })


    }


    function QueryBJinfoByDate() {

       


        var startDate = $("#StartDate_ID").val();

        if (startDate == "") {

            alert("请输入开始日期");
            $("#StartDate_ID").focus();
            return false;
        
        }

        var rstart = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (rstart == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
            return false;
        }


        var endDate = $("#EndDate_ID").val();
        if (endDate == "") {

            alert("请输入结束日期");
            return false;
        }


        var rend = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (rend == null) {
            alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
            return false;

        }


        $.ajax({

            type: "get",
            dataType: "json",
            url: "BJinfoHandler.ashx?val1=" + startDate + "&val2=" + endDate +
            "&val10=" + "QueryBJinfoByDate",
            success: function (ret) {


                var str = JSON.stringify(ret.dtBJinfoByDate);

                if (str == "[]") {
                    alert("没有数据");
                    return false;
                }

                var _json = eval(ret.dtBJinfoByDate);


                var html = "";
                html += "<tr>";
                html += "<td>顺序号</td>";
                html += "<td>日期</td>";
                html += "<td>备件名称</td>";
                html += "<td>备件号</td>";
                html += "<td>数量</td>";
                html += "<td>单价</td>";
                html += "<td>收件人</td>";
                html += "<td>运输费</td>";
                html += "<td>总价</td>";

                html += "</tr>";


                $(_json).each(function (key) {

                    html += "<tr>";
                    html += "<td>" + _json[key].Number + "</td>";
                    html += "<td>" + _json[key].BJDate + "</td>";
                    html += "<td>" + _json[key].BJName + "</td>";
                    html += "<td>" + _json[key].BJNo + "</td>";
                    html += "<td>" + _json[key].Counts + "</td>";
                    html += "<td>" + _json[key].price + "</td>";
                    html += "<td>" + _json[key].receiver + "</td>";
                    html += "<td>" + _json[key].transportfee + "</td>";
                    html += "<td>" + _json[key].totalprice + "</td>";


                    html += "</tr>";
                });
                $("#BJInfotable").html(html);


            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }

        })


    }

    function exportexcel() {
        $("#BJInfotable").table2excel({
            exclude: ".noExl",
            name: "Excel Document Name",
            filename: "myFileName",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true
        });
    }
