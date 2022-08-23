import { RootState } from "@app/state"

import { selectBuilderSlice } from "./select-slice"

export const selectMobileTab = (rootState: RootState) => selectBuilderSlice(rootState)?.mobileTab
