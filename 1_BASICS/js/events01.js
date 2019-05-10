var button = document.querySelector('.myButton');

// one click should do multiple jobs
function click1(){
    console.log('clicked me !!!');

}

function click2(){
    console.log('clicked me AGAIN!!!');
    // once the click1 is executed, we do not want it to run ever again
    // so we remove the event listener over click1
    button.removeEventListener('click',click1);
}

button.addEventListener('click',click1)
button.addEventListener('click',click2)

function showPopup(){
    alert('Buy Me')
}

document.addEventListener('click',showPopup)



// button.onclick = function (){
//     console.log('someone clicked me');
// }

// console.log('I am a text')
/*
button.onmouseover = function() {
    console.log('something moved over me');
}

button.ondblclick = function(){
    console.log('someone double clicked me');
}
*/
// The below function overrrides the above function
// button.onclick = function() {
//     console.log('Other function!!');
// }