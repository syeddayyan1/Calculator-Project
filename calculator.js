// let input = document.getElementById("userInput").value;

// alert(input);

// let input = document.getElementById("userInput");
// alert(input.value)

// let b = document.getElementsByClassName(".input1")

// function hello(button) {

//     let screen = document.getElementById("screen")
//     screen.innerHTML = button.value;

// }

// -------------------------------------------------------
// let input = document.getElementById("screen");
// let buttons = document.querySelectorAll(".label1");

// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     if (e.target.tagName == "BUTTON") {
//       input.value = e.target.textContent;
//     }
//     console.log(input.value);
//   });
// });
// -------------------------------------------------------

let display = document.querySelector(".screen");

// function hello(input) {
//     display.value += input;
// }

// --------------------------------------------------------------------------

let buttons = document.querySelectorAll(".label");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // let display=document.getElementById("screen")
    display.value += e.target.textContent;
  });
});

// --------------------------------------------------------------------------

// function clears() {
//     display.value = "";
// }

let msg = document.getElementById("grey");
msg.addEventListener("click", () => {
  //   let dele = document.getElementById("screen");
  display.value = "";
});

// --------------------------------------------------------------------------

function result() {
  display.value = eval(display.value);
}

// --------------------------------------------------------------------------

// function removes() {

//     display.value = display.value.slice(0, -1);
// }

let removns = document.getElementById("deletebtn");
removns.addEventListener("click", () => {
  let del = document.getElementById("screen");
  del.value = del.value.slice(0, -1);
});
