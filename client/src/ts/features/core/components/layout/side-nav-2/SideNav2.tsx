import { useSelector, useDispatch } from "react-redux"
import {
    Box,
    Drawer,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { getImageSrcManual } from "@app/util"

export const SideNav2 = (_props: unknown): JSX.Element => {

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
            BackdropProps={{ invisible: true }}
            PaperProps={{
                id: "er__sideNav",
                elevation: 0,
            }}
        >
            <SideNavContent />
        </Drawer>
    )
}

export interface SideNavItemProps {
    title: string
    cloudflareId: string
}

export const SideNavItem = (props: SideNavItemProps): JSX.Element => {
    const imgSrc = getImageSrcManual(props.cloudflareId, "256")
    return (
        <li className="er__sideNavItem">
            <img className="er__sideNavItemImage" src={imgSrc} />
            <span className="er__sideNavItemTitle">
                {props.title}
            </span>
        </li>
    )
}

const sideNavItems: SideNavItemProps[] = [
    { title: "Equipment",     cloudflareId: "ui/title-icons/equipment" },
    { title: "Item Crafting", cloudflareId: "ui/title-icons/crafting" },
    { title: "Status",        cloudflareId: "ui/title-icons/status" },
    { title: "System",        cloudflareId: "ui/title-icons/system" },
]

const SideNavContent = (_props: unknown): JSX.Element => {
    const items = sideNavItems.map((x) => <SideNavItem key={x.title} {...x} />)
    return (
        <ul id="er__sideNavItems">
            {items}
        </ul>
    )
}
