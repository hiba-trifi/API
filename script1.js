// CREATE HTML CARD 
function creatCard(meal){
  ///////////////////CARD & MODAL   //////////////////////////////
  var container = document.querySelector('.cardsAndModals')
  var cardAndModal = document.createElement('div')
  cardAndModal.setAttribute('class','cardAndModal  col-xs-12 col-md-5 my-2 col-xl-3  mx-2');
  container.appendChild(cardAndModal)
  // Card ///////////////////////////////////
  var singleCard =  document.createElement('div')
  singleCard.setAttribute('class', 'card-content ')
  singleCard.style.overflow = "hidden" ; singleCard.style.textAlign = "center";  singleCard.style.backgroundColor = "#807046"
  cardAndModal.appendChild(singleCard)
  var img = document.createElement('img')
  img.setAttribute('class','card-img')
  singleCard.appendChild(img)
  var h4 = document.createElement('h4')
  h4.setAttribute('class','card-title my-5 mx-3   text-light')
  singleCard.appendChild(h4)
  var modalBtn = document.createElement('button')
  modalBtn.setAttribute('type','button');
  modalBtn.setAttribute('class','btn btn-outline-light  my-3 mx-3')
  modalBtn.setAttribute('data-bs-toggle','modal')
  // modalBtn.setAttribute('data-bs-target','#staticBackdrop')
  modalBtn.style.color = "rgb(17, 17, 17)"
  modalBtn.innerHTML = "<strong>See Recipies</strong>"
  singleCard.appendChild(modalBtn)
 // Modal./////////////////////////////////////
 var singleModal = document.createElement('div')
 singleModal.setAttribute('class','modal fade  ')
  singleModal.setAttribute('data-bs-backdrop','static')
  singleModal.setAttribute('data-bs-keyboard','false')
  // singleModal.setAttribute('id','staticBackdrop')
  singleModal.setAttribute('tabindex','-1')
  singleModal.style.opacity ="1"
  singleModal.setAttribute('aria-labelledby','staticBackdropLabel');
  singleModal.setAttribute('aria-hidden','true')
  cardAndModal.appendChild(singleModal)
  // singleModal.innerHTML = '<div class="modal-dialog"> <div class="modal-content"><div class="modal-header"><h1 class="modal-title" id="staticBackdropLabel"> </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div><div class="modal-body"><img class="img img-fluid w-2 h-50" alt=""><h3 class="category text-secondary">Category :</h3><strong></strong><h3 class="area text-secondary"> Area :</h3><strong></strong><h3 class="instructions text-secondary"> Instructions :</h3><span></span></div><div class="modal-footer"> <button type="button" class="btn btn-danger"><a class="vidlink text-decoration-none text-light" target="_blank">Youtube Video</a></button> </div></div> </div>';
 var modalDialog = document.createElement('div')
 modalDialog.setAttribute('class','modal-dialog modal-dialog-centered modal-dialog-scrollable')
 singleModal.appendChild(modalDialog)
 var modalContent = document.createElement('div')
 modalContent.setAttribute('class','modal-content')
 modalDialog.appendChild(modalContent)
   // header 
 var modalHeader = document.createElement('div')
 modalHeader.setAttribute('class','modal-header')
 modalContent.appendChild(modalHeader)
 var modalTitle = document.createElement('h1')
 modalTitle.setAttribute('class','modal-title')
 modalTitle.setAttribute('id','staticBackdropLabel')
 modalHeader.appendChild(modalTitle)
 var modalExit = document.createElement('button')
  modalExit.setAttribute('type','button')
 modalExit.setAttribute('class','btn-close')
 modalExit.setAttribute('data-bs-dismiss','modal')
 modalExit.setAttribute('aria-label','Close')
 modalHeader.appendChild(modalExit)
 // body 
 var modalBody = document.createElement('div')
 modalBody.setAttribute('class','modal-body')
 modalContent.appendChild(modalBody)
 var modalImg = document.createElement('img')
 modalImg.setAttribute('class','img img-fluid w-2 h-50')
 modalBody.appendChild(modalImg)
 var modalH3_1 = document.createElement('h3')
 modalBody.appendChild(modalH3_1)
 var modalH3_2 = document.createElement('h3')
 modalBody.appendChild(modalH3_2)
 var modalInstruction = document.createElement('span')
 modalBody.appendChild(modalInstruction)
// footer
var modalFooter = document.createElement('div')
modalFooter.setAttribute('class','modal-footer')
modalContent.appendChild(modalFooter)
 var modalVid = document.createElement('button')
 modalVid.setAttribute('class','btn btn-danger')
 modalVid.setAttribute('type','button')
 modalFooter.appendChild(modalVid)
 var vidLink = document.createElement('a')
 vidLink.setAttribute('class','vidlink text-decoration-none text-light')
 vidLink.setAttribute('target','_blank')
 vidLink.innerText ="Youtube Video"
 modalVid.appendChild(vidLink)

 ////////////////// FILL /////////////////////////
h4.innerHTML= meal.strMeal;
img.setAttribute('src', meal.strMealThumb)
modalBtn.setAttribute('data-bs-target','#'+meal.idMeal)
 // Modal content fill 
 singleModal.setAttribute('id',meal.idMeal)
 modalTitle.innerHTML =  meal.strMeal ;
 modalImg.setAttribute('src', meal.strMealThumb)
 modalH3_1.innerHTML = "<strong> Category : </strong>" + meal.strCategory 
 modalH3_2.innerHTML = "<strong> Area : </strong>" + meal.strArea 
 modalInstruction.innerHTML = meal.strInstructions
 vidLink.setAttribute('href', meal.strYoutube)
}
// RANDOM CARDS 
 window.onload =  function load(){
for (var i = 0; i < 6  ; i++) {
  // FETCH RANDOM MEALS API
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => { return response.json() })
    .then(data => {creatCard(data.meals[0])})
    .catch((error) => console.error("FETCH ERROR:", error));
  }
}
// SEARCH 
document.querySelector('.form-control').addEventListener('keyup', Search )
function createlistcard(data){
  for (var i = 0; i < data.meals.length  ; i++) {
    creatCard(data.meals[i]);
}
}
function Search(){
  var container = document.querySelector('.cardsAndModals')
  container.innerHTML = ""
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
.then((response) => { return response.json() })
.then(data => {
  console.log(data);
  var input = document.querySelector('.form-control');
  console.log(input.value);
  for (var i = 0; i < data.meals.length  ; i++) {
    if(data.meals[i].strMeal.toUpperCase().indexOf(input.value.toUpperCase())>-1)
    creatCard(data.meals[i]); 
  }
})
}
































































  // var input = document.getElementById("search")
  // var cardContainer = document.querySelectorAll(".cardAndModal")
  // var cards = document.querySelectorAll(".card-content");
  // for (let i = 0; i < cardContainer.length; i++) {
  //   var title = cards[i].childNodes[1]
  //   if (title.innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
  //     // cardContainer.style.display = "";
  //     console.log('yes')
  //   } else {
  //     console.log('no')
  //     // cardContainer.style.display = "none";
  //   }
  // }


  // function fill(searchedMeal) {
  //   // console.log(searchedMeal)
  //   var inputval = document.querySelector(".form-control").value
  //   var cardContainer = document.querySelectorAll(".cardAndModal")
  //     console.log(cardContainer)
  //     for (let i = 0; i < cardContainer.length; i++) {
  //       var title = cards.childNodes[3]
  //       if (title.innerText.toUpperCase().indexOf(inputval.toUpperCase()) > -1) {
  //         document.querySelector('cardsAndModals').innerHTML = ""
  //         cardContainer.style.display = "";
  //       } else {
  //         cardContainer.style.display = "none";
  //       } 
  //     }
  // }


