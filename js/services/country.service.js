'use strict'

const STORAGE_COUNTRY_NAMES = 'countryNames'

function getCountryByName(name) {

    let countryNames = loadFromStorage(STORAGE_COUNTRY_NAMES)
    if (countryNames && countryNames[name]) return Promise.resolve(countryNames)

    if (!countryNames) countryNames = []

    const url = `https://restcountries.com/v3.1/name/${name}`
    return axios.get(url)
        .then(res => {
            countryNames.push({ country: name, data: res.data[0] })
            saveToStorage(STORAGE_COUNTRY_NAMES, countryNames)
        })
}