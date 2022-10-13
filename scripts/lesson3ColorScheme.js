const getData = async () => {
    await fetch('../data/lesson3Color.json')
        .then((response) => response.json())
        .then((data) => {
            let main = document.querySelector('main');
            let section = document.createElement('section');
            section.appendChild(createCard(data));
            main.appendChild(section);
        });
}

const createCard = ({title, source, palette}) => {
    const card = document.createElement('article');
    
    const titleElement = document.createElement('h3')
    titleElement.textContent = title || '';
    card.appendChild(titleElement);

    if (source) {
        const sourceTitleElement = document.createElement('span');
        sourceTitleElement.textContent = 'Palette URL: ';
        const sourceElement = document.createElement('a');
        sourceElement.setAttribute('href', source);
        sourceElement.textContent = source;
        card.appendChild(sourceTitleElement);
        card.appendChild(sourceElement);
    }
    
    if (palette && palette.length > 0) {
        const gridContainer = document.createElement('div');
        gridContainer.setAttribute('style', 'display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 1fr 5fr;');

        palette.forEach((color, i) => {
            const titleElement = document.createElement('p');
            titleElement.textContent = color?.title;
            titleElement.setAttribute('style', `grid-column: ${i + 1} / ${i + 2}; grid-row: 1; text-align: center`);

            const colorElement = document.createElement('div');
            colorElement.textContent = color?.code;
            colorElement.setAttribute('style', `grid-column: ${i + 1} / ${i + 2}; background-color: ${color?.code}; grid-row: 2`);
            gridContainer.appendChild(titleElement);
            gridContainer.appendChild(colorElement);
        });

        card.appendChild(gridContainer);
    }

    return card;
}

getData();