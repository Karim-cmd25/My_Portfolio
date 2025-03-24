document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez le formulaire
  const form = document.getElementById("contact-form");

  // écouteur d'événements pour l'envoi du formulaire
  form.addEventListener("submit", sendMail);

  // Ajouter l'événement pour fermer la modale lorsque l'on clique en dehors
  const modal = document.getElementById("demo"); // Sélectionne la modale
  const modalContent = modal.querySelector(".modal_content"); // Sélectionne le contenu de la modale

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
  event.preventDefault(); // Empêche la soumission du formulaire

  // Récupérer les valeurs des champs du formulaire
  let params = {
    name: document.getElementById("nom").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Envoyer l'email via EmailJS
  emailjs.send("service_e3fe6lg", "template_m9dr73k", params).then(
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
