'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const tutorials = [
  { id: 1, title: '环境准备', desc: '安装 Node.js 和必要工具', time: '10 分钟', status: 'available' },
  { id: 2, title: '安装 OpenClaw', desc: '通过 npm 全局安装', time: '5 分钟', status: 'available' },
  { id: 3, title: '配置 API Key', desc: '设置 Claude API 密钥', time: '5 分钟', status: 'available' },
  { id: 4, title: '启动服务', desc: '运行 Gateway 服务', time: '10 分钟', status: 'available' },
  { id: 5, title: 'Skills 配置', desc: '扩展 AI 能力', time: '15 分钟', status: 'available' },
  { id: 6, title: '多端接入', desc: '连接 Telegram 等平台', time: '20 分钟', status: 'available' },
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

  const handleLogout = async () => {
    await fetch('/api/logout')
    router.push('/')
  }

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold">教程中心</span>
          </div>
          <button onClick={handleLogout} className="text-sm text-zinc-400 hover:text-white transition">
            退出登录
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">欢迎回来 👋</h1>
          <p className="text-zinc-400">继续你的学习之旅</p>
        </div>

        <div className="grid gap-4">
          {tutorials.map((t, i) => (
            <div key={t.id} className="group p-5 rounded-xl bg-zinc-900/50 border border-white/[0.08] hover:border-indigo-500/50 hover:bg-zinc-900 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-semibold">
                    {t.id}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5">{t.title}</h3>
                    <p className="text-sm text-zinc-400">{t.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-zinc-500">{t.time}</span>
                  <svg className="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
