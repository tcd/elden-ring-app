import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import { LayoutSx, cssUrl } from "@app/theme"
import { Actions, Selectors } from "@app/state"

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
        <Box component="header" sx={LayoutSx.shared.header.root}>
            <Box sx={LayoutSx.shared.header.background} />
            <Box sx={LayoutSx.shared.header.content}>
                <Box
                    onClick={handleIconClick}
                    sx={{ ...LayoutSx.shared.header.icon, backgroundImage: cssUrl(imageUrl) }}
                />
                <Box component="h1" sx={LayoutSx.shared.header.title}>
                    {title}
                </Box>
            </Box>
        </Box>
    )
}
