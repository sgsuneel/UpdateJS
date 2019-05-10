
// host the elements in variables
var parent = document.querySelector('.parent')
var ul = parent.querySelector('ul')
var div = document.createElement('div')

// console.log(div)

div.textContent = 'My new div'
div.style.color = 'red'
div.style.fontSize = '20px'

// console.log(div)

/*
The following are the methods to insert the above created element 
into the html page.

There are multiple methods. But, most widely used is 

insertAdjacentElement
*/

// parent.appendChild(div)

// parent.insertBefore(div,ul)

/*
This is the most advanced way to insert elements

    beforebegin : place the argument before the div box which is the argument here
    afterbegin
    beforeend
    afterend : places the argument after the end of div box code

*/

parent.insertAdjacentElement('afterend',div)

// WHAT IS WE JUST WANT TO INSERT *** TEXT *** AND NOT HTML CODE
// THEN USE THE FOLLOWING

parent.insertAdjacentHTML('beforebegin','hello I am text')


// REMOVE ELEMENTS
// parent.removeChild(ul) 
// OR

// ul.remove()