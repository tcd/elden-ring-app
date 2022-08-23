import { isBlank } from "@app/util"
import { BuilderState } from "../state"

export const handleLocationChange =  (state: BuilderState, action: any): BuilderState => {
    // @ts-ignore: next-line
    const pathname: string = action?.payload?.location?.pathname
    // @ts-ignore: next-line
    const hash: string = action?.payload?.location?.hash

    if (!(pathname.startsWith("/#") || pathname.startsWith("/builder"))) {
        return state
    }
    if (!isBlank(hash)) {
        state.mobileTab = hash.replaceAll("#", "") as ("level" | "equipment" | "status")
    }
    return state
}
