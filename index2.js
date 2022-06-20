//fonction pour réinitialiser les inputs text (firefox garde en mémoire ce qui était inscrit)
function resetElements() {
  let inputs = document.querySelectorAll("input[type=text]");
  for (let i = 0; i < inputs.length; i++) {
    document.getElementsByTagName("input")[i].value = "0";
    document.querySelector(".paiement-conteneur").style.visibility = "hidden";
  }
}

// fonction pour afficher le bouton paypal/paiement si la commande est supérieure à zéro€
function affichePaiement(total) {
  if (parseInt(total.textContent) > 0) {
    document.querySelector(".paiement-conteneur").style.visibility = "visible";
  } else {
    document.querySelector(".paiement-conteneur").style.visibility = "hidden";
  }
}

// fonction qui affiche le recap de la commande
function afficheRecap(i) {
  if (quantite[i].value > 0) {
    recapCommande[i] =
      nomPizza[i].textContent + parseInt(quantite[i].value) + ".";
  } else {
    recapCommande[i] = "";
  }
  document.querySelector(".recap-commande").innerHTML = `
  <p> Votre commande : </p>
  <p> ${recapCommande.join("")} </p>
  <p> Montant total :  ${total.textContent} € </p>
  `;
}

let recapCommande = [];
let quantite = document.querySelectorAll("input");
let nomPizza = document.querySelectorAll("span");
let total = document.querySelector(".prix-total");

document.addEventListener("DOMContentLoaded", function () {
  let pizzas = document.querySelectorAll(".pizza");
  let boutonsMoins = document.querySelectorAll(".pizza-moins");
  let boutonsPlus = document.querySelectorAll(".pizza-plus");
  let prixPizza = document.querySelectorAll(".pizza-prix");
  let totalParPizza = document.querySelectorAll(".pizza-prix-total");
  let totalCommande = 0;

  pizzas.forEach((pizza, i) => {
    boutonsMoins[i].addEventListener("click", (e) => {
      if (quantite[i].value <= 0) return; // arrête l'éxécution pour garder une quantité positive de pizza
      //diminue la quantite de pizza et affiche la quantite dans l'input
      quantite[i].value--;
      //affiche le montant de la pizza sélectionnée suivant la quantité voulue
      totalParPizza[i].textContent = quantite[i].value * prixPizza[i].value;
      //affiche le total de la commande
      totalCommande -= parseInt(prixPizza[i].value);
      total.textContent = totalCommande;
      affichePaiement(total);
      afficheRecap(i);
      console.log(typeof quantite[i].value);
    });

    boutonsPlus[i].addEventListener("click", (e) => {
      quantite[i].value++;
      totalParPizza[i].textContent = quantite[i].value * prixPizza[i].value;
      totalCommande = totalCommande + parseInt(prixPizza[i].value);
      total.textContent = totalCommande;
      affichePaiement(total);
      afficheRecap(i);
    });
  });

  let btnReset = document.querySelector(".reset-btn");
  btnReset.addEventListener("click", () => {
    window.location.reload();
    resetElements();
  });
});
