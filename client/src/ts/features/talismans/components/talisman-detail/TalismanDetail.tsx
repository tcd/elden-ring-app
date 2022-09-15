import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"

import { EmptyTalismanDetail } from "./EmptyTalismanDetail"
import { TalismanDetailContent } from "./TalismanDetailContent"

export const TalismanDetail = (_props: unknown): JSX.Element => {

    const talisman = useSelector(Selectors.Talismans.active)

    if (isBlank(talisman)) {
        return <EmptyTalismanDetail />
    }

    return <TalismanDetailContent talisman={talisman} />
}
