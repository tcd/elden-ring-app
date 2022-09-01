import type { SxProps } from "@mui/material"
import { Box } from "@mui/material"

import type { ComparisonColor } from "@app/types"
import { StatColumn } from "./StatColumn"

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
        <Box>
            <StatColumn sx={col1} value={v1}  color={c1} />
            <StatColumn sx={col2} value={"("}            />
            <StatColumn sx={col3} value={v2}  color={c2} />
            <StatColumn sx={col4} value={v3}  color={c3} />
            <StatColumn sx={col5} value={")"}            />
        </Box>
    )
}

// =============================================================================
// Styles
// =============================================================================


/** base */
const col1: SxProps = {

}

/** opening parenthesis */
const col2: SxProps = {

}

/** light */
const col3: SxProps = {

}

/** heavy/charge/chain/tick */
const col4: SxProps = {

}

/** closing parenthesis */
const col5: SxProps = {

}
