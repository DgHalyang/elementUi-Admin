import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default instance