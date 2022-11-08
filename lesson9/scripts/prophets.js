const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


const getData = () => {
    fetch(requestURL)
        .then(data => {
            return data.json();
        })
        .then(obj => {
            const prophets = obj['prophets'];
            prophets.forEach(displayProphets);
        })
        .catch();
}

const displayProphets = (prophet) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dateBirth = document.createElement('p');
    let placeBirth = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    dateBirth.textContent = `Date of Birth: ${prophet?.birthdate}`;

    placeBirth.textContent = `Place of Birth: ${prophet?.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophetNumber(prophet.order)}`);
    portrait.setAttribute('loading', 'lazy');



    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dateBirth);
    card.appendChild(placeBirth);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

const prophetNumber = (order) => {
    let formattedOrder = '';
    switch (order) {
        case 1:
            formattedOrder = '1st';
            break;
        case 2:
            formattedOrder = '2nd';
            break;
        case 3:
            formattedOrder = '3rd';
            break;
        default:
            formattedOrder = `${order}th`;
            break;
    }
    return `${formattedOrder} Latter-day President`;
}


getData();