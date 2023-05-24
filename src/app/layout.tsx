import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import dollar from '../icons/dollar.svg'
import wallet from '../icons/wallet.svg'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dolar app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-emerald-100`}>
        <main>
          <section className='flex justify-center items-center h-screen'>
            {children}
          </section>
            <nav className='fixed bottom-10 left-[46%] max-[1270px]:left-[40%] backdrop-blur-sm bg-gray-600 opacity-30 px-5 py-2 rounded-full'>
              <div>
                <ul className='flex gap-2 items-center'>
                  <Link href='/'><li className='bg-transparent text-white rounded-full p-2 hover:bg-black'><Image className='w-6 h-6' src={dollar} alt="svg" /></li></Link>
                  <div className='text-white'>|</div>
                  <Link href='/dashboard'><li className='bg-transparent text-white rounded-full p-2 hover:bg-black'><Image className='w-6 h-6' src={wallet} alt="svg" /></li></Link>
                </ul>
              </div>
            </nav>
        </main>
      </body>
    </html>
  )
}
