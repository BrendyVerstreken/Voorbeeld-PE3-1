"use strict";

window.addEventListener("load", Initialise);

// Globale variabelen
var dataRoad, dataOffRoad, dataSuper;

var container;//to delte

var containerSuper, containerRoad, containerOffRoad;

function Initialise() {
  // Inlezen DOM elementen
  container = document.getElementById('container'); // to delete
  containerSuper = document.getElementById('containerSuper');
  containerRoad = document.getElementById('containerRoad');
  containerOffRoad = document.getElementById('containerOffRoad');

  // Toevoegen Eventlisteners

  // Functies
  startSituation();

}

// Globale functies
// function startSituation() {
//   //Fetch online
//   fetch('https://howest-gp-wfa.github.io/st-2021-1-S2-a-wfa-pe03-TomSabbe/api/cars.json')
//     .then(function (resp) { return resp.json(); })
//     .then(function (arr) {
//       dataSuper = arr.SuperCars;
//       console.log(dataSuper);
//       createCardsSuper(dataSuper);

//       dataOffRoad = arr.RoadCars;
//       createCardsRoad(dataOffRoad);

//       dataOffRoad = arr.OffRoadCars;
//       createCardsOffRoad(dataOffRoad);

//     });

//   /*
//   let vroom = JSON.parse(carsinfo);
//   createCardsRoad(vroom);
//   */
// }


function createCardsRoad(arr) {

  arr.forEach(element => {
    let article = document.createElement("article");
    article.className = "card";

    //merk logo
    let imgMerk = document.createElement("img");
    imgMerk.src = element.imgmerk;
    imgMerk.className = "imgMerk";
    //naam auto
    let name = document.createElement("h2");
    name.innerHTML = element.name;
    //foto auto
    let imgCard = document.createElement("img");
    imgCard.src = element.image;
    imgCard.className = "imgCar";
    //merk
    let merk = document.createElement("p");
    merk.innerHTML = element.merk;
    //prijs €
    let price = document.createElement("p");
    price.innerHTML = ` ${element.price} €`;
    //koffer
    let koffer = document.createElement("p");
    koffer.innerHTML = `koffer volume ${element.koffervolume} L`;

    //a plus buy
    let buybtn = document.createElement("a");
    //img buy
    let imgbuy = document.createElement("img");
    imgbuy.src = element.image;
    imgbuy.className = "imgCar";

    document.getElementById("containerRoad").appendChild(article);

    //uitvoering // !!!!!!! veranderen omdat extra array niet vergeten
    let voering = document.createElement("p");
    voering.innerHTML = element.Uitvoering;

    article.appendChild(imgMerk);
    article.appendChild(name);
    article.appendChild(imgCard);
    article.appendChild(merk);
    article.appendChild(price);
    article.appendChild(koffer);
    article.appendChild(voering);
    article.appendChild()


    //   < a >
    //   <img class="card-collection" src="~/images/Admin/add.svg" alt="add cart" title="plus card" />
    // </a >

  });



}


function createCardsOffRoad(arr) {

  arr.forEach(element => {
    let article = document.createElement("article");
    article.className = "card";

    //merk logo
    let imgMerk = document.createElement("img");
    imgMerk.src = element.imgmerk;
    imgMerk.className = "imgMerk";
    //naam auto
    let name = document.createElement("h2");
    name.innerHTML = element.name;
    //foto auto
    let imgCard = document.createElement("img");
    imgCard.src = element.image;
    imgCard.className = "imgCar";
    //merk
    let merk = document.createElement("p");
    merk.innerHTML = element.merk;
    //prijs€
    let price = document.createElement("p");
    price.innerHTML = ` ${element.price} €`;
    //pks
    let pks = document.createElement("p");
    pks.innerHTML = `${element.pks} PK`;
    //verbruik
    let verbruik = document.createElement("p");
    verbruik.innerHTML = `verbruik :  ${element.verbruik} `;

    //uitvoering // !!!!!!! veranderen omdat extra array niet vergeten
    let voering = document.createElement("p");
    voering.innerHTML = element.Uitvoering;

    let btn = document.createElement("btn");
    btn.src = element.imgmerk;
    btn.className = "btn";

    document.getElementById("containerOffRoad").appendChild(article);

    article.appendChild(imgMerk);
    article.appendChild(name);
    article.appendChild(imgCard);
    article.appendChild(merk);
    article.appendChild(price);
    article.appendChild(pks);
    article.appendChild(verbruik);
    article.appendChild(voering);
    article.appendChild(btn);


  });

}


function createCardsSuper(arr) {

  arr.forEach(element => {
    //article
    let article = document.createElement("article");
    article.className = "card";
    //img merk
    let imgMerk = document.createElement("img");
    imgMerk.src = element.imgmerk;
    imgMerk.className = "imgMerk";
    //name titel
    let name = document.createElement("h2");
    name.innerHTML = element.name;
    //foto auto
    let imgCard = document.createElement("img");
    imgCard.src = element.image;
    imgCard.className = "imgCar";
    //merk naam
    let merk = document.createElement("p");
    merk.innerHTML = `${element.merk}`;
    //money
    let price = document.createElement("p");
    price.innerHTML = ` ${element.price} €`;
    //top speed
    let topSpeed = document.createElement("p");
    topSpeed.innerHTML = `Top snelheid : ${element.topSpeed}`;;
    //null naar honderd
    let nullnaarhonder = document.createElement("p");
    nullnaarhonder.innerHTML = `0 - 100 : ${element.nullnaarhonder} seconden`;
    //pks
    let pks = document.createElement("p");
    pks.innerHTML = `${element.pks} PK`;

    //uitvoering // !!!!!!! veranderen omdat extra array niet vergeten
    let voering = document.createElement("p");
    voering.innerHTML = element.Uitvoering;

    document.getElementById("containerSuper").appendChild(article);

    article.appendChild(imgMerk);
    article.appendChild(name);
    article.appendChild(imgCard);
    article.appendChild(merk);
    article.appendChild(price);
    article.appendChild(topSpeed);
    article.appendChild(nullnaarhonder);
    article.appendChild(pks);
    article.appendChild(voering);
  });

}
