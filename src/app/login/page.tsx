'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    setLoading(false)
    if (res.ok) router.push('/dashboard')
    else setError('账号或密码错误')
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      
      <div className="w-full max-w-sm relative">
        <Link href="/" className="flex items-center gap-2 justify-center mb-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">OpenClaw</span>
        </Link>
        
        <div className="p-8 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">欢迎回来</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 disabled:opacity-50 transition"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>
        </div>
        
        <p className="text-center text-zinc-500 text-sm mt-6">
          还没有账号？<a href="/#contact" className="text-indigo-400 hover:underline">联系购买</a>
        </p>
      </div>
    </main>
  )
}
