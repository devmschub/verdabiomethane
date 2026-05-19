"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { LOCALE_OPTIONS } from "@/i18n/types"
import { useLocale } from "@/i18n/locale-context"
import { cn } from "@/lib/utils"
import { FlagIcon } from "./flag-icon"
import type { Locale } from "@/i18n/types"
import type { NavSurface } from "@/lib/read-nav-theme"

interface LanguageSwitcherProps {
  surface: NavSurface
}

const TRIGGER_STYLES: Record<NavSurface, string> = {
  transparent:
    "border-card/25 bg-card/10 text-card backdrop-blur-md hover:bg-card/15",
  light:
    "border-foreground/15 bg-foreground/[0.04] text-foreground hover:bg-foreground/[0.07]",
  dark: "border-card/25 bg-card/10 text-card backdrop-blur-md hover:bg-card/15",
}

const DROPDOWN_STYLES: Record<NavSurface, string> = {
  transparent:
    "border-card/20 bg-card/10 text-card shadow-black/25 backdrop-blur-xl",
  light: "border-foreground/10 bg-background/95 text-foreground shadow-foreground/5",
  dark: "border-card/15 bg-foreground/90 text-card shadow-black/20 backdrop-blur-xl",
}

const SELECTED_ITEM_STYLES: Record<
  NavSurface,
  { row: string; title: string; region: string }
> = {
  transparent: {
    row: "bg-card/20",
    title: "text-card",
    region: "text-card/65",
  },
  light: {
    row: "bg-foreground/[0.08]",
    title: "text-foreground",
    region: "text-muted-foreground",
  },
  dark: {
    row: "bg-card/15",
    title: "text-card",
    region: "text-card/65",
  },
}

const IDLE_TEXT_STYLES: Record<NavSurface, { title: string; region: string }> = {
  transparent: { title: "text-card/90", region: "text-card/55" },
  light: { title: "text-foreground", region: "text-foreground/50" },
  dark: { title: "text-card/90", region: "text-card/55" },
}

export function LanguageSwitcher({ surface }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLocale()
  const selectedStyles = SELECTED_ITEM_STYLES[surface]
  const idleText = IDLE_TEXT_STYLES[surface]
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  const active = LOCALE_OPTIONS.find((o) => o.locale === locale) ?? LOCALE_OPTIONS[0]

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    const onMouseDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }

    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open, close])

  const selectLocale = (next: Locale) => {
    setLocale(next)
    close()
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={t.languageSwitcher.ariaLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors duration-300",
          TRIGGER_STYLES[surface],
        )}
      >
        <FlagIcon src={active.flag} alt={active.title} />
        <span className="text-xs font-semibold tracking-wide">{active.code}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-70 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t.languageSwitcher.listboxLabel}
          className={cn(
            "absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[13.5rem] overflow-hidden rounded-2xl border p-1.5 shadow-lg",
            DROPDOWN_STYLES[surface],
          )}
        >
          {LOCALE_OPTIONS.map((option) => {
            const selected = option.locale === locale
            return (
              <li key={option.locale} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => selectLocale(option.locale)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                    selected
                      ? selectedStyles.row
                      : surface === "light"
                        ? "hover:bg-foreground/5"
                        : "hover:bg-card/8",
                  )}
                >
                  <FlagIcon src={option.flag} alt={option.title} />
                  <span className="flex flex-col gap-0.5">
                    <span
                      className={cn(
                        "text-sm font-bold leading-tight",
                        selected ? selectedStyles.title : idleText.title,
                      )}
                    >
                      {option.title}
                    </span>
                    <span
                      className={cn(
                        "text-xs leading-tight",
                        selected ? selectedStyles.region : idleText.region,
                      )}
                    >
                      {option.region}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
