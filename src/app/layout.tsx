import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OpenClaw 部署教程',
  description: '从零开始部署你的 AI 助手',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
