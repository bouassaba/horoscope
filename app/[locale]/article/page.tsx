import Header from '@/components/header'
import { cn } from '@/lib/utils'
import { getScopedI18n } from '@/locales/server'

export default async function HomePage() {
  const t = await getScopedI18n('home')

  return (
    <>
      <Header />
      <div className={cn('overflow-auto')}>
        <div className={cn('flex', 'justify-center', 'px-4', 'py-20', 'z-1')}>
          <article className={cn('prose', 'dark:prose-invert')}>
            <h1>{t('title')}</h1>
            <p>{t('hint')}</p>
          </article>
        </div>
      </div>
    </>
  )
}