//   fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//   .then((response) => { return response.json() })
//   .then(data => {creatCard(data.meals[0])})
//   .catch((error) => console.error("FETCH ERROR:", error));
  
//   const api = "https://www.themealdb.com/api/json/v1/1/search.php?s="
//   const response = fetch(`${api}Sushi`)
//  //  const data = response
//   console.log(response);
// creatCard(filteredMeals)


 
    
    
// function SearchByName() {
//   var input = document.querySelector(".form-control").value;
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
//     .then((response) => { return response.json() })
//     .then(input => { creatCard(input) })
//     .catch((error) => console.error("FETCH ERROR:", error));
//   var cardContainer = document.querySelectorAll(".cardAndModal")
//   var cards = document.querySelectorAll(".card-content");
//   for (let i = 0; i < cardContainer.length; i++) {
//     var title = cards.childNodes[3]
//     if (title.innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
//       cardContainer.style.display = "";
//     } else {
//       cardContainer.style.display = "none";
//     }
//   }
// }






// FILL THE 6 RANDOM CARDS 
  //  function FillRandomCard(data) {
  //   // cards contents  fill
  //   var cards = document.querySelectorAll('.card-content')
  //   var mealName = data.meals[0].strMeal;
  //   var mealPic = data.meals[0].strMealThumb;
  //   cards.childNodes[3].innerHTML = mealName;
  //   cards.childNodes[1].setAttribute('src', mealPic);
  //   // Modal content fill 
  //   var modals = document.querySelectorAll('.modal-content')
  //   var mealCategory = data.meals[0].strCategory;
  //   var mealArea = data.meals[0].strArea;
  //   var mealInstructions = data.meals[0].strInstructions	;
  //   var mealVid = data.meals[0].strYoutube;
  //   modals.childNodes[1].childNodes[1].innerHTML =  mealName ;
  //   modals.childNodes[3].childNodes[1].setAttribute('src' , mealPic)
  //   modals.childNodes[3].childNodes[5].innerHTML = mealCategory ;
  //   modals.childNodes[3].childNodes[9].innerHTML =  mealArea ;
  //   modals.childNodes[3].childNodes[13].innerHTML =  mealInstructions ;
  //   modals.childNodes[5].childNodes[1].childNodes[1].setAttribute('href' , mealVid);
  //   //   Modal button ID increasment 
  //   var cardsAndModals = document.querySelectorAll('.cardAndModal')
  //   cardsAndModals.childNodes[7].setAttribute('id','exampleModal' + i)
  //   cards.childNodes[5].setAttribute('data-bs-target','#exampleModal'+i);  
  // }

