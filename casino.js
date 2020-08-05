var solde = 100;
var pertes = 0;


function connexion (){
  var prenom = document.getElementById("prenom").value;
  document.location.href="casino.html"; 
  this.prenom2=prenom;
  alert("Bonjour "+prenom+" nous vous offrons 100 000 FR comme cadeau de bienvenue!! ")
}

document

  .getElementById("input-submit-casino")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var perdu = false;
    
    var pari = document.getElementById("pair-impair").value;
    var mise = parseInt(document.getElementById("mise").value);
    if (solde == 0) {
      alert("Votre porte monnaie est vide");
    } else if (mise > solde) {
      alert("La somme misée est supérieure à celle de votre porte monnaie");
    } else {
      var gain = 0;
      solde -= mise;
      var resultat = Math.round(Math.random() * 36);

      if (resultat == 0) {
        perdu = true;
      } else if (resultat == pari) {
        gain = mise + mise * 35;
      } else if (
        (pari == "Pair" && resultat % 2 == 0) ||
        (pari == "Impair" && resultat % 2 != 0)
      ) {
        gain = mise + mise;
      } else {
        perdu = true;
      }

      if (perdu) {
        alert("Le nombre gagnant est " + resultat + "\nMise perdue = " + mise+"000 FCFA");
        pertes += mise;
      } else {
        alert("Le nombre gagnant est " + resultat + "\n Tu as gagné= " + gain+"000 FCFA");
        solde += gain;
      }
      document.getElementById("solde").value = solde;
      document.getElementById("pertes").value = pertes;
      

    }
  });
