import type { Locale } from "./types"
import { ptBR } from "./messages/pt-BR"
import { enUS } from "./messages/en-US"

export type { Messages } from "./messages/types"
export type { Locale } from "./types"
export {
  LOCALES,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALE_OPTIONS,
  HERO_SECTION_ID,
} from "./types"

export const messages = {
  "pt-BR": ptBR,
  "en-US": enUS,
} satisfies Record<Locale, typeof ptBR>
