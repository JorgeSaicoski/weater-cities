const cities = [
    {
        "id": 5386035,
        "name": "Rancho Palos Verdes",
        "coord": {
            "lon": -118.387016,
            "lat": 33.744461
        },
        "main": {
            "temp": 84.34,
            "pressure": 1012,
            "humidity": 58,
            "temp_min": 78.8,
            "temp_max": 93
        },
        "dt": 1442171078,
        "wind": {
            "speed": 4.1,
            "deg": 300
        },
        "clouds": {
            "all": 5
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "Sky is Clear",
                "icon": "02d"
            }
        ]
    },
    {
        "id": 5392528,
        "name": "San Pedro",
        "coord": {
            "lon": -118.29229,
            "lat": 33.735851
        },
        "main": {
            "temp": 84.02,
            "pressure": 1012,
            "humidity": 58,
            "temp_min": 78.8,
            "temp_max": 91
        },
        "dt": 1442171080,
        "wind": {
            "speed": 4.1,
            "deg": 300
        },
        "clouds": {
            "all": 5
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "Sky is Clear",
                "icon": "02d"
            }
        ]
    },
    {
        "id": 3988392,
        "name": "Rosarito",
        "coord": {
            "lon": -117.033333,
            "lat": 32.333328
        },
        "main": {
            "temp": 82.47,
            "pressure": 1012,
            "humidity": 61,
            "temp_min": 78.8,
            "temp_max": 86
        },
        "dt": 1442170905,
        "wind": {
            "speed": 4.6,
            "deg": 240
        },
        "clouds": {
            "all": 32
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    {
        "id": 5394086,
        "name": "Seal Beach",
        "coord": {
            "lon": -118.10479,
            "lat": 33.741409
        },
        "main": {
            "temp": 85.19,
            "pressure": 1012,
            "humidity": 54,
            "temp_min": 78.8,
            "temp_max": 97
        },
        "dt": 1442171080,
        "wind": {
            "speed": 2.6,
            "deg": 0
        },
        "clouds": {
            "all": 1
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "Sky is Clear",
                "icon": "01d"
            }
        ]
    },
    {
        "id": 5358705,
        "name": "Huntington Beach",
        "coord": {
            "lon": -117.999229,
            "lat": 33.660301
        },
        "main": {
            "temp": 84.78,
            "pressure": 1012,
            "humidity": 61,
            "temp_min": 78.8,
            "temp_max": 91.99
        },
        "dt": 1442171072,
        "wind": {
            "speed": 2.6,
            "deg": 0
        },
        "clouds": {
            "all": 40
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    {
        "id": 5350207,
        "name": "Fountain Valley",
        "coord": {
            "lon": -117.953667,
            "lat": 33.709179
        },
        "main": {
            "temp": 84.83,
            "pressure": 1012,
            "humidity": 61,
            "temp_min": 78.8,
            "temp_max": 91.99
        },
        "dt": 1442171070,
        "wind": {
            "speed": 2.6,
            "deg": 0
        },
        "clouds": {
            "all": 40
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    {
        "id": 5364275,
        "name": "Laguna Beach",
        "coord": {
            "lon": -117.783112,
            "lat": 33.542252
        },
        "main": {
            "temp": 84.85,
            "pressure": 1012,
            "humidity": 58,
            "temp_min": 78.8,
            "temp_max": 91.99
        },
        "dt": 1442171073,
        "wind": {
            "speed": 3.1,
            "deg": 190
        },
        "clouds": {
            "all": 20
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ]
    },
    {
        "id": 5376890,
        "name": "Newport Beach",
        "coord": {
            "lon": -117.928947,
            "lat": 33.618912
        },
        "main": {
            "temp": 85.06,
            "pressure": 1012,
            "humidity": 61,
            "temp_min": 78.8,
            "temp_max": 91.99
        },
        "dt": 1442171075,
        "wind": {
            "speed": 2.6,
            "deg": 0
        },
        "clouds": {
            "all": 40
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    {
        "id": 5339840,
        "name": "Costa Mesa",
        "coord": {
            "lon": -117.918671,
            "lat": 33.641129
        },
        "main": {
            "temp": 84.79,
            "pressure": 1012,
            "humidity": 61,
            "temp_min": 78.8,
            "temp_max": 91.99
        },
        "dt": 1442171069,
        "wind": {
            "speed": 2.6,
            "deg": 0
        },
        "clouds": {
            "all": 40
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },

];

const getWheaterGroup=(data)=>{
    const list = []
    /*
    const weaterList = []

    const findWeaterAndAddCity = (idToSearch, city) => {
        for (let i = 0; i < weaterList.length; i++) {
            const weather = weaterList[i].weater;
            if (weather && weather.id === idToSearch) {
                weather.cities.push(city);
                weaterList[i] = weather
                break;
            }
        }
    }

     */

    data.forEach((city)=>{
        const weater = city.weather[0]
        delete city.weather
        const existingGroup = list.find(group => group.weater.id === weater.id);
        if (existingGroup) {
            existingGroup.cities.push(city);
            existingGroup.weater.cities.push(city);
        } else {
            const group = {
                weater: { ...weater, cities: [city] },
                cities: [city],
            };
            list.push(group);
        }

        /*

        if (!weaterList.includes(weater)) {
            console.log(weaterList.includes(weater))
            weaterList.push(weater)
            list.push({"weater":weater,"cities":[city]})
        }else{
            findWeaterAndAddCity (weater.id, city)
        }

         */
    })
    return list
}

const result = getWheaterGroup(cities)

console.log(result)