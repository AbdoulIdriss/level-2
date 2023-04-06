// Window.addEventListener("click",  () => {
//     console.log("you knocked");
// });

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//     console.log("button clicked");
// });

// let button = document.querySelector("button");
// function once() {
//     console.log("done");
//     button.removeEventListener("click", once);
// }
// button.addEventListener("click", once);

let para = document.querySelector("p");
let button = document.querySelector("button");
para.addEventListener("mousedown", () => {
    console.log("Handler for Paragraph");
});
button.addEventListener("mousedown", event => {
    console.log("handler for button");
    if(event.button == 2) event.stopPropagation();
});