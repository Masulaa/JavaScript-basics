let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = "Clicked!";
};

paragraphElement.addEventListener('click',changeParagraphText );

let inputElement = document.querySelector('input');

function retriveUserInput(event) {
    //let enteredText = inputElement.value;
    let enteredText = event.target.value;
    //let enteredText = event.data; => This is different
    console.log(enteredText);
};

inputElement.addEventListener('input', retriveUserInput);