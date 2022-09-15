import { ArmorTypes } from "@app/constants"

type ArmorTypesKey = keyof typeof ArmorTypes
export type ArmorType = typeof ArmorTypes[ArmorTypesKey];
