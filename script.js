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

    // Afficher les données du formulaire dans la console pour vérifier
    console.log("Données du formulaire envoyées:", formData);

    // Vérifier que les données sont correctement récupérées
    if (!formData.nom || !formData.email || !formData.message) {
      console.error("Données du formulaire incomplètes.");
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Envoi de l'email via EmailJS
    emailjs.send("service_e3fe6lg", "template_u00w4co", formData).then(
      function (response) {
        // Si l'email est envoyé avec succès
        console.log("Réponse EmailJS:", response);
        alert("Message envoyé avec succès !");
      },
      function (error) {
        // Si une erreur survient
        console.error("Erreur lors de l'envoi de l'email:", error); // Affiche les détails de l'erreur
        alert("Échec de l'envoi, veuillez réessayer plus tard.");
      }
    );
  });
