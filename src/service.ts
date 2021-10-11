import axios from 'axios'

const apolloAxios = axios.create({
  baseURL: process.env.REACT_APP_APOLLO_API_URL || 'https://0b96-2600-1700-e7f0-8810-f980-590b-d755-25c6.ngrok.io',
})

const apolloService = {
  getPaintings: () => apolloAxios.get('/paintings'),
}

export default apolloService
