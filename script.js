document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM chargé");
  event.preventDefault(); // Empêche la soumission du formulaire
  console.log("Formulaire soumis, empêche la soumission par défaut");

  // Sélectionnez le formulaire
  const form = document.getElementById("contact-form");

  // écouteur d'événements pour l'envoi du formulaire
  form.addEventListener("submit", sendMail);

  console.log("Écouteur d'événements ajouté au formulaire");

  // Ajouter l'événement pour fermer la modale lorsque l'on clique en dehors
  const modal = document.getElementById("demo"); // Sélectionne la modale
  const modalContent = modal.querySelector(".modal_content"); // Sélectionne le contenu de la modale

  console.log("Événement de fermeture de la modale configuré");

  // Lorsque l'utilisateur clique en dehors de la modale, la fermer
  modal.addEventListener("click", function (event) {
    // Vérifie si le clic s'est produit en dehors du contenu de la modale
    if (!modalContent.contains(event.target)) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  });
});

function sendMail(event) {
  console.log("sendMail appelé");

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
