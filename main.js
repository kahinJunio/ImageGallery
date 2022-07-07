const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

for(let image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click',e=>{
    displayedImage.src = `${e.target.src}`;
})

btn.addEventListener('click',()=>{
    if (btn.getAttribute('class') === 'dark'){
        btn.textContent = 'Lighten';
        btn.setAttribute('class','light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
})
