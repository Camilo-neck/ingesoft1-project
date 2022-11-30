import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

type comentario = {
	id: string;
	chazaId: string;
	upvotes: string;
	estrellas: string;
	fecha: string;
    usuario: string;


}

const cors = Cors({
	methods: ['GET', 'POST', 'DELETE'],
	origin: [
		'/localhost:3000$/',
	],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse<comentario[]>, fn: {
	(req: Cors.CorsRequest, res: {
		statusCode?: number | undefined; setHeader(key: string, value: string): any; end(): any;
	}, next: (err?: any) => any): void; (arg0: any, arg1: any, arg2: (result: unknown) => void): void;
}) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: unknown) => {
			if (result instanceof Error) {
				return reject(result)
			}

			return resolve(result)
		})
	})
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<comentario[]>
) {
	await runMiddleware(req, res, cors)
	try {
		const query = req.query
		const response = await fetch(`http://127.0.0.1:5000/comentario/delete/${query.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			// body: JSON.stringify({
			// 	"teacher":"Leonid Lebedev"
			// })
		}).then(res => res.json())
			.catch(err => console.log(err))
		return res.status(200).json(JSON.parse(JSON.stringify(response)));
	} catch (error) {
		console.log("error");
	}
	
}