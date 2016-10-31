const request = require('sync-request')
const fs = require('fs')

const countryId = 2
const cityId = 280

// const univerRes = request('GET', `https://api.vk.com/method/database.getUniversities?country_id=${countryId}&city_id=${cityId}&count=1000&v=5.59`).getBody().toString()
// const univerJSON = JSON.parse(univerRes).response.items

// const univerTrue = univerJSON.map((el) => {
//     el.countryId = countryId
//     el.cityId = cityId

//     return el
// })

// fs.writeFileSync('Universities.json', JSON.stringify(univerTrue))

const univerTrue = JSON.parse(fs.readFileSync('Universities.json'))

let facultAll = []

univerTrue.map((el) => {
    const facultRes = request('GET', `https://api.vk.com/method/database.getFaculties?university_id=${el.id}&count=1000&v=5.59`).getBody().toString()
    const facultJSON = JSON.parse(facultRes).response.items 
    facultJSON.map((elf) => {
        elf.countryId = el.countryId
        elf.cityId = el.cityId
        elf.univerId = el.id

        facultAll.push(elf)
    })
})

console.log(facultAll)
