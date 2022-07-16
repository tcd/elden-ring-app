import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { EmptyTalismanDetail, TalismanDetailContent } from "."

export const TalismanDetail = (_props: unknown): JSX.Element => {

    const talisman = useSelector(Selectors.Talismans.active)

    if (isBlank(talisman)) {
        return <EmptyTalismanDetail />
    } else {
        return <TalismanDetailContent talisman={talisman} />
    }
}
