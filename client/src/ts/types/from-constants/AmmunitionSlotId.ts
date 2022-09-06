import { AmmunitionSlotIds } from "@app/constants"

type AmmunitionSlotIdsKey = keyof typeof AmmunitionSlotIds
export type AmmunitionSlotId = typeof AmmunitionSlotIds[AmmunitionSlotIdsKey];
