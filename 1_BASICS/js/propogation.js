var child = document.querySelector('.child');
var parent = document.querySelector('.parent');

function showChild(event){

    event.stopPropagation() // comment this and check
    event.target.style.background = 'blue'
    console.log('I am green');
    //console.log(event)
}

function showParent(){
    console.log('I am red');
}

child.addEventListener('click', showChild);
parent.addEventListener('click',showParent);

