document.addEventListener("DOMContentLoaded", function () {
  // Toutes les lignes de pizza :
  let pizzas = document.querySelectorAll(".pizza");

  let boutonsMoins = document.querySelectorAll(".pizza-moins");
  let boutonsPlus = document.querySelectorAll(".pizza-plus");

  let quantite = document.querySelectorAll("input"); //tableau
  let prixPizza = document.querySelectorAll(".pizza-prix"); //prixPizza[i].value = string
  let pizzaSousTotal = document.querySelectorAll(".pizza-prix-total"); //tableau
  let prixTotal = document.querySelector(".prix-total"); // .textContent = string
  let sousTotal = 0;

  pizzas.forEach((pizza, i) => {
    boutonsMoins[i].addEventListener("click", (e) => {
      quantite[i].value--;
      pizzaSousTotal[i].textContent = quantite[i].value * prixPizza[i].value; //string
      sousTotal = parseInt(pizzaSousTotal[i].textContent);
      console.log(sousTotal);
    });

    boutonsPlus[i].addEventListener("click", (e) => {
      quantite[i].value++; //string
      pizzaSousTotal[i].textContent = quantite[i].value * prixPizza[i].value; //string
      sousTotal = parseInt(pizzaSousTotal[i].textContent);
      console.log(sousTotal);
    });
  });
});
