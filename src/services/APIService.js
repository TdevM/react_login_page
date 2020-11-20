import axios from 'axios';


// Configure axios
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API;

export {axios}
