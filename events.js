const btn = document.getElementById('btn');
const app = document.querySelector('.app');

function showPic(){
    const imgOne = document.createElement('img');
    imgOne.src = 'https://media.nationalgeographic.org/assets/photos/000/290/29094.jpg';
    app.appendChild(imgOne);

}
btn.addEventListener('click', showPic);
