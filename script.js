// Liste des projets possibles
const projets = [
  "Tic-Tac-Toe (HTML, CSS, JS)",
  "Minuteur à œufs (HTML, CSS, JS)",
  "Générateur de citations aléatoires (HTML, CSS, JS)",
  "Pierre-Feuille-Ciseaux (HTML, CSS, JS)",
  "To-Do List (HTML, CSS, JS)",
  "Convertisseur de devises (HTML, CSS, JS)",
  "Calculatrice (HTML, CSS, JS)",
  "Météo simple (HTML, CSS, JS, API)",
  "Jeu du nombre mystère (HTML, CSS, JS)",
  "Générateur de mots de passe (HTML, CSS, JS)",
  "Carte de visite interactive (HTML, CSS)",
  "Galerie d’images responsive (HTML, CSS)",
  "Chronomètre avec animation CSS (HTML, CSS, JS)",
  "Horloge digitale ou analogique (HTML, CSS, JS)",
  "Générateur de dégradés CSS (HTML, CSS, JS)",
  "Mini agenda (HTML, CSS, JS)",
  "Carnet de contacts (HTML, CSS, JS, LocalStorage)",
  "Quiz interactif (HTML, CSS, JS)",
  "Simulateur de feux tricolores (HTML, CSS, JS)",
  "Portfolio personnel (HTML, CSS, JS)",
];

// Fonction pour générer projet aléatoire
function genererProjet() {
  // Math.random() génère un nombre entre 0 et 1
  // Multiplication par projets.length = nombre entre 0 et la taille du tableau
  // Math.floor() -> arrondi à l'entier inférieur
  const index = Math.floor(Math.random() * projets.length);

  // Sélectionne élément HTML avec ID "projet"
  // Remplace texte par projet sélectionné aléatoirement
  document.getElementById("projet").textContent = projets[index];
}
