const getData = async () => {
    await fetch('../data/lesson3TargetAudience.json')
        .then((response) => response.json())
        .then((data) => {
            let main = document.querySelector('main');
            let section = document.createElement('section');
            section.appendChild(createCard(data.targetAudience));
            section.appendChild(createCard(data.personas));
            section.appendChild(createCard(data.scenarios));
            main.appendChild(section);
        });
}

const createCard = ({ title, content, items, examples }) => {
    const card = document.createElement('article');

    const titleElement = document.createElement('h3')
    titleElement.textContent = title || '';
    card.appendChild(titleElement);

    if (content) {
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        card.appendChild(contentElement);
    }

    if (items && items.length > 0) {
        const listElement = document.createElement('ul');

        items.forEach((item) => {
            let childElement = document.createElement('li');
            childElement.textContent = item;
            listElement.appendChild(childElement);
        });
        card.appendChild(listElement);
    }

    if (examples && examples.length > 0) {
        examples.forEach((example) => {
            card.appendChild(createPersona(example));
        });
    }

    return card;
}

const createPersona = ({ name, photo, job, demographics, goal, quote }) => {
    const container = document.createElement('div');

    const nameTitle = createHeading4('Name');
    const nameContent = document.createElement('p');
    nameContent.textContent = name;

    const photoTitle = createHeading4('Photo');
    const photoElement = document.createElement('img');
    photoElement.setAttribute('src', photo);
    photoElement.setAttribute('alt', 'Persona image');

    const jobTitle = createHeading4('Job Title');
    const jobContent = document.createElement('p');
    jobContent.textContent = job;

    const demographicsTitle = createHeading4('Demographics');
    const demographicsContent = document.createElement('p');
    demographicsContent.textContent = demographics;

    const goalTitle = createHeading4('Goal');
    const goalContent = document.createElement('p');
    goalContent.textContent = goal;

    const quoteTitle = createHeading4('Quote');
    const quoteContent = document.createElement('p');
    quoteContent.textContent = quote;

    container.appendChild(nameTitle);
    container.appendChild(nameContent);
    container.appendChild(photoTitle);
    container.appendChild(photoElement);
    container.appendChild(jobTitle);
    container.appendChild(jobContent);
    container.appendChild(demographicsTitle);
    container.appendChild(demographicsContent);
    container.appendChild(goalTitle);
    container.appendChild(goalContent);
    container.appendChild(quoteTitle);
    container.appendChild(quoteContent);

    return container;
}

const createHeading4 = (value) => {
    const title = document.createElement('h4');
    title.textContent = value;
    return title;
}

getData();