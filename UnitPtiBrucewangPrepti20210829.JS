 function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
            strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
            //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        }
        var username = strs[1];

        $("#span_username").text(username);

    }
    GetRequest();

    $("#btnInputpti").click(function () {

        AddPrePtiInfo();
    });

    function SelectPreInfo() {

        var ctn_no = $("#ctn_no").val();

        $.ajax({

            type: "get",
            dataType: "json",
            url: "/Unitbusiness/QueryPrePtiInfo?requestName=" + "selectPrePtiInfo" + "&ctn_no=" + ctn_no,
            success: function (ret) {

                var str = JSON.stringify(ret);
                if (str == "[]") {
                    alert("没有数据");
                    window.location.reload();
                }

                var html = "";
                html += "<tr>";
                html += "<td>序号</td>"; //0
                html += "<td>箱号</td>"; //1
                html += "<td>登记人</td>"; //2
                html += "<td>登记时间</td>"; //3
                html += "<td>操作</td>"; //4
                html += "</tr>";
                var iTemp = 0;

                var i = 1;

                $(ret).each(function (key) {

                    iTemp = iTemp + 1;

                    html += "<tr>";
                    html += "<td>" + iTemp + "</td>"//0
                    html += "<td>" + ret[key].ctn_no + "</td>"//1
                    html += "<td>" + ret[key].preuser + "</td>"//2
                    html += "<td>" + ret[key].preptidate + "</td>"//3
                    html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "删除 "
                      + "' onclick = '" + "DeleteItem(" + i + ")" + "'" + "/>" + "</td>"//4
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].ctn_id + "</td>"//5
                    html += "</tr>";
                    i++;

                });

                $("#recordpti").html(html);

            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(XmlHttpRequest.responseText);
            }

        })


    }

    function DeleteItem(i) {

        var ctn_id = $("#recordpti").find("tr").eq(i).find("td").eq(5).text();

        console.log("选中的ctn_id是" + ctn_id);

        var ctn_no = $("#recordpti").find("tr").eq(i).find("td").eq(1).text();


        if (!window.confirm('是否确认删除箱号' + ctn_no + '的登记信息')) {
            return false;

        }

        $.ajax({


            type: "get",
            dataType: "json",
            url: "/Unitbusiness/PtiBusiness?requestName=" + "deletePreInfo" + "&ctn_id=" + ctn_id,

            success: function (ret) {


                var result = ret.strResult;
                if (result == "ok") {

                    alert("删除成功");
                    SelectPreInfo();

                }
                else {

                    alert("删除失败");
                }

            }


        })
    
    }


    $("#btnSelect").click(function () {

        SelectPreInfo();

    });

    $("#ctn_no").blur(function () {

        var ctn_no = $("#ctn_no").val();
        var _ctn_no = ctn_no.toUpperCase();

        $("#ctn_no").val(_ctn_no);

    });

    function AddPrePtiInfo() {

        var ctn_no = $("#ctn_no").val();

        if (ctn_no == "") {

            alert("请输入需要登记的箱号");
            return false;

        }






        var preuser = $("#span_username").text();


        $.ajax({

            type: "get",
            dataType: "json",
            url: "/Unitbusiness/PtiBusiness?ctn_no=" + ctn_no + "&preuser=" + preuser + "&requestName=" + "PreInputPtiData",
            success: function (ret) {

                var result = ret.strResult;
                if (result == "ok") {

                    alert("提交成功");
                    window.location.reload();

                }
                else {

                    alert("提交失败");
                }

            }


        })


    }
