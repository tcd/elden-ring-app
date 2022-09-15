import { isBlank } from "@app/util"

import type { SpellsState } from "./state"

export const noSpellsSelected = (state: SpellsState): boolean => {
    return isBlank(state.slots)
}
