'use strict'

const STORAGE_COUNTRY_NAMES = 'countryNames'

function getCountryByName(name) {
    name = name.toLowerCase()

    let countryNames = loadFromStorage(STORAGE_COUNTRY_NAMES)
    if (countryNames && countryNames[name]) return Promise.resolve(countryNames[name])

    if (!countryNames) countryNames = {}

    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
    return axios.get(url)
        .then(res => res.data[0])
        .then(res => {
            countryNames[name] = importDate(res)
            saveToStorage(STORAGE_COUNTRY_NAMES, countryNames)
            return countryNames[name]
        })
}

function getCountryByCode(code) {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    return axios.get(url)
        .then(res => res.data[0])
        .then(res => {
            return importDate(res)
        })
}

function importDate(data) {
    return {
        name: data.name.common,
        flag: data.flags.png,
        population: data.population,
        area: data.area,
        neighbors: data.borders,
        map: data.maps.googleMaps
    }
}

function clearCache() {
    removeFromStorage(STORAGE_COUNTRY_NAMES)
}