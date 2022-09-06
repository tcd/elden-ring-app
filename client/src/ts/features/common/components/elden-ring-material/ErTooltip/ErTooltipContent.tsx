import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface EPopoverContentProps {
    content?: string
    children?: string | JSX.Element | JSX.Element[] | never[]
}

export const ErTooltipContent = (props: EPopoverContentProps): JSX.Element => {
    return (
        <Box sx={ComponentSx.ErTooltip.root}>
            {/* FIXME: this className isn't referenced anywhere; can probably be removed */}
            <Box className="er__popover__content">
                <>{props?.children}</>
            </Box>
        </Box>
    )
}
