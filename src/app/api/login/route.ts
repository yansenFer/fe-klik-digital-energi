import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  if (username === 'admin' && password === 'password') {
    const res = NextResponse.json({ success: true })
    res.cookies.set('isLogin', 'true', {
      path: '/',
    })
    return res
  }

  return NextResponse.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  )
}
