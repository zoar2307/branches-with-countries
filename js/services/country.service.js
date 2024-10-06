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
            countryNames[name] = {
                name: res.name.common,
                flag: res.flags.png,
                population: res.population,
                area: res.area,
                map: res.maps.googleMaps
            }
            saveToStorage(STORAGE_COUNTRY_NAMES, countryNames)
            return countryNames[name]
        })
}

function clearCache() {
    removeFromStorage(STORAGE_COUNTRY_NAMES)
}