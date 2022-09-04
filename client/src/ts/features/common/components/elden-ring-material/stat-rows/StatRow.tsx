import { Box } from "@mui/material"

import { MouseOverPopover } from "@app/shared"
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
            <MouseOverPopover
                id={`stat-row-${props.title}`}
                popoverContent={props.description}
            >
                <_StatRow {...props}/>
            </MouseOverPopover>
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
