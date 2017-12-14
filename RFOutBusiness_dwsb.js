function QueryGateIn()
        {

            console.log($("#CTNR_NOID").val());
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


                    $(_json).each(function (key) {
                        $("#CTNR_NOID").val(_json[key].CTNR_NO);
                        $("#INTO_PORT_ID").val(_json[key].INTO_PORT);
                        $("#volID").val(_json[key].vol);
                        $("#YENT_ID").val(_json[key].YENT);
                        $("#SET_Temp_ID").val(_json[key].SET_Temp);
                        $("#vslId").val(_json[key].vsl);
                        $("#ctn_sizeID").val(_json[key].ctn_size);
                        $("#ctn_typeID").val(_json[key].ctn_type);
                        $("#operatorId").val(_json[key].operator);
                        $("#ctn_id").val(_json[key].Ctn_ID);

                    });

                },
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    alert(XmlHttpRequest.responseText);
                }



            })
        
        
        }


        function GateOut() {


            var ctn_id = $("#ctn_id").val();

            var out_port = $("#out_port_id").val();

            if (out_port == "") {


                alert("请输入出场时间!");
                return false;
            
            }


            var in_port = $("#INTO_PORT_ID").val();


            var d1 = new Date(in_port.replace(/\-/g, "\/"));
            var d2 = new Date(out_port.replace(/\-/g, "\/"));


            if (in_port != "" && out_port != "" && d1 >= d2) {
                alert("进场时间不能大于出场时间！");
                return false;
            }

            if (!window.confirm('确认该箱出场?')) {
                return false;

            }


            $.ajax({

                type: "get",
                dataType: "json",
                url: "RFjianhuHandler.ashx?val1=" + ctn_id + "&val2=" + out_port + "&val8=" + "out_port_business",
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
        
