const insertFooter = () => {
    const main = document.querySelector('main');
    main.insertAdjacentElement('afterend', createFooter());
}

const createFooter = () => {

    const footer = document.createElement('footer');

    const logo = document.createElement('img');
    logo.setAttribute('src', './images/rosario-chamber-of-commerce-logo.png');
    logo.setAttribute('alt', 'Logo');

    const chamberTitle = document.createElement('h4');
    chamberTitle.textContent = 'Rosario Chamber of Commerce';

    const address = document.createElement('p');
    address.textContent = '1701 Brown St.';
    address.setAttribute('id', 'address');

    const cityName = document.createElement('p');
    cityName.textContent = 'Rosario, Argentina';

    const email = document.createElement('p');
    email.textContent = 'info@rosariocc.org';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+(54) 3415-182365';
    phoneNumber.setAttribute('id', 'phoneNumber');

    const mapLocation = document.createElement('p');
    mapLocation.textContent = 'Map Location';
    mapLocation.setAttribute('id', 'map');

    const division = document.createElement('p');
    division.setAttribute('class', 'division');

    /** WRAPPER */
    const classInformationWrapper = document.createElement('div');

    const separationElementList = [];
    for (let i = 0; i < 4; i++) {
        const separation = document.createElement('span');
        separation.innerHTML = '|';
        separation.setAttribute('class', 'separation');
        separationElementList.push(separation);
    }

    const copyRight = document.createElement('p');
    copyRight.innerHTML = '&copy;<span id="year"></span> Rosario Chamber';
    
    const authorName = document.createElement('h5');
    authorName.innerHTML = 'Eric Farley';

    const projectName = document.createElement('p');
    projectName.textContent = 'WDD 230 Project';

    const lastUpdated = document.createElement('p');
    lastUpdated.innerHTML = 'Last modification: <span id="lastUpdated"></span>';

    classInformationWrapper.appendChild(copyRight);
    classInformationWrapper.appendChild(separationElementList[0]);
    classInformationWrapper.appendChild(authorName);
    classInformationWrapper.appendChild(separationElementList[1]);
    classInformationWrapper.appendChild(projectName);
    classInformationWrapper.appendChild(separationElementList[2]);
    classInformationWrapper.appendChild(lastUpdated);

    
    footer.appendChild(logo);
    footer.appendChild(chamberTitle);
    footer.appendChild(address);
    footer.appendChild(cityName);
    footer.appendChild(email);
    footer.appendChild(phoneNumber);
    footer.appendChild(mapLocation);
    footer.appendChild(division);
    footer.appendChild(classInformationWrapper);

    return footer;
}

insertFooter();