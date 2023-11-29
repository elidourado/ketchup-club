import axios from 'axios'

const DEVELOPMENT_URL = 'https://13fc-132-147-43-111.ngrok-free.app/api/v2'
const PRODUCTION_URL = 'https://smallworld.kiwi/api/v2'
const baseURL = __DEV__ ? DEVELOPMENT_URL : PRODUCTION_URL

const debug = false

const api = axios.create({baseURL})

export default api
export const apiBaseURL = baseURL
