//button changes header color (alternates red/black) when clicked

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
let buttonColor = '';

myButton.addEventListener('click', () => {
    if (buttonColor !== 'red') {
        myHeading.style.color = 'red';
        return buttonColor = 'red';
    } else if (buttonColor === 'red') {
        myHeading.style.color = 'black';
        return buttonColor = 'black';
    };
});

