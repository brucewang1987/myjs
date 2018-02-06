 function init() {

            $("#btnOk").attr("disabled", true);
            $("#btnUpdate").attr("disabled", true);

        
        }
        init();

        function AddTZInfo() {

            var regu = /^[0-9]+\.?[0-9]*$/;

            var ctn_no = $("#ctn_noId").val();

            if (ctn_no == "") {

                alert("请输入箱号");
                return false;

            }

            var TZDate = $("#TZDate").val();
            if (TZDate == "") {

                alert("请选择退租时间");
                return false;
            }

            var r = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }


            var TZNo = $("#TZNo").val();
            if (TZNo == "") {

                alert("请输入退租号");
                return false;

            }

            var TZAddress = $("#TZAddress").val();

            if (TZAddress == "") {

                alert("请输入退租地址");
                return false;

            }

            var TZLoadFee = $("#TZLoadFee").val();
            if (TZLoadFee == "") {

                alert("请输入退租装卸费");
                return false;
            
            }

            if (!regu.test(TZLoadFee)) {
                alert("退租装卸费请输入数字");
                $("#TZLoadFee").focus();
                return false;

            }

            var total = 0.00;

            TZLoadFee = TZLoadFee * 1.00;

            total = total + TZLoadFee;

            var TZPTIFee = $("#TZPTIFee").val();


            if (TZPTIFee == "") {

                alert("请输入退租pti费");
                return false;

            }

            if (!regu.test(TZPTIFee)) {
                alert("退租pti费请输入数字");
                $("#TZPTIFee").focus();
                return false;

            }

            TZPTIFee = TZPTIFee * 1.00;

            total = total + TZPTIFee;

            var TZTransFee = $("#TZTransFee").val();

            if (TZTransFee == "") {

                alert("请输入退租运输费");
                return false;

            }

            if (!regu.test(TZTransFee)) {
                alert("退租运输费请输入数字");
                $("#TZTransFee").focus();
                return false;

            }

            TZTransFee = TZTransFee * 1.00;

            total = total + TZTransFee;

            var TZJZFee = $("#TZJZFee").val();

            if (TZJZFee == "") {

                alert("请输入退租机组修理费");
                return false;

            }

            if (!regu.test(TZJZFee)) {
                alert("退租机组修理费请输入数字");
                $("#TZJZFee").focus();
                return false;

            }

            TZJZFee = TZJZFee * 1.00;

            total = total + TZJZFee;


            var TZXTFee = $("#TZXTFee").val();


            if (TZXTFee == "") {

                alert("请输入退租箱体修理费");
                return false;

            }

            if (!regu.test(TZXTFee)) {
                alert("退租箱体修理费请输入数字");
                $("#TZXTFee").focus();
                return false;

            }

            TZXTFee = TZXTFee * 1.00;

            total = total + TZXTFee;


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TZBusiness/TZBusiness?val1=" + ctn_no + "&val2=" + TZDate +
                "&val3=" + TZNo + "&val4=" + TZAddress + "&val5=" + TZLoadFee +
                "&val6=" + TZPTIFee + "&val7=" + TZTransFee + "&val8=" + TZJZFee +
                "&val9=" + TZXTFee + "&val10=" + total + "&val88=" + "AddTZInfo"
                 ,
                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);

                    window.location.reload();


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }

            })


        }

        function QueryQZInfo() {

            var ctn_no = $("#ctn_noId").val();

            if (ctn_no == "") {

                alert("请输入箱号");
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "/QZBusiness/QZBusiness?val1=" + ctn_no + "&val88=" + "QueryQZInfo",

                success: function (ret) {

                    var map = eval('(' + ret + ')');

                    var str = JSON.stringify(map.dt);
                    if (str == "[]") {
                        alert("没有数据");
                        return false;
                    }

                    var _json = eval(map.dt);

                    var response = JSON.stringify(map.Response);


                    $(_json).each(function (key) {
                       
                        $("#ctn_noId").val(_json[key].ctn_no);
                        $("#QZDate").val(_json[key].QZDate);


                    });
                    $("#btnOk").attr("disabled", false);

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })


        }


        function QueryTZinfo() {

            var ctn_no = $("#ctn_noId").val();


            if (ctn_no == "") {

                alert("请输入查询箱号");
                return false;

            }

            $.ajax({
                type: "get",
                dataType: "json",
                url: "/TZBusiness/TZBusiness?val1=" + ctn_no + "&val88=" + "QueryTZInfo",
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

                    var i = 1;


                    html += "<tr>";
                    html += "<td>箱号</td>";//0
                    html += "<td>起租日期</td>";//1
                    html += "<td>起租号</td>";//2
                    html += "<td>机型型号</td>";//3
                    html += "<td>制造日期</td>";//4
                    html += "<td>起租地点</td>";//5
                    html += "<td>日租金</td>";//6
                    html += "<td>起租装卸费</td>";//7
                    html += "<td>起租pti检验费</td>";//8
                    html += "<td>起租运输费</td>";//9
                    html += "<td>起租总费用</td>";//10
                    html += "<td>起租录入时间</td>";//11
                    html += "<td>起租修改时间</td>";//12
                    html += "<td>退租时间</td>";//13
                    html += "<td>退租号</td>";//14
                    html += "<td>退租地点</td>";//15
                    html += "<td>退租装卸费(美元)</td>";//16
                    html += "<td>退租pti费(美元)</td>";//17
                    html += "<td>退租运输费(美元)</td>";//18
                    html += "<td>退租机组修理费(美元)</td>";//19
                    html += "<td>退租箱体修理费(美元)</td>";//20
                    html += "<td>退租总费用(美元)</td>";//21
                    html += "<td>租金(美元)</td>";//22
                    html += "<td>退租录入时间</td>";//23
                    html += "<td>退租修改时间</td>";//24
                    html += "<td>操作</td>";
                    html += "</tr>";

                    $(_json).each(function (key) {

                        html += "<tr>";
                        html += "<td>" + _json[key].ctn_no + "</td>";  //0
                        html += "<td>" + _json[key].QZDate + "</td>";//1
                        html += "<td>" + _json[key].QZNo + "</td>";//2
                        html += "<td>" + _json[key].MachineNo + "</td>";//3
                        html += "<td>" + _json[key].MakeDate + "</td>";//4
                        html += "<td>" + _json[key].QZAddress + "</td>";//5
                        html += "<td>" + _json[key].RentDaily + "</td>";//6
                        html += "<td>" + _json[key].QZLoadFee + "</td>";//7
                        html += "<td>" + _json[key].QZPtiFee + "</td>";//8
                        html += "<td>" + _json[key].QZTranFee + "</td>";//9
                        html += "<td>" + _json[key].QZTotal + "</td>";//10
                        html += "<td>" + _json[key].inputDate + "</td>";//11
                        html += "<td>" + _json[key].changeDate + "</td>";//12
                        html += "<td>" + _json[key].TZDate + "</td>";//13
                        html += "<td>" + _json[key].TZNo + "</td>";//14
                        html += "<td>" + _json[key].TZAddress + "</td>";//15
                        html += "<td>" + _json[key].TZLoadFee + "</td>";//16
                        html += "<td>" + _json[key].TZPtiFee + "</td>";//17
                        html += "<td>" + _json[key].TZTranFee + "</td>";//18
                        html += "<td>" + _json[key].TZJZFee + "</td>";//19
                        html += "<td>" + _json[key].TZXTFee + "</td>";//20
                        html += "<td>" + _json[key].TZTotal + "</td>";//21
                        html += "<td>" + _json[key].RentTotal + "</td>";//22
                        html += "<td>" + _json[key].TZInputDate + "</td>";//23
                        html += "<td>" + _json[key].TZChangeDate + "</td>";//24
                        
                        html += "<td>" + "<input type = " + "'" + "button" + "' value = " + "'" + "编辑"
                      + "' onclick = '" + "EditTZinfo(" + i + ")" + "'" + "/>" + "|"
                       + "<input type = " + "'" + "button" + "' value = " + "'" +
                        "删除" + "' onclick = '" + "return DeleteQTInfo(" + i + ")" + "'" + "/>" + "</td>";
                        html += "<td style = " + "'" + "display:none;" + "'" + ">" + _json[key].ctn_id + "</td>"//26
                        html += "</tr>";


                    });
                    $("#TZinfoTable").html(html);
                    $("#btnUpdate").attr("disabled", false);



                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }



            })


        }

        function EditTZinfo(i) {

            var ctn_id = $("#TZinfoTable").find("tr").eq(i).find("td").eq(26).text();
            $("#ctn_id").val(ctn_id);
            var ctn_no = $("#TZinfoTable").find("tr").eq(i).find("td").eq(0).text();
            $("#ctn_noId").val(ctn_no);
            var QZDate = $("#TZinfoTable").find("tr").eq(i).find("td").eq(1).text();
            $("#QZDate").val(QZDate);
            var TZDate = $("#TZinfoTable").find("tr").eq(i).find("td").eq(13).text();
            $("#TZDate").val(TZDate);
            var TZNo = $("#TZinfoTable").find("tr").eq(i).find("td").eq(14).text();
            $("#TZNo").val(TZNo);
            var TZAddress = $("#TZinfoTable").find("tr").eq(i).find("td").eq(15).text();
            $("#TZAddress").val(TZAddress);
            var TZLoadFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(16).text();
            $("#TZLoadFee").val(TZLoadFee);
            var TZPTIFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(17).text();
            $("#TZPTIFee").val(TZPTIFee);
            var TZTransFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(18).text();
            $("#TZTransFee").val(TZTransFee);
            var TZJZFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(19).text();
            $("#TZJZFee").val(TZJZFee);
            var TZXTFee = $("#TZinfoTable").find("tr").eq(i).find("td").eq(20).text();
            $("#TZXTFee").val(TZXTFee);

        
        }

        function DeleteQTInfo(i)
        {
            var ctn_id = $("#TZinfoTable").find("tr").eq(i).find("td").eq(26).text();

            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TZBusiness/TZBusiness?val1=" + ctn_id + "&val88=" + "DeleteTZInfo",

                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);

                    QueryTZinfo();

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }


            })


        }

        function TZChangeInfo() {

            var regu = /^[0-9]+\.?[0-9]*$/;

            var ctn_id = $("#ctn_id").val();

            var TZDate = $("#TZDate").val();
            if (TZDate == "") {

                alert("请选择退租时间");
                return false;
            }

            var r = TZDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
                return false;
            }


            var TZNo = $("#TZNo").val();
            if (TZNo == "") {

                alert("请输入退租号");
                return false;

            }

            var TZAddress = $("#TZAddress").val();

            if (TZAddress == "") {

                alert("请输入退租地址");
                return false;

            }

            var TZLoadFee = $("#TZLoadFee").val();
            if (TZLoadFee == "") {

                alert("请输入退租装卸费");
                return false;

            }

            if (!regu.test(TZLoadFee)) {
                alert("退租装卸费请输入数字");
                $("#TZLoadFee").focus();
                return false;

            }

            var total = 0.00;

            TZLoadFee = TZLoadFee * 1.00;

            total = total + TZLoadFee;

            var TZPTIFee = $("#TZPTIFee").val();


            if (TZPTIFee == "") {

                alert("请输入退租pti费");
                return false;

            }

            if (!regu.test(TZPTIFee)) {
                alert("退租pti费请输入数字");
                $("#TZPTIFee").focus();
                return false;

            }

            TZPTIFee = TZPTIFee * 1.00;

            total = total + TZPTIFee;

            var TZTransFee = $("#TZTransFee").val();

            if (TZTransFee == "") {

                alert("请输入退租运输费");
                return false;

            }

            if (!regu.test(TZTransFee)) {
                alert("退租运输费请输入数字");
                $("#TZTransFee").focus();
                return false;

            }

            TZTransFee = TZTransFee * 1.00;

            total = total + TZTransFee;

            var TZJZFee = $("#TZJZFee").val();

            if (TZJZFee == "") {

                alert("请输入退租机组修理费");
                return false;

            }

            if (!regu.test(TZJZFee)) {
                alert("退租机组修理费请输入数字");
                $("#TZJZFee").focus();
                return false;

            }

            TZJZFee = TZJZFee * 1.00;

            total = total + TZJZFee;


            var TZXTFee = $("#TZXTFee").val();


            if (TZXTFee == "") {

                alert("请输入退租箱体修理费");
                return false;

            }

            if (!regu.test(TZXTFee)) {
                alert("退租箱体修理费请输入数字");
                $("#TZXTFee").focus();
                return false;

            }

            TZXTFee = TZXTFee * 1.00;

            total = total + TZXTFee;



            $.ajax({

                type: "get",
                dataType: "json",
                url: "/TZBusiness/TZBusiness?val1=" + ctn_id + "&val2=" + TZDate +
                "&val3=" + TZNo + "&val4=" + TZAddress + "&val5=" + TZLoadFee +
                "&val6=" + TZPTIFee + "&val7=" + TZTransFee + "&val8=" + TZJZFee +
                "&val9=" + TZXTFee + "&val10=" + total + "&val88=" + "ChangeTZInfo",

                success: function (ret) {

                    var map = eval('(' + ret + ')');
                    var response = JSON.stringify(map.Response);

                    alert(response);

                    $("#btnUpdate").attr("disabled", false);

                    QueryTZinfo();


                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }



            })


        
        }

        function exportexcel() {
            $("#TZinfoTable").table2excel({
                exclude: ".noExl",
                name: "Excel Document Name",
                filename: "myFileName",
                exclude_img: true,
                exclude_links: true,
                exclude_inputs: true
            });
        }
