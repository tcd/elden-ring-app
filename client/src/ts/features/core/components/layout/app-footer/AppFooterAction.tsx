import { useHotkeys } from "react-hotkeys-hook"
import { Box, Button } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { isBlank, LetterKey, LetterKeyUrls } from "@app/util"
import { ErButton, MuiImg } from "@app/shared"

export interface AppFooterActionProps {
    name: string
    shortcut?: LetterKey
    onClick: () => void
}

export const AppFooterAction = (props: AppFooterActionProps): JSX.Element => {

    if (!isBlank(props?.shortcut)) {
        return <AppFooterActionWithShortcut {...props} />
    }

    const handleClick = () => {
        props.onClick()
    }

    return (
        <ErButton onClick={handleClick}>
            {props.name}
        </ErButton>
    )
}

// -----------------------------------------------------------------------------

const AppFooterActionWithShortcut = (props: AppFooterActionProps): JSX.Element => {

    useHotkeys(props?.shortcut, () => props.onClick())

    return (
        <Button onClick={props.onClick} sx={LayoutSx.desktop.footer.action.root}>
            <MuiImg
                src={LetterKeyUrls[props.shortcut]}
                alt={props.shortcut}
                sx={LayoutSx.desktop.footer.action.image}
            />
            <Box component="span" sx={LayoutSx.desktop.footer.action.name}>
                :&nbsp;{props.name}
            </Box>
        </Button>
    )
}
