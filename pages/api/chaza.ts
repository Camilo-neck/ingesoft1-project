import type { NextApiRequest, NextApiResponse } from 'next'

type Chaza = {
	calificacion: number;
	categorias: string[];
	id: string;
	nombre: string;
	telefono: number;
	ubicacion: string;
	urlImagen: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Chaza[]>
) {
	res.status(200).json([
		{
			"calificacion": 4,
			"categorias": [
				"Vivero"
			],
			"id": "1782c95601df45ea9795303eeef33ff3",
			"nombre": "Chaza3",
			"telefono": 13548,
			"ubicacion": "Perola",
			"urlImagen": "urltest4.com"
		},
		{
			"calificacion": 4,
			"categorias": [
				"Comida",
				"Mercado"
			],
			"id": "1b15c3be71bc4875a10599ebb9c3d302",
			"nombre": "Chaza1",
			"telefono": 135483,
			"ubicacion": "Plaza che",
			"urlImagen": "urltest.com"
		},
		{
			"calificacion": 5,
			"categorias": [
				"Comida"
			],
			"id": "69c3d491dd084bc8b845cc94171c84cd",
			"nombre": "Chaza3",
			"telefono": 135483,
			"ubicacion": "Perola",
			"urlImagen": "urltest3.com"
		},
		{
			"calificacion": 3,
			"categorias": [
				"Ropa",
				"Bisuteria"
			],
			"id": "83970d30bd6d43f4b0213e3b9aa32eb4",
			"nombre": "Chaza2",
			"telefono": 135483,
			"ubicacion": "freud",
			"urlImagen": "urltest2.com"
		}
	])
}