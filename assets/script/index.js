function affiche_annee() {
  var anneeEnCours = new Date();
  window.document.write(anneeEnCours.getFullYear());
}

document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('UraniumGames');
  let rotation = 0;
  let isActive = true;

  function rotateImage() {
    if (isActive) {
      rotation += 1; // Ajustez la vitesse de rotation ici
      img.style.transform = `rotate(${rotation}deg)`;
      if (rotation % 360 === 0) {
        isActive = false; // Mettre isActive à false pour faire une pause de 2 secondes
        setTimeout(() => {
          isActive = true; // Réactiver la rotation après la pause
        }, 3500);
      }
    }
  }

  setInterval(rotateImage); // Ajustez l'intervalle de rotation ici (plus petit = plus rapide)
});