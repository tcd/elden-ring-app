import {
    Typography,
    Button,
    PopoverOrigin,
} from "@mui/material"
import MuiHoverPopover from "material-ui-popup-state/HoverPopover"
import {
    usePopupState,
    bindHover,
    bindPopover,
} from "material-ui-popup-state/hooks"

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

export interface HoverPopoverProps {
    id: string
    popoverContent?: JSX.Element | JSX.Element[] | never[]
    children?: JSX.Element | JSX.Element[] | never[]
}

/**
 * Using [jcoreio/material-ui-popup-state](https://jcoreio.github.io/material-ui-popup-state/).
 */
export const HoverPopover = (props: HoverPopoverProps): JSX.Element => {
    const popupState = usePopupState({
        variant: "popover",
        popupId: props.id,
    })
    return (
        <div>
            <Button variant="contained" {...bindHover(popupState)}>
                Hover to open Popover
            </Button>
            <MuiHoverPopover
                {...bindPopover(popupState)}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
            >
                <Typography style={{ margin: 10 }}>
                    The content of the Popover.
                </Typography>
            </MuiHoverPopover>
        </div>
    )
}
