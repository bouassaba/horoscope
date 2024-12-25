import Header from '@/components/header'
import { cn } from '@/lib/utils'
import { getScopedI18n } from '@/locales/server'
import '@/styles/cosmic.css'

export default async function HomePage() {
  const t = await getScopedI18n('home')
  return (
    <>
      <Header transparent={true} />
      <div
        className={cn(
          'cosmic',
          'z-1',
          'flex',
          'items-center',
          'justify-center',
        )}
      >
        <div className={cn('text-white')}>{t('hint')}</div>
      </div>
    </>
  )
}
