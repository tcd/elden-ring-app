import { QuickItemSlotIds } from "@app/constants"

type QuickItemSlotIdsKey = keyof typeof QuickItemSlotIds
export type QuickItemSlotId = typeof QuickItemSlotIds[QuickItemSlotIdsKey]
