import { openSans, inter, sohne, fira } from './fonts/fonts'
import './globals.css'
import clsx from 'clsx'
import Header from '@/components/Header'
import BlurCircle from '@/components/BlurCircle'

export const metadata = {
  metadataBase: new URL('https://www.hrshbrdhnn.in'),
  title: { 
    default: 'Harshbardhan Singh', 
    template: '%s — hrshbrdhnn' 
  },
  creator: 'Harshbardhan Singh',
  publisher: 'Harshbardhan Singh',
  description: 'Software Engineer | Student',
  keywords: ['Harshbardhan Singh', 'hrshbrdhnn'],
  authors: [{ name: 'Harshbardhan Singh', url: 'https://www.hrshbrdhnn.in' }],
  colorScheme: 'dark',
  openGraph: {
    title: 'Harshbardhan Singh',
    description: 'Software Engineer | Student',
    url: 'https://www.hrshbrdhnn.in',
    siteName: 'Harshbardhan Singh',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicons/avatar1.png',
    shortcut: '/favicons/avatar1.png',
    apple: [
      { url: '/favicons/avatar1.png' }
    ]
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-[#111010] antialised', openSans.variable, inter.variable, sohne.variable, fira.variable)}>
      <body className='antialised mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-7 py-7 text-sm text-neutral-400 md:gap-20 md:py-16'>
        <BlurCircle position={`top`} color={`bg-red-500`}/>
        <BlurCircle position={`bottom`} color={`bg-emerald-500`}/>
        <Header />
        {children}
      </body>
    </html>
  )
}
