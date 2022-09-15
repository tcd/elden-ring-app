import { IconNames } from "@app/constants"

export type IconNamesKey = keyof typeof IconNames
export type IconName = typeof IconNames[IconNamesKey];
