import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { forwardRef } from 'react'
import cx from 'clsx'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Horoscope',
  description: 'A look into the future.',
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          'h-full',
          'flex',
          'flex-col',
          geistSans.variable,
          geistMono.variable,
          'antialiased',
        )}
      >
        <nav className={cx('p-4')}>
          <div className={cx('container', 'mx-auto')}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={cx(
                        'grid',
                        'gap-3',
                        'p-6',
                        'md:w-[400px]',
                        'lg:w-[500px]',
                        'lg:grid-cols-[.75fr_1fr]',
                      )}
                    >
                      <li className={cx('row-span-3')}>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cx(
                              'flex',
                              'h-full',
                              'w-full',
                              'select-none',
                              'flex-col',
                              'justify-end',
                              'rounded-md',
                              'bg-gradient-to-b',
                              'from-muted/50',
                              'to-muted',
                              'p-6',
                              'no-underline',
                              'outline-none',
                              'focus:shadow-md',
                            )}
                            href="/"
                          >
                            <div
                              className={cx(
                                'mb-2',
                                'mt-4',
                                'text-lg',
                                'font-medium',
                              )}
                            >
                              shadcn/ui
                            </div>
                            <p
                              className={cx(
                                'text-sm',
                                'leading-tight',
                                'text-muted-foreground',
                              )}
                            >
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={cx(
                        'grid',
                        'w-[400px]',
                        'gap-3',
                        'p-4',
                        'md:w-[500px]',
                        'md:grid-cols-2',
                        'lg:w-[600px]',
                      )}
                    >
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
        <main
          className={cx(
            'flex-grow',
            'container',
            'mx-auto',
            'px-4',
            'py-6',
            'overflow-y-auto',
          )}
        >
          {children}
        </main>
        <footer
          className={cx(
            'h-32',
            'p-4',
            'bg-gray-900',
            'text-white',
            'flex',
            'items-center',
            'justify-center',
          )}
        >
          <div
            className={cx(
              'h-full',
              'flex',
              'flex-col',
              'gap-2',
              'container',
              'mx-auto',
            )}
          >
            <div className={cx('grow')}></div>
            <p>Copyright © 2025 Hosorcope.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cx(
            'block',
            'select-none',
            'space-y-1',
            'rounded-md',
            'p-3',
            'leading-none',
            'no-underline',
            'outline-none',
            'transition-colors',
            'hover:bg-accent',
            'hover:text-accent-foreground',
            'focus:bg-accent',
            'focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className={cx('text-sm', 'font-medium', 'leading-none')}>
            {title}
          </div>
          <p
            className={cx(
              'line-clamp-2',
              'text-sm',
              'leading-snug',
              'text-muted-foreground',
            )}
          >
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
