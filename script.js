
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

const inButtons = document.querySelectorAll('button');
//Ensures Button Hightlighting works only when the mouse hovers over the target button.
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));
//Begins and ends a Mouse Click animation, starting with the first event and ending with the second.
inButtons.forEach(button => button.addEventListener('click', buttonClick));
inButtons.forEach(button => button.addEventListener('transitionend', clickTimeout));




