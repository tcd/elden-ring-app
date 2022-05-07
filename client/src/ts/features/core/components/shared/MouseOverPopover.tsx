import { useState } from "react"
import {
    Typography,
    Box,
    Button,
    Popover,
    PopoverOrigin,
} from "@mui/material"

/**
 * This is the point on the anchor where the popover's anchorEl will attach to.
 * This is not used when the anchorReference is 'anchorPosition'.
 */
const anchorOrigin: PopoverOrigin = {
    vertical: "bottom",
    horizontal: "center",
}

/**
 * This is the point on the popover which will attach to the anchor's origin.
 */
const transformOrigin: PopoverOrigin = {
    vertical: "top",
    horizontal: "center",
}

export interface MouseOverPopoverProps {
    id: string
    popoverText: string
    children: JSX.Element | JSX.Element[] | never[]
}

/**
 * From the [MUI docs](https://mui.com/material-ui/react-popover/#mouse-over-interaction).
 */
export const MouseOverPopover = (props: MouseOverPopoverProps): JSX.Element => {

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <>
            <Box
                aria-owns={open ? props.id : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <>
                    {props?.children}
                </>
            </Box>
            <Popover
                id={props.id}
                sx={{
                    pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{props.popoverText}</Typography>
            </Popover>
        </>
    )
}

