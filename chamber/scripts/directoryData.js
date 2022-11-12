const requestURL = './data/data.json';
const cards = document.querySelector('.cards');


const getData = () => {
    fetch(requestURL)
        .then(data => {
            return data.json();
        })
        .then(obj => {
            const directoryMembers = obj;
            directoryMembers.forEach(displayData);
        })
        .catch();
}

const displayData = (member) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let email = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the member's full name
    h2.textContent = `${member.business_name}`;
    
    phoneNumber.textContent = `Phone number: ${member.phone_number}`;

    email.textContent = `Email: ${member?.email}`;
    
    website.textContent = 'Website';
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', member.logo_url);
    portrait.setAttribute('alt', `Portait of ${member.business_name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(website);
    card.appendChild(phoneNumber);
    card.appendChild(portrait);
    card.appendChild(email);

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