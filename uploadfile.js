$(function () {
            $("#form1").submit(function () {

            });

            $("#btnUpload").click(function () {
                
                //构建新的表单提交数据（只提交文本域）
                //                var from = $("<form id='formUpload' enctype='multipart/form-data'></form>");
                //                from.append($("#FileCtrl").clone());
                //$(#form1).ajaxSubmit
                $('#formUpload').ajaxSubmit({
                    //提交前的回调函数
                    beforeSubmit: function () {
                        $("#btnUpload").after("<img src='images/loading.gif'  id='loading'/>");
                    },
                    //提交后的回调函数
                    success: function (data) {
                        if (data.status == "ok") {
                            $("#result").html(data.fileName);
                            $("#FileCtrl").val('');
                            alert("上传成功");
                        }
                        else if (data.status == "error") {
                            alert(data.msg);
                        }
                        $("#loading").remove();
                        //alert(data.url);
                    },
                    error: function (error) { console.log(JSON.stringify(error)); },
                    url: '/hsbs2.0/FileUploadCtrl.ashx', /*设置post提交到的页面*/
                    type: "post", /*设置表单以post方法提交*/
                    dataType: "json" /*设置返回值类型为文本*/
                });
            });
        });
