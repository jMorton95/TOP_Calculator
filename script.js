function buttonHover(e){

    this.classList.toggle('buttonHover');
    
    /*if (this.classList != 'buttonHover'){

        this.classList.add('buttonHover');
        
    } else {

        this.classList.remove('buttonHover');
        console.log('success');
    }*/
}

const inButtons = document.querySelectorAll('button');
inButtons.forEach(button => button.addEventListener('mouseenter', buttonHover));
inButtons.forEach(button => button.addEventListener('mouseout', buttonHover));

