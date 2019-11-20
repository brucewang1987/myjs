
export const QueryCtnInfoparam ={

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
  
