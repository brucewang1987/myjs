$("#login").click(function () {

               var userName = $("#username").val();

               if (userName == "") {

                   alert("请输入姓名");
                   return false;

               }

               var job = $("#job").val();

               console.log(job + ":" + userName);

               var user = job + userName;

               location.replace("/TestSop/DaoHangIndex?username=" + user);

           });
