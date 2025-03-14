// Fonction asynchrone pour récupérer un projet depuis le serveur
async function genererProjet() {
  try {
    // Envoi d'une requête GET à l'URL de notre API pour récupérer un projet
    const response = await fetch("http://localhost:3000/projet");

    // Si réponse pas "ok" (statut HTTP différent de 200-299) -> erreur
    if (!response.ok)
      throw new Error("Erreur lors de la récupération du projet");

    // Conversion de la réponse en JSON pour obtenir les données exploitables
    const data = await response.json();

    // Affichage du projet récupéré dans l'élément HTML ayant ID "projet"
    document.getElementById("projet").textContent = data.projet;
  } catch (error) {
    // Si erreur -> affichage dans la console pour le debug
    console.error("Erreur :", error);

    // Affichage message d'erreur dans l'interface utilisateur
    document.getElementById("projet").textContent =
      "❌ Impossible de récupérer un projet.";
  }
}

// Ajout d'un écouteur d'événement sur le formulaire ayant ID "ajout-projet"
// Quand l'utilisateur soumet le formulaire -> fonction exécutée
document
  .getElementById("ajout-projet")
  .addEventListener("submit", async function (e) {
    // On empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();

    // Récupération de l'élément input où l'utilisateur entre le nom du projet
    const input = document.getElementById("nouveau-projet");

    // Récupération de la valeur de l'input (enlèvement des espaces inutiles)
    const titre = input.value.trim();

    // Si input est vide, -> affichage d'une alerte et arrêt de l'exécution
    if (!titre) return alert("Veuillez entrer un projet");

    try {
      // Envoi d'une requête POST à l'API pour ajouter un nouveau projet
      const response = await fetch("http://localhost:3000/projet", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // On envoie du JSON
        body: JSON.stringify({ titre }), // On transforme l'objet { titre } en JSON et on l'envoie
      });

      // Si la requête a échoué -> erreur
      if (!response.ok) throw new Error("Erreur lors de l'ajout du projet");

      // Si tout est ok -> affichage d'une alerte pour informer l'utilisateur
      alert("Projet ajouté !");

      // Vidage du champ de saisie pour qu'il soit prêt pour un nouveau projet
      input.value = "";
    } catch (error) {
      // Si erreur, -> affichage dans la console pour aider au debug
      console.error("Erreur :", error);

      // Affichage d'une alerte pour informer l'utilisateur de l'échec
      alert("❌ Erreur lors de l'ajout du projet");
    }
  });
