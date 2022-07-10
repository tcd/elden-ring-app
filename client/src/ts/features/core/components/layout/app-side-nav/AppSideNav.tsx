import { useSelector, useDispatch } from "react-redux"
import { Drawer } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { SideNavContent } from "./SideNavContent"

export const AppSideNav = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    const handleMenuClose = (_event) => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
    }

    return (
        <Drawer
            anchor="left"
            open={sideNavOpened}
            onClose={handleMenuClose}
            BackdropProps={{
                invisible: true,
                id: "er__sideNav__backdrop",
            }}
            PaperProps={{
                id: "er__sideNav",
                elevation: 0,
            }}
        >
            <SideNavContent />
        </Drawer>
    )
}

