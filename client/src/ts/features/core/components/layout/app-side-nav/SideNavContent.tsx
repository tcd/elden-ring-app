import { useDispatch } from "react-redux"
import { useNavigate, NavigateFunction, To } from "react-router-dom"

import { HeaderIconId, HeaderIconIds, PageName, PageTitle } from "@app/types"
import { AppDispatch, Actions } from "@app/state"
import { getImageSrcManual } from "@app/util"

// =============================================================================
// SideNavContent
// =============================================================================

const sideNavItems: SideNavItemProps[] = [
    {
        pageName: "builder",
        title: "Builder",
        cloudflareId: "smithing",
        url: "/builder#grid",
    },
    {
        pageName: "equipment",
        title: "Equipment",
        cloudflareId: "equipment",
        url: "/equipment#grid",
    },
    {
        pageName: "level-up",
        title: "Level Up",
        cloudflareId: "level-up",
        url: "/level-up",
    },
    // {
    //     pageName: null,
    //     title: "Item Crafting",
    //     cloudflareId: "ui/title-icons/crafting",
    // },
    {
        pageName: "status",
        title: "Status",
        cloudflareId: "status",
        url: "/status",
    },
    {
        pageName: "about",
        title: "About",
        cloudflareId: "map",
        url: "/about",
    },
    {
        pageName: "settings",
        title: "Settings",
        cloudflareId: "system",
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
    title: PageTitle
    cloudflareId: HeaderIconId
    url?: To
    action?: any
    actionPayload?: any
}

export const SideNavItem = (props: SideNavItemProps): JSX.Element => {

    const dispatch: AppDispatch      = useDispatch()
    const navigate: NavigateFunction = useNavigate()

    const imgSrc = getImageSrcManual(HeaderIconIds[props.cloudflareId], "256")

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
