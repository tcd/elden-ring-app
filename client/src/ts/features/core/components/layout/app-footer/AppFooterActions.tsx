import { useSelector } from "react-redux"

import { PageName } from "@app/types"
import { Selectors } from "@app/state"
import {
    ArmorFooter,
    AshesOfWarFooter,
    EquipmentFooter,
    NoFooter,
    TalismanFooter,
    WeaponFooter,
} from "./footers"

const FOOTERS_BY_PAGE: Record<PageName, JSX.Element> = {
    "ashes-of-war":   <AshesOfWarFooter />,
    "armor":          <ArmorFooter />,
    "equipment":      <EquipmentFooter />,
    "not-found":      <NoFooter />,
    "settings":       <NoFooter />,
    "spell":          <NoFooter />,
    "starting-class": <NoFooter />,
    "status":         <NoFooter />,
    "talisman":       <TalismanFooter />,
    "weapon":         <WeaponFooter />,
}

export const AppFooterActions = (_props: unknown): JSX.Element => {

    const pageName = useSelector(Selectors.Core.pageName)

    const footerForPage = FOOTERS_BY_PAGE[pageName] ?? <NoFooter />

    return (
        <>
            {footerForPage}
        </>
    )
}
