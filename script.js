
//These functions and DOM Event Handlers control the Mouse Over effects of each Calculator Button.
function buttonHover(e){
    if (this.classList == 'button');
    this.classList.toggle('buttonHover');
    this.classList.remove('buttonClick');
}

function buttonClick(e){
    this.classList.toggle('buttonClick');

    if (allActiveKeys.includes(e.target.id)){

        if(allowedNumbers.includes(e.target.id)){
        document.getElementById(e.target.id).classList.add('buttonClick');
        enterNumber(e.target.id);
        } else if (allowedOperators.includes(e.target.id)){
            enterOperator(e.target.id);
        } else if (allowedInputs.includes(e.target.id)){
            enterInput(e.target.id);
        }
        
    }
}

//Remove CSS class after an animation finishes playing.
function clickTimeout(e){
    if (e.propertyName !== 'transform') return; //If animation is playing, do nothing.
    this.classList.remove('buttonClick');
}

//Check if input is on the allowed list, if it is, record it and output it to HTML.
function enterNumber(input){
    //Decide whether or not we're entering a first or second number based on whether or not we have entered an operator.
    if (activeOperator == undefined){

        if (allowedNumbers.includes(input) == true){
            //Don't allow our input to start with a decimal.
            if (input == '.' && firstNumber.length == 0) return;
            //If we already have a decimal point, do not allow additional decimals.
            if (input == '.' && firstNumber.includes('.') == true) return;
            
            firstNumber.push(input);
            document.querySelector('#currentInput').textContent = firstNumber.join("");
            return;
            }
        }

    if (allowedNumbers.includes(input) == true){

         if (input == '.' && secondNumber.length == 0) return;
         if (input == '.' && secondNumber.includes('.') == true) return;
            
         secondNumber.push(input);
         document.querySelector('#currentInput').textContent = firstNumber.join("") + " " + activeOperator + " " + secondNumber.join("");
      }
   
}

//Handles the logic behind entering an operator.
function enterOperator(input){

    if (allowedOperators.includes(input) == true){
        if (firstNumber.length == 0 || secondNumber.length > 0) return;
        activeOperator = input;
        if (activeOperator != undefined){ document.querySelector('#currentInput').textContent = (firstNumber.join("")) + " " + activeOperator; }
    }
}

//Decides which string manipulation function to use.
function enterInput(input){

        switch(input){
            case 'Delete':
                clear();
                break;
            case 'Backspace':
                backspace();
                break;
            case '`':
                plusMinus();
                break;
            case 'Enter':
                enter();
                break;
            default:
                return;
        }
    }

//Clears all inputs. Resetting the calculator.
function clear(){
    document.querySelector('#currentInput').textContent = "-";
    firstNumber = [];
    secondNumber = [];
    activeOperator = undefined;
}
function backspace(){

    if (document.querySelector('#currentInput').textContent !== '-'){


        if (activeOperator == undefined && secondNumber.length == 0){
            firstNumber.pop();
        } else if (activeOperator != undefined && secondNumber.length == 0){
            activeOperator = undefined;
        } else if (activeOperator != undefined && secondNumber.length > 0){
            secondNumber.pop();
        }

        
        if (activeOperator != undefined){

        document.querySelector('#currentInput').textContent = (firstNumber.join("") + " " + activeOperator + " " + secondNumber.join(""));

        } else if (activeOperator == undefined && firstNumber.length != 0){

            document.querySelector('#currentInput').textContent = (firstNumber.join(""));

        } else if (activeOperator == undefined && firstNumber.length == 0){

            document.querySelector('#currentInput').textContent = "-";
        }

    }
}

function plusMinus(){

}
function enter(){

}

//Check if the pressed Key is one we wish to add animation to. Then check if input is a number or operator and run the valid function.
function keyDown(e){
    
    if (allActiveKeys.includes(e.key)){

        document.getElementById(e.key).classList.add('buttonClick') ;

        if(allowedNumbers.includes(e.key)){

        enterNumber(e.key);
        } else if (allowedOperators.includes(e.key)){
            enterOperator(e.key);
        } else if (allowedInputs.includes(e.key)){
            enterInput(e.key);
        }
        
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
