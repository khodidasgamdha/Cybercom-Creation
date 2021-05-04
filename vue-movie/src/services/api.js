import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWI3NWM0YWM2ODNkNzg2NDFjYzUxNTNhMWQ4MWEzNiIsInN1YiI6IjYwOGJlOTk2NWI0ZmVkMDA0MWUzNDUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1sFY7HTUj7_qVL_LMLB14MPiDkV9wfeJpEDr_2drG4A';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`
    }
})