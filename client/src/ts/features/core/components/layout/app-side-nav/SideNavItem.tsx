import { useDispatch } from "react-redux"
import { useNavigate, NavigateFunction, To } from "react-router-dom"
import { Box } from "@mui/material"

import type { HeaderIconId, PageName, PageTitle } from "@app/types"
import { HeaderIconIds } from "@app/types"
import { AppDispatch, Actions } from "@app/state"
import { getImageSrcManual } from "@app/util"
import { LayoutSx } from "@app/theme"
import { MuiImg } from "@app/shared"

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
        <Box component="li" sx={LayoutSx.shared.sideNav.item} onClick={handleClick}>
            <MuiImg
                sx={LayoutSx.shared.sideNav.itemImage}
                src={imgSrc}
                alt={props?.title}
            />
            <Box component="span" sx={LayoutSx.shared.sideNav.itemTitle}>
                {props.title}
            </Box>
        </Box>
    )
}
