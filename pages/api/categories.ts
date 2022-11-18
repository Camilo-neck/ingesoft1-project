import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

type Category = {
	img: string;
	cardImageDescription: string;
	cardTitle: string;
	cardSubtitle: string;
}

const cors = Cors({
	methods: ['GET', 'POST', 'DELETE'],
	origin: [
		'/localhost:3000$/',
	],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse<Category[]>, fn: {
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
	res: NextApiResponse<Category[]>
) {
	await runMiddleware(req, res, cors)
	res.status(200).json([
		{
			img: '/Cards/Mercado.png',
			cardImageDescription: "Mercado",
			cardTitle: "Mercado",
			cardSubtitle: "Todo lo que necesitas"
		},
		{
			img: '/Cards/vivero.png',
			cardImageDescription: "Vivero",
			cardTitle: "Vivero",
			cardSubtitle: "Ponle verde a tu vida"
		},
		{
			img: '/Cards/fastFood.png',
			cardImageDescription: "Comidas rapidas",
			cardTitle: "Comidas rapidas",
			cardSubtitle: "Delicias al instante"
		},
		{
			img: '/Cards/Almuerzo.png',
			cardImageDescription: "Comida",
			cardTitle: "Comida",
			cardSubtitle: "Delicias en tus tardes"
		},
		{
			img: '/Cards/Ropa.png',
			cardImageDescription: "Ropa",
			cardTitle: "Ropa",
			cardSubtitle: "Todo lo mejor a tu estilo"
		},
		{
			img: '/Cards/Bisuteria.png',
			cardImageDescription: "Bisuteria",
			cardTitle: "Bisutería",
			cardSubtitle: "Accesorios para todos"
		},
		{
			img: '/Cards/papeleria.png',
			cardImageDescription: "Papeleria",
			cardTitle: "Papeleria",
			cardSubtitle: "Todo para un estudiante"
		},

		{
			img: '/Cards/random.png',
			cardImageDescription: "Otros",
			cardTitle: "Otros",
			cardSubtitle: "Cositas curiosas para ti"
		},

	])
}