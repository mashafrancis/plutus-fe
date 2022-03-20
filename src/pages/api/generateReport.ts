import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import axios from '../../lib/axios';
import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';
import environment from '../../lib/environment';

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const { method } = req;
	const session = await getSession({ req });

	if (!!session) {
		try {
			if (method !== 'GET') {
				res.status(404).json({ message: 'Method is not allowed' });
			}

			const pipeline = promisify(stream.pipeline);
			const url = `${environment.apiUrl}/problems/reports`;
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${session?.user?.accessToken}`,
				},
			});

			if (!response.ok)
				throw new Error(`Unexpected response ${response.statusText}`);

			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/pdf');
			res.setHeader(
				'Content-Disposition',
				'attachment; filename=problems.pdf',
			);

			await pipeline(response.body, res);

			// return axios
			//   .get('/problems/reports', {
			//     headers: {
			//       Authorization: `Bearer ${session?.user?.accessToken}`,
			//     },
			//   })
			//   .then((response) => res.status(200).send(response.data))
			// .then((data) => res.status(200).send(data));
		} catch (error: any) {
			res
				.status(error?.response?.status ?? 400)
				.json({ message: JSON.stringify(error, null, 2) });
		}
	} else {
		res.status(401).send({
			error: 'You must be signed in to make a request to this endpoint.',
		});
	}
};

export default handler;
