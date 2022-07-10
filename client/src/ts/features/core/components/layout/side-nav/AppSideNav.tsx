import { useSelector, useDispatch } from "react-redux"

import {
    Box,
    Drawer,
    IconButton,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import { COLORS } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { SideNavContent } from "./SideNavContent"

export const AppSideNav = () => {

    const dispatch = useDispatch()
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    // =========================================================================
    // Event Handlers
    // =========================================================================

    const handleIconClick = (_event) => {
        if (!sideNavOpened) {
            dispatch(Actions.Core.openSideNav())
        }
    }

    const handleMenuClose = (_event) => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
    }

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: COLORS.white }}
                onClick={handleIconClick}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={sideNavOpened}
                onClose={handleMenuClose}
            >
                <Box sx={{ width: 250 }} role="presentation">
                    <SideNavContent />
                </Box>
            </Drawer>
        </>
    )
}
