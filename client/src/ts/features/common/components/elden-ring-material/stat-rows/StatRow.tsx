import { Box } from "@mui/material"

import { ErTooltip } from "@app/features/common"
import { ComponentSx } from "@app/theme"

import type { StatRowProps } from "./types"
import { StatColumn } from "./StatColumn"

const styles = ComponentSx.StatRow.basic

const defaultProps: Partial<StatRowProps> = {
    sx: styles.row,
    color: "default",
    component: "li",
}

// =============================================================================

export const StatRow = (props: StatRowProps): JSX.Element => {

    props = { ...defaultProps, ...props, ...{ sx: { ...defaultProps.sx, ...(props?.sx ?? {}) } } }

    if (props?.description) {
        return (
            <ErTooltip
                id={`stat-row-${props.title}`}
                popoverContent={props.description}
            >
                <_StatRow {...props}/>
            </ErTooltip>
        )
    }

    return <_StatRow {...props}/>
}

// =============================================================================

const _StatRow = (props: StatRowProps): JSX.Element => {
    return (
        <Box component={props.component} sx={props.sx}>
            <StatColumn sx={styles.col1} value={props.title}                     />
            <StatColumn sx={styles.col2} value={props.value} color={props.color} />
        </Box>
    )
}
