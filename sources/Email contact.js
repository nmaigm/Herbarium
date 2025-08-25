function sendMail(){
    let parms = {
        email : document.getElementById("Email").value,
        name : document.getElementById("Name").value,
        message : document.getElementById("Message").value,

    }

    emailjs.send("service_jh6bffu","template_kvras9r",parms).then(alert("Email sent!!"))
}