 
        $("#btnReset").click(function () {

            if (!window.confirm('确定要重置未出场未记录数据吗？')) {
                // window.location.href = "RFjianhuItem.aspx?backurl=" + window.location.href;
                return false;
            }

            $.ajax({

                type: "get",
                dataType: "json",
                url: "RFjianhuHandler.ashx?val8=" + "ReSetData",

                success: function (ret) {



                    var str = JSON.stringify(ret.strAddFlag);

                    alert(str);

                    // window.location.href = "RFjianhuItem.aspx?backurl=" + window.location.href;

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }



            })

        });
