/*В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
Вывести изображение из этой папки полученное случайным образом (Math.random)*/

const main = document.getElementById('main');

const buttonClick = document.createElement('button');
buttonClick.classList.add('btn-click');
buttonClick.textContent = 'Натисни, щоб змінити фото';

main.appendChild(buttonClick);

const randomImg = document.createElement('img');
randomImg.setAttribute('alt', 'random image');
randomImg.style.width = '600px';
randomImg.style.height = '500px';

main.appendChild(randomImg);


function changeImg() {
    let rand = Math.floor(Math.random() * (9 - 1 + 1) + 1);;
    randomImg.src = 'images/' + rand + '.jpg'
}

changeImg();

buttonClick.addEventListener('click', changeImg);
