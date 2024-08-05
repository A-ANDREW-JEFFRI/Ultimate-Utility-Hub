const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const userMail = form.userMail.value
    const password = form.password.value
    const authenticated = authentication (userMail, password)
    if(authenticated) {
        window.location.href = "http://127.0.0.1:5500/home.html"
    }
    else{
        window.alert("Incorrect username or password")
    }
})

function authentication (userMail, password) {
    if(userMail === "User@gmail.com" && password === "password") {
        return true
    }
    else{
        return false
    }
}
