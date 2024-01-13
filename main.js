const tjk = document.getElementById("tjk");
const screen = document.getElementById("screen");
const otherElements = document.querySelectorAll("body > *:not(#tjk)");

screen.addEventListener("click", function(){
    toggleElements();
    setTimeout(() => toggleElements(), 450);
});

function toggleElements() {
    tjk.classList.toggle("hidden");

    otherElements.forEach(element => {
        element.classList.toggle("hidden");
    });
}
