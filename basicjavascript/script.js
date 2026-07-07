const header = document.querySelector(".title")
const button = document.querySelector(".button")
let x = 0;
button.addEventListener("click", () => {

    header.textContent = `${x}`
    x++;
})
