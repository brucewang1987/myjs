  $(function () {
            $("#uploadify").uploadify({
                uploader: '/Home/UploadifyFun', //处理上传的方法  
                swf: '../../Uploadify/uploadify.swf',
                width: 60,
                height: 23,
                buttonText: "上传",
                buttonCursor: 'hand',
                fileobjName: 'Filedata',
                fileTypeExts: '*.xls;*.doc', //扩展名  
                fileTypeDesc: "请选择xls,doc文件", //文件说明  
                auto: false, //是否自动上传  
                multi: true, //是否一次可以选中多个文件  
                queueSizeLimit: 5//允许同时上传文件的个数  
            });
        });

        $("#btnImport").click(function () {


            $.ajax({
            
            type: "get",
             dataType: "json",
             url: "/Home/ImportData?val88="+"ImportData",


             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 window.location.reload();

             }
            
            })


        });

$("#btnQZRentImport").click(function (){

$.ajax({
            
            type: "get",
             dataType: "json",
             url: "/QZInfo/QZBusiness?val88="+"UploadQZRentInfo",


             success: function (ret) {

                 var map = eval('(' + ret + ')');
                 var response = JSON.stringify(map.Response);

                 alert(response);

                 window.location.reload();

             }
            
            })


});



         
