import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local"

const font = localFont({ src: '/MiLanProVF.ttf', display: 'swap' })

export const metadata = {
  title: 'Free Chat 微信群',
  description: '扫描二维码以加入 Free Chat 用户交流群',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={font.className}>{children}<Analytics /></body>
    </html>
  )
}
