import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to the default locale (English) with the language picker visible
  redirect('/en')
} 