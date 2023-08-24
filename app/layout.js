import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Phone Review',
  description: 'Phone reviewer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
