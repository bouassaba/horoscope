import Header from '@/components/header'
import { cn } from '@/lib/utils'

export default function ArticleSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className={cn('overflow-auto')}>
        <div className={cn('flex', 'justify-center', 'px-4', 'py-20', 'z-1')}>
          {children}
        </div>
      </div>
    </>
  )
}
