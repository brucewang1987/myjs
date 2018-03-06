//     function getfile(node) {

//         var file = null;
//         if (node.files && node.files[0]) {
//             file = node.files[0];
//         } else if (node.files && node.files.item(0)) {
//             file = node.files.item(0);
//         }

//         alert(file);

//         alert(file.name);

//         $("#file").val(file.name.toString());
//     
//     
//     }


     function UploadFile() {

         var file = $("#fileField").val();

         var temp = file.lastIndexOf("\\");

         var temp2 = file.lastIndexOf(".");

//         alert("最后一个\\标志第几位：" + temp.toString());
//         alert("点在第几位：" + temp2.toString());


         var filetype = file.substr(temp2 + 1, 3);

         var filenamelength = temp2 - temp - 1;

         var fileName = file.substr(temp + 1, filenamelength);

         alert("文件类型:" + filetype);
         alert("文件名长度:" + filenamelength);
         alert("文件名加后缀:" + fileName + "." + filetype);

         var fileRealName = fileName + "." + filetype;


         $.ajax({
         
         
                type: "get",
                dataType: "json",
                         url: "/QZInfo/QZBusiness?val1=" + fileRealName +"&val88="+"UploadQzinfo",

                 success: function (ret) {

                     var map = eval('(' + ret + ')');
                     var response = JSON.stringify(map.Response);

                     alert(response);



                 },
                 error: function (XmlHttpRequest, textStatus, errorThrown) {
                     alert(XmlHttpRequest.responseText);
                 }

         
         
         })


         }
