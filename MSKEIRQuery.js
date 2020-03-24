 $("#btnQuery").click(function () {

            var startdate = $("#startdate").val();

            if (startdate != "") {
                if (startdate.indexOf("00:00:00") < 0) {

                    startdate = startdate + " 00:00:00";
                    $("#startdate").val(startdate);

                }
            }


            var enddate = $("#enddate").val();

            if (enddate != "") {
                if (enddate.indexOf("23:59:59") < 0) {

                    enddate = enddate + " 23:59:59";
                    $("#enddate").val(enddate);

                }
            }

            var loc = $("#Loc").val();


            console.log("开始时间" + startdate + "------结束时间" + enddate + ">>>>>堆场号是" + loc);



            $.ajax({

                type: "get",
                dataType: "json",
                url: "/MSKEIR/RequestEIR?val1=" + loc + "&val2=" + startdate + "&val3=" + enddate + "&val88=" + "QueryInv",

                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    console.log(JSON.stringify(map));

                    var str = JSON.stringify(map.yardStorage);



                    $("#p_result").text(JSON.stringify(map));

                    if (str == "[]") {
                        alert("无数据");
                        //return false;
                        window.location.reload();
                    }

                    var _json = eval(map.dt);


                    //                    console.log(_json);

                    var response = JSON.stringify(map.Response);

                }




            })


        });
