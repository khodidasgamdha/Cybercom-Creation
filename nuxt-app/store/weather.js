export const state = () => ({
  city: 'Surat',
  weather: {},
})

export const mutations = {
  setCity(state, payload) {
    state.city = payload
  },
  setWeather(state, payload) {
    state.weather = payload
  },
}

export const actions = {
  getWeatherInfo(context) {
    return this.$axios
      .$get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.city}&appid=${process.env.weatherAppId}`
      )
      .then((res) => context.commit('setWeather', res))
  },
}

export const getters = {
  icon(state) {
    return `https://openweathermap.org/img/w/${state.weather.weather[0].icon}.png`
  },
}
