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

const channelID = "UCdvjlt9XT-158yQhlIP1XOg";
const apiKey = {{ secrets.YOUR_API_KEY }}; // Récupérer la clé API depuis les variables d'environnement

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=1`)
.then(response => response.json())
.then(data => {
    const latestVideoEmbed = document.getElementById('latest-video-embed');
    const videoId = data.items[0].id.videoId;
    latestVideoEmbed.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
})
.catch(err => console.error('Erreur lors de la récupération de la dernière vidéo :', err));
