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
          $("#ship_corp").attr("disabled", true);
          $("#ctn_size").attr("disabled", true);
          $("#ctn_type").attr("disabled", true);
          $("#unit_status").attr("disabled", true);
          $("#in_edi_date").attr("disabled", true);
          $("#in_entrust_remark").attr("disabled", true);
          $("#in_ctn_remark").attr("disabled", true);
          $("#pti_status_look").attr("disabled", true);
          $("#pti_type_look").attr("disabled", true);
          $("#temperature_look").attr("disabled", true);
          $("#humidity_look").attr("disabled", true);
          $("#ventilation_look").attr("disabled", true);
          $("#btnInputpti").attr("disabled", true);
          $("#electrician").attr("disabled", true);
          $("#pti_date").attr("disabled", true);
          $("#pti_remark").attr("disabled", true);
          $("#ctn_id").hide();
          //    $("#box2").hide();
          //    $("#box3").hide();
          $("#businessdiv").hide();
      }

      init();

      $("#btnRush").click(function () {

          window.location.reload();

      });



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

      //拍照4
      var showimg4 = document.getElementById("showimg4");
      var imginput4 = document.getElementById("file_input4");
      document.getElementById("file_input4").onclick = function () {
          imginput4.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg4.src = url;
              console.log("开始绑定src");
          }
      }


      //拍照5
      var showimg5 = document.getElementById("showimg5");
      var imginput5 = document.getElementById("file_input5");
      document.getElementById("file_input5").onclick = function () {
          imginput5.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg5.src = url;
              console.log("开始绑定src");
          }
      }


      //拍照6
      var showimg6 = document.getElementById("showimg6");
      var imginput6 = document.getElementById("file_input6");
      document.getElementById("file_input6").onclick = function () {
          imginput6.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg6.src = url;
              console.log("开始绑定src");
          }
      }


      //拍照7
      var showimg7 = document.getElementById("showimg7");
      var imginput7 = document.getElementById("file_input7");
      document.getElementById("file_input7").onclick = function () {
          imginput7.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg7.src = url;
              console.log("开始绑定src");
          }
      }


      //拍照8
      var showimg8 = document.getElementById("showimg8");
      var imginput8 = document.getElementById("file_input8");
      document.getElementById("file_input8").onclick = function () {
          imginput8.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg8.src = url;
              console.log("开始绑定src");
          }
      }


      //拍照9
      var showimg9 = document.getElementById("showimg9");
      var imginput9 = document.getElementById("file_input9");
      document.getElementById("file_input9").onclick = function () {
          imginput9.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg9.src = url;
              console.log("开始绑定src");
          }
      }



      //拍照10
      var showimg10 = document.getElementById("showimg10");
      var imginput10 = document.getElementById("file_input10");
      document.getElementById("file_input10").onclick = function () {
          imginput10.onchange = function () {
              var files = this.files;
              console.log(files);   //本地的临时路径
              // var formdata = new FormData();
              //formdata.append('fileStream', files);
              //　formdata再传给后台


              var url = URL.createObjectURL(files[0]);

              console.log("url:" + url);

              showimg10.src = url;
              console.log("开始绑定src");
          }
      }

      $("#btnUpload").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input");

          $("#photodiv2").show();
          $("#photodiv1").hide();
          ishow = 2;
      });


      $("#btnUpload2").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input2");
          $("#photodiv3").show();
          $("#photodiv2").hide();
          ishow = 3;

      });

      $("#btnUpload3").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input3");
          $("#photodiv4").show();
          $("#photodiv3").hide();
          ishow = 4;

      });

      $("#btnUpload4").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input4");
          $("#photodiv5").show();
          $("#photodiv4").hide();
          ishow = 5;

      });

      $("#btnUpload5").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }


          $("#loading").show();
          ajaxFileUpload("file_input5");
          $("#photodiv6").show();
          $("#photodiv5").hide();
          ishow = 6;

      });


      $("#btnUpload6").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input6");
          $("#photodiv7").show();
          $("#photodiv6").hide();
          ishow = 7;
      });


      $("#btnUpload7").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }
          $("#loading").show();
          ajaxFileUpload("file_input7");
          $("#photodiv8").show();
          $("#photodiv7").hide();
          ishow = 8;
      });

      $("#btnUpload8").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input8");
          $("#photodiv9").show();
          $("#photodiv8").hide();
          ishow = 9;
      });

      $("#btnUpload9").click(function () {
          $("#loading").show();
          ajaxFileUpload("file_input9");
          $("#photodiv10").show();
          $("#photodiv9").hide();
          ishow = 10;
      });

      $("#btnUpload10").click(function () {

          if (!window.confirm('确定上传照片？')) {

              return false;

          }

          $("#loading").show();
          ajaxFileUpload("file_input10");

      });

      function ajaxFileUpload(id) {
          var result = "";

          var ctn_no = $("#ctn_no").val();

          $.ajaxFileUpload
            (
                {
                    url: '/Unitbusiness/SaveImg?ctn_no=' + ctn_no, //用于文件上传的服务器端请求地址
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


      //设置一个全局变量用于控制显示拍照界面
      var ishow = 1;

      function showpti() {
          $("#businessdiv").show();
          $("#selectContent").hide();
          //    $("#box2").show();
          //    $("#box3").show();
          //        var myDate = new Date();
          //        var year = myDate.getFullYear();
          //        var mon = myDate.getMonth() + 1;
          //        var mon2 = "";
          //        if (mon < 10) {
          //            mon2 = "0" + mon + "";
          //        }
          //        else {
          //            mon2 = mon + "";
          //        }
          //        var day = myDate.getDate();
          //        $("#pti_date").val(year + "-" + mon2 + "-" + day + " 00:00:00");

          if (ishow == 1) {
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();
              $("#loading").hide();

          }
          if (ishow == 2) {
              $("#photodiv1").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 3) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 4) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 5) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 6) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 7) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 8) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv9").hide();
              $("#photodiv10").hide();

          }
          if (ishow == 9) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv10").hide();

          }

          if (ishow == 10) {
              $("#photodiv1").hide();
              $("#photodiv2").hide();
              $("#photodiv3").hide();
              $("#photodiv4").hide();
              $("#photodiv5").hide();
              $("#photodiv6").hide();
              $("#photodiv7").hide();
              $("#photodiv8").hide();
              $("#photodiv9").hide();

          }


      }

      $("#btnInputpti").click(function () {

          var ctn_id = $("#ctn_id").val();

          if (ctn_id == "") {

              alert("请先查询数据");
              return false;
          }
          showpti();
      });

      $("#btnBack").click(function () {

          $("#businessdiv").hide();
          $("#selectContent").show();

      });

      $("#temperature").blur(function () {

          var temperature = $("#temperature").val();
          var _temperature = temperature.toUpperCase();

          $("#temperature").val(_temperature);

      });


      $("#ctn_no").blur(function () {

          var ctn_no = $("#ctn_no").val();
          var _ctn_no = ctn_no.toUpperCase();

          $("#ctn_no").val(_ctn_no);

      });


      $("#pti_status").blur(function () {

          var pti_type = $("#pti_type").val();
          var pti_status = $("#pti_status").val();
          if (pti_type == "DL" && pti_status == "PTO") {
              //            $("#temperature").val("-18C");

              $("#ZF").val("-");
              $("#temperature").val("18");

          }

      });

      function SubmitPTIData() {

          var electrician_user_name = $("#span_username").text();
          var ctn_id = $("#ctn_id").val();
          var pti_type = $("#pti_type").val();
          if (pti_type == "empty") {
              alert("pti动作不能为空");
              $("#pti_type").focus();
              return false;
          }
          var pti_status = $("#pti_status").val();
          if (pti_status == "empty") {
              alert("pti状态不能为空");
              $("#pti_status").focus();
              return false;
          }

          var temperature = $("#temperature").val();




          if (temperature == "") {

              if (pti_type == "DL" && pti_status == "PTO") {
                  alert("pti动作为打冷,pti状态为通过的情况温度不能为空");
                  $("#temperature").focus();
                  return false;
              }

          }







          var ZF = $("#ZF").val();
          temperature = ZF + temperature + "C";



          if (pti_status == "PTN") {

              temperature = "";

          }


          if (temperature == "-C") {

              temperature = "";

          }


          var humidity = $("#humidity").val();

          if (humidity != "") {

              humidity = humidity + "%";

          }

          var ope = $("#ship_corp").val();

          var unit_status = $("#unit_status").val();

          if (unit_status == "AV#") {

              unit_status = 'AV';
          
          }

          var remark = $("#remark").val();


          var _remark = remark.toUpperCase();

          $("#remark").val(_remark);


          var ctn_no = $("#ctn_no").val();


          var ventilation = $("#ventilation").val();

          console.log('ctn_id:' + ctn_id + ',箱号:' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
        + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',通风窗:' + ventilation + ',备注:' + _remark);

          //            var logInfo = '箱号:' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
          //         + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',通风窗:' + ventilation + ',备注:' + _remark;

          var logInfo = '' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
        + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',通风窗:' + ventilation + ',备注:' + _remark;

          if (!window.confirm('箱号:' + ctn_no + ',箱主:' + ope + ',机组状态:' + unit_status + ',电工:' + electrician_user_name + ',pti动作:'
        + pti_type + ',pti状态:' + pti_status + ',温度:' + temperature + ',湿度:' + humidity + ',通风窗:' + ventilation + ',备注:' + _remark + ',请确认信息是否提交')) {

              return false;

          }

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/Unitbusiness/PtiBusiness?ctn_id=" + ctn_id + "&ope=" + ope + "&temperature=" + temperature
         + "&pti_status=" + pti_status + "&pti_type=" + pti_type + "&electrician_user_name=" + electrician_user_name
         + "&unit_status=" + unit_status + "&remark=" + _remark + "&logInfo=" + logInfo
         + "&humidity=" + humidity + "&ventilation=" + ventilation + "&requestName=" + "SubmitPtiData",

              success: function (ret) {

                  var result = ret.strResult;
                  if (result == "ok") {

                      alert("提交成功");
                      SelectInfoByCtnNo();
                      $("#businessdiv").hide();
                      $("#selectContent").show();

                  }
                  else {

                      alert("提交失败");
                  }

              }


          })

      }

      $("#btnSubmit").click(function () {

          SubmitPTIData();

      })


      function SelectInfoByCtnNo() {

          var ctn_no = $("#ctn_no").val();
          if (ctn_no == "") {

              alert("请录入箱号");
              $("#ctn_no").focus();
              return false;
          }

          $.ajax({

              type: "get",
              dataType: "json",
              url: "/Unitbusiness/QueryCtnInfo?ctn_no=" + ctn_no + "&requestName=" + "selectDataByNo",
              success: function (ret) {

                  var str = JSON.stringify(ret);
                  if (str == "[]") {
                      alert("没有符合条件的数据");
                      window.location.reload();
                  }

                  $(ret).each(function (key) {
                      $("#ctn_id").val(ret[key].ctn_id);
                      $("#ship_corp").val(ret[key].ope);
                      $("#ctn_size").val(ret[key].ctn_size);
                      $("#ctn_type").val(ret[key].ctn_type);
                      $("#unit_status").val(ret[key].unit_status);
                      $("#in_edi_date").val(ret[key].in_edi_date);
                      $("#in_entrust_remark").val(ret[key].in_entrust_remark);
                      $("#in_ctn_remark").val(ret[key].in_ctn_remark);
                      $("#pti_status_look").val(ret[key].pti_status);
                      $("#pti_type_look").val(ret[key].pti_type);
                      $("#temperature_look").val(ret[key].temperature);
                      $("#humidity_look").val(ret[key].humidity);
                      $("#ventilation_look").val(ret[key].ventilation);
                      $("#ctn_no").val(ret[key].ctn_no);
                      $("#electrician").val(ret[key].electrician);
                      $("#pti_date").val(ret[key].pti_date);
                      $("#pti_remark").val(ret[key].pti_remark);
                  });

                  $("#btnInputpti").attr("disabled", false);
              }


          })

      }


      $("#btnSelect").click(function () {

          SelectInfoByCtnNo();

      });
