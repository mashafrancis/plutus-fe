import { Fetcher } from 'swr';
import axios from 'axios';
import environment from '../lib/environment';

const http = axios.create({
	baseURL: environment.apiUrl,
	headers: {
		Authorization: `Bearer ${environment.token}`,
	},
	withCredentials: true,
});

const fetcher: Fetcher<any, any> = (url: string) =>
	http.get(url).then((response) => response.data);

export default fetcher;
