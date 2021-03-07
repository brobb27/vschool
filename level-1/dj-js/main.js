// Event listeners

//mouse hover over the box

var action = document.getElementById('discoTime')

action.addEventListener('mouseover', function() {
    action.style.backgroundColor = 'blue'
    action.addEventListener('mouseout', function() {
        action.style.backgroundColor = 'rgb(255, 177, 249)'
    })
})

//a mouse button held down over the box and let go over the square

action.addEventListener('mousedown', function () {
    action.style.backgroundColor = 'red'
    action.addEventListener('mouseup', function () {
        action.style.backgroundColor = 'yellow'
    })
})

//double clicked over the box

action.addEventListener('dblclick', function () {
    action.style.backgroundColor = 'green'
})

//Scrolling anytime on the page

var moveIt = document.getElementById('discoPage')

moveIt.onscroll= function() {moveIt.style.backgroundColor = 'orange'};


/* Code that didn't work

moveIt.addEventListener('scroll', function() {
    moveIt.style.backgroundColor = 'orange'
})

is there a way to add an event listener for when the person has stopped scrolling?

*/