const btn = document.querySelector('#toggle-btn');
const bg = document.querySelector('main');
const heading = document.querySelector('h1');
const slider = document.querySelector('#circle');
console.log(slider);

function handleClick() {
    // bg-color-change
    if (bg.classList.contains('light-to-dark')) {
        bg.classList.remove('light-to-dark');
        bg.classList.add('dark-to-light');
    } else {
        bg.classList.remove('dark-to-light');
        bg.classList.add('light-to-dark');
    }

    // h1-color-change
    if (heading.classList.contains('white-color')) {
        heading.classList.remove('white-color');
        heading.classList.add('dark-color');
    } else {
        heading.classList.remove('dark-color');
        heading.classList.add('white-color');
    }

    // button-color-change
    if (bg.classList.contains('light-to-dark')) {
        btn.style.backgroundColor = '#222222';
    } else {
        btn.style.backgroundColor = 'black';
    }

    // circle-slide
    if (slider.classList.contains('slide-right')) {
        slider.classList.remove('slide-right');
        slider.classList.add('slide-left');
    } else {
        slider.classList.remove('slide-left');
        slider.classList.add('slide-right');
    }

};

btn.addEventListener('click',handleClick)
