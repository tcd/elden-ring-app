import { useHotkeys } from "react-hotkeys-hook"
import { Box, Button, SxProps } from "@mui/material"

import { isBlank, LetterKey } from "@app/util"
import { LetterKeyUrls } from "@app/util"
import { ErButton, AlignBottom } from "@app/shared"

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
        <Button onClick={props.onClick} sx={buttonSx}>
            <Box
                component="img"
                src={LetterKeyUrls[props.shortcut]}
                alt={props.shortcut}
                sx={hotkeyImgSx}
            />
            <Box component="span" sx={nameSx}>
                :&nbsp;{props.name}
            </Box>
        </Button>
    )
}

// =============================================================================

const buttonSx: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
}

const hotkeyImgSx: SxProps = {
    width: "20px",
}

const nameSx: SxProps = {
    ml: 1,
    padding: 0,
    verticalAlign: "bottom",
    color: "#d8d8d8",
    "&:hover": {
        color: "inherit",
    },
}
