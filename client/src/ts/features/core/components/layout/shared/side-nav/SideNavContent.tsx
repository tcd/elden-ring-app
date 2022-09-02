import { useSelector, useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"

import { SideNavItem } from "./SideNavItem"
import { sideNavItems } from "./links"

export const SideNavContent = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    const handleClick = (_) => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
    }

    const $items = sideNavItems.map((x) => <SideNavItem key={x.title} {...x} />)

    return (
        <Box
            component="ul"
            sx={LayoutSx.shared.sideNav.items}
            onClick={handleClick}
        >
            {$items}
        </Box>
    )
}
