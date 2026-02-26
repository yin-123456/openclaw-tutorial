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
    if (res.ok) {
      router.push('/dashboard')
    } else {
      setError('账号或密码错误')
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg" />
          <span className="text-white font-semibold text-lg">OpenClaw</span>
        </Link>
        
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">登录</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none"
            />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-white text-black p-3 rounded-xl font-medium hover:bg-gray-200 disabled:opacity-50"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          还没有账号？<a href="/#contact" className="text-violet-400 hover:underline">联系购买</a>
        </p>
      </div>
    </main>
  )
}
