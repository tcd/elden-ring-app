import { AmmunitionTypes } from "@app/constants"

type AmmunitionTypesKey = keyof typeof AmmunitionTypes
export type AmmunitionType = typeof AmmunitionTypes[AmmunitionTypesKey];
