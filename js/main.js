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
