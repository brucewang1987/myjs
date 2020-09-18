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


        $("#btnQueryItem").click(function () {

            SelectRepItemByTruckNo();


        });

        function SelectRepItemByTruckNo() {

            var truckNo = $("#truckNo").val();

            if (truckNo == "") {

                alert("请输入车号");
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/SelectRepitemInfo?truck_no=" + truckNo + "&requestName=" + "selectRepitemInfoByTruckNo",

                success: function (ret) {


                    console.log(ret);
                  
                   var str = JSON.stringify(ret);

                        if (str == "[]") {
                            alert("没有数据");
                            window.location.reload();
                        }

                    var html = "";
                    var i = 1;
                    html += "<tr>";
                    html += "<td>维修代码</td>"; //0
                    html += "<td>是否需要备件</td>"; //1
                    html += "<td>填报项目时间</td>"; //2
                    html += "<td>填报项目人</td>"; //3
                    html += "<td>是否修理</td>"; //4
                    html += "<td>备件名称</td>"; //5
                    html += "<td>备件数量</td>"; //6
                    html += "<td>是否外修</td>"; //7
                    html += "<td>是否需要仓库确认</td>"; //8
                    html += "<td>操作</td>"; //9

                    html += "</tr>";

                    $(ret).each(function (key) {
                        html += "<tr>";
                        html += "<td>" + ret[key].item_code + "</td>"//0
                        html += "<td>" + ret[key].is_need + "</td>"//1
                        html += "<td>" + ret[key].create_date + "</td>"//2
                        html += "<td>" + ret[key].create_user + "</td>"//3
                        html += "<td>" + ret[key].is_worked + "</td>"//4
                        html += "<td>" + ret[key].BJname + "</td>"//5
                        html += "<td>" + ret[key].BJcount + "</td>"//6
                        html += "<td>" + ret[key].is_outRepair + "</td>"//7
                        html += "<td>" + ret[key].is_WMS_confirm + "</td>"//8
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + ret[key].item_id + "</td>"//9
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "点击完工"
                      + "' onclick = '" + "itemComp(" + i + ")" + "'" + "/>" + "</td>"//8
                        html += "</tr>";
                        i++;

                    });
                    $("#repItemTab").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })



        }

        function itemComp(i) {


            var item_id = $("#repItemTab").find("tr").eq(i).find("td").eq(9).text();
            var is_worked = $("#repItemTab").find("tr").eq(i).find("td").eq(4).text();

            if (is_worked == "已修理") {

                alert("该项目已完工");
                return false;
            
            }

            var user = $("#span_username").text();

            if (!window.confirm('是否确定完工')) {
                return false;

            }

            console.log("选中的项目id是" + item_id);

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TruckRepair/repitemComp?itemid=" + item_id + "&user=" + user + "&requestName=" + "itemComp",
                success: function (ret) {


                    console.log(ret);
                    var result = ret.is_success;
                    var err = ret.err;

                    if (result == "OK") {

                        alert("修理成功");

                        SelectRepItemByTruckNo();
                    }
                    else if (result == "fail" && err == "not_confirm") {

                        alert("修理失败,仓库未确认");
                        return false;
                    }
                    else {

                        alert("修理失败,原因是" + err);

                    }

                }



            })

            
        
        }
