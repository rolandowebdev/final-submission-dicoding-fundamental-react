import clsx from 'clsx'
import { Bird } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RootContainer } from '@/components/layouts'
import { Heading, buttonVariants } from '@/components/ui'
import { EN, ID } from '@/constants/language'
import { useLanguage } from '@/hooks/useLanguage'

export const NotFound = () => {
  const { language } = useLanguage()
  return (
    <RootContainer>
      <main className="m-auto w-full max-w-md py-8 text-center">
        <Bird size={180} className="mx-auto" />
        <Heading className="my-2 text-8xl font-bold">404</Heading>
        <p className="leading-6">
          {language === 'en'
            ? ID['empty-page-message']
            : EN['empty-page-message']}
        </p>
        <Link
          to="/dashboard"
          className={clsx(buttonVariants(), 'mt-4 block w-full')}>
          {language === 'en' ? ID.back : EN.back}
        </Link>
      </main>
    </RootContainer>
  )
}
