const insertHeader = () => {
    const body = document.querySelector('body');
    body.insertAdjacentElement('afterbegin', createHeader());
}

const createHeader = () => {
    const header = document.createElement('header');

    const logo = document.createElement('img');
    logo.setAttribute('src', './images/rosario-chamber-of-commerce-logo.png');
    logo.setAttribute('alt', 'Logo');
    logo.setAttribute('id', 'site-logo');

    const cityName = document.createElement('h1');
    cityName.textContent = 'Rosario';

    const chamberName = document.createElement('h2');
    chamberName.textContent = 'Chamber of Commerce';

    const facebookLogo = document.createElement('img');
    facebookLogo.setAttribute('src', './images/facebook.png');
    facebookLogo.setAttribute('alt', 'Facebook Logo');
    facebookLogo.setAttribute('id', 'facebook-logo');

    const linkedinLogo = document.createElement('img');
    linkedinLogo.setAttribute('src', './images/linkedin.png');
    linkedinLogo.setAttribute('alt', 'LinkedIn Logo');
    linkedinLogo.setAttribute('id', 'linkedin-logo');

    const button = document.createElement('button');
    button.setAttribute('id', 'menuButton');
    button.innerHTML = `&#9776;`;

    const today = document.createElement('p');
    today.setAttribute('id', 'today');

    const navWrapper = document.createElement('nav');
    navWrapper.setAttribute('id', 'primaryNav');

    /** List elements */
    const homeListElement = document.createElement('li');
    homeListElement.innerHTML = '<a href="./index.html">Home</a>';
    
    const discoverListElement = document.createElement('li');
    discoverListElement.innerHTML = '<a href="./discover.html">Discover</a>';
    
    const directoryListElement = document.createElement('li');
    directoryListElement.innerHTML = '<a href="./directory.html">Directory</a>';
    
    const joinListElement = document.createElement('li');
    joinListElement.innerHTML = '<a href="./join.html">Join</a>';
    
    const contactListElement = document.createElement('li');
    contactListElement.innerHTML = '<a href="./discover.html">Contact</a>';

    const ulWrapper = document.createElement('ul');
    ulWrapper.appendChild(homeListElement);
    ulWrapper.appendChild(discoverListElement);
    ulWrapper.appendChild(directoryListElement);
    ulWrapper.appendChild(joinListElement);
    ulWrapper.appendChild(contactListElement);

    navWrapper.appendChild(ulWrapper);

    header.appendChild(logo);
    header.appendChild(cityName);
    header.appendChild(chamberName);
    header.appendChild(facebookLogo);
    header.appendChild(linkedinLogo);
    header.appendChild(button);
    header.appendChild(navWrapper);
    header.appendChild(today);

    return header;
}

insertHeader();