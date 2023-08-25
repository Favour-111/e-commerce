let cardBody = document.querySelector('.cards')
let input = document.getElementById('search')
let children = document.querySelectorAll('.card')
let cardText = document.querySelectorAll('.text')



const findProd = cardText.find(function (prod) {
  return prod === "";
});
console.log(findProd);

