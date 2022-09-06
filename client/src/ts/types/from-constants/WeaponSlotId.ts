import { WeaponSlotIds } from "@app/constants"

type WeaponSlotIdsKey = keyof typeof WeaponSlotIds

export type WeaponSlotId = typeof WeaponSlotIds[WeaponSlotIdsKey];
