import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { PageName } from "@app/types"
import { Selectors } from "@app/state"
import { LayoutSx } from "@app/theme"

import {
    AboutFooter,
    ArmorFooter,
    BuilderFooter,
    EquipmentFooter,
    NoFooter,
    TalismanFooter,
    WeaponFooter,
} from "./footers"

const FOOTERS_BY_PAGE: Record<PageName, JSX.Element> = {
    "about":          <AboutFooter />,
    "ammunition":     <NoFooter />,
    "armor":          <ArmorFooter />,
    "builder":        <BuilderFooter />,
    "ashes-of-war":   <NoFooter />,
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

export const MobileFooter = (_props: unknown): JSX.Element => {

    const pageName = useSelector(Selectors.Core.pageName)

    const footerForPage = FOOTERS_BY_PAGE[pageName] ?? <NoFooter />

    return (
        <Box component="footer" sx={LayoutSx.mobile.footer}>
            {footerForPage}
        </Box>
    )
}
