import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.json({ success: true, message: 'Logged out' })

  // ❌ hapus cookie `isLogin`
  res.cookies.delete('isLogin')

  return res
}
