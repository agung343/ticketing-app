import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

import {config} from "@fortawesome/fontawesome-svg-core"
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

config.autoAddCss = false;

export const metadata = {
  title: 'Ticketing App',
  description: 'Created by Agung',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-w-full'>
          <Navbar />
          <div className='flex flex-grow overflow-y-auto bg-page text-default-text'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
