"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  

  return (
    <div>
      <button className='cursor-pointer hover:shadow-lg rounded-md p-1' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
       <Sun className='h-5 w-5 dark:hidden ' />
       <Moon className='h-5 w-5 hidden dark:block' />
      </button>
    </div>
  )
}
