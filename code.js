document.getElementById("advert").addEventListener("submit", addData);
function addData(e){
    e.preventDefault();
    const brand = document.getElementById("carBrand").value;
    const model = " " + document.getElementById("carModel").value;
    const price = document.getElementById("carPrice").value;
    const picture = document.getElementById("carPicture").value;
    const id = Date.now(); //id kainos span'ui
    const newAdd = new CarAdvert(brand, model, price, picture, id);
    newAdd.addPhotos();
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
            this.myFunction = function(){       //Alertinimo funkcija
                alert("Kaina: " + price + "eur")//
            }                                   //
            createSpan.textContent = this.brand + this.model + " ";
            createSpanPrice.textContent = "€" + this.price;
            createPicture.src = this.picture;
            document.querySelector(".autoPictures > div:last-child > span:last-child").id = this.id; //id kainos span'ui
            document.querySelector(".autoPictures > div:last-child").className = "block"; //klasė div blokui, kuriame įrašoma info apie vieną skelbimą
            createDiv.addEventListener("click", this.myFunction); //event listener
        }
    }
}
