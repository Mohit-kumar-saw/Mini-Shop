
let obj=[
    {username: "monty",
    password:"montykumar"},
    {username: "monty1",
    password:"montykumar1"},
    {username: "monty2",
    password:"montykumar2"}
]


 let getdata=()=>{
    let password=document.getElementById('password').value;
let username=document.getElementById('username').value;
    for(i=0;i<obj.length;i++){
        if(username == obj[i].username && password == obj[i].password){
           alert("login")
           window.location="index.html"
            return
        }
    }
    alert("incorrect username or password")
 }

 document.getElementById('login').addEventListener('click',getdata)


