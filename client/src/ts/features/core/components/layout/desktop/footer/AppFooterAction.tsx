import { useHotkeys } from "react-hotkeys-hook"
import { Box, Button } from "@mui/material"

import { LayoutSx } from "@app/theme"
import { KeyboardKey, KeyboardKeyUrls } from "@app/util"
import { MuiImg } from "@app/features/common"

export interface AppFooterActionProps {
    name: string
    shortcut: KeyboardKey
    onClick: () => void
}

export const AppFooterAction = (props: AppFooterActionProps): JSX.Element => {

    useHotkeys(props?.shortcut, () => props.onClick())

    return (
        <Button
            onClick={props.onClick}
            sx={LayoutSx.desktop.footer.action.root}
        >
            <MuiImg
                src={KeyboardKeyUrls[props.shortcut]}
                alt={props.shortcut}
                sx={LayoutSx.desktop.footer.action.image}
            />
            <Box component="span" sx={LayoutSx.desktop.footer.action.name}>
                <Segment text=":" />
                <Segment text={props.name} />
            </Box>
        </Button>
    )
}

export const Segment = ({ text }: { text: string }): JSX.Element => {
    return (
        <Box
            component="span"
            sx={LayoutSx.desktop.footer.action.nameSegment}
        >
            {text}
        </Box>
    )
}
