import { cn } from '@/lib/utils'
import { getScopedI18n } from '@/locales/server'

export default async function HomePage() {
  const t = await getScopedI18n('home')

  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      <h1>{t('title')}</h1>
      <p>{t('hint')}</p>
    </article>
  )
}
