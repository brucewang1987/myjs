 $(function () {
            $("#FileCtrl").on("change", function () {
                var file = this.files[0];
                photoCompress(file, 50, $("#container")[0])

             /*
                file.size = 1024 * 1024;

                var piclen = file.size;

                console.log(piclen);
*/
            });
        })


        function photoCompress(file, w, objDiv) {
            var ready = new FileReader();
            /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
            ready.readAsDataURL(file);
            ready.onload = function () {
                var re = this.result;
                canvasDataURL(re, w, objDiv)
            }
        }
        function canvasDataURL(re, w, objDiv) {
            var newImg = new Image();
            newImg.src = re;
            var imgWidth, imgHeight, offsetX = 0, offsetY = 0;
            newImg.onload = function () {
                var img = document.createElement("img");
                img.src = newImg.src;
                imgWidth = img.width;
                imgHeight = img.height;
                var canvas = document.createElement("canvas");
                canvas.width = w;
                canvas.height = w;
                var ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, w, w);
                if (imgWidth > imgHeight) {
                    imgWidth = w * imgWidth / imgHeight;
                    imgHeight = w;
                    offsetX = -Math.round((imgWidth - w) / 2);
                } else {
                    imgHeight = w * imgHeight / imgWidth;
                    imgWidth = w;
                    offsetY = -Math.round((imgHeight - w) / 2);
                }
                ctx.drawImage(img, offsetX, offsetY, imgWidth, imgHeight);


                
                var base64 = canvas.toDataURL("image/jpeg", 0.7);
                if (typeof objDiv == "object") {
                    objDiv.appendChild(canvas);
                } else if (typeof objDiv == "function") {
                    objDiv(base64);
                }
            }

        }






$(function () {
                $("#form1").submit(function () {

                });

                $("#btnUpload").click(function () {

                    var photoName = prompt("请输入照片名", "dwsbsbsbsb");

                    /*
                    if (photoName == "dwsb") {
                        alert("没错，东华是刚软公司");

                    }

                    */
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
                        url: './FileUploadCtrl.ashx?val1=' + photoName, /*设置post提交到的页面*/
                        type: "post", /*设置表单以post方法提交*/
                        dataType: "json" /*设置返回值类型为文本*/
                    });
                });
            });
