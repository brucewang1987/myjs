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

        function init() {
            $("#nosee").hide();
            $("#btnCancel").attr("disabled", true);
        }
        init();

        function SelectGateOutData() {
            var ctn_no = $("#ctn_no").val();

            if (ctn_no == "") {

                alert("请输入箱号");
                $("#ctn_no").focus();
                return false;

            }

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/DepotBusiness/SelectCtnData?ctn_no=" + ctn_no + "&requestName=" + "SelectGateOutDataforcancel",

                success: function (ret) {

                    console.log(ret);
                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有数据");
                        return false;
                    }

                    var html = "";
                    html += "<tr>";
                    html += "<td>箱号</td>"; //0
                    html += "<td>出场时间</td>"; //1
                    html += "<td>尺寸</td>"; //2
                    html += "<td>箱型</td>"; //3
                    html += "<td>堆存费</td>"; //4
                    html += "<td>上下车费</td>"; //5
                    html += "<td>出场确认人</td>"; //6
                    html += "<td>堆场</td>"; //7
                    html += "<td>垫付金额</td>"; //8
                    html += "<td>总金额金额</td>"; //9
                    html += "</tr>";

                    $(ret).each(function (key) {

                        $("#ctn_id").val(ret[key].ctn_id);
                        html += "<tr>";
                        html += "<td>" + ret[key].ctn_no + "</td>"//0
                        html += "<td>" + ret[key].date_out + "</td>"//1
                        html += "<td>" + ret[key].ctn_size + "</td>"//2
                        html += "<td>" + ret[key].ctn_type + "</td>"//3
                        html += "<td>" + ret[key].save_fee + "</td>"//4
                        html += "<td>" + ret[key].updown_fee + "</td>"//5
                        html += "<td>" + ret[key].confirm_out_user + "</td>"//6
                        html += "<td>" + ret[key].place_id + "</td>"//7
                        html += "<td>" + ret[key].advance_fee + "</td>"//8
                        html += "<td>" + ret[key].total_fee + "</td>"//9
                        html += "</tr>";

                    });

                    $("#ctninfo").html(html);
                    $("#btnCancel").attr("disabled", false);
                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })


        }

        $("#btnQuery").click(function () {

            SelectGateOutData();
        });

        function CancelGateOut() {

            var ctn_id = $("#ctn_id").val();

            $.ajax({
             type: "get",
                  dataType: "json",
                  url: "/DepotBusiness/GateInOutBusiness?ctn_id=" + ctn_id + "&requestName=" + "cancelGateOut",
                  success: function (ret) {

                      var result = ret.strResult;
                      if (result == "ok") {

                          alert("撤销成功");
                          window.location.reload();
                      }
                      else {

                          alert("撤销失败");
                      }

                  }
            
            })

          }

          $("#btnCancel").click(function () {

              CancelGateOut();

          });
