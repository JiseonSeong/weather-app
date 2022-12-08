import axios from 'axios'

const weatherMixin = {
    data() {
        return {};
    },
    methods: {
        async getWeatherInfo(city) {
            const API_KEY = "c5f58ab30ed25660e9725890af51b9d0"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`
            const res = await axios.get(url);
            const { main, wind, weather } = res.data;
            const weatherResult = {
                label: city.label,
                code: city.code,
                temperature: main.temp,
                humidity: main.humidity,
                wind: wind.speed,
                icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`
            };
            console.log(res);
            return weatherResult;
        }
    }
}

export default weatherMixin