import { Box } from "@mui/material"

import { ThemeVars } from "@app/theme"
import type { StatRowColor, StatColumnProps } from "./types"

const COLOR_MAP: Record<StatRowColor, string> = {
    default: undefined,
    red: ThemeVars.colors.red,
    blue: ThemeVars.colors.blue,
}

export const StatColumn = (props: StatColumnProps): JSX.Element => {

    const sx = {
        ...props.sx,
        color: COLOR_MAP[props?.color],
    }

    return (
        <Box component="span" sx={sx}>
            {props.value}
        </Box>
    )
}
