 function init() {
            $("#deal_type").attr("disabled", true);
        }

        init();

        $("#btnRush").click(function () {

            window.location.reload();


        });

        function submitNeed() {

            var need_type = $("#xqType").val();
            var need_desc = $("#remark").val();
            var submiter = $("#user").val();


            if (need_desc == "") {

                alert("需求描述不能为空");
                $("#remark").focus();
                return false;

            }

            if (submiter == "") {

                alert("提交人不能为空");
                $("#user").focus();
                return false;



            }


            $.ajax({
            
            type: "get",
            dataType: "json",
            url:"/TestSop/SubmitNeed?need_type="+need_type+"&need_desc="+need_desc+"&submiter="+submiter+"&requestName="+"submitNeed",

            success: function (ret){
            
            var result = ret.strResult;
            if (result == "ok")
            {
            
             alert("提交成功");
            
            }
             else {

                    alert("提交失败");
                }
            
            
            }

            
            })


        
        }

        $("#submit").click(function (){
        submitNeed();
        
        });
