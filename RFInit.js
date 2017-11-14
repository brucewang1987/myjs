 $(document).ready(function () {
            divdisappear();
        });


        function divdisappear() {
            //$("#div3").css("display","none");
            $("#div3").hide();
        }

        function divAppear() {

            $("#div3").show();

        }


        function divAppearnew(i) {

            $("#div3").show();

            var ctn_id = $("#RFInfotable").find("tr").eq(i).find("td").eq(0).text();
            $("#modctn_id").val(ctn_id);
            var PtiDate = $("#RFInfotable").find("tr").eq(i).find("td").eq(2).text();
            $("#modPtiDate").val(PtiDate);
            var Ret = $("#RFInfotable").find("tr").eq(i).find("td").eq(3).text();
            $("#modRetid").val(Ret);

        }
