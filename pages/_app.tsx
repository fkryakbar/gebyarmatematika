import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='#Fde047' />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
