'use strict'

function getCountryByName(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`
    return axios.get(url)
        .then(res => {
            console.log(res.data)
        })
}