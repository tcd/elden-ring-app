import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"

import { SideNavItem } from "./SideNavItem"
import { sideNavItems } from "./links"

export const SideNavContent = (_props: unknown): JSX.Element => {
    const $items = sideNavItems.map((x) => <SideNavItem key={x.title} {...x} />)
    return (
        <Box component="ul" sx={LayoutSx.shared.sideNav.items}>
            {$items}
        </Box>
    )
}
