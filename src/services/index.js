import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-p8hy.onrender.com'
})
