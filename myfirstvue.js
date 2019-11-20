export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      axiosResult:'',
      ctn_no:''
   
    }
  },

//   mounted()
//   {

// axios.get('apis/RepairbillInfo/AddColdCtnInfo?val1=CAIU5423645%20&val88=QueryRepInfo').then(function (res){
//   console.log(res);
// }).catch(function (err){
//   console.log(err);
// })

//   },
  methods:
  {

QueryCtnInfo()
{

var strurl='apis/RepairbillInfo/AddColdCtnInfo?val1=';



strurl = strurl+this.ctn_no;
strurl = strurl+'&val88=QueryRepInfo';
//不用箭头的写法
// axios.get(strurl).then(function (res){
// var map = eval('(' + res.data + ')')
// var str = JSON.stringify(map.dt);
// alert(str)
// this.axiosResult = str
// }).catch(function (err){
//   console.log(err);
// })

//箭头的写法
axios.get(strurl).then((res)=>{


var map = eval('(' + res.data + ')')
var str = JSON.stringify(map.dt)
console.log(str)
this.axiosResult = str

// this.axiosResult = res.data.dt

}).catch(function (err){
  console.log(err);
})

},
QueryCtnInfoparam()
{

var strurl='apis/RepairbillInfo/AddColdCtnInfo'
axios.get(strurl,{

params:
{

val1:this.ctn_no,
val88:'QueryRepInfo'

}

}).then((res)=>{


var map = eval('(' + res.data + ')')

console.log('map'+JSON.stringify(map));

// var str = JSON.stringify(map.dt);
// console.log('str:'+str)
this.axiosResult = map.dt

}).catch(function (err){
  console.log(err);
})


}

  }



}
