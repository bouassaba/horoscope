export type Language = {
  id: string
  name: string
  isDefault?: boolean
}

const languages: Language[] = [
  { id: 'en', name: 'English', isDefault: true },
  { id: 'de', name: 'Deutsch' },
]

export default languages
