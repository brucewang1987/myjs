import router from '@/router'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
     LoginData:{
       username:"",
       password:""
     }
    }
  },
  methods:{
    Loginfunc()
    {
      var username = this.LoginData.username;
      var password = this.LoginData.password;

      var url = 'apis/TruckRepair/LoginSystem';

      axios.get(url,{
      params:
      {

        username:username,
        password:password

      }

      }).then((res)=>{

        console.log(res.data);

       var result = res.data.strResponse;
       if(result=="loginOK")
       {
          router.replace('/mainmenu');
       }
       else
       {
         alert("用户名密码错误");
       }

      }).catch(function (err){

       console.log(err);

      })

      // if(username=="admin"&&password=="123456")
      // {
      //   router.replace('/mainmenu');//用replace就会直接替换当前页面
      //   //router.push('/mainmenu');//用push可以往前往后
      // }

     // console.log("用户名:"+username+",密码:"+password);
    }
  }
}
