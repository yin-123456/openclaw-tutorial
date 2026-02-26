import Link from 'next/link'

const features = [
  { icon: '🚀', title: '环境搭建', desc: '从零配置服务器、Node.js 和必要依赖' },
  { icon: '⚙️', title: '部署配置', desc: '完整的安装流程，API 配置和服务启动' },
  { icon: '🎯', title: '使用技巧', desc: 'Skills 和 Tools 配置，让 AI 更强大' },
  { icon: '🔒', title: '安全设置', desc: '权限管理和安全最佳实践' },
  { icon: '📱', title: '多端接入', desc: '连接 Telegram、微信等平台' },
  { icon: '🔧', title: '问题排查', desc: '常见问题解决方案' },
]

const benefits = ['完整部署教程', '配置文件模板', '常见问题 FAQ', '永久更新', '一对一答疑']

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <nav className="border-b border-white/10 fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg" />
            <span className="text-white font-semibold">OpenClaw</span>
          </div>
          <Link href="/login" className="text-gray-400 hover:text-white text-sm">登录</Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            已帮助 100+ 用户部署成功
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            从零开始<span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> 部署 AI 助手</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10">完整的 OpenClaw 部署教程，手把手教你搭建专属 AI 助手</p>
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200">立即开始</Link>
            <a href="#pricing" className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/5">了解价格</a>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">你将学到什么</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="pricing" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">获取完整教程</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
            <div className="text-5xl font-bold text-white mb-2">¥99</div>
            <div className="text-gray-400 mb-6">终身访问</div>
            <ul className="text-left text-gray-300 space-y-3 mb-8">
              {benefits.map((b, i) => <li key={i} className="flex items-center gap-3"><span className="text-green-400">✓</span>{b}</li>)}
            </ul>
            <a href="#contact" className="block w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200">联系购买</a>
          </div>
        </div>
      </div>

      <div id="contact" className="py-20 px-6 border-t border-white/5 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">联系客服</h2>
        <p className="text-gray-400 mb-6">添加微信，获取账号</p>
        <div className="text-2xl font-mono text-violet-400">微信: your_wechat</div>
      </div>

      <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        © 2026 OpenClaw Tutorial
      </footer>
    </main>
  )
}
