let btnCart = document.querySelector("#cart-button");
let modal = document.querySelector(".modal");
let close = document.querySelectorAll("#close");

let btnCounter = document.querySelectorAll(".button-counter");

btnCart.addEventListener('click', toggleModal);
close.forEach(item => item.addEventListener('click', toggleModal));

function toggleModal () {
    modal.classList.toggle("active");
}

new WOW().init();

btnCounter.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        let num = +evt.target.parentNode.children[1].textContent;
        if (evt.target.classList.contains('button-less') && num > 1) {
            evt.target.parentNode.children[1].textContent = num - 1;
        } 
        else if (evt.target.classList.contains('button-more')) {
            evt.target.parentNode.children[1].textContent = num + 1;
        }
    })
})
