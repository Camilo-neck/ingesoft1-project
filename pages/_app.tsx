import '@/styles/globals.css'
import '@/styles/Slider.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { theme } from '@/lib/theme'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const chazamTheme = createTheme(theme('light'))

  return <ThemeProvider theme={chazamTheme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
