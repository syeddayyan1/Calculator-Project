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



let display = document.querySelector(".screen")

function hello(input) {
    display.value += input;
}


function clears() {
    display.value = "";
}



function result() {
    display.value = eval(display.value);
}


function removes() {

    display.value = display.value.slice(0, -1);
}