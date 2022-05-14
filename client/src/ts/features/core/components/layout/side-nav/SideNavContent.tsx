import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import {
    Divider,
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@mui/material"
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from "@mui/icons-material"

import { ILinkData } from "@types"
import { MdiIcon } from "@app/features/core/components"
import { AppDispatch, Actions, Selectors } from "@app/state"
import { SIDE_NAV_LINKS } from "./side-nav-links"

export const SideNavContent = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const pathname = useLocation()?.pathname

    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)
    const expandedSections = useSelector(Selectors.Core.expandedSections)

    // =========================================================================
    // Event Handler
    // =========================================================================

    const handleLinkClick = (linkData: ILinkData) => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
        if (linkData?.url) {
            navigate(linkData.url)
        }
    }

    const handleGroupClick = (linkData: ILinkData) => {
        dispatch(Actions.Core.toggleSection(linkData.title))
    }

    // =========================================================================
    // Rendering
    // =========================================================================

    const linkElements = []

    let i = 0
    for (const linkData of SIDE_NAV_LINKS) {
        i++
        if (linkData?.divider) {
            linkElements.push(<Divider key={i}/>)
            continue
        }
        if (linkData?.subtitle) {
            linkElements.push(<ListSubheader key={i}>{linkData.subtitle}</ListSubheader>)
            continue
        }
        if (linkData?.links?.length) {
            const open = expandedSections.includes(linkData.title)
            linkElements.push(
                <ListItemButton key={`${i}-parent`} onClick={() => handleGroupClick(linkData)}>
                    <ListItemIcon>
                        <MdiIcon path={linkData.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={linkData.title} />
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>,
            )
            linkElements.push(<NavItemCollapse linkData={linkData} parentKey={i}/>)
            continue
        }
        const { title, url, icon } = linkData
        const active = (url == pathname)
        linkElements.push(
            <ListItemButton
                onClick={() => handleLinkClick(linkData)}
                selected={active}
                key={i}
            >
                <ListItemIcon>
                    <MdiIcon path={icon}/>
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>,
        )
    }

    return (
        <List>
            {linkElements}
        </List>
    )
}

export interface NavItemProps {
    linkData: ILinkData
}

const NavItem_Link = ({ linkData }: NavItemProps): JSX.Element => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const pathname = useLocation()?.pathname
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    const { title, url, icon } = linkData
    const active = (url == pathname)

    const handleClick = () => {
        if (sideNavOpened) {
            dispatch(Actions.Core.closeSideNav())
        }
        if (linkData?.url) {
            navigate(linkData.url)
        }
    }

    return (
        <ListItemButton
            onClick={handleClick}
            selected={active}
        >
            <ListItemIcon>
                <MdiIcon path={icon}/>
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    )
}

export interface NavItemCollapseProps {
    linkData: ILinkData
    parentKey: any
}

const NavItemCollapse = ({ linkData, parentKey }: NavItemCollapseProps): JSX.Element => {

    const expandedSections = useSelector(Selectors.Core.expandedSections)
    const open = expandedSections.includes(linkData.title)

    const children = linkData.links.map((childData, index) => {
        return <NavItem_Link linkData={childData} key={`${parentKey}-collapse-child-${index}`}/>
    })

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {children}
            </List>
        </Collapse>
    )
}
