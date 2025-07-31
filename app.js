(function() {
  emailjs.init("W8X9yPZK123abcXYZ"); // Remplace par ton USER ID EmailJS
})();

const articles = [
  "BHC - Tube Rond 304L",
  "Bride 11B - Tube Rond 316L",
  "Bride Emboutie - Tube Rond S235",
  "Bride Plate - Tube Rond P235GH",
  "Bride Tournante - Tube Rond P265GH"
];

const articleSelect = document.getElementById('article');
articles.forEach(a => {
  const opt = document.createElement('option');
  opt.value = a;
  opt.textContent = a;
  articleSelect.appendChild(opt);
});

document.getElementById('approForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const params = {
    affaire: document.getElementById('affaire').value,
    of: document.getElementById('of').value,
    delai: document.getElementById('delai').value,
    article: document.getElementById('article').value,
    quantite: document.getElementById('quantite').value,
    commentaire: document.getElementById('commentaire').value,
    destinataire: 'flaforet@entreprise-calvet.fr'
  };
  emailjs.send('service_calvet', 'template_demande_appro', params)
    .then(() => alert('✅ Demande envoyée à flaforet@entreprise-calvet.fr'))
    .catch(err => alert('❌ Erreur: ' + JSON.stringify(err)));
});