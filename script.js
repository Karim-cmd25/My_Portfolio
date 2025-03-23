function sendMail(event) {
  event.preventDefault(); // Empêche la soumission du formulaire

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Envoi de l'email via EmailJS
  emailjs.send("service_e3fe6lg", "template_1yq4d6k", params).then(
    function (response) {
      alert("Mail envoyé avec succès !");
      console.log("Succès:", response);
    },
    function (error) {
      alert("Erreur lors de l'envoi du mail.");
      console.error("Erreur:", error);
    }
  );
} // Assurez-vous que cette accolade est là pour fermer la fonction.
