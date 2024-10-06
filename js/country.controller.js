'use strict'

function onGetCountryInfo() {
    console.log('Hi')
}

function renderInfo(data) {
    console.log('Rendering...')
    const elPre = document.querySelector('pre')
    const strHTML = `
                    <h2>${data.name}</h2>
                    <img class="country-flag" src="${data.flag}" alt="">
                    <p class="country-population">${data.population}</p>
                    <p class="country-area">${data.area}</p>
    `
}

function onSearchCountry() {
    renderInfo()
}