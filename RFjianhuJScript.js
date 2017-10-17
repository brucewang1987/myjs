function InsertRfinfo() {

    var CTNR_NO = $("#CTNR_NOID").val();
    if (CTNR_NO == "") {


        alert("请输入CTNR_NO");
        return false;

    }
    
    
    
    
    
    
     var itotal = 0;

            var ctn_no = CTNR_NO;

            var ctnnoLen = ctn_no.length;

            var regu = /^[0-9]+\.?[0-9]*$/;

            var ctn7 = ctn_no.substr(4, 7);
            var ctn4 = ctn_no.substr(0, 4);

            if (ctnnoLen != 11) {

                alert("箱号长度应为11位,请重新输入");
                return false;

            }
                        else if (!/^[a-zA-Z]+$/.test(ctn4)) {

                alert("箱号前4位必须是字母");
                return false;

                        }
             if (isNaN(ctn7))
{
    alert("箱号后7位必须为数字");
                    return false;
}
//            else if (!regu.test(ctn_no.substring(4, 7))) {

//                alert("箱号后7位必须为数字");
//                return false;
//            
//            }
           

            var iChar = 0;
            for (var i = 0; i < ctn4.length; i++) {

                var sChar = ctn4.substr(i, 1);

                if (sChar == "A") {

                    iChar = 10;

                }
                if (sChar == "B") {

                    iChar = 12;

                }
                if (sChar == "C") {

                    iChar = 13;

                }
                if (sChar == "D") {

                    iChar = 14;

                }
                if (sChar == "E") {

                    iChar = 15;

                }
                if (sChar == "F") {

                    iChar = 16;

                }
                if (sChar == "G") {

                    iChar = 17;

                }
                if (sChar == "H") {

                    iChar = 18;

                }
                if (sChar == "I") {

                    iChar = 19;

                }
                if (sChar == "J") {

                    iChar = 20;

                }
                if (sChar == "K") {

                    iChar = 21;

                }
                if (sChar == "L") {

                    iChar = 23;

                }
                if (sChar == "M") {

                    iChar = 24;

                }
                if (sChar == "N") {

                    iChar = 25;

                }
                if (sChar == "O") {

                    iChar = 26;

                }
                if (sChar == "P") {

                    iChar = 27;

                }
                if (sChar == "Q") {

                    iChar = 28;

                }
                if (sChar == "Q") {

                    iChar = 28;

                }
                if (sChar == "R") {

                    iChar = 29;

                }
                if (sChar == "S") {

                    iChar = 30;

                }
                if (sChar == "T") {

                    iChar = 31;

                }
                if (sChar == "U") {

                    iChar = 32;

                }
                if (sChar == "V") {

                    iChar = 34;

                }
                if (sChar == "W") {

                    iChar = 35;

                }
                if (sChar == "X") {

                    iChar = 36;

                }
                if (sChar == "Y") {

                    iChar = 37;

                }
                if (sChar == "Z") {

                    iChar = 38;

                }
//                iChar = ConvertChar(sChar);


                var temp = iChar * Math.pow(2, i);

                itotal = itotal + temp;
            }

            for (var i = 4; i < 10; i++) {

                iChar = ctn_no.substr(i, 1) * 1;

                console.log(iChar);

                itotal = itotal + iChar * Math.pow(2, i);
            }


            var sCRC = (itotal % 11) + '';

            if (sCRC == "10") {


                sCRC = "0";

            }

            if (sCRC == ctn_no.substr(10, 1)) {


                console.log("箱号正确");

            }
            else {


                alert("箱号非法,校验码为" + sCRC + "!");
                return false;
            }
    
    
    
    
    
    

    var INTO_PORT = $("#INTO_PORT_ID").val();

    if (INTO_PORT == "") {

        alert("请选择INTO_PORT");
        return false;
    }


    var r = INTO_PORT.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
        alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd例    如：2008-08-08");
        return false;
    }



    var vol = $("#volID").val();

    if (vol == "") {

        alert("请输入vol");
        return false;
    }


    var SET_Temp = $("#SET_Temp_ID").val();
    if (SET_Temp == "") {

        alert("请输入SET_Temp");
        return false;
    }

    var YENT = $("#YENT_ID").val();

    if (YENT == "") {

        alert("请输入YENT");
        return false;

    }

    //             var RET = $("#RET_ID").val();

    //             var DATE = $("#DateID").val();


    $.ajax({

        type: "get",
        dataType: "json",
        url: "RFjianhuHandler.ashx?val1=" + CTNR_NO + "&val2=" + INTO_PORT +
                 "&val3=" + vol + "&val4=" + SET_Temp + "&val5=" + YENT + "&val8=" + "AddRfinfo",
        success: function (ret) {

            var str = JSON.stringify(ret.strAddFlag);

            alert(str);
            window.location.reload();
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }


    })

}



function QueryGateInRF() {

    var CTNR_NO = $("#CTNR_NOID").val();
    if (CTNR_NO == "") {


        alert("请输入CTNR_NO");
        return false;

    }

    $.ajax({
        type: "get",
        dataType: "json",
        url: "RFjianhuHandler.ashx?val1=" + CTNR_NO + "&val8=" + "QueryRfinfo",
        success: function (ret) {



            var str = JSON.stringify(ret.DT);



            if (str == "[]") {
                alert("没有数据");
                return false;
            }

            var _json = eval(ret.DT);
            //                     alert(_json);

            $(_json).each(function (key) {
                $("#CTNR_NOID").val(_json[key].CTNR_NO);
                $("#INTO_PORT_ID").val(_json[key].INTO_PORT);
                $("#volID").val(_json[key].vol);
                $("#SET_Temp_ID").val(_json[key].SET_Temp);
                $("#YENT_ID").val(_json[key].YENT);


            });
            
            
            var html = "";
            html += "<tr>";
            html+="<td>箱号</td>";
            html+="<td>进场时间</td>";
            html+="<td>船名</td>";
            html+="<td>设定温度</td>";
            html+="<td>YENT</td>";
            html+="<td>录入时间</td>";
            
            html += "</tr>";
            $(_json).each(function (key)
                          {    
                
                html += "<tr>";
                html+="<td>"+_json[key].CTNR_NO+"</td>";
                html+="<td>"+_json[key].INTO_PORT+"</td>";
                html+="<td>"+_json[key].vol+"</td>";
                html+="<td>"+_json[key].SET_Temp+"</td>";
                html+="<td>"+_json[key].YENT+"</td>";
                html+="<td>"+_json[key].date+"</td>";
                html += "</tr>";
            

 });
             $("#RFMainInfotable").html(html);

        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }

    })


}


function RFinfoDelete() {

    var CTNR_NO = $("#CTNR_NOID").val();
    if (CTNR_NO == "") {


        alert("请输入CTNR_NO");
        return false;

    }
    
    if (!window.confirm('确定要删除箱号为' + CTNR_NO + '的记录吗')) {

            return false;
        }


    $.ajax({

        type: "get",
        dataType: "json",
        url: "RFjianhuHandler.ashx?val1=" + CTNR_NO + "&val8=" + "DeleteRfinfo",
        success: function (ret) {


            var str = JSON.stringify(ret.strAddFlag);

            alert(str);





        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(XmlHttpRequest.responseText);
        }

    })

    window.location.reload();

}
