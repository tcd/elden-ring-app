import { useSelector, useDispatch } from "react-redux"
import { Drawer } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { LayoutSx } from "@app/theme"

import { SideNavContent } from "./SideNavContent"

export const AppSideNav = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    const handleMenuClose = (_event) => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
    }

    const handleBackdropClick = (_event) => {
        // alert("CLICK!")
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
    }

    return (
        <Drawer
            anchor="left"
            open={sideNavOpened}
            onClose={handleMenuClose}
            transitionDuration={{
                enter: 350,
                exit: 0,
            }}
            BackdropProps={{
                invisible: true,
                sx: LayoutSx.shared.sideNav.overlay,
                onClick: handleBackdropClick,
                // onTouchStart: handleBackdropClick,
            }}
            PaperProps={{
                elevation: 0,
                sx: LayoutSx.shared.sideNav.root,
            }}
        >
            <SideNavContent />
        </Drawer>
    )
}

