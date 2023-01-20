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
//  fill the select inputs
window.onload = function open() {
  // fill areas
  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then((response) => response.json())
    .then((data) => {
      // let areas;
      data.meals.reverse().forEach((meal) => {
        if (meal.strArea == "Moroccan") {
          areas =
            "<option class='AreaOptions' value='" +
            meal.strArea +
            "' selected>" +
            meal.strArea +
            "</option>";
        } else {
          areas =
            "<option class='AreaOptions' value='" +
            meal.strArea +
            "'>" +
            meal.strArea +
            "</option>";
        }
        document
          .getElementById("areaSelection")
          .insertAdjacentHTML("afterbegin", areas);
      });
    });

  // fill  categories
  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then((response) => response.json())
    .then((data) => {
      let category;
      data.meals.reverse().forEach((meal) => {
        if (meal.strCategory == "Lamb") {
          category ="<option class='CategoryOptions' value='" +meal.strCategory +"' selected>" +meal.strCategory +"</option>";
        } else {
          category ="<option class='CategoryOptions' value='" +meal.strCategory +"'>" +meal.strCategory +"</option>";
        }
        document.getElementById("categorySelection").insertAdjacentHTML("afterbegin", category);
      });
    });
};
//Filter function
async function filter() {
  var categorySelection = document.getElementById("categorySelection");
  var areaSelection = document.getElementById("areaSelection");
  var selectedCategory = categorySelection.options[categorySelection.selectedIndex].value;
  var selectedArea = areaSelection.options[areaSelection.selectedIndex].value;
    if (selectedCategory !== "" && selectedArea !== "") {
    const [a, b] = await Promise.all([
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
      ),
      fetch(
        ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      ),
    ]);
    const [areaData, categoryData] = await Promise.all([a.json(), b.json()]);
    const mergedMeals = [];
    for (let i = 0; i < areaData.meals.length; i++) {
      for (let j = 0; j < categoryData.meals.length; j++) {
        if (areaData.meals[i].idMeal == categoryData.meals[j].idMeal) {
          mergedMeals.push(areaData.meals[i]);
        }}
    }
    document.querySelector('.cardsAndModals').innerHTML = ""
    for (let i = 0; i < areaData.meals.length; i++) {
      creatCard(mergedMeals[i])}
    // renderPaginatedMeals(6, mergedMeals);
  }
      console.log(document.querySelector('.cardsAndModals'))

}


// function renderPaginatedMeals(pageSize, dataSource) {
//   $("#pagination-container").pagination({
//     dataSource: dataSource,
//     pageSize: pageSize,
//     callback: function  (data) {
//       // let html = "";
//       for (let i = 0; i < data.length; i++) {
//        creatCard(data.meals[i])
//         // html +=
//         //   "<div class='card text-center col-lg-3 col-md-5 cold-sm-10 m-1' id='cardsHere'   style='background-color: #807046'>" +
//         //   "<img src=" +
//         //   data[i].strMealThumb +
//         //   " class='card-img img-fluid w-2 h-50'>" +
//         //   "<div class='card-body'><h4 class='card-title text-light' style=';'>" +
//         //   data[i].strMeal +
//         //   "</h4>" +
//         //   "<button type='button' class='btn  btn-light  mt-5 mx-3'  data-bs-toggle='modal' data-bs-target='#exampleModal'  id='exampleModal" +
//         //   data[i].idMeal +
//         //   "' onclick ='linkdetails(" +
//         //   data[i].idMeal +
//         //   ")' >Details</a>" +
//         //   "</div></div>";
//       }
//       // if (html) {
//       //   $("#selectedResult").html(html);
//       // }
//     },
//   });
// }

   // if (selectedCategory === "" && selectedArea !== "") {
  //   fetch(
  //     `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
  //   )
  //     .then((response) => response.json())
  //     .then((areaData) => {
  //       document.querySelector('.cardsAndModals').innerHTML = ""
  //       for (let i = 0; i < areaData.length; i++) {
  //         creatCard(areaData.meals[i])}
  //       // renderPaginatedMeals(6, areaData.meals);
  //     });
  // }
  //  else if (selectedCategory !== "" && selectedArea === "") {
  //   fetch(
  //     `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
  //   )
  //     .then((response) => response.json())
  //     .then((categoryData) => {
  //       removeAllChildNodes(selectedResult);
  //       for (let i = 0; i < categoryData.length; i++) {
  //         creatCard(categoryData.meals[i])}
  //       // renderPaginatedMeals(6, categoryData.meals);
  //     });
  // }
  //  else
