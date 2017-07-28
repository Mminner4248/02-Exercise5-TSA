console.log("main.js");

//We start off adding in a timer reset, since having the setTimeout function will add another 2 second reset each time the div is clicked. On click, if the timer variable is empty (null), it will clear the timer. Now, we add the ID of the div to the element variable, and the css Styling to random. Our calcNum function creates a random number with a decimal, the * 100 makes sure that the decimal number is above 1.00, and then we modulus by 2 in order to get a 0 or 1 generator. (Math floor removes anything after the decimal.) Since leftArrow and rightArrow are strings, they have the 0 or 1 attribute. An if else statement will add them to the random element with the fillpage styling using a delimiter, which is used by adding a space between strings. "fillpage left arrow" Then, that styling is output into the element. 

let timer;

function boxClick(){
    if (timer != null){
        window.clearTimeout(timer);
    }

    let element = document.getElementById("flashyDiv");
    let random = "fillpage";

    if (calcNum()){
        random += " leftArrow";
    } else {
        random += " rightArrow";
    }

    element.className = random;

    timer = window.setTimeout(function(){
        element.className = "fillpage";
    }, 2000);
}

function calcNum(){
    return Math.floor(Math.random() * 100) % 2;
}