import { TalismanSlotIds } from "@app/constants"

type TalismanSlotIdsKey = keyof typeof TalismanSlotIds
export type TalismanSlotId = typeof TalismanSlotIds[TalismanSlotIdsKey]
