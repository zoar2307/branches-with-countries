'use strict'

const STORAGE_COUNTRY_NAMES = 'countryNames'

function getCountryByName(name) {
    name = name.toLowerCase()

    let countryNames = loadFromStorage(STORAGE_COUNTRY_NAMES)
    if (countryNames && countryNames[name]) return Promise.resolve(countryNames[name])

    if (!countryNames) countryNames = {}

    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
    return axios.get(url)
        .then(res => {
            countryNames[name] = res.data[0]
            saveToStorage(STORAGE_COUNTRY_NAMES, countryNames)
            return res.data[0]
        })
}