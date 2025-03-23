document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez le formulaire
  const form = document.getElementById("contact-form");

  // Ajoutez un écouteur d'événements pour l'envoi du formulaire
  form.addEventListener("submit", sendMail);
});

function sendMail(event) {
  event.preventDefault(); // Empêche la soumission du formulaire

  // Récupérer les valeurs des champs du formulaire
  let params = {
    name: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Envoyer l'email via EmailJS
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
}
