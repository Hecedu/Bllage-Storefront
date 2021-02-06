//Declarations
var joke = "";
let products = [
    new Product("assets/shirt.png",'B-llage T-Shirt',15.99),
    new Product("assets/shirt2.png",'Death Metal T-Shirt',15.99),
    new Product("assets/shirt3.png",'Matematicas T-Shirt',15.99),
    new Product("assets/Mask.png",'B-llage FaceMask',7.99),
    new Product("assets/shirt.png",'B-llage T-Shirt',15.99),
    new Product("assets/shirt2.png",'Death Metal T-Shirt',15.99),
    new Product("assets/shirt3.png",'Matematicas T-Shirt',15.99),
    new Product("assets/Mask.png",'B-llage FaceMask',7.99)];

//Classes
function Product(image,name,price) {
    this.image = image;
    this.name = name;
    this.price = price;
}

//Functions
function generateRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function populateJokeBanner(){
    fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/Random/Jokes')
    .then(r => r.json())
    .then(function(info) {
        joke += info.setup + ' ' + info.punchline;
        document.querySelector('#joke').innerHTML=joke;
    });
}
function populateStoreFront(){
    for (let product of products) {
        $('#container').append(`
            <div class = "child">
            <div class = "innerchild"> 
                <img src = "${product.image}" class = "centerproduct">
                <h2> ${product.name}</h2>
                <p>${product.price}</p>
                <button>Buy!</button>
            </div>
            </div>
        `);
    }
}
function openNavigationBar() {
    document.getElementById("sidenav").style.width = "160px";
    $(".main").css("margin-left", "160px");
}
function closeNavigationBar() {
    document.getElementById("sidenav").style.width = "0";
    $(".main").css("margin-left", "0");
}
function assignEventListeners(){
    $(".child").mouseover(function(e)
    {
        rng = generateRandomInteger(-5,5);
        $(this).css({ WebkitTransform: `rotate(${rng}deg)`});
        $(this).css({ WebkitTransform: `rotate(${rng}deg)`});
        $(this).children().css({ WebkitTransform: `rotate(${-rng}deg)`});
    })
    $(".child").mouseout(function(e)
    {
        $(this).css({ WebkitTransform: `rotate(0deg)`});
        $(this).css({ WebkitTransform: `rotate(0deg)`});
        $(this).children().css({ WebkitTransform: `rotate(0deg)`});
    })
}

//Main block
populateJokeBanner();
populateStoreFront();
assignEventListeners();



