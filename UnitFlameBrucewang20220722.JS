function init() {
            $("#ctn_id").hide();
            $("#ctn_size").attr("disabled", true);
            $("#ctn_type").attr("disabled", true);
            $("#ope").attr("disabled", true);
            $("#fireColor").attr("disabled", true);
            $("#fireTime").attr("disabled", true);


        }

        init();

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

        $("#btnRush").click(function () {

            window.location.reload();


        });


        function selectFlameInfo() {

            var ctn_no = $("#ctn_no").val();

            ctn_no = ctn_no.toUpperCase();

            $("#ctn_no").val(ctn_no);

            if (ctn_no == "") {

                alert("箱号不能为空");
                $("#ctn_no").focus();
                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Unitbusiness/GetFlameInfo?ctn_no=" + ctn_no + "&requestName=" + "selectFlameInfo",
                success: function (ret) {

                    var str = JSON.stringify(ret);
                    if (str == "[]") {
                        alert("没有符合条件的数据");
                        window.location.reload();
                    }



                    $("#ctn_id").val(ret.ctn_id);
                    $("#ctn_no").val(ret.ctn_no);
                    $("#fire_status").val(ret.flame_test_status);
                    $("#fireTime").val(ret.flame_date);
                    $("#flame_test_remark").val(ret.flame_remark);




                }


            })


        }


        function submitFlameInfo() {

            var ctn_no = $("#ctn_no").val();

            ctn_no = ctn_no.toUpperCase();

            $("#ctn_no").val(ctn_no);

            if (ctn_no == "") {

                alert("箱号不能为空");
                $("#ctn_no").focus();
                return false;

            }


            var create_user_name = $("#span_username").text();

            console.log(create_user_name);

            var flame_test_status = $("#fire_status").val();

            var flame_test_remark = $("#flame_test_remark").val();

            if (!window.confirm('箱号:' + ctn_no + '确认提交火测信息,' + '火测状态:' + flame_test_status)) {


                return false;

            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/Unitbusiness/FlameBusiness?ctn_no=" + ctn_no + "&create_user_name=" + create_user_name +
             "&flame_test_status=" + flame_test_status + "&flame_test_remark=" + flame_test_remark + "&requestName="
             + "SubmitFlame",

                success: function (ret) {

                    var result = ret.strResult;
                    if (result == "ok") {

                        alert("保存成功");
                        selectFlameInfo();


                    }
                    else {

                        alert("保存失败");
                    }

                }


            })



        }


        $("#btnSelect").click(function () {

            selectFlameInfo();

        });

        $("#btnSaveFlame").click(function () {

            submitFlameInfo();

        });
