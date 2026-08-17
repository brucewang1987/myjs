 function init() {

             $("#loading").hide();
//              $("#photodiv2").hide();
              //              $("#photodiv3").hide();
              $("#area").hide();

          }

        var area = $("#area").text();

           init();


        $("#btnSubmit").click(function () {


           

               submitData();



           });

          function submitData() {


              var check_name = $("#check_name").val();


              if (check_name == "") {

                  alert("请录入检查人");
                  $("#check_name").focus();
                  return false;
              }

              var loc = $("#loc").val();
              if (loc == "Empty") {

                  alert("请选择堆场");
                  $("#loc").focus();
                  return false;

              }


              var check_type = $("#check_type").val();

              if (check_type == "Empty") {

                  alert("请选择检查类型");
                  $("#check_type").focus();
                  return false;

              }


              var check_result = $("#check_result").val();

              if (check_result == "Empty") {

                  alert("请选择检查结果");
                  $("#check_result").focus();
                  return false;

              }

              var remark = $("#remark").val();


              if (!window.confirm('确定提交数据？')) {

                  return false;

              }



              $.ajax({

              type:"get",
              dataType:"json",
              url: "/Material/AddHSEData?check_name=" + check_name + "&check_type=" + check_type + "&check_result=" + check_result + "&loc=" + loc + "&remark=" + remark + "&area=" + area + "&requestName=" + "AddHSEData",

              success: function (ret) {

                  var result = ret.strResult;
                  if (result == "ok") {

                      alert("提交成功");

                  }
                  else {

                      alert("提交失败");
                  }

              }


              })


          }

          //设置一个全局变量用于控制显示拍照界面
          var ishow = 1;


          //拍照1
          var showimg = document.getElementById("showimg");
          var imginput = document.getElementById("file_input");
          document.getElementById("file_input").onclick = function () {
              imginput.onchange = function () {
                  var files = this.files;
                  console.log(files);   //本地的临时路径
                  // var formdata = new FormData();
                  //formdata.append('fileStream', files);
                  //　formdata再传给后台


                  var url = URL.createObjectURL(files[0]);

                  console.log("url:" + url);

                  showimg.src = url;
                  console.log("开始绑定src");
              }
          }

          //拍照2
          var showimg2 = document.getElementById("showimg2");
          var imginput2 = document.getElementById("file_input2");
          document.getElementById("file_input2").onclick = function () {
              imginput2.onchange = function () {
                  var files = this.files;
                  console.log(files);   //本地的临时路径
                  // var formdata = new FormData();
                  //formdata.append('fileStream', files);
                  //　formdata再传给后台


                  var url = URL.createObjectURL(files[0]);

                  console.log("url:" + url);

                  showimg2.src = url;
                  console.log("开始绑定src");
              }
          }

          //拍照3
          var showimg3 = document.getElementById("showimg3");
          var imginput3 = document.getElementById("file_input3");
          document.getElementById("file_input3").onclick = function () {
              imginput3.onchange = function () {
                  var files = this.files;
                  console.log(files);   //本地的临时路径
                  // var formdata = new FormData();
                  //formdata.append('fileStream', files);
                  //　formdata再传给后台


                  var url = URL.createObjectURL(files[0]);

                  console.log("url:" + url);

                  showimg3.src = url;
                  console.log("开始绑定src");
              }
          }



          $("#btnUpload").click(function () {


              var check_name = $("#check_name").val();

              if (check_name == "") {

                  alert("请录入监察人");
                  $("#check_name").focus();
                  return false;

              }

              var loc = $("#loc").val();
              if (loc == "Empty") {

                  alert("请选择堆场");
                  $("#loc").focus();
                  return false;

              }


              var check_type = $("#check_type").val();

              if (check_type == "Empty") {

                  alert("请选择检查类型");
                  $("#check_type").focus();
                  return false;

              }


              var check_result = $("#check_result").val();

              if (check_result == "Empty") {

                  alert("请选择检查结果");
                  $("#check_result").focus();
                  return false;

              }

              if (!window.confirm('确定上传照片？')) {

                  return false;

              }

              $("#loading").show();
              ajaxFileUpload("file_input");

              //              $("#photodiv2").show();
              //              $("#photodiv1").hide();
              ishow = 2;
          });


          $("#btnUpload2").click(function () {


              var check_name = $("#check_name").val();

              if (check_name == "") {

                  alert("请录入监察人");
                  $("#check_name").focus();
                  return false;

              }

              var loc = $("#loc").val();
              if (loc == "Empty") {

                  alert("请选择堆场");
                  $("#loc").focus();
                  return false;

              }


              var check_type = $("#check_type").val();

              if (check_type == "Empty") {

                  alert("请选择检查类型");
                  $("#check_type").focus();
                  return false;

              }


              var check_result = $("#check_result").val();

              if (check_result == "Empty") {

                  alert("请选择检查结果");
                  $("#check_result").focus();
                  return false;

              }


              if (!window.confirm('确定上传照片？')) {

                  return false;

              }

              $("#loading").show();
              ajaxFileUpload("file_input2");
//              $("#photodiv3").show();
//              $("#photodiv2").hide();
              ishow = 3;

          });

          $("#btnUpload3").click(function () {

              var check_name = $("#check_name").val();

              if (check_name == "") {

                  alert("请录入监察人");
                  $("#check_name").focus();
                  return false;

              }

              var loc = $("#loc").val();
              if (loc == "Empty") {

                  alert("请选择堆场");
                  $("#loc").focus();
                  return false;

              }


              var check_type = $("#check_type").val();

              if (check_type == "Empty") {

                  alert("请选择检查类型");
                  $("#check_type").focus();
                  return false;

              }


              var check_result = $("#check_result").val();

              if (check_result == "Empty") {

                  alert("请选择检查结果");
                  $("#check_result").focus();
                  return false;

              }

              if (!window.confirm('确定上传照片？')) {

                  return false;

              }

              $("#loading").show();
              ajaxFileUpload("file_input3");


          });


          $("#btnReturn").click(function () {

              if (!window.confirm('确定返回主页？')) {

                  return false;

              }

              window.location.href = "/Material/NewDaohangIndex";

          });


          function ajaxFileUpload(id) {
              var result = "";

              var loc = $("#loc").val();
              var check_type = $("#check_type").val();
              var check_result = $("#check_result").val();
              var check_name = $("#check_name").val();

              var photoName = loc + check_type + check_result;

              console.log(photoName);

              $.ajaxFileUpload
            (
                {
                    url: '/Material/SaveImg?loc=' + loc + '&check_type=' + check_type + '&check_result=' + check_result + '&area=' + area + '&check_name=' + check_name, //用于文件上传的服务器端请求地址
                    secureuri: false, //是否需要安全协议，一般设置为false
                    //                    fileElementId: 'file_input', //文件上传域的ID
                    fileElementId: id, //文件上传域的ID
                    //dataType: 'json', //返回值类型 一般设置为json
                    dataType: 'content', //设置为json报错
                    success: function (data, status)  //服务器成功响应处理函数
                    {
                        //                        $("#img1").attr("src", data.imgurl);
                        //                        if (typeof (data.error) != 'undefined') {
                        //                            if (data.error != '') {
                        //                                alert(data.error);
                        //                            } else {
                        //                                alert(data.msg);
                        //                            }
                        //                        }



                        console.log("成功");
                        result = data.toString();
                        result = result.replace(/<.*?>/g, '');
                        var _result = JSON.parse(result);
                        console.log(_result);
                        if (_result.IsSuccess == "OK") {

                            alert("上传成功");
                            //                            $("#file_input").val("");

                            $("#loading").hide();

                        }


                    },
                    error: function (data, status, e)//服务器响应失败处理函数
                    {
                        alert(e);
                        $("#loading").hide();
                        console.log(e);
                        console.log(data);
                    }
                }
            )
              return false;
          }
