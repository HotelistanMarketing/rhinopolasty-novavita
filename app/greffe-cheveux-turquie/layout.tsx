import { ReactElement } from 'react'
import { I18nProviderClient } from '../../locales/client'

export default function LandingPageLayout({ children }: { children: ReactElement }) {
  return (
    <I18nProviderClient locale="fr">
      {children}
    </I18nProviderClient>
  )
} 