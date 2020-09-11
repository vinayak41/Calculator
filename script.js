let output = document.querySelector('input');
let buttons = document.querySelectorAll('button');
output.value = "";
for (let item of buttons) {
    item.addEventListener('click', () => {
        let buttonText = item.innerText;
        if( buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/"){
            output.value += buttonText;

        }
        else if(buttonText === "Clear"){
            output.value = "";
        }
        else if(buttonText === "Backspace"){
            output.value = output.value.slice(0, output.value.length -1);
        }
        else if ( buttonText === "."){
            output.value += buttonText;
        }
        else if (buttonText === "="){
            output.value = eval(output.value);
        }
        else{
            output.value += buttonText;
        }
    })
}