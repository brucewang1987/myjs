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
                         $("#repair_internal_status").val(ret[key].repair_internal_status);
                         $("#unit_status").val(ret[key].unit_status);
                         $("#ctn_size").val(ret[key].ctn_size);
                         $("#ctn_type").val(ret[key].ctn_type);
                         $("#box_status").val(ret[key].box_status);

                     });

                 }

             })


         }

         function changeData() {

             var ctn_id = $("#ctn_id").val();

             var repair_external_status = $("#repair_external_status").val();

             var repair_internal_status = $("#repair_internal_status").val();

             var unit_status = $("#unit_status").val();

             var ctn_size = $("#ctn_size").val();

             var ctn_type = $("#ctn_type").val();
          
             var box_status = $("#box_status").val();

             $.ajax({
                 type: "get",
                 dataType: "json",
                 url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&repair_external_status="
               + repair_external_status + "&repair_internal_status=" + repair_internal_status
                + "&unit_status=" + unit_status + "&ctn_size=" + ctn_size + "&ctn_type=" + ctn_type +"&box_status="+box_status
              + "&requestName=" + "changeCtnInfo",

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
