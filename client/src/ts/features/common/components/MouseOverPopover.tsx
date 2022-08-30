import { useState } from "react"
import {
    Box,
    Popover,
    PopoverOrigin,
} from "@mui/material"

import { EPopoverContent } from "@app/shared"

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
    key?: any
    popoverContent: string | JSX.Element | JSX.Element[] | never[]
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

    if (!props.popoverContent) {
        return (
            <>
                {props?.children}
            </>
        )
    }

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
                <EPopoverContent>
                    <>
                        {props.popoverContent}
                    </>
                </EPopoverContent>
            </Popover>
        </>
    )
}

