/*Имеется текстовое поле на странице. 
При фокусировке на этом поле сбоку появляется <div> с информацией. 
При пропаже фокуса - <div> так же пропадает*/

const main = document.getElementById('main');

const myInput = document.createElement('input');
myInput.classList.add('input-focus');
myInput.textContent = 'Натисни на мене';

main.appendChild(myInput);

document.querySelector('input').onfocus = showMessage;
document.querySelector('input').onblur = hideMessage;

function showMessage(){
    const myDiv = document.createElement('div');
    myDiv.setAttribute('text', 'show');
    myDiv.classList.add('text');
    myDiv.textContent = `JavaScript (JS) — динамічна, об'єктно-орієнтована прототипна мова програмування. Реалізація стандарту ECMAScript. Найчастіше використовується для створення сценаріїв вебсторінок, що надає можливість на боці клієнта (пристрої кінцевого користувача) взаємодіяти з користувачем, керувати браузером, асинхронно обмінюватися даними з сервером, змінювати структуру та зовнішній вигляд вебсторінки.`;
    main.appendChild(myDiv);
}

function hideMessage(){
    document.querySelector('div[text="show"]').remove();
}