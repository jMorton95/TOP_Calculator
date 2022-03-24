
//These functions and DOM Event Handlers control the Mouse Over effects of each Calculator Button.
function buttonHover(e){

    this.classList.toggle('buttonHover');
    this.classList.remove('buttonClick');

}

function buttonClick(e){

    this.classList.toggle('buttonClick');
}

function clickTimeout(e){
    if (e.propertyName !== 'transform') return; //If animation is playing, do nothing.
    this.classList.remove('buttonClick');
}

const inButtons = document.querySelectorAll('button');
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));
inButtons.forEach(button => button.addEventListener('click', buttonClick));
inButtons.forEach(button => button.addEventListener('transitionend', clickTimeout));




