import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          OpenClaw 部署教程
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          从零开始，打造你的 AI 助手
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            登录查看教程
          </Link>
          <a href="#contact" className="border border-gray-500 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-lg font-medium">
            联系购买
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">你将学到</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: '环境搭建', desc: '从零配置服务器和依赖' },
            { title: '部署配置', desc: '完整的部署流程和技巧' },
            { title: '使用技巧', desc: '高效使用 OpenClaw 的方法' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">联系购买</h2>
        <p className="text-gray-300 mb-4">添加客服微信获取账号</p>
        <p className="text-2xl text-blue-400 font-mono">微信: your_wechat_id</p>
      </div>
    </main>
  )
}
