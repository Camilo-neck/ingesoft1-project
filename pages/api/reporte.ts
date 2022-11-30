import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

type reporte = {
	
	chazaID: string;
	id: string;
	comentarioID: string;
	contenido: number;
	estado_resuelto: string;
	fecha: string;
    
}

const cors = Cors({
	methods: ['GET', 'POST', 'DELETE'],
	origin: [
		'/localhost:3000$/',
	],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse<reporte[]>, fn: {
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
	res: NextApiResponse<reporte[]>
) {
	await runMiddleware(req, res, cors)
	try {
		const query = req.query
		const response = await fetch(`http://127.0.0.1:5000/reporte/resolve/${query.id}`, {
			method: 'POST',
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