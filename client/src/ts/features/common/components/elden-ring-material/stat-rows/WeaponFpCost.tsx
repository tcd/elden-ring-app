import { Box } from "@mui/material"

import type { ComparisonColor } from "@app/types"
import { ComponentSx } from "@app/theme"
import { StatColumn } from "./StatColumn"

const sx = ComponentSx.WeaponFpCost

export interface WeaponFpCostProps {
    v1?: number | string
    v2?: number | string
    v3?: number | string
    c1?: ComparisonColor
    c2?: ComparisonColor
    c3?: ComparisonColor
}

export const WeaponFpCost = (props: WeaponFpCostProps): JSX.Element => {

    const {
        v1 = "-",
        v2 = "-",
        v3 = "-",
        c1 = "default",
        c2 = "default",
        c3 = "default",
    } = props

    return (
        <Box sx={sx.root}>
            <StatColumn sx={sx.col1} value={v1} color={c1} />
            <StatColumn sx={sx.col2} value={"("} />
            <StatColumn sx={sx.col3} value={v2} color={c2} />
            <StatColumn sx={sx.col4} value={v3} color={c3} />
            <StatColumn sx={sx.col5} value={")"} />
        </Box>
    )
}
