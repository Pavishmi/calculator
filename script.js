let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByTagName('button'));

// console.log(buttons);
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                display.innerText = eval(display.innerText)
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})