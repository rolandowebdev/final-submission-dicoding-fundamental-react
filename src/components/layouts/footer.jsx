import { Copyright } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export const Footer = () => {
  const { language } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto mt-10 w-full max-w-3xl p-4">
      <p className="flex items-center justify-center gap-1">
        <Copyright size={16} /> {year}{' '}
        {language === 'en'
          ? 'Catatan Snap - Seluruh hak cipta'
          : 'Snap Note - All rights reserved'}
      </p>
    </footer>
  )
}
