import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"

import { ILinkData } from "@types"
import { MdiIcon } from "@app/features/core/components"
import { AppDispatch, Actions, Selectors } from "@app/state"
import { SIDE_NAV_LINKS } from "./side-nav-links"

export const MobileContent = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const pathname = useLocation()?.pathname
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

    const handleMenuItemClick = (route: ILinkData) => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
        if (route) {
            navigate(route.url)
        }
    }

    // =========================================================================
    // Rendering
    // =========================================================================

    const listItems = SIDE_NAV_LINKS.map((route, index) => {
        const { title, url, icon } = route
        const active = (url == pathname)
        if (route?.divider) {
            return <Divider key={index}/>
        }
        if (route?.subtitle) {
            return (
                <ListSubheader key={index}>
                    {route.subtitle}
                </ListSubheader>
            )
        }
        return (
            <ListItemButton
                key={index}
                onClick={() => handleMenuItemClick(route)}
                selected={active}
            >
                <ListItemIcon>
                    <MdiIcon path={icon}/>
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        )
    })

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "#D6CDB8" }}
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
                    <List>
                        {listItems}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
