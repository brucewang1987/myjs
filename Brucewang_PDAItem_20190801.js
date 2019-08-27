
         function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
            if (url.indexOf("?") != -1) {    //判断是否有参数
                var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            }
            var ctn_no = strs[1];

            $("#ctn_no").val(ctn_no);

        }

        GetRequest();

        $("#btnItemCancel").click(function () {

            window.close();


        });


        function init() {

            $("#r_compcode").attr("disabled", true);
            $("#r_pos").attr("disabled", true);
            $("#r_damcode").attr("disabled", true);
            $("#r_repaircode").attr("disabled", true);
            $("#r_length").attr("disabled", true);
            $("#r_width").attr("disabled", true);
            $("#r_count").attr("disabled", true);
            $("#r_resp").attr("disabled", true);
            $("#r_desc").attr("disabled", true);
            $("#ctn_no").attr("disabled", true);
            $("#rr_id").hide();
            $("#p_rr_id").hide();


            QueryItem();



        }

        init();


        function QueryItem() {

            var ctn_no = $("#ctn_no").val();

            //            if (ctn_no == "") {

            //                alert("请输入箱号");
            //                return false;

            //            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/RepairbillInfo/AddColdCtnInfo?val1=" + ctn_no + "&val88=" + "QueryItemInfo",

                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var str = JSON.stringify(map.dt);
                    if (str == "[]") {
                        alert("没有数据");
                        return false;
                    }

                    var _json = eval(map.dt);
                    var html = "";
                    var j = 1;

                    html += "<tr>";
                    html += "<td>操作</td>"; //0
                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + "rr_id" + "</td>"//1
                    html += "<td>位置</td>"; //2
                    html += "<td>部件</td>"; //3
                    html += "<td>损坏</td>"; //4
                    html += "<td>修理</td>"; //5
                    html += "<td>长度</td>"; //6
                    html += "<td>宽度</td>"; //7
                    html += "<td>数量</td>"; //8
                    html += "<td>费用划分</td>"; //9
                    html += "<td>明细</td>"; //10
                    html += "<td>内外</td>"; //11
                    html += "<td>材质</td>"; //12
                    html += "</tr>"


                    $(_json).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                      + "' onclick = '" + "return  SettlementItem(" + j + ")" + "'" + "/>" + "</td>"; //0
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].rr_id + "</td>"//1
                        html += "<td>" + _json[key].r_pos + "</td>"; //2 位置
                        html += "<td>" + _json[key].r_compcode + "</td>"; //3 部件
                        html += "<td>" + _json[key].r_damcode + "</td>"; //4损坏
                        html += "<td>" + _json[key].r_repaircode + "</td>"; //5 修理
                        html += "<td>" + _json[key].r_length + "</td>"; //6 长度
                        html += "<td>" + _json[key].r_width + "</td>"; //7 宽度
                        html += "<td>" + _json[key].r_count + "</td>"; //8 数量
                        html += "<td>" + _json[key].r_resp + "</td>"; //9 费用划分
                        html += "<td>" + _json[key].r_desc + "</td>"; //10 明细
                        html += "<td>" + _json[key].IO_mark + "</td>"; //11 内外
                        html += "<td>" + _json[key].part_material_code + "</td>"; //12 材质
                        html += "</tr>";
                        j++;

                    });
                    $("#RepairItemInfotable").html(html);
                    alert("数据加载完成");

                }



            })


        }


        //        function ReadCtn_no() {

        //            var ctn_no = $.query.get("ctn_no");
        //            $("#ctn_no").val(ctn_no);

        //        }

        //        ReadCtn_no();

        $("#btnItemOK").click(function () {



            UpdateItemData();


        });

        function UpdateItemData() {

            var rr_id = $("#rr_id").val();

            var IO_mark = $("#IO_mark").val();

            var part_material_code = $("#part_material_code").val();


            if (!window.confirm('确定要更新这条明细记录?')) {

                return false;
            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/RepairbillInfo/AddColdCtnInfo?val1=" + rr_id + "&val2=" + IO_mark + "&val3=" + part_material_code
                + "&val88=" + "UpdateItemData",

                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);

                    QueryItem();

                }


            })


        }


        function SettlementItem(j) {

            var rr_id = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(1).text();
            $("#rr_id").val(rr_id);
            var r_pos = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(2).text();
            $("#r_pos").val(r_pos);
            var r_compcode = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(3).text();
            $("#r_compcode").val(r_compcode);
            var r_damcode = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(4).text();
            $("#r_damcode").val(r_damcode);
            var r_repaircode = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(5).text();
            $("#r_repaircode").val(r_repaircode);
            var r_length = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(6).text();
            $("#r_length").val(r_length);
            var r_width = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(7).text();
            $("#r_width").val(r_width);
            var r_count = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(8).text();
            $("#r_count").val(r_count);
            var r_resp = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(9).text();
            $("#r_resp").val(r_resp);
            var r_desc = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(10).text();
            $("#r_desc").val(r_desc);
            var IO_mark = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(11).text();

            if (IO_mark == "IN") {

                $("#IO_mark").val("I");

            }
            else if (IO_mark == "OUT") {

                $("#IO_mark").val("E");

            }

            else {

                $("#IO_mark").val("");
            
            }
            
            var part_material_code = $("#RepairItemInfotable").find("tr").eq(j).find("td").eq(12).text();
            $("#part_material_code").val(part_material_code);


        }
