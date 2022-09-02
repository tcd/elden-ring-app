import { useSelector } from "react-redux"

import { PageName } from "@app/types"
import { Selectors } from "@app/state"

import {
    ArmorFooter,
    AshesOfWarFooter,
    BuilderFooter,
    EquipmentFooter,
    NoFooter,
    TalismanFooter,
    WeaponFooter,
} from "./footers"

const FOOTERS_BY_PAGE: Record<PageName, JSX.Element> = {
    "about":          <NoFooter />,
    "ammunition":     <NoFooter />,
    "armor":          <ArmorFooter />,
    "ashes-of-war":   <AshesOfWarFooter />,
    "builder":        <BuilderFooter />,
    "equipment":      <EquipmentFooter />,
    "level-up":       <NoFooter />,
    "not-found":      <NoFooter />,
    "quick-items":    <NoFooter />,
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
