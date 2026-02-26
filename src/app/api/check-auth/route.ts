import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('auth')
  
  if (auth) {
    return NextResponse.json({ authenticated: true })
  }
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
