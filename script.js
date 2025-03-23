function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_e3fe6lg", "template_1yq4d6k", parms)
    .then(alert("mail sent !"));
}
