function buttonHover(e){

    this.classList.toggle('buttonHover');

}

const inButtons = document.querySelectorAll('button');
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));

