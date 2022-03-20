// third-party libraries
import axios from 'axios';
// helpers
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { environment } from '../lib/environment';

// create axios instance
const http = axios.create({
	baseURL: environment.clientUrl,
	withCredentials: true,
});

export default http;
