import { Copyright } from 'lucide-react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto mt-10 w-full max-w-3xl p-4">
      <p className="flex items-center justify-center gap-1">
        <Copyright size={16} /> {year} Snap Note - All rights reserved
      </p>
    </footer>
  )
}
