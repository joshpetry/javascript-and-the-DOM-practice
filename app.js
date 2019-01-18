//change header to red, then black, when clicked

const myHeading = document.getElementById('myHeading');
let testVar;

myHeading.addEventListener('click', () => {
    if (testVar !== 'red') {
        myHeading.style.color = 'red';
        return testVar = 'red';
    } else if (testVar === 'red') {
        myHeading.style.color = 'black';
        return testVar = 'black';
    };
});

  