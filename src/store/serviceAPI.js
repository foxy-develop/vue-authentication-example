import Vue from "vue";
import AxiosPlugin from "vue-axios-cors";
import axios from "axios";

Vue.use(AxiosPlugin);

axios.defaults.baseURL =  process.env.VUE_APP_API_BASE;
axios.defaults.headers.common[process.env.VUE_APP_API_HEADER] = process.env.VUE_APP_API_KEY;
axios.defaults.method = 'POST';

const getAuthToken = () => localStorage.getItem('user_token');
const responseInterceptor = response => {
  if ( response.data.status ) {
    return response.data;
  } else {
    return Promise.reject()
  }
}


const checkResponse = status => status == 200 && status != 401;



const authInterceptor = config => {
  config.headers['Authorization'] = getAuthToken();
  return config;
}


const apiClient = axios.create({
  timeout: 3000,
  // validateStatus: checkResponse(status)
});

apiClient.interceptors.request.use(authInterceptor);

const API = {
  'AUTH': 'auth',
  'USER': 'user',
  'MENTIONS': 'mentions'
}

const API_POINTS = {
  'AUTH': {
    'LOGIN': API.AUTH + '/login',
    'LOGOUT': API.AUTH+ '/logout',
    'STATUS': API.AUTH +'/status'
  },
  'USER': {
    'PROFILE': API.USER + '/profile',
    'THEME': API.USER + '/settheme'
  },
  'MENTIONS': {
    'FILTER': API.MENTIONS + '/control',
    'LIST': API.MENTIONS + '/list',
    'STATS': API.MENTIONS + '/stats'
  }
}

const pass = phone => apiClient.post(API.AUTH, { phone });
const login = (phone, login) => apiClient.post(API.LOGIN, { phone, login });

