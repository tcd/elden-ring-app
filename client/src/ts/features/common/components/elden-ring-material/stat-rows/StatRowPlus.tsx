import { Box } from "@mui/material"

import { MouseOverPopover } from "@app/shared"
import { ComponentSx } from "@app/theme"

import { StatColumn } from "./StatColumn"
import type { StatRowPlusProps } from "./types"

const styles = ComponentSx.StatRow.plus

const defaultProps: Partial<StatRowPlusProps> = {
    sx: styles.row,
    divider: "/",
    divider_color: "default",
    value_1_color: "default",
    value_2_color: "default",
    component: "li",
}

// =============================================================================

export const StatRowPlus = (props: StatRowPlusProps): JSX.Element => {

    props = { ...defaultProps, ...props, ...{ sx: { ...defaultProps.sx, ...(props?.sx ?? {}) } } }

    if (props?.description) {
        return (
            <MouseOverPopover id={`stat-row-${props.title}`} popoverContent={props.description}>
                <_StatRowPlus {...props} />
            </MouseOverPopover>
        )
    }

    return <_StatRowPlus {...props} />
}

// =============================================================================

const _StatRowPlus = (props: StatRowPlusProps): JSX.Element => {
    props = { ...defaultProps, ...props }

    return (
        <Box component={props.component} sx={props.sx}>
            <StatColumn sx={styles.col1} value={props.title}                               />
            <StatColumn sx={styles.col2} value={props.value_1} color={props.value_1_color} />
            <StatColumn sx={styles.col3} value={props.divider} color={props.divider_color} />
            <StatColumn sx={styles.col4} value={props.value_2} color={props.value_2_color} />
        </Box>
    )
}
