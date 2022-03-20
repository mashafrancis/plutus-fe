import axios from 'axios';
import environment from './environment';

// Create axios instance.
const axiosInstance = axios.create({
	baseURL: environment.apiUrl,
	withCredentials: true,
});

export default axiosInstance;
