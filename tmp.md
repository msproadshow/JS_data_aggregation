```js
const univerRes = request('GET', `https://api.vk.com/method/database.getUniversities?country_id=${countryId}&city_id=${cityId}&count=1000&v=5.59`).getBody().toString()
```
