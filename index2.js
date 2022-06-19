document.addEventListener("DOMContentLoaded", function () {
  // Toutes les lignes de pizza :
  let pizzas = document.querySelectorAll(".pizza");
  let boutonsMoins = document.querySelectorAll(".pizza-moins");
  let boutonsPlus = document.querySelectorAll(".pizza-plus");
  let prixPizza = document.querySelectorAll(".pizza-prix");

  pizzas.forEach((pizza, i) => {
    boutonsMoins[i].addEventListener("click", (e) => {
      //diminue la quantite de pizza et affiche la quantite dans l'input
      document.querySelectorAll("input")[i].value--;
      //affiche le montant de la pizza sélectionnée suivant la quantité voulue
      document.querySelectorAll(".pizza-prix-total")[i].textContent =
        document.querySelectorAll("input")[i].value * prixPizza[i].value;
      // stocke la valeur du sous-total en nombre
      sousTotal = parseInt(
        document.querySelectorAll(".pizza-prix-total")[i].textContent
      );
      // affiche le sous-total dans le prix total
      // comment additionner chaque ligne et les afficher dans le total ?
      document.querySelector(".prix-total").textContent = sousTotal;
    });

    boutonsPlus[i].addEventListener("click", (e) => {
      //augmente la quantite de pizza et affiche la quantite dans l'input
      document.querySelectorAll("input")[i].value++;
      //affiche le montant de la pizza sélectionnée suivant la quantité voulue
      document.querySelectorAll(".pizza-prix-total")[i].textContent =
        document.querySelectorAll("input")[i].value * prixPizza[i].value;
      // stocke la valeur du sous-total en nombre
      sousTotal = parseInt(
        document.querySelectorAll(".pizza-prix-total")[i].textContent
      );
      // affiche le sous-total dans le prix total
      // comment additionner chaque ligne et les afficher dans le total ?
      document.querySelector(".prix-total").textContent = sousTotal;
    });
  });
});
