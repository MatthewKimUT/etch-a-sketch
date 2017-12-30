const container = document.querySelector('.container');



function populate(numPix){
    for (let i = 0; i < numPix; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < numPix; j++) {
            let div = document.createElement('div');
            div.classList.add('gray', 'grid');
            div.addEventListener('mouseover', (e) => {
                let removeColor, addColor;
                div.classList.contains('black') ? (removeColor = 'black', addColor = 'gray') : (removeColor = 'gray', addColor = 'black');
                div.classList.add(addColor);
                div.classList.remove(removeColor);
            });
            sideLength = `${960 / numPix}px`;
            console.log(sideLength);
            div.style.height = sideLength;
            div.style.width = sideLength;
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

populate(16);

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    let numPixels = window.prompt('How many pixels per side?', '16');
    const pixels = document.querySelectorAll('.grid');
    let range = document.createRange();
    range.selectNodeContents(container);
    range.deleteContents();
    populate(numPixels);
});