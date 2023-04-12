// const http=require("http");
// const port=3000

// const server=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("Content-Type","text/plain");

// })
const btn = document.querySelector("#login")
//defining routes
function showPage(page) {
    window.location.href = `${page}.html`
}

btn.addEventListener("click", (e) => {
    const email = document.getElementById("user").value
    const pass = document.getElementById("pass").value

    //validation
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length || pass.length < 8) {
        alert("Please enter a valid e-mail address and password");
        return;
    }
    //const endpoint="http://ec2-18-218-33-23.us-east-2.compute.amazonaws.com:9001/login"
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log(email, pass);
    fetch("http://ec2-18-218-33-23.us-east-2.compute.amazonaws.com:9001/login", {
        mode: 'no-cors',
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            useremail: email,
            password: pass
        })
    })
        .then((result) => {
            if (result.status === 200) {
                result.json().then(res => {
                    if(res.token.length===0) return 
                    let token = res.token
                    if (token) {
                        sessionStorage.setItem("jwt", token)
                        localStorage.setItem("jwt", token)
                        localStorage.setItem("user_name", email)
                        showPage("/dashboard")
                    }
                })
            }
            else {
                alert("Something wrong try again...!")
                showPage('login')
                return
            }
        })
        .catch(err => {
            alert("Something wrong try again...!")
            showPage('login')
            return
        })
})

// server.listen(port,()=>{
//     console.log("ruuning on 3000");
// })