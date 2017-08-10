 function InitPage() {
             $("#pageIndex").val(1);

             var page = $("#pageIndex").val();

//                         alert("当前页码" + page);

         }
         InitPage();

         function selectChangeValue() {

             //            alert("改变了值");
             $("#pageIndex").text(1);
             var page = $("#pageIndex").text();
             //            alert("此时页码" + page);

         }

         function PageloadInit() {

            
             $.ajax({
                 type: "post",
                 dataType: "text",
                 url: "Handler.ashx",
                 success: function (ret) {
                     var _json = eval(ret);



                     var i = 1;
                     $(_json).each(function (key) {


                         var option = "<option value = " + "'" + _json[key].ope + "'>" + _json[key].ope + "</option>";


                         $("#opeSelect").append(option);
                         i++;
                     });
                     $("#opeSelect").prepend("<option value='0'>请选择</option>");



                 }

             })
         }
         PageloadInit();
//         function PageLoc() {

//             $.ajax({
//                 type: "post",
//                 dataType: "text",
//                 url: "lochandler.ashx",
//                 success: function (ret) {
//                     var _json = eval(ret);
//                     var i = 1;
//                     $(_json).each(function (key) {

//                         var option = "<option value = " + "'" + _json[key].place_id + "'>" + _json[key].place_id + "</option>";

//                         $("#locSelect").append(option);
//                         i++;
//                     });
//                     $("#locSelect").prepend("<option value='0'>请选择</option>");



//                 }

//             })



//         }


         //         PageLoc();


         function GetInout() {

             var start = $("#StartDateId").val();
             var end = $("#EndDateId").val();

             if (start == "") {

                 alert("请选择开始时间");
                 return false;
             }
             if (end == "") {

                 alert("请选择结束时间");
                 return false;
             }


//             alert("开始时间" + start + "-----结束时间" + end);
//             return false;


             $.ajax({
                 type: "get",
                 dataType: "json",
                 url: "opeInoutHandler.ashx?val1=" + $("#opeSelect").val() + "&val2=" + $("#StartDateId").val() + "&val3=" + $("#EndDateId").val(),

                 success: function (ret) {


//                                                     alert(ret);

                     //                                var _json = eval(ret);

//                     var page = eval(ret.PageCount);



                     var _json = eval(ret.DT);

//                     var allCount = eval(ret.allCount);



                     //                                        alert("总共:" + allCount + "条记录");

//                     $("#allpage").text(page);

//                     $("#allCount").text(allCount);

                     var html = "";
                     html += "<tr>";
                     html += "<td>客户</td>";
                     html += "<td>进(TEU)</td>";
                     html += "<td>出(TEU)</td>";
                     html += "</tr>";
                     $(_json).each(function (key) {
                         html += "<tr>";
                         html += "<td>" + _json[key].ope + "</td>";
                         html += "<td>" + _json[key].进 + "</td>";
                         html += "<td>" + _json[key].出 + "</td>";
                         html += "</tr>";
                     });
                     $("#InOutTable").html(html);
                     //                                alert(ret);

//                     var page = $("#pageIndex").val();

//                     $("#pagelabel").text(page);

//                     $("#pageDiv").css("display", "inline");


                 }

             }

        )


         }
