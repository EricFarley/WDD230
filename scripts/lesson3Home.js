const getData = async () => {
    await fetch('../data/lesson3Home.json')
        .then((response) => response.json())
        .then((data) => {
            if (data instanceof Array) {
                let main = document.querySelector('main');
                let section = document.createElement('section');
                data.forEach((item) => {
                    section.appendChild(createCard(item));
                });
                main.appendChild(section);
            }
        });
}

const createCard = ({title, content, imageUrl, imageAlt}) => {
    const card = document.createElement('article');
    
    const titleElement = document.createElement('h3')
    titleElement.textContent = title;
    card.appendChild(titleElement);

    if (content) {
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        card.appendChild(contentElement);
    }
    
    if (imageUrl && imageAlt) {
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageUrl);
        imageElement.setAttribute('alt', imageAlt);
        card.appendChild(imageElement);
    }

    return card;
}

getData();