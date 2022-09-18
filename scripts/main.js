
function getLastUpdate() {
    let lastModified = new Date(document.lastModified)
                            .toLocaleDateString('en-US', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
    return lastModified;
}

function getCurrentYear() {
    return new Date().getFullYear();
}

let lastUpdatedElem = document.getElementById('lastUpdated');
lastUpdatedElem.innerHTML = getLastUpdate();

let currentYearElem = document.getElementById('year');
currentYearElem.innerHTML = getCurrentYear();