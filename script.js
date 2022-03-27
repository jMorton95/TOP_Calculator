
//These functions and DOM Event Handlers control the Mouse Over effects of each Calculator Button.
function buttonHover(e){
    if (this.classList == 'button');
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
       
        //Don't allow our input to start with a decimal.
        if (input == '.' && currentNumber.length == 0) return;
        //If we already have a decimal point, do not allow additional decimals.
        if (input == '.' && currentNumber.includes('.') == true) return;
        
        currentNumber.push(input);
        document.querySelector('#currentInput').textContent = currentNumber.join("");
    }
}

//Check if the pressed Key is one we wish to add animation to. Then check if input is a number or operator and run the valid function.
function keyDown(e){
    if (allActiveKeys.includes(e.key)){
        document.getElementById(e.key).classList.add('buttonClick');
        enterNumber(e.key, allowedNumbers);
    }
}

//VALIDATION:
//Collection of all Keys we wish to allow KeyDown Events to apply to.
const allActiveKeys = 
['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '`', '+', '-', 'Enter', '*', '/', 'Backspace', 'Delete', '^', '.'];

//Collections of specific values that we will check against in Functions.
const allowedNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const allowedOperators = ['+', '-', '/', '*', '^'];
const allowedInputs = ['Enter', 'Backspace', 'Delete', '`'];


//DATA STORAGE:
//Used to store cumulative inputs from button press or keystrokes.
let firstNumber = [];
let secondNumber = [];
let activeOperator;


const inButtons = document.querySelectorAll('button');
//Ensures Button Hightlighting works only when the mouse hovers over the target button.
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));
//Begins and ends a Mouse Click animation, starting with the first event and ending with the second.
inButtons.forEach(button => button.addEventListener('click', buttonClick));
inButtons.forEach(button => button.addEventListener('transitionend', clickTimeout));

window.addEventListener('keydown', keyDown);
