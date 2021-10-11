import axios from 'axios'

const apolloAxios = axios.create({
  baseURL: process.env.REACT_APP_APOLLO_API_URL || ' https://8414-104-186-132-12.ngrok.io',
})

const apolloService = {
  getAbout: () => apolloAxios.get('/about'),
}

export default apolloService
