import { useSelector, useDispatch } from "react-redux"
import { useNavigate, NavigateFunction, To } from "react-router-dom"
import { Box } from "@mui/material"

import { PageName } from "@app/types"
import { AppDispatch, Actions, Selectors } from "@app/state"
import { getImageSrcManual } from "@app/util"

// =============================================================================
// SideNavContent
// =============================================================================

const sideNavItems: SideNavItemProps[] = [
    {
        pageName: "equipment",
        title: "Equipment",
        cloudflareId: "ui/title-icons/equipment",
        url: "/",
    },
    // {
    //     pageName: null,
    //     title: "Item Crafting",
    //     cloudflareId: "ui/title-icons/crafting",
    // },
    {
        pageName: "status",
        title: "Status",
        cloudflareId: "ui/title-icons/status",
        url: "/status",
    },
    {
        pageName: "settings",
        title: "Settings",
        cloudflareId: "ui/title-icons/system",
        url: "/settings",
    },
]

export const SideNavContent = (_props: unknown): JSX.Element => {
    const items = sideNavItems.map((x) => <SideNavItem key={x.title} {...x} />)
    return (
        <ul id="er__sideNavItems">
            {items}
        </ul>
    )
}

// =============================================================================
// SideNavItem
// =============================================================================

export interface SideNavItemProps {
    pageName: PageName
    title: string
    cloudflareId: string
    url?: To
    action?: any
    actionPayload?: any
}

export const SideNavItem = (props: SideNavItemProps): JSX.Element => {
    const dispatch: AppDispatch      = useDispatch()
    const navigate: NavigateFunction = useNavigate()

    const imgSrc = getImageSrcManual(props.cloudflareId, "256")

    const handleClick = () => {
        if (props?.action) {
            if (props?.actionPayload) {
                dispatch(props.action(props.actionPayload))
            } else {
                dispatch(props.action())
            }
        }
        if (props?.url) {
            dispatch(Actions.Core.setPageName(props.pageName))
            navigate(props.url)
            dispatch(Actions.Core.closeSideNav())
        }
    }

    return (
        <li className="er__sideNavItem" onClick={handleClick}>
            <img className="er__sideNavItemImage" src={imgSrc} />
            <span className="er__sideNavItemTitle">
                {props.title}
            </span>
        </li>
    )
}
