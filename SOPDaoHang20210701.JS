 function GetRequest() {
                    //                    var url = location.search; //获取url中"?"符后的字串
                    //                    if (url.indexOf("?") != -1) {    //判断是否有参数
                    //                        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                    //                        strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                    //                        //                alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
                    //                    }
                    //                    var username = strs[1];

                    var urlinfo = window.location.href; //获取url
                    var username = urlinfo.split("?")[1].split("=")[1]; //拆分url得到”=”后面的参数

                    if (username.substring(0, 2) == "DK") {

                        $("#box4").hide();
                        $("#box5").hide();

                    }

                    if (username.substring(0, 2) == "XG") {

                        $("#box1").hide();
                        $("#box2").hide();
                        $("#box3").hide();

                    }

                    var user = decodeURI(username);

                    var iLen = user.length;

                    var iLen2 = iLen - 2;

                    console.log(iLen);

                    user = user.substr(2, iLen2);

                    $("#span_username").text(user);

                }
                GetRequest();


                $("#box1").click(function () {

                    var user = $("#span_username").text();

                    console.log(user);

                    window.location.href = "/TestSop/JinZhaZchkIndex?username=" + user;

                });

                $("#box2").click(function () {

                    var user = $("#span_username").text();

                    console.log(user);

                    window.location.href = "/TestSop/JinZhaTKCCIndex?username=" + user;

                });

                $("#box3").click(function () {

                    var user = $("#span_username").text();

                    console.log(user);

                    window.location.href = "/TestSop/ChuZhaSOPIndex?username=" + user;

                });

                $("#box4").click(function () {

                    var user = $("#span_username").text();

                    console.log(user);

                    window.location.href = "/TestSop/XGInfoCheckIndex?username=" + user;

                });

                $("#box5").click(function () {

                    var user = $("#span_username").text();

                    console.log(user);

                    window.location.href = "/TestSop/XGTransportIndex?username=" + user;

                });
