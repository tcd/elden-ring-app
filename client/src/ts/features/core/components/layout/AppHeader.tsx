import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { MuiImg } from "@app/shared"

export const AppHeader = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const title = useSelector(Selectors.Core.title)
    const imageUrl = useSelector(Selectors.Core.titleIconUrl)
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    const handleIconClick = (_event) => {
        if (!sideNavOpened) {
            dispatch(Actions.Core.openSideNav())
        }
    }

    return (
        <Box component="header" sx={LayoutSx.desktop.header.root}>
            <Box sx={LayoutSx.desktop.header.content}>
                <MuiImg
                    src={imageUrl}
                    alt={title}
                    sx={LayoutSx.desktop.header.icon}
                    onClick={handleIconClick}
                />
                <Box component="h1" sx={LayoutSx.desktop.header.title}>
                    {title}
                </Box>
            </Box>
        </Box>
    )
}
