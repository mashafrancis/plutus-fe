import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import generateUrlWithQuery from '@utils/generateUrlWithQuery';
import axios from '../../lib/axios';

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const { method } = req;
	const session = await getSession({ req });

	if (!!session) {
		try {
			if (method !== 'GET') {
				res.status(404).end();
			}

			if (req.query.id) {
				const url = `/${req.query.id}`;

				const serializedParams = (): Record<string, string | string[]> => {
					let params = req.query;
					delete params.id;

					if (params.managementZoneId === '') {
						delete params.managementZoneId;
					}

					return params;
				};

				const endpoint = generateUrlWithQuery(url, serializedParams());

				return axios
					.get(endpoint, {
						headers: {
							Authorization: `Bearer ${session?.user?.accessToken}`,
						},
					})
					.then((response) => response.data)
					.then((data) => res.json(data));
			}
			return;
		} catch (e: any) {
			res.status(e.response.status ?? 500).send(e);
		}
	} else {
		res.status(401).send({
			error: 'You must be signed in to make a request to this endpoint.',
		});
	}
};

export default handler;
