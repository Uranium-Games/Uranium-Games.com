function affiche_annee() {
    var anneeEnCours = new Date();
    window.document.write(anneeEnCours.getFullYear());
}

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('UraniumGames');
    let rotation = 0;

    function rotateImage() {
      rotation += 360; // Rotation de 360 degrés
      img.style.transform = `rotate(${rotation}deg)`;
    }

    setInterval(rotateImage, 5000); // Appeler la fonction rotateImage toutes les 3 secondes
  });