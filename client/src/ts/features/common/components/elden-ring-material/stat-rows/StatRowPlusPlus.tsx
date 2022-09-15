import { Box } from "@mui/material"

import { ErTooltip } from "@app/features/common"
import { ComponentSx } from "@app/theme"

import { StatColumn } from "./StatColumn"
import type { StatRowPlusPlusProps } from "./types"

const styles = ComponentSx.StatRow.plusPlus

const defaultProps: Partial<StatRowPlusPlusProps> = {
    sx: styles.row,
    divider: "/",
    no_parens: false,
    value_1_color: "default",
    divider_color: "default",
    value_2_color: "default",
    component: "li",
}

// =============================================================================

export const StatRowPlusPlus = (props: StatRowPlusPlusProps): JSX.Element => {

    props = { ...defaultProps, ...props, ...{ sx: { ...defaultProps.sx, ...(props?.sx ?? {}) } } }

    if (props?.description) {
        return (
            <ErTooltip id={`stat-row-${props.title}`} popoverContent={props.description}>
                <_StatRowPlusPlus {...props} />
            </ErTooltip>
        )
    }

    return <_StatRowPlusPlus {...props} />
}

// =============================================================================

const _StatRowPlusPlus = (props: StatRowPlusPlusProps): JSX.Element => {

    props = { ...defaultProps, ...props }

    return (
        <Box component={props.component} sx={props.sx}>
            <StatColumn sx={styles.col1} value={props.title}                               />
            <StatColumn sx={styles.col2} value={props.value_1} color={props.value_1_color} />
            <StatColumn sx={styles.col3} value={props.divider} color={props.divider_color} />
            <StatColumn sx={styles.col4} value={props.value_2} color={props.value_2_color} />
            <Box component="span" sx={styles.col5}>
                <Paren side="left" hide={props.no_parens} />
                <StatColumn sx={undefined} value={props.value_3} color={props.value_3_color} />
                <Paren side="right" hide={props.no_parens} />
            </Box>
        </Box>
    )
}

// =============================================================================

interface ParenProps {
    hide: boolean
    side: "left" | "right"
}

const Paren = ({ hide, side }: ParenProps): JSX.Element => {
    if (hide) { return null }
    return (
        <Box component="span" sx={styles.parens}>
            {side == "left" ? "(" : ")"}
        </Box>
    )
}
