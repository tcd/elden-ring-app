import { useState } from "react"
import {
    Box,
    Popover,
    PopoverOrigin,
    PopoverProps,
} from "@mui/material"

import { ErTooltipContent } from "./ErTooltipContent"

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

export interface ErTooltipProps {
    id: string
    popoverContent: React.ReactNode
    children: React.ReactNode
}

/**
 * From the [MUI docs](https://mui.com/material-ui/react-popover/#mouse-over-interaction).
 */
export const ErTooltip = (props: ErTooltipProps): JSX.Element => {

    const {
        id = undefined,
        popoverContent = undefined,
        children = undefined,
    } = props

    const [anchorEl, setAnchorEl] = useState<HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handlePopoverOpen  = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event?.currentTarget) }
    const handlePopoverClose = ()                                     => { setAnchorEl(null)                 }

    if (!popoverContent) {
        return <>{children && children}</>
    }

    const popoverProps: PopoverProps = {
        id: id,
        sx: {
            pointerEvents: "none",
        },
        open: open,
        anchorEl: anchorEl,
        anchorOrigin: anchorOrigin,
        transformOrigin: transformOrigin,
        onClose: handlePopoverClose,
        disableRestoreFocus: true,
    }

    return (
        <>

            <Box
                aria-owns={open ? props.id : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children && children}
            </Box>

            <Popover {...popoverProps}>
                <ErTooltipContent>
                    <>{popoverContent}</>
                </ErTooltipContent>
            </Popover>

        </>
    )
}

