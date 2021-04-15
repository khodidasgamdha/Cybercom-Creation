export const state = () => ({
  course: 'Welcome !!',
})

export const mutations = {
  setCourse(state, payload) {
    state.course = payload
  },
}

export const getters = {
  upperCaseCourse(state, getters) {
    return state.course.toUpperCase()
  },
}
