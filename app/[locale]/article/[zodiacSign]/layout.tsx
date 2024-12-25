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

export default function ArticleByZodiacSignLayout({ params, children }: Props) {
  return (
    <>
      <Header zodiacSign={params.zodiacSign} />
      <div className={cn('overflow-auto')}>
        <div className={cn('flex', 'justify-center', 'px-4', 'py-20', 'z-1')}>
          {children}
        </div>
      </div>
    </>
  )
}
