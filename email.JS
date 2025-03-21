// Initialiser EmailJS avec ton ID utilisateur
emailjs.init("user_e3fe6lg"); // Remplace avec ton ID utilisateur si nécessaire

// Ajouter un événement au formulaire pour l'envoi
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la page de se recharger après l'envoi du formulaire

    // Récupérer les données du formulaire
    var formData = {
      nom: document.getElementById("nom").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Envoi de l'email via EmailJS avec les identifiants de ton service et modèle
    emailjs.send("service_e3fe6lg", "template_u00w4co", formData).then(
      function (response) {
        // Si l'email est envoyé avec succès
        alert("Message envoyé avec succès !");
      },
      function (error) {
        // Si une erreur survient
        alert("Échec de l'envoi, veuillez réessayer plus tard.");
      }
    );
  });
