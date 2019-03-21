  function divdisappear() {

            $("#div2").hide();

        }

        divdisappear();


        function divdisplay() {


            $("#div2").show();

        }




        $("#btnQuery").click(function () {

            ctn_noPLQuery();


        });

        function trim(str) {
            return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
        }


        function ctn_noPLQuery() {


            var ctnListTemp = $("#ctnListID").val();


            if (ctnListTemp == "") {


                alert("请输入箱号");

                return false;

            }


            ctnListTemp = trim(ctnListTemp);//去除前后多余的空格

            var ctnList = ctnListTemp.replace(/\ +/g, ""); //去掉空格

            ctnList = ctnListTemp.replace(/[ ]/g, "");    //去掉空格

            ctnList = ctnListTemp.replace(/[\r\n]/g, ""); //去掉回车换行

           

            var ctnListArr = [];

            var n = 11;

            for (var i = 0, l = ctnList.length; i < l / n; i++) {

                var a = ctnList.slice(n * i, n * (i + 1));
                ctnListArr.push(a);

            }



            console.log(ctnListArr);


            var len = ctnListArr.length;


            var ctn_noList = "";

            for (var j = 0; j < ctnListArr.length; j++) {

                if (j < ctnListArr.length - 1) {

                    ctn_noList = ctn_noList + ctnListArr[j] + ",";


                }
                else {

                    ctn_noList = ctn_noList + ctnListArr[j];
                
                }
            }


            console.log(ctn_noList);
            

            $.ajax({

                type: "get",
                datatype: "json",
                url: "/TZInfo/TZBusiness?val1=" + ctn_noList + "&val88=" + "Ctn_noTZnoPL",

                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var str = JSON.stringify(map.dt);
                    if (str == "[]") {
                        alert("没有数据");
                        return false;
                    }

                    var _json = eval(map.dt);

                    var response = JSON.stringify(map.Response);

                    var html = "";

                    html += "<tr>";
                    html += "<td>箱号</td>";
                    html += "<td>起租日期</td>";
                    html += "<td>起租号</td>";
                    html += "<td>机型型号</td>";
                    html += "<td>造箱日期</td>";
                    html += "<td>起租地点</td>";
                    html += "</tr>";


                    $(_json).each(function (key) {


                        html += "<tr>";
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].ctn_id + "</td>"//0
                        html += "<td>" + _json[key].ctn_no + "</td>";  //1
                        html += "<td>" + _json[key].QZDate + "</td>"; //2
                        html += "<td>" + _json[key].QZNo + "</td>"; //2
                        html += "<td>" + _json[key].MachineNo + "</td>"; //2
                        html += "<td>" + _json[key].MakeDate + "</td>"; //2
                        html += "<td>" + _json[key].QZAddress + "</td>"; //2

                        html += "</tr>";





                    });
                    $("#QZInfotable").html(html);


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }




            })



        }


        $("#btnTZSettlePL").click(function () {

            if ($("table tr").length > 1) {


                if (!window.confirm('确定要对这部分数据做退租，一旦做了退租就不能做租金结算操作')) {

                    return false;
                }

                if ($("table tr").length == 2) {

                    alert("此模块只做批量退租处理单箱请至退租模块做退租操作");
                    return false;
                }


                divdisplay();

            }
            else {

                alert("请先查询起租数据");
                return false;

            }


        });


        $("#btnCancel").click(function () {


            divdisappear();

        });


        $("#btnTZAdd").click(function () {


            TZInfoPLByCtn_no();



        });

        function TZInfoPLByCtn_no() {


            var ctnListTemp = $("#ctnListID").val();


            if (ctnListTemp == "") {


                alert("请输入箱号");

                return false;

            }


            ctnListTemp = trim(ctnListTemp); //去除前后多余的空格

            var ctnList = ctnListTemp.replace(/\ +/g, ""); //去掉空格

            ctnList = ctnListTemp.replace(/[ ]/g, "");    //去掉空格

            ctnList = ctnListTemp.replace(/[\r\n]/g, ""); //去掉回车换行



            var ctnListArr = [];

            var n = 11;

            for (var i = 0, l = ctnList.length; i < l / n; i++) {

                var a = ctnList.slice(n * i, n * (i + 1));
                ctnListArr.push(a);

            }



            console.log(ctnListArr);


            var len = ctnListArr.length;


            var ctn_noList = "";

            for (var j = 0; j < ctnListArr.length; j++) {

                if (j < ctnListArr.length - 1) {

                    ctn_noList = ctn_noList + ctnListArr[j] + ",";


                }
                else {

                    ctn_noList = ctn_noList + ctnListArr[j];

                }
            }


            console.log(ctn_noList);


            var regu = /^[0-9]+\.?[0-9]*$/;

            var TZDate = $("#TZDate").val();

            if (TZDate == "") {

                alert("请输入退租日期");
                return false;

            }

            var r = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }

            var TZNO = $("#TZNo").val();

            if (TZNO == "") {

                alert("请输入退租号");
                return false;

            }

            var TZAdress = $("#TZAdress").val();

            var TZLoadFeeCoin = $("#TZLoadFeeCoin").find("option:selected").text();

            var TZLoadFee = $("#TZLoadFee").val();

            if (TZLoadFee == "") {

                $("#TZLoadFee").val(0.00);

            }

            if (!regu.test(TZLoadFee)) {
                alert("退租装卸费格式不正确");
                $("#TZLoadFee").focus();
                return false;

            }


            var TZPtiFeeCoin = $("#TZPtiFeeCoin").find("option:selected").text();

            var TZPtiFee = $("#TZPtiFee").val();

            if (TZPtiFee == "") {

                $("#TZPtiFee").val(0.00);

            }
            if (!regu.test(TZPtiFee)) {
                alert("退租pti费格式不正确");
                $("#TZPtiFee").focus();
                return false;

            }


            var TZTranFeeCoin = $("#TZTranFeeCoin").find("option:selected").text();

            var TZTranFee = $("#TZTranFee").val();

            if (TZTranFee == "") {

                $("#TZTranFee").val(0.00);

            }
            if (!regu.test(TZTranFee)) {
                alert("退租运输费格式不正确");
                $("#TZTranFee").focus();
                return false;

            }

            var TZXTFeeCoin = $("#TZXTFeeCoin").find("option:selected").text();

            var TZXTFee = $("#TZXTFee").val();


            if (TZXTFee == "") {

                $("#TZXTFee").val(0.00);

            }
            if (!regu.test(TZXTFee)) {
                alert("退租箱体修理费格式不正确");
                $("#TZXTFee").focus();
                return false;

            }



            var TZJZFeeCoin = $("#TZJZFeeCoin").find("option:selected").text();

            var TZJZFee = $("#TZJZFee").val();


            if (TZJZFee == "") {

                $("#TZJZFee").val(0.00);

            }
            if (!regu.test(TZJZFee)) {
                alert("退租机组修理费格式不正确");
                $("#TZJZFee").focus();
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TZInfo/TZBusiness?val1=" + TZDate + "&val2=" + TZNO + "&val3=" + TZAdress
              + "&val4=" + TZLoadFeeCoin + "&val5=" + TZLoadFee + "&val6=" + TZPtiFeeCoin +
              "&val7=" + TZPtiFee + "&val8=" + TZTranFeeCoin + "&val9=" + TZTranFee +
              "&val10=" + TZXTFeeCoin + "&val11=" + TZXTFee + "&val12=" + TZJZFeeCoin +
              "&val13=" + TZJZFee + "&val16=" + ctn_noList + "&val88=" + "TZinfoAddPLBYCtn_no",

                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);

                    window.location.reload();

                }


            })

        }