//  }





















//    // FETCH RANDOM MEALS API
 
// // FILL THE 6 RANDOM CARDS 

// //  function FillRandomCard(){
//   for (let i = 0; i < 5  ; i++) {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//     .then((response) => { return response.json() })
//     .then(data => {consol.log(data)})
//     .catch((error) => console.error("FETCH ERROR:", error));
//  //  cards contents  fill
//  var cards = document.querySelectorAll('.card-content')
//  var mealName = data.meals[0].strMeal;
//  var mealPic = data.meals[0].strMealThumb;
//  cards.childNodes[3].innerHTML = mealName;
//  cards.childNodes[1].setAttribute('src', mealPic);
//  // Modal content fill 
//  var modals = document.querySelectorAll('.modal-content')
//  var mealCategory = data.meals[0].strCategory;
//  var mealArea = data.meals[0].strArea;
//  var mealInstructions = data.meals[0].strInstructions	;
//  var mealVid = data.meals[0].strYoutube;
//  modals.childNodes[1].childNodes[1].innerHTML =  mealName ;
//  modals.childNodes[3].childNodes[1].setAttribute('src' , mealPic)
//  modals.childNodes[3].childNodes[5].innerHTML = mealCategory ;
//  modals.childNodes[3].childNodes[9].innerHTML =  mealArea ;
//  modals.childNodes[3].childNodes[13].innerHTML =  mealInstructions ;
//  modals.childNodes[5].childNodes[1].childNodes[1].setAttribute('href' , mealVid);
//  //   Modal button ID increasment 
//  var cardsAndModals = document.querySelectorAll('.cardAndModal')
//  cardsAndModals.childNodes[7].setAttribute('id','exampleModal' + i)
//  cards.childNodes[5].setAttribute('data-bs-target','#exampleModal'+i); 
//  creatCard()
//  }
// // }

// LOOP FOR RANDOME 6 CARDS 
  
//    // FETCH MEALS BY NAME  API
//  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//  .then((response) => { return response.json()})
//  .then(data => {CardFill(data)})
//   .catch((error) => console.error("FETCH ERROR:", error));

