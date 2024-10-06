'use strict'

function onGetCountryInfo() {
    console.log('Hi')
}

function renderInfo(data) {
    console.log('Rendering...')
}

function onSearchCountry() {
    const elInput = document.querySelector('input')
    getCountryByName(elInput.value)
        .then(console.log)
    renderInfo()
}