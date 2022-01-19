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
                $("#ctn_id").hide();
                $("#unit_status").attr("disabled", true);
                $("#unit_brand").attr("disabled", true);
            }

            init();

            function SelectUnitJzInfo() {

                var ctn_no = $("#ctn_no").val();

                if (ctn_no == "") {

                    alert("请录入箱号");
                    $("#ctn_no").focus();
                    return false;
                }

                $.ajax({

                    type: "get",
                    dataType: "json",
                    url: "/Unitbusiness/QueryCtnInfo?ctn_no=" + ctn_no + "&requestName=" + "SelectUnitJZInfoByNo",

                    success: function (ret) {

                        var str = JSON.stringify(ret);
                        if (str == "[]") {
                            alert("没有符合条件的数据");
                            window.location.reload();
                        }

                         $(ret).each(function (key) {

                             $("#ctn_id").val(ret[key].ctn_id);
                             $("#ctn_no").val(ret[key].ctn_no);
                             $("#unit_status").val(ret[key].unit_status);
                             $("#unit_brand").val(ret[key].unit_brand);
                             $("#unit_model").val(ret[key].unit_model);
                             $("#unit_serial").val(ret[key].unit_serial);

                         });
                    
                    }

                })


             }

             $("#btnSelect").click(function () {

                 SelectUnitJzInfo();

             });


             function UpdateUnitJZInfo() {

                 var ctn_id = $("#ctn_id").val();

                 var ctn_no = $("#ctn_no").val();

                 var unit_model = $("#unit_model").val();

                 if (unit_model == "") {

                     alert("请录入机组型号");
                     $("#unit_model").focus();
                     return false;
                 }

                 var _unit_model = unit_model.toUpperCase();
                 $("#unit_model").val(_unit_model);

                 var unit_serial = $("#unit_serial").val();

                 if (unit_serial == "") {

                     alert("请录入机组序列号");
                     $("#unit_serial").focus();
                     return false;
                 }

                 var _unit_serial = unit_serial.toUpperCase();
                 $("#unit_serial").val(_unit_serial);

                 var electrician_user_name = $("#span_username").text();

                 var logInfo = '箱号：' + ctn_no + ',机组型号:' + _unit_model + ',机组序列号:' + _unit_serial + ',操作人:' + electrician_user_name;

                 console.log(logInfo);

                 if (!window.confirm('箱号：' + ctn_no + ',机组型号:' + _unit_model + ',机组序列号:' + _unit_serial + ',操作人:' + electrician_user_name + ',请确认信息是否提交')) {

                     return false;

                 }

                 $.ajax({
                  type: "get",
             dataType: "json",
             url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&unit_model=" + _unit_model + "&unit_serial=" + _unit_serial + "&logInfo=" + logInfo
             + "&requestName=" + "changeUnitJZInfo",

             success: function (ret) {

                 var result = ret.strResult;
                 if (result == "ok") {

                     alert("提交成功");
                     SelectUnitJzInfo();
                    

                 }
                 else {

                     alert("提交失败");
                 }

             }
                 
                 })


             }

             $("#btnUnpate").click(function () {

                 UpdateUnitJZInfo();

             });
