
//These functions and DOM Event Handlers control the Mouse Over effects of each Calculator Button.
function buttonHover(e){
    this.classList.toggle('buttonHover');
    this.classList.remove('buttonClick');
}

function buttonClick(e){
    this.classList.toggle('buttonClick');
}

//Remove CSS class after an animation finishes playing.
function clickTimeout(e){
    if (e.propertyName !== 'transform') return; //If animation is playing, do nothing.
    this.classList.remove('buttonClick');
}

function keyDown(e){
    //Create an Array of all Keys we wish to allow KeyDown Events to apply to.
    const activeKeys = 
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '`', '+', '-', 'Enter', '*', '/', 'Backspace', 'Delete', '^', '.'];

    //Check if the pressed Key is one we wish to add animation to.
    if (activeKeys.includes(e.key)){
        document.getElementById(e.key).classList.add('buttonClick');
        document.querySelector('#currentInput').textContent = e.key;
        
    }
    
}

/*
function enterNumber(keyArray){
    keyArray
}*/

const inButtons = document.querySelectorAll('button');
//Ensures Button Hightlighting works only when the mouse hovers over the target button.
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));
//Begins and ends a Mouse Click animation, starting with the first event and ending with the second.
inButtons.forEach(button => button.addEventListener('click', buttonClick));
inButtons.forEach(button => button.addEventListener('transitionend', clickTimeout));

window.addEventListener('keydown', keyDown);
