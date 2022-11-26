import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

type Chaza = {
	calificacion: number;
	categorias: string[];
	id: string;
	nombre: string;
	telefono: number;
	ubicacion: string;
	urlImagen: string;
}

const cors = Cors({
	methods: ['GET', 'POST', 'DELETE'],
	origin: [
		'/localhost:3000$/',
	],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse<Chaza[]>, fn: {
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
	res: NextApiResponse<Chaza[]>
) {
	await runMiddleware(req, res, cors)
	try {
		const query = req.query
		console.log(query.nombre)
		const response = await fetch(`http://127.0.0.1:5000/chaza/?${query.categoria ? 'categoria='+query.categoria : 'categoria=Todas'}${query.nombre ? '&nombre='+query.nombre : ''}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			// body: JSON.stringify({
			// 	"teacher":"Leonid Lebedev"
			// })
		}).then(res => res.json())
			.catch(err => console.log(err))
		console.log(JSON.stringify(response))
		return res.status(200).json(JSON.parse(JSON.stringify(response)));
	} catch (error) {
		console.log("error");
	}
	// res.status(200).json([
	// 	{
	// 		"calificacion": 4,
	// 		"categorias": [
	// 			"Vivero"
	// 		],
	// 		"id": "1782c95601df45ea9795303eeef33ff3",
	// 		"nombre": "Chaza3",
	// 		"telefono": 13548,
	// 		"ubicacion": "Perola",
	// 		"urlImagen": "urltest4.com"
	// 	},
	// 	{
	// 		"calificacion": 4,
	// 		"categorias": [
	// 			"Comida",
	// 			"Mercado"
	// 		],
	// 		"id": "1b15c3be71bc4875a10599ebb9c3d302",
	// 		"nombre": "Chaza1",
	// 		"telefono": 135483,
	// 		"ubicacion": "Plaza che",
	// 		"urlImagen": "urltest.com"
	// 	},
	// 	{
	// 		"calificacion": 5,
	// 		"categorias": [
	// 			"Comida"
	// 		],
	// 		"id": "69c3d491dd084bc8b845cc94171c84cd",
	// 		"nombre": "Chaza3",
	// 		"telefono": 135483,
	// 		"ubicacion": "Perola",
	// 		"urlImagen": "urltest3.com"
	// 	},
	// 	{
	// 		"calificacion": 3,
	// 		"categorias": [
	// 			"Ropa",
	// 			"Bisuteria"
	// 		],
	// 		"id": "83970d30bd6d43f4b0213e3b9aa32eb4",
	// 		"nombre": "Chaza2",
	// 		"telefono": 135483,
	// 		"ubicacion": "freud",
	// 		"urlImagen": "urltest2.com"
	// 	}
	// ])
}