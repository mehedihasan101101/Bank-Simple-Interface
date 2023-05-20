document.getElementById("loginBtn").addEventListener("click",function(){
    const email = document.getElementById("emailid").value;
    const password = document.getElementById("pass").value;
    
    if(email == "mehedihasan055210@gmail.com" && password =="pass"){
        window.location.href = "user.html";
    }
    else if(email == "" && password ==""){
       alert("insert your email and password");
    }
    else{
        alert("wrong email or password");
    }
       
})