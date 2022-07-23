import { ElementType } from "react"
import { Box } from "@mui/material"

import { MouseOverPopover } from "@app/shared"
import { StatRowColor } from "."

export interface StatRowProps {
    title: string
    value: any
    color?: StatRowColor
    description?: string
    component?: ElementType
}

const defaultProps: Partial<StatRowProps> = {
    color: "default",
    component: "li",
}

export const StatRow = (props: StatRowProps): JSX.Element => {
    props = { ...defaultProps, ...props }

    if (props?.description) {
        return (
            <MouseOverPopover id={`stat-row-${props.title}`} popoverContent={props.description}>
                <Box component={props.component} className="er__statRow__column">
                    <span>{props.title}</span>
                    <span className={`er__statRow__column--color-${props.color}`}>{props.value}</span>
                </Box>
            </MouseOverPopover>
        )
    }
    return (
        <Box component={props.component} className="er__statRow__column">
            <span>{props.title}</span>
            <span className={`er__statRow__column--color-${props.color}`}>{props.value}</span>
        </Box>
    )
}
