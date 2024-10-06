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

    elPre.innerHTML = strHTML
}

function onSearchCountry() {
    const elInput = document.querySelector('input')
    getCountryByName(elInput.value)
        .then(renderInfo)
}