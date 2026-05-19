"use client"

import { useEffect } from "react"
import { useLocale } from "@/i18n/locale-context"

export function LocaleDocumentMeta() {
  const { t } = useLocale()

  useEffect(() => {
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", t.meta.description)
  }, [t])

  return null
}
