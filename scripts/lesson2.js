
const getData = async () => {
    await fetch('../data/lesson2.json')
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

const createCard = ({title, companyName, siteUrl, imageUrl, imageAlt, description}) => {

    const card = document.createElement('article');
    
    const titleElement = document.createElement('h3')
    titleElement.textContent = title;

    const companyNameElement = document.createElement('h4')
    companyNameElement.textContent = companyName;

    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = description;
    
    const companySiteElement = document.createElement('a');
    companySiteElement.setAttribute('href', siteUrl);
    companySiteElement.textContent = `${companyName}'s website`;

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageUrl);
    imageElement.setAttribute('alt', imageAlt);
    
    card.appendChild(titleElement);
    card.appendChild(companyNameElement);
    card.appendChild(companySiteElement);
    card.appendChild(imageElement);
    card.appendChild(descriptionElement);

    return card;
};


getData();