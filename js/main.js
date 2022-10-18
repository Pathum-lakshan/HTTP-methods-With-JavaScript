//XMLHttpRequest
const request = new XMLHttpRequest();
request.open("GET","http://localhost:8080/api/v1/user/getUser");
request.send();
request.onload=()=>{
  console.log(JSON.parse(request.response))
}

//fetch api

fetch("http://localhost:8080/api/v1/user/getUser")
.then(response=>{
  return response.json();
}).then(json=>{
  console.log(json)
})

// axios third party javaScript library

axios.get("http://localhost:8080/api/v1/user/getUser").then(response=>{
  console.log(response.data)
},err=>{
  console.log(err)
})

//using jQuery (ajax)

$(document).ready(function () {
  $.ajax({
    url:"http://localhost:8080/api/v1/user/getUser",
    type:"GET",
    success:function (result){
      console.log(result)
    },
    error:function (err){
      console.log(err)
    }
  })
})
