'use strict'

function onGetCountryInfo() {
    console.log('Hi')
}

function renderInfo(data) {
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

function renderNotFoundError() {
    const elPre = document.querySelector('pre')
    const strHTML = `
                <div class="country-title-container">
                    <h2>No data found</h2>
                </div>
    `
    elPre.innerHTML = strHTML
}

function onSearchCountry(ev) {
    ev.preventDefault()
    const elInput = document.querySelector('input')
    const elPre = document.querySelector('pre')
    const elLoader = document.querySelector('.loader')

    hideElement(elPre)
    showElement(elLoader)
    getCountryByName(elInput.value)
        .then(res => {
            renderInfo(res)
            const elImg = document.querySelector('.country-flag')
            elImg.addEventListener('load', () => {
                hideElement(elLoader)
                showElement(elPre)
                elInput.value = ''
            })
        })
        .catch(err => {
            renderNotFoundError()
            hideElement(elLoader)
            showElement(elPre)
        })
}


function showElement(element) {
    element.classList.remove('hidden')
}

function hideElement(element) {
    element.classList.add('hidden')
}

function onClearCache() {
    clearCache()
}