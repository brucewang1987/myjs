 function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
            if (url.indexOf("?") != -1) {    //判断是否有参数
                var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            }
            var r_id = strs[1];

            var ctn_no = r_id.substr(0, 11);

            $("#Ctn_noItem").text("箱号" + ctn_no+"的验箱条目信息:");



            $.ajax({


                type: "get",
                dataType: "json",
                url: "/PdaInfoMenu/PdaInfoBusiness?val1=" + r_id + "&val88=" + "QueryItemInfo",

                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var str = JSON.stringify(map.dt);
                    if (str == "[]") {
                        alert("没有数据");
                        return false;
                    }

                    var _json = eval(map.dt);
                    var html = "";

                    html += "<tr>";
//                    html += "<td>操作</td>"; //0
//                    html += "<td style = " + "'" + "display:none;" + "'" + ">" + "rr_id" + "</td>"//1
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
//                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
//                      + "' onclick = '" + "return  SettlementItem(" + j + ")" + "'" + "/>" + "</td>"; //0
//                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].rr_id + "</td>"//1
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
                       

                    });
                    $("#RepairItemInfotable").html(html);
                    alert("数据加载完成");

                
                }


            })



        }

        GetRequest();
