// const btn = document.querySelector("button");

// function random(number) {
//     return Math.floor(Math.random() * (number + 1) );
// }
// function bgChange(e) {
//     const rndCol = `rgb(${random(255)} , ${random(255)}, ${random(255)})`;
//     const bim = `#fff`
//     e.target.style.backgroundColor = rndCol;
//     e.target.style.color = bim;
//     console.log(e);
// }
// btn.addEventListener("click", bgChange);

// const textBox = document.querySelector("#textBox")
// const output = document.querySelector("#output");
// textBox.addEventListener(
//     "keydown", 
// (event) => (output.textContent = `You pressed "${event.key}",`));

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
    if (fname.value === "" || lname.value === "") {
        e.preventDefault();
        para.textContent = "you need to fill in both names!";
    }
});
form.style.display = "flex";
form.style.flexDirection = "column"
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.width = "100vw"
form.style.height = "100vh"

const blas = document.querySelectorAll("div") 
 for (const bla of blas ) {
    bla.style.margin = "10px";
 }