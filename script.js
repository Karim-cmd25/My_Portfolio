// Initialisation d'EmailJS avec ton ID utilisateur
emailjs.init("user_e3fe6lg"); // Remplace par ton propre User ID

// Écouteur d'événement sur le formulaire
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la page de se recharger

    // Récupérer les données du formulaire
    var formData = {
      nom: document.getElementById("nom").value, // Nom de l'utilisateur
      email: document.getElementById("email").value, // Email de l'utilisateur
      message: document.getElementById("message").value, // Message de l'utilisateur
    };

    // Envoi de l'email via EmailJS
    emailjs.send("service_e3fe6lg", "template_u00w4co", formData).then(
      function (response) {
        alert("Message envoyé avec succès !");
        console.log("Réponse EmailJS:", response);
      },
      function (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        alert("Échec de l'envoi, veuillez réessayer plus tard.");
      }
    );
  });
