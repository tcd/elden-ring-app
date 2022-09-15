import { SpellSlotIds } from "@app/constants"

type SpellSlotIdsKey = keyof typeof SpellSlotIds
export type SpellSlotId = typeof SpellSlotIds[SpellSlotIdsKey]
