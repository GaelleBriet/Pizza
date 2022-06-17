// Tous les inputs text (quantité de pizza)
let quantites = document.querySelectorAll(".quantite");
// Toutes les lignes de pizza
let pizzas = document.querySelectorAll(".pizza");
let nbPizza = 0;
// pour chaque pizza quand je clique sur le bouton + ou le bouton - je modifie le nombre de pizza à commander
for (i = 0; i < pizzas.length; i++) {
  let quantite = quantites[i].value; // quantite par ligne de pizza
  let input = document.querySelector(".quantite" + [i]); // input quantite par ligne de pizza
  let boutonMoins = document.querySelector(".pizza-moins" + [i]);
  let boutonPlus = document.querySelector(".pizza-plus" + [i]);
  let prix = document.querySelector(".pizza-prix" + [i]); // prix de la pizza
  let prixParLigne = document.querySelector(".pizza-prix-total" + [i]); // prix total de la pizza

  boutonPlus.addEventListener("click", (e) => {
    quantite++;
    input.value = quantite; //affiche le nombre dans l'input
    // prixParPizza = prix.firstChild.data * quantite + "€";
    prixParLigne.textContent = prix.firstChild.data * quantite;
    console.log(prixParLigne);
  });

  boutonMoins.addEventListener("click", (e) => {
    quantite--;
    input.value = quantite;
    prixParLigne.textContent = prix.firstChild.data * quantite;
  });

  // let prixTotal = 0;
  // prixTotal = prixPizza.textContent[i] + prixTotal;
  // console.log(prixTotal);
}

function affichePrix() {}

function calculPrixTotal(prixParPizza) {}
