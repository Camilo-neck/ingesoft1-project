'use client';

import { ThemeOptions } from '@mui/material/styles';

export const theme = (themeMode: string): ThemeOptions => {
	return (
		{
			palette: themeMode === 'light' ? {
				primary: {
					main: '#ffd24e',
				},
				secondary: {
					main: '#219EBC',
				},
				error: {
					main: '#ba1a1a',
					light: '#ffdad6',
					dark: '#410002',
				},
			} : {
				primary: {
					main: '#755b00',
				},
				secondary: {
					main: '#00677d',
				},
				error: {
					main: '#ba1a1a',
					light: '#ffdad6',
					dark: '#410002',
				},
				background: {
					default: '#001f2a',
					paper: '#012633',
				},
			}
		}
	)
};