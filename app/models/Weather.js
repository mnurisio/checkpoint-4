

export class Weather {
    constructor(data) {
        this.farenheit = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32)
        this.celsius = Math.floor(data.main.temp - 273.15)
        this.date = data.date == undefined ? new Date() : new Date(data.date)
    }

    get farenheitTemplate() {
        return `
      <span class="weatherTemplate rounded rounded-pill p-2 mt-2"><i class="mdi mdi-weather-sunny-alert"></i><span onclick="app.WeatherController.changeWeatherCelsius()" class="selectable">${this.farenheit}°F</span></span>
    `}

    get celsiusTemplate() {
        return `
        <span class="weatherTemplate rounded rounded-pill p-2 mt-2"><i class="mdi mdi-weather-sunny-alert"></i><span onclick="app.WeatherController.changeWeatherFarenheit()" class="selectable">${this.celsius}°C</span></span>
        `
    }

    get timeTemplate(){
        return `
        <p class="m-0 p-2 fs-2 weatherTemplate rounded rounded-pill">${this.currentTime}</p>
        `
    }

    get currentTime(){
        return this.date.toLocaleString('en-us', { hour: 'numeric', minute: 'numeric'})
}
    
}
