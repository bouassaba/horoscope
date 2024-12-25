import { fetchBySlug } from '@/client/zodiac-sign'
import Header from '@/components/header'
import { cn } from '@/lib/utils'

type Props = Readonly<{
  params: Params
  children: React.ReactNode
}>

type Params = {
  zodiacSign: string
  locale: string
}

export default async function ArticleByZodiacSignLayout({
  params,
  children,
}: Props) {
  const zodiacSign = await fetchBySlug({
    slug: params.zodiacSign,
    language: params.locale,
  })

  return (
    <>
      <Header zodiacSign={zodiacSign} />
      <div className={cn('overflow-auto')}>
        <div className={cn('flex', 'justify-center', 'px-4', 'py-20', 'z-1')}>
          {children}
        </div>
      </div>
    </>
  )
}
