//Random integer generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//joke getter
var joke = "";
fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/Random/Jokes')
.then(r => r.json())
.then(function(info) {
  joke += info.setup + ' ' + info.punchline;
  document.querySelector('#joke').innerHTML=joke;
});

//Handle sidebar
function openNav() {
  document.getElementById("sidenav").style.width = "160px";
  $(".main").css("margin-left", "160px");
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  $(".main").css("margin-left", "0");
}

//product class for automatic population
function product(image,name,price) {
  this.image = image;
  this.name = name;
  this.price = price;
}

let p1 = new product("assets/shirt.png",'B-llage T-Shirt',15.99);
let p2 = new product("assets/shirt2.png",'Death Metal T-Shirt',15.99);
let p3 = new product("assets/shirt3.png",'Matematicas T-Shirt',15.99);
let p4 = new product("assets/Mask.png",'B-llage FaceMask',7.99)
let p5 = new product("assets/shirt.png",'B-llage T-Shirt',15.99);
let p6 = new product("assets/shirt2.png",'Death Metal T-Shirt',15.99);
let p7 = new product("assets/shirt3.png",'Matematicas T-Shirt',15.99);
let p8 = new product("assets/Mask.png",'B-llage FaceMask',7.99)

let products = [p1,p2,p3,p4,p5,p6,p7,p8];

//populate website 
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

//Random rotation effect
target = document.getElementsByClassName("child")
target2 = document.getElementsByClassName("innerchild")

$(".child").mouseover(function(e)
{
  rng = getRandomInt(-5,5);
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
