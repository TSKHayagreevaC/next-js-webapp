import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header';
import { Sidebar } from './components/sidebatr';
import Navbar from './components/navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'next-js-webapp',
  description: 'Practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="data:image/png;base64,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" />
      <body className={inter.className}>
        <div className='flex flex-row'>
          <Sidebar />
          <div style={{width: '100%'}}>
            <Navbar />
            <div className='mx-8 my-4'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
