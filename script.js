
//These functions and DOM Event Handlers control the Mouse Over effects of each Calculator Button.
function buttonHover(e){
    this.classList.toggle('buttonHover');
    this.classList.remove('buttonClick');
}

function buttonClick(e){
    this.classList.toggle('buttonClick');
    enterNumber(e.target.id, allowedNumbers);
}


//Remove CSS class after an animation finishes playing.
function clickTimeout(e){
    if (e.propertyName !== 'transform') return; //If animation is playing, do nothing.
    this.classList.remove('buttonClick');
}

//Check if input is on the allowed list, if it is, record it and output it to HTML.
function enterNumber(input){
    if (allowedNumbers.includes(input) == true){
       
        //If the current input number is a decimal, do not allow additional decimals.
        if (input == '.' && currentNumber.includes('.') == true){
            return;
        }

        currentNumber.push(input);
        document.querySelector('#currentInput').textContent = currentNumber.join("");
    }
}

//Check if the pressed Key is one we wish to add animation to. Then check if input is a number or operator and run the valid function.
function keyDown(e, check){
    check = activeKeys;
    
    if (activeKeys.includes(e.key)){
        document.getElementById(e.key).classList.add('buttonClick');
        //checkDecimal(e.key, allowedNumbers)
        enterNumber(e.key, allowedNumbers);
    }
}
/*
function checkDecimal(e){
    if (e == '.'){
        enterNumber(e, allowedNumbers);
        document.getElementById(".").disabled = true;
    }
}
*/
//Create an Array of all Keys we wish to allow KeyDown Events to apply to.
const activeKeys = 
['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '`', '+', '-', 'Enter', '*', '/', 'Backspace', 'Delete', '^', '.'];

//Create an Array of specific numbers that we allow to be passed as input values.
const allowedNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];



//Used to store Number inputs from cumulative inputs.
let currentNumber = [];



const inButtons = document.querySelectorAll('button');
//Ensures Button Hightlighting works only when the mouse hovers over the target button.
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));
//Begins and ends a Mouse Click animation, starting with the first event and ending with the second.
inButtons.forEach(button => button.addEventListener('click', buttonClick));
inButtons.forEach(button => button.addEventListener('transitionend', clickTimeout));

window.addEventListener('keydown', keyDown);
