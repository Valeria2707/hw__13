/*На странице есть две кнопки.
При клике на первую кнопку просим пользователя ввести в prompt ссылку, 
при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке).
Реализовать проверку на http / https. Если протокол не указан - добавляем*/

const main = document.getElementById('main');

const btnWrite = document.createElement('button');
btnWrite.classList.add('btn');
btnWrite.textContent = 'Натисни на мене, щоб ввести силку';

main.appendChild(btnWrite);


const btnSwitch = document.createElement('button');
btnSwitch.classList.add('btn');
btnSwitch.textContent = 'Натисни на мене, щоб перейти на силку';

main.appendChild(btnSwitch);

let stringLink;

function writeLink() {
    let link = prompt("Введіть силку");
    if(link === null || link === ''){
        alert("Введіть силку");
    }

    let arrLink = Array.from(link)
    console.log(arrLink);

    let arrText = [];
    const http = Array.from('http');
    const https = Array.from('https');

    for(let i = 0; i < 5; i++) {
        arrText.push(arrLink[i]);
    }

    for(let i = 0; i < arrText.length; i++) {
        if(arrText[i] === http[i] || arrText[i] === https[i]) {
            continue
        } else {
            arrLink.unshift('h','t','t','p','s',':','/','/');
            break
        }
    }
    
    stringLink = arrLink.join("");
    console.log(stringLink);
}

function switchLink() {
    location.href = stringLink;
}

btnWrite.onclick = writeLink;
btnSwitch.onclick = switchLink;