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

var messages = document.getElementsByClassName('message');

messages[0].innerText = 'Hey, I have something super interesting and fun to tell you!'
messages[1].innerText = 'No flipping way... What is it?'
messages[2].innerText = 'So this one time I was traveling and....'
messages[3].innerText = 'And what?! I am dying to hear it!'


// This makes it so you can clear the messages

const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function () {
    for (var i = 0; i < messages.length; i++) {
    messages[i].innerText = null}
});

// This makes it so you can adjust the background color of the messages

const theme = document.getElementById('theme-drop-down');

var leftMessages = document.getElementsByClassName('message left');
var rightMessages = document.getElementsByClassName('message right');



theme.addEventListener('change', function() {

    if (theme.value === 'theme-one') {
        for (var i = 0; i < leftMessages.length; i++) {
        leftMessages[i].style.backgroundColor = 'burlywood';
        leftMessages[i].style.color = 'black'; }
        for (var j = 0; j < rightMessages.length; j++) {
        rightMessages[j].style.backgroundColor = 'lightblue'; }
        
        
    } else if (theme.value === 'theme-two') {
        for (var i = 0; i < leftMessages.length; i++) {
        leftMessages[i].style.backgroundColor = 'black';
        leftMessages[i].style.color = 'white';
        for (var j = 0; j < rightMessages.length; j++)
        rightMessages[j].style.backgroundColor = 'red';
        
        }
    }

})

// I want to know how to get the length including the new message so I can change all the themes

// This allows you to add more messages to the thread! TBD

var sendMessage = document.getElementById('sendMessage');
var messagesDiv = document.getElementById('messagesDiv');


sendMessage.addEventListener('click', function() {
    var newMessage = document.createElement('div');
    var userMessage = document.getElementById('userMessage').value;
    newMessage.textContent = userMessage;
    newMessage.style.marginTop = '10px'
    newMessage.className = 'message left'

    messagesDiv.appendChild(newMessage)

})