function InsertRfinfo() {

    var CTNR_NO = $("#CTNR_NOID").val();
    if (CTNR_NO == "") {


        alert("请输入CTNR_NO");
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
