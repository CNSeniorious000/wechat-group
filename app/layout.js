import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local"

const font = localFont({ src: '/MiLanProVF.ttf', display: 'swap' })

export const metadata = {
  title: '停止维护通知',
  description: 'chat.academic.bnu120.space 已停止维护。你可以选择同行维护的另一个免费的网站',
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
