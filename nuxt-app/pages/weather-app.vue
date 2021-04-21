<template>
  <v-app>
    <v-container>
      <!-- heading -->
      <h1 class="display-1 text-center mt-5 mb-5">Weather App</h1>

      <!-- display data -->
      <v-card color="blue-grey darken-2">
        <v-card-text class="white--text">
          <v-layout>
            <v-flex class="text-center">
              <!-- card-1 -->
              <v-flex>
                <h4>Temprature</h4>
                <h1 class="display-1 mt-5">{{ weather.name }}</h1>
                <img :src="icon" alt="weather icon" />
                <p>
                  <span class="display-1">
                    {{ Math.round(weather.main.temp - 273) }} &deg;C
                  </span>
                  <span class="caption ml-4">
                    {{ weather.weather[0].description }}
                  </span>
                </p>
              </v-flex>
            </v-flex>
            <v-flex class="text-center">
              <!-- card-2 -->
              <v-flex>
                <h4>Wind & Pressure</h4>
                <h3 class="headline mt-5">
                  Wind : {{ weather.wind.speed }} m/s ({{ weather.wind.deg }}
                  &deg;)
                </h3>
                <h3 class="headline mt-5">
                  Humidity : {{ weather.main.humidity }} %
                </h3>
                <h3 class="headline mt-5">
                  Pressure : {{ weather.main.pressure }} hPa
                </h3>
              </v-flex>
            </v-flex>
            <v-flex class="text-center">
              <!-- card-3 -->
              <v-flex>
                <h4>Other</h4>
                <h3 class="headline mt-5">
                  Max Temperature:
                  {{ Math.round(weather.main.temp_max - 273) }} &deg;C
                </h3>
                <h3 class="headline mt-5">
                  Min Temperature:
                  {{ Math.round(weather.main.temp_min - 273) }} &deg;C
                </h3>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>

      <!-- enter city -->
      <v-flex class="mt-5">
        <v-form @submit.prevent="getWeatherInfo">
          <v-text-field
            ref="cityName"
            v-model="city"
            label="Enter City Name"
            placeholder="Ex. Surat"
            hint="Enter City to get Weather Info"
            solo
            clearable
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  fetch({ store }) {
    return store.dispatch('weather/getWeatherInfo')
  },
  computed: {
    ...mapState('weather', ['weather']),
    ...mapGetters('weather', ['icon']),
    city: {
      get() {
        return this.$store.state.weather.city
      },
      set(value) {
        this.$store.commit('weather/setCity', value)
      },
    },
  },
  mounted() {
    this.$refs.cityName.focus()
  },
  methods: {
    ...mapActions('weather', ['getWeatherInfo']),
  },
}
</script>
