const createLastTimeBanner = (lastTimeVisiting) => {
    const banner = document.createElement('div');
    banner.setAttribute('class', 'banner');
    banner.textContent = `${lastTimeVisiting}.`;
    return banner;
}

const checkLastTime = () => {
    let lastTimeVisiting = '';
    let lastTimeVisitingDate = localStorage.getItem('lastTimeVisiting');
    const todaysDate = new Date(Date.now());
    if (lastTimeVisiting != undefined && lastTimeVisiting != null) {
        lastTimeVisitingDate = new Date(lastTimeVisitingDate);
        const dateDiff = (todaysDate.getDate() - lastTimeVisitingDate.getDate()) / (1000*60*60*24);
        
        lastTimeVisiting = dateDiff > 1 ? `The last time you visited this page was ${dateDiff} days ago}` : 'The last time you visited this page was today';
        
        localStorage.setItem('lastTimeVisiting', todaysDate);
    } else {
        lastTimeVisiting = 'This is your first time here';
        localStorage.setItem('lastTimeVisiting', todaysDate);
    }

    return lastTimeVisiting;
}

const createLastTimeVisitingElement = () => {
    const message = checkLastTime();
    const header = document.querySelector('header');
    const banner = createLastTimeBanner(message);
    header.insertBefore(banner, header.lastChild);
}


createLastTimeVisitingElement();