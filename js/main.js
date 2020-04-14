const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
let close = document.querySelectorAll("#close");
console.log(close);

cartButton.addEventListener('click', toggleModal);
close.forEach(item => item.addEventListener('click', toggleModal));

function toggleModal () {
    modal.classList.toggle("active");
}

new WOW().init();