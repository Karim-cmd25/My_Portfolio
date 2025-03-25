document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM chargé");

  console.log("Formulaire soumis, empêche la soumission par défaut");

  // Sélectionnez le formulaire
  const form = document.getElementById("contact-form");

  // écouteur d'événements pour l'envoi du formulaire
  form.addEventListener("submit", (e) => sendMail(e));
});

function sendMail(event) {
  console.log("sendMail appelé");
  event.preventDefault();
  // Récupérer les valeurs des champs du formulaire
  let params = {
    name: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log("Valeurs récupérées du formulaire:", params);

  // Envoyer l'email via EmailJS
  emailjs.send("service_an1dy9q", "template_m9dr73k", params).then(
    function (response) {
      console.log("Réponse de l'email envoyé:", response);
      alert("Mail envoyé avec succès !");
    },
    function (error) {
      console.error("Erreur lors de l'envoi du mail:", error);
      alert("Erreur lors de l'envoi du mail.");
    }
  );
}