// // CARDFILL FUNCTION 
// function CardFill(data){ 
 
//     for (let i = 0; i <data.meals.length  ; i++) {
//    var AllCards = document.querySelector('.cardAndModal');
//    var clonedAllCards = AllCards.cloneNode(true);
//    document.querySelector('.cardsAndModals').appendChild(clonedAllCards)
//     // FILL CARDS AND MODALS

//   // cards contents  fill
//   var cards = document.querySelectorAll('.card-content')
//   var mealName = data.meals.strMeal;
//   var mealPic = data.meals.strMealThumb;
//   cards.childNodes[3].innerHTML = mealName;
//   cards.childNodes[1].setAttribute('src', mealPic);
//   // Modal content fill 
//   var modals = document.querySelectorAll('.modal-content')
//   var mealCategory = data.meals.strCategory;
//   var mealArea = data.meals.strArea;
//   var mealInstructions = data.meals.strInstructions	;
//   var mealVid = data.meals.strYoutube;
//   modals.childNodes[1].childNodes[1].innerHTML =  mealName ;
//   modals.childNodes[3].childNodes[1].setAttribute('src' , mealPic)
//   modals.childNodes[3].childNodes[5].innerHTML = mealCategory ;
//   modals.childNodes[3].childNodes[9].innerHTML =  mealArea ;
//   modals.childNodes[3].childNodes[13].innerHTML =  mealInstructions ;
//   modals.childNodes[5].childNodes[1].childNodes[1].setAttribute('href' , mealVid);
//   //   Modal button ID increasment 
//   var cardsAndModals = document.querySelectorAll('.cardAndModal')
//   cardsAndModals.childNodes[7].setAttribute('id','exampleModal' + i)
//   cards.childNodes[5].setAttribute('data-bs-target','#exampleModal'+i);      
//    clonedAllCards.style.display = "none"
//   }
  

// // CLONE CARDS BY DATA.MEALS.LENGTH 
// for (let i = 0; i <data.meals.length ; i++) {
//   // FILL CARDS AND MODALS
//   // cards contents  fill
//   var cards = document.querySelectorAll('.card-content')
//   var mealName = data.meals.strMeal;
//   var mealPic = data.meals.strMealThumb;
//   cards.childNodes[3].innerHTML = mealName;
//   cards.childNodes[1].setAttribute('src', mealPic);
//   // Modal content fill 
//   var modals = document.querySelectorAll('.modal-content')
//   var mealCategory = data.meals.strCategory;
//   var mealArea = data.meals.strArea;
//   var mealInstructions = data.meals.strInstructions	;
//   var mealVid = data.meals.strYoutube;
//   modals.childNodes[1].childNodes[1].innerHTML =  mealName ;
//   modals.childNodes[3].childNodes[1].setAttribute('src' , mealPic)
//   modals.childNodes[3].childNodes[5].innerHTML = mealCategory ;
//   modals.childNodes[3].childNodes[9].innerHTML =  mealArea ;
//   modals.childNodes[3].childNodes[13].innerHTML =  mealInstructions ;
//   modals.childNodes[5].childNodes[1].childNodes[1].setAttribute('href' , mealVid);
//   //   Modal button ID increasment 
//   var cardsAndModals = document.querySelectorAll('.cardAndModal')
//   cardsAndModals.childNodes[7].setAttribute('id','exampleModal' + i)
//   cards.childNodes[5].setAttribute('data-bs-target','#exampleModal'+i);      
//   }
// }













    //////////////////////////////// SEARCH BY NAME ////////////////////////////////////
 
    
  // document.getElementById('search').addEventListener("click", SearchByName);

//  SEARCH BY NAME 

// function SearchByName(){ 
//   var input = document.querySelector(".form-control");
//   var cardContainer = document.querySelectorAll(".cardAndModal")
//   var cards = document.querySelectorAll(".card-content");
//    for (let i = 0; i <cardContainer.length ; i++) {
//       var title = cards.childNodes[3]
//       if (title.innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
//         cardContainer.style.display = "";
//       } else {
//         cardContainer.style.display = "none";
//       }     
//     }
//   }
