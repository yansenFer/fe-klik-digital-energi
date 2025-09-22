'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const onLogout = async () => {
    try {
      await axios.post('/api/logout') // ✅ panggil API logout
      router.push('/login') // ✅ redirect ke halaman login
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }
  return (
    <Button
      variant="outline"
      onClick={onLogout}
      className="gap-2 bg-transparent"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  )
}
