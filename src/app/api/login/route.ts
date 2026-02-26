import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// 简单的用户数据库（后续可换成 Supabase）
const users: Record<string, string> = {
  'demo': 'demo123',
  // 在这里添加更多用户
}

export async function POST(req: Request) {
  const { username, password } = await req.json()
  
  if (users[username] === password) {
    const cookieStore = await cookies()
    cookieStore.set('auth', username, { 
      httpOnly: true, 
      maxAge: 60 * 60 * 24 * 7 // 7天
    })
    return NextResponse.json({ success: true })
  }
  
  return NextResponse.json({ error: '账号或密码错误' }, { status: 401 })
}
