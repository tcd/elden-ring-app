import { isBlank } from "@app/util"
import { EquipmentState } from "../state"

export const handleLocationChange =  (state: EquipmentState, action): EquipmentState => {
    // @ts-ignore: next-line
    const pathname: string = action?.payload?.location?.pathname
    // @ts-ignore: next-line
    const hash: string = action?.payload?.location?.hash

    if (!pathname?.startsWith("/equipment")) {
        return state
    }
    if (!isBlank(hash)) {
        state.mobileTab = hash.replaceAll("#", "") as ("grid" | "detail" | "status")
    }
    return state
}
