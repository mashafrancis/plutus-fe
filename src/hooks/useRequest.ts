import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import http from '@utils/http';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
	extends Pick<
		SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
		'isValidating' | 'error' | 'mutate'
	> {
	data: Data | undefined;
	response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
	extends Omit<
		SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
		'fallbackData'
	> {
	fallbackData?: Data;
}

export default function useRequest<Data = any, Error = unknown>(
	request: GetRequest,
	{ fallbackData, ...config }: Config<Data, Error> = {},
): Return<Data, Error> {
	const {
		data: response,
		error,
		isValidating,
		mutate,
	} = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
		request && JSON.stringify(request),
		() => http.request<Data>(request!),
		{
			...config,
			fallbackData: fallbackData && {
				status: 200,
				statusText: 'InitialData',
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				config: request!,
				headers: {},
				data: fallbackData,
			},
		},
	);

	return {
		data: response?.data,
		response,
		error,
		isValidating,
		mutate,
	};
}