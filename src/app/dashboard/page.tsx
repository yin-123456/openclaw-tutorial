'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const tutorials = [
  {
    title: '1. 环境准备',
    desc: '安装 Node.js 和必要工具',
    content: '确保你的系统已安装 Node.js 18+ 和 npm...',
  },
  {
    title: '2. 安装 OpenClaw',
    desc: '通过 npm 全局安装',
    content: '运行 npm install -g openclaw 进行安装...',
  },
  {
    title: '3. 配置 API Key',
    desc: '设置 Claude API 密钥',
    content: '获取 Anthropic API Key 并配置到环境变量...',
  },
  {
    title: '4. 启动服务',
    desc: '运行 OpenClaw Gateway',
    content: '使用 openclaw gateway start 启动后台服务...',
  },
  {
    title: '5. 使用技巧',
    desc: '高效使用 OpenClaw',
    content: '学习 Skills、Tools 配置和最佳实践...',
  },
]

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/check-auth').then(res => {
      if (!res.ok) router.push('/login')
      else setLoading(false)
    })
  }, [router])

  if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">加载中...</div>

  return (
    <main className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">OpenClaw 教程</h1>
          <button onClick={() => fetch('/api/logout').then(() => router.push('/'))} className="text-gray-400 hover:text-white">
            退出
          </button>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-white mb-8">教程目录</h2>
        <div className="space-y-4">
          {tutorials.map((t, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{t.title}</h3>
              <p className="text-gray-400 mb-4">{t.desc}</p>
              <div className="prose prose-invert text-gray-300">{t.content}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
