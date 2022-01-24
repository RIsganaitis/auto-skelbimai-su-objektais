document.getElementById("advert").addEventListener("submit", addData);
function addData(e){
    e.preventDefault();
    const brand = document.getElementById("carBrand").value;
    const model = " " + document.getElementById("carModel").value;
    const price = document.getElementById("carPrice").value;
    const picture = document.getElementById("carPicture").value;
    const id = Date.now();
    const newAdd = new CarAdvert(brand, model, price, picture, id);
    newAdd.addPhotos();
    // newAdd.alertPrice();
    return id;
}
class CarAdvert {
    constructor(brand, model, price, picture, id){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.picture = picture;
        this.id = id;
        this.addPhotos = function(){
            var createPicture = document.createElement("img");
            var createSpan = document.createElement("span");
            var createSpanPrice = document.createElement("span");
            var createDiv = document.createElement("div");
            document.querySelector(".autoPictures").append(createDiv);
            document.querySelector(".autoPictures > div:last-child").append(createPicture);
            document.querySelector(".autoPictures > div:last-child").append(createSpan);
            document.querySelector(".autoPictures > div:last-child").append(createSpanPrice);
            createSpan.textContent = this.brand + this.model + " ";
            createSpanPrice.textContent = this.price + " €";
            createPicture.src = this.picture;
            document.querySelector(".autoPictures > div:last-child > span:last-child").id = this.id;
            document.querySelector(".autoPictures > div:last-child").className = "block";
            // document.querySelector(".autoPictures > div:last-child > span:last-child").id = this.id + "id";
        }
        //
        this.items = document.getElementsByClassName(".block");
        this.myFunction = function() {
            alert("attribute");
        };
        Array.from(this.items).forEach(function(element) {
            element.addEventListener('click', myFunction);
          });
        //
        // this.alertPrice = function(){
        //     alert(this.price);
        // }
    }
}

////
// const items = document.getElementsByClassName(".block");
// // this.myFunction = function() {
// //     alert("attribute");
// // };
// Array.from(this.items).forEach(function(element) {
//     element.addEventListener('click', myFunction);
//   });
// ////



document.querySelector(".autoPictures").addEventListener("click", alertPrices);
function alertPrices(e){
    // e.preventDefault();
    var prices = document.querySelector(".autoPictures > div");
    var newId = prices.id;
    // newAdd.myFunction();
    console.log("document.getElementById(newId).innerText))");
    // alert(document.getElementById("123").value);
    // alert(document.getElementById("a123")[0].innerText);
}



// document.querySelector(".block").addEventListener("click", alertPrices);
// function alertPrices(e){
//     // e.preventDefault();
//     var prices = document.querySelector(".autoPictures > div > span:last-child");
//     var newId = prices.id;
//     var alertPrice = document.getElementById(newId).innerText
//     console.log(alertPrice);
//     return alertPrice;
    // alert(document.getElementById("123").value);
    // alert(document.getElementById("a123")[0].innerText);
// }

// const items = document.getElementsByClassName("block");
// items.forEach((item) => {
//     item.addEventListener("click", alertPrices);
//   });


//   var items = document.getElementsByClassName(".block");
//     items.forEach(function(item) {
//       item.addEventListener("click", () => alert("alertPrices()"));
//     });
    


//     var myFunction = function() {
//         var attribute = this.getAttribute("data-myattribute");
//         alert(attribute);
//     };
    
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].addEventListener('click', myFunction, false);
//     }
//     jQuery does the looping part for you, which you need to do in plain JavaScript.
    
//     If you have ES6 support you can replace your last line with:
    
//         Array.from(elements).forEach(function(element) {
//           element.addEventListener('click', myFunction);
//         });