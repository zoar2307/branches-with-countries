'use strict'

function onGetCountryInfo() {
    console.log('Hi')
}

function renderInfo(data) {
    console.log('Rendering...')
    const elPre = document.querySelector('pre')
    const strHTML = `
                <div class="country-title-container">
                    <h2>${data.name}</h2>
                </div>
                <div class="information-container">
                        <div class="data">
                            <p class="country-population">Population : ${data.population}</p>
                            <p class="country-area">Area : ${data.area}</p>
                        </div>
                        <img class="country-flag" src="${data.flag}" alt="">
                </div>
    `

    elPre.innerHTML = strHTML
}

function onSearchCountry() {
    const elInput = document.querySelector('input')
    getCountryByName(elInput.value)
        .then(renderInfo)
}