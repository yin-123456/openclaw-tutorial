import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30" />
            </div>
            <span className="font-semibold text-lg tracking-tight">OpenClaw</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition">功能</a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition">价格</a>
            <Link href="/login" className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition">
              登录
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            已有 100+ 用户成功部署
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">部署你的</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI 私人助手</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            完整的 OpenClaw 部署教程，从零开始搭建属于你的 AI 助手。<br className="hidden sm:block" />
            让 AI 真正融入你的工作流。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="group px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2">
              开始学习
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="#pricing" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition">
              查看价格
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">简单透明的价格</h2>
            <p className="text-zinc-400">一次购买，永久访问</p>
          </div>
          
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-900/50 border border-white/10">
            <div className="absolute -inset-px bg-gradient-to-b from-indigo-500/20 to-transparent rounded-3xl blur-xl opacity-50" />
            <div className="relative">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">¥99</span>
                <span className="text-zinc-400">/终身</span>
              </div>
              <p className="text-center text-zinc-400 text-sm mb-8">包含所有内容和未来更新</p>
              
              <ul className="space-y-4 mb-8">
                {['完整部署教程（图文详解）', '配置文件模板', '常见问题 FAQ', '永久免费更新', '一对一答疑支持'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="block w-full py-3.5 rounded-full bg-white text-black font-medium text-center hover:bg-zinc-200 transition">
                立即购买
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">你将学到什么</h2>
            <p className="text-zinc-400">系统化教程，从入门到精通</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🚀', title: '环境搭建', desc: '服务器配置、Node.js 安装、依赖管理' },
              { icon: '⚙️', title: '核心部署', desc: 'OpenClaw 安装、API 配置、服务启动' },
              { icon: '🧠', title: 'Skills 配置', desc: '扩展 AI 能力，连接更多工具' },
              { icon: '🔐', title: '安全设置', desc: '权限管理、数据保护、最佳实践' },
              { icon: '📱', title: '多端接入', desc: 'Telegram、微信、飞书等平台' },
              { icon: '🔧', title: '问题排查', desc: '常见问题解决方案与调试技巧' },
            ].map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-white/20 hover:bg-zinc-900 transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-white/[0.08]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">联系购买</h2>
          <p className="text-zinc-400 mb-8">添加微信，获取账号</p>
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08]">
            <p className="text-sm text-zinc-400 mb-2">微信号</p>
            <p className="text-2xl font-mono text-white">your_wechat</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="text-sm text-zinc-400">OpenClaw Tutorial</span>
          </div>
          <p className="text-sm text-zinc-500">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}