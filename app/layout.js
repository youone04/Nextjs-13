// import './globals.css'
"use client"
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Belajar NextJS',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Header - Layout rooter</div>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/dashboard-app'}>Dashboard App</Link></li>
          <li><Link href={'/settings-app'}>Settings</Link></li>
          <li><Link href={'/user-app'}>User App</Link></li>
          <li><Link href={'/cari'}>Cari orang</Link></li>
          <li><Link href={'/dashboard'}>Dashboard pages</Link></li>
        </ul>

        {children}
        <div>Footer Layout rooter</div>
        </body>
    </html>
  )
}
