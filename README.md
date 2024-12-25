# Horoscope

This is the most beautiful horoscope app that can ever be built in a couple of days!
I gave it my best, and I hope you like 😊

It's available live at: https://tryhoroscope.vercel.app

## Preface

When you open the app, you will be greeted by an immersive cosmic animation on the background, this sets the mood for horoscope predictions that you are about to read.

To start, choose a zodiac sign from the left sidebar, the sidebar can be collapsed or expanded by clicking the rectangular button near the logo.

Once you choose a zodiac sign, a default page for the sign will be displayed. For example, for scorpio the URL will be [/article/scorpio](https://tryhoroscope.vercel.app/article/scorpio), this page automatically picks the latest prediction date available for that sign.

 To change the date, click the calendar button on the header, then choose a date, the URL will be something like: [/article/scorpio/2024-12-18](https://tryhoroscope.vercel.app/article/scorpio/2024-12-18), if the predictions for that date are not available, you will be redirected to [/article/not-found](https://tryhoroscope.vercel.app/article/not-found) page that tells you: *"The stars kept this a secret."* :)

By default, the app will detect the language of your browser, but you can change that by clicking the language dropdown on the header, currently English and German are supported.

The app comes with dark mode support, which can be toggled by clicking the moon icon on the header, a fallback to the system theme is also supported.

Notice that when you load an article page, the breadcrumb will show a skeleton animation to give you the impression that it's loading.

And one more thing 😉 the app is fully mobile! 📱

## Full Featured CMS!

The app comes with a fully featured CMS, [Sanity](https://www.sanity.io/), where you can create, edit, and delete articles, and manage zodiac signs.

One of the goals of building this app was to ship production quality in a couple of days!

Just navigate to [/studio](https://tryhoroscope.vercel.app/studio) and you are ready to start. If you would like to try it, just let me know and I wlll grant you access.

## Technical Capabiliiies

- URLs are SEO friendly, memorizable and simple for sharing with friends and family.
- Article pages are rendered server-side with Next.js, this greatly improves [TTFB](https://web.dev/articles/ttfb) and SEO. 

## Tech Stack

- [shadcn/ui](https://ui.shadcn.com/): one of the best UI libraries out there, based on [Radix](https://www.radix-ui.com/).
- [Sanity](https://www.sanity.io/): modern and powerful CMS.
- [SWR](https://swr.vercel.app/): great for loading client data using React hooks, keeps the code clean and handles caching.
- [GraphQL](https://graphql.org/): CMS data is loaded by the Next.js API routes using GraphQL.
- [Bun](https://bun.sh/): new JavaScript & TypeScript runtime, written from scratch for modern frontend workflows.

## CI/CD

When a pull request is opened against the `main` branch a GitHub action will build and lint the TypeScript code.

The app follows GitOps, meaning once a commit or a PR is merged to the `main` branch, Vercel will automatically deploy the changes to: https://tryhoroscope.vercel.app

The commits follow [Conventional Commits](https://www.conventionalcommits.org) conventions,  for consistency.

## Getting Started

Install dependencies:

```shell
bun i
```

Run for development:

```shell
bun run dev
```

## Finally

I kept my commits as they are, so you can see how I went through the progression of building the app organically.