'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const tutorials = [
  { title: '1. 环境准备', desc: '安装 Node.js 和必要工具', content: '确保系统已安装 Node.js 18+，推荐使用 Ubuntu 22.04 或 Windows 11...' },
  { title: '2. 安装 OpenClaw', desc: '通过 npm 全局安装', content: '运行 npm install -g openclaw 进行安装...' },
  { title: '3. 配置 API Key', desc: '设置 Claude API 密钥', content: '获取 Anthropic API Key 并配置到环境变量...' },
  { title: '4. 启动服务', desc: '运行 Gateway', content: '使用 openclaw gateway start 启动后台服务...' },
  { title: '5. Skills 配置', desc: '扩展 AI 能力', content: '配置 Skills 让 AI 助手能操作更多工具...' },
  { title: '6. 多端接入', desc: '连接 Telegram', content: '配置 Telegram Bot 实现随时随地访问...' },
]

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetch('/api/check-auth').then(res => {
      if (!res.ok) router.push('/login')
      else { setLoading(false); setUser('用户') }
    })
  }, [router])

  if (loading) return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-white">加载中...</div>
    </div>
  )

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <nav className="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg" />
            <span className="text-white font-semibold">OpenClaw 教程</span>
          </div>
          <button onClick={() => fetch('/api/logout').then(() => router.push('/'))} className="text-gray-400 hover:text-white text-sm">
            退出
          </button>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">欢迎回来 👋</h1>
        <p className="text-gray-400 mb-10">开始学习 OpenClaw 部署</p>
        
        <div className="space-y-4">
          {tutorials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{t.desc}</p>
                  <p className="text-gray-300 text-sm">{t.content}</p>
                </div>
                <span className="text-violet-400 text-sm">查看</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
