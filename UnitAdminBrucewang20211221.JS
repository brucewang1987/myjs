function selectInfo() { 
        
        
        var ctn_no = $("#ctn_no").val();
           if (ctn_no == "") {

               alert("请录入箱号");
               $("#ctn_no").focus();
               return false;
           }

           $.ajax({

               type: "get",
               dataType: "json",
               url: "/Unitbusiness/GetAdminCtnInfo?ctn_no=" + ctn_no + "&requestName=" + "selectAdminInfo",

               success: function (ret) {

                   var str = JSON.stringify(ret);
                   if (str == "[]") {
                       alert("没有符合条件的数据");
                       window.location.reload();
                   }

                    $(ret).each(function (key) {

                        $("#ctn_id").val(ret[key].ctn_id);
                        $("#ctn_no").val(ret[key].ctn_no);
                        $("#repair_external_status").val(ret[key].repair_external_status);

                    });
               
               }

           })


        }

        function changeData() {

            var ctn_id = $("#ctn_id").val();

            var repair_external_status = $("#repair_external_status").val();

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&repair_external_status="
               + repair_external_status + "&requestName=" + "changeCtnInfo",

                success: function (ret) {

                    var result = ret.strResult;
                    if (result == "ok") {

                        alert("修改成功");
                        selectInfo();


                    }
                    else {

                        alert("修改失败");
                    }

                }


            })


        }


        $("#btnChange").click(function () {

            changeData();

        });

        $("#btnQuery").click(function () {

            selectInfo();

        });
