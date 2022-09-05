import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { MuiImg } from "@app/features/common"

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
                <MuiImg
                    src={imageUrl}
                    alt={title}
                    onClick={handleIconClick}
                    sx={LayoutSx.shared.header.icon}
                />
                <Box component="h1" sx={LayoutSx.shared.header.title}>
                    {title}
                </Box>
            </Box>
        </Box>
    )
}
