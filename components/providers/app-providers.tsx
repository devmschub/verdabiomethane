"use client"

import type { ReactNode } from "react"
import { LocaleProvider } from "@/i18n/locale-context"
import { LocaleDocumentMeta } from "@/components/locale-document-meta"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <LocaleDocumentMeta />
      {children}
    </LocaleProvider>
  )
}
