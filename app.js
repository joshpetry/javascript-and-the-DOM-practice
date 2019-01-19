const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const errorNotPurple = document.getElementsByClassName('error-not-purple');
let buttonColor = document.getElementById('myTextInput');
let listItem = document.getElementsByTagName('li');


myButton.addEventListener('click', () => {
        myHeading.style.color = buttonColor.value;
});

for ( let i = 0; i < listItem.length; i++ ) {
    listItem[i].style.color = 'purple';
}

for ( let i = 0; i < errorNotPurple.length ; i++ ) {
    errorNotPurple[i].style.color = 'red';
}