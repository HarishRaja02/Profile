var background = document.querySelector(".profile"); // Use "#" if it's an ID
var background2 = document.querySelector(".alingn");
var background3 = document.querySelector(".imag-one");
var background4 = document.querySelector(".imag-two");
var background5 = document.querySelector(".imag-three");
var background6 = document.querySelector(".profile");
var background7 = document.querySelector(".right-icons");
var background8 = document.getElementById("bye");
var background9 = document.getElementById("by");
var background10 = document.getElementById("b");
var background11 = document.getElementById("text1");
var background12 = document.querySelector(".font-cent");
var background13 = document.querySelector(".font-cent2");
var background14 = document.getElementById("one");
var background15 = document.getElementById("one1");
var background16 = document.getElementById("one2");
var background17 = document.getElementById("one3");
var background18 = document.getElementById("one4");
var background19 = document.getElementById("one5");

let isDarkMode = false;

// Function to apply transition to all elements
function applyTransition() {
    const allElements = [
        background, background2, background3, background4, background5,
        background6, background7, background8, background9, background10,
        background11, background12, background13, background14, background15,
        background16, background17, background18, background19
    ];
    
    allElements.forEach(element => {
        if (element) { // Check if element exists
            element.style.transition = "all 1s ease";
        }
    });
}

// Call this once to set transitions
applyTransition();

function toggleMode() {
    if (!isDarkMode) {
        // Dark mode styles
        background.style.backgroundColor = "black";
        background2.style.backgroundColor = "black";
        background3.style.backgroundColor = "black";
        background4.style.backgroundColor = "black";
        background5.style.backgroundColor = "black";
        background6.style.backgroundColor = "black";
        background7.style.backgroundColor = "black";
        background8.style.backgroundColor = "black";
        background9.style.backgroundColor = "black";
        background10.style.backgroundColor = "black";
        background8.style.color = "white";
        background9.style.color = "white";
        background10.style.color = "white";
        background11.style.backgroundColor = "black";
        background11.style.color = "white";
        background12.style.backgroundColor = "black";
        background12.style.color = "white";
        background13.style.backgroundColor = "black";
        background13.style.color = "white";
        background14.style.backgroundColor = "black";
        background14.style.color = "white";
        background15.style.backgroundColor = "black";
        background15.style.color = "white";
        background16.style.backgroundColor = "black";
        background16.style.color = "white";
        background17.style.backgroundColor = "black";
        background17.style.color = "white";
        background18.style.backgroundColor = "black";
        background18.style.color = "white";
        background19.style.backgroundColor = "black";
        background19.style.color = "white";
    } else {
        // Light mode styles (reset to default)
        background.style.backgroundColor = "";
        background2.style.backgroundColor = "";
        background3.style.backgroundColor = "";
        background4.style.backgroundColor = "";
        background5.style.backgroundColor = "";
        background6.style.backgroundColor = "";
        background7.style.backgroundColor = "";
        background8.style.backgroundColor = "";
        background9.style.backgroundColor = "";
        background10.style.backgroundColor = "";
        background8.style.color = "";
        background9.style.color = "";
        background10.style.color = "";
        background11.style.backgroundColor = "";
        background11.style.color = "";
        background12.style.backgroundColor = "";
        background12.style.color = "";
        background13.style.backgroundColor = "";
        background13.style.color = "";
        background14.style.backgroundColor = "";
        background14.style.color = "";
        background15.style.backgroundColor = "";
        background15.style.color = "";
        background16.style.backgroundColor = "";
        background16.style.color = "";
        background17.style.backgroundColor = "";
        background17.style.color = "";
        background18.style.backgroundColor = "";
        background18.style.color = "";
        background19.style.backgroundColor = "";
        background19.style.color = "";
    }
    
    isDarkMode = !isDarkMode; // Toggle the mode
}