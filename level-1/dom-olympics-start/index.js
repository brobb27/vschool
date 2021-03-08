// This inserts a header into the page with the required text

const header = document.getElementById('header');

const title = document.createElement('h1');
title.textContent = 'JavaScript Made This!';

const myName = document.createElement('span')
myName.textContent = 'Blair'
myName.style.color = 'darkgreen';

const titleFooter = document.createElement('h3')
titleFooter.textContent = ' wrote the JavaScript';

titleFooter.prepend(myName);

header.append(title);
header.append(titleFooter);

// This changes the conversation to something fun and good

const messages = document.getElementsByClassName('message');

// messages[0].innerText = 'Hey, I have something super interesting and fun to tell you!'
// messages[1].innerText = 'No flipping way... What is it?'
// messages[2].innerText = 'So this one time I was traveling and....'
// messages[3].innerText = 'And what?! I am dying to hear it!'


// This makes it so you can clear the messages

const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function () {
    for (var i = 0; i < messages.length; i++) {
    messages[i].innerText = null}
});

// This makes it so you can adjust the background color of the messages

const theme = document.getElementById('theme-drop-down');

const leftMessages = document.getElementsByClassName('message left');
const rightMessages = document.getElementsByClassName('message right');

theme.addEventListener('change', function() {
    if (theme.value === 'theme-one') {
        for (var i = 0; i < messages.length; i++) {
        leftMessages[i].style.backgroundColor = 'burlywood'
        leftMessages[i].style.color = 'black'
        rightMessages[i].style.backgroundColor = 'lightblue'
        }
    } else if (theme.value === 'theme-two') {
        for (var i = 0; i < messages.length; i++) {
        leftMessages[i].style.backgroundColor = 'black'
        leftMessages[i].style.color = 'white'
        rightMessages[i].style.backgroundColor = 'red'
        }
    }

})

// Chrome say I have a bug on line 49 and 55? but I don't?

// This allows you to add more messages to the thread!


