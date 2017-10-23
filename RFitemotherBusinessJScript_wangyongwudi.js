function QueryPtidate() {


    var startDate = $("#RFStartDate_ID").val();

    if (startDate == "") {
        alert("请选择开始时间");
        return false;

    }

    var r = startDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
        return false;
    }



    var endDate = $("#RFEndDate_ID").val();
    if (endDate == "") {

        alert("请选择结束时间");
        return false;
    }

    var r2 = endDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r2 == null) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
        return false;
    }



    $.ajax({

        type: "get",
        dataType: "json",
        url: "RFjianhuHandler.ashx?val1=" + startDate + "&val2=" + endDate + "&val8=" + "QueryRfinfoBYPtiDate",
        success: function (ret) {

            //                    alert(ret);

            var str = JSON.stringify(ret.dtByptidate);
            if (str == "[]") {
                alert("没有数据");
                return false;
            }

            var _json = eval(ret.dtByptidate);

            var html = "";
            html += "<tr>";
            html += "<td>箱id</td>"
            html += "<td>箱号</td>";
            html += "<td>打冷时间</td>";
            html += "<td>打冷温度</td>";
            html += "</tr>"


            $(_json).each(function (key) {

                html += "<tr>";
                html += "<td>" + _json[key].ctn_id + "</td>";
                html += "<td>" + _json[key].ctn_no + "</td>";
                html += "<td>" + _json[key].pti_date + "</td>";
                html += "<td>" + _json[key].pti_temperature + "</td>";

                html += "</tr>";

            });
            $("#RFInfotableByptidate").html(html);
            init();



        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }





    })



}
