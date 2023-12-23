import { useLanguage } from '@/hooks/useLanguage'

export const useFormattedDate = (date) => {
  const { language } = useLanguage()

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }

  return new Date(date).toLocaleDateString(
    language === 'en' ? 'id-ID' : 'en-US',
    options,
  )
}
