import type { SxProps } from "@mui/material"

export type StatRowColor = "default" | "red" | "blue"

export interface StatColumnProps {
    value: React.ReactNode
    sx: SxProps
    color?: StatRowColor
}

export interface StatRowProps {
    title: string
    value: any
    color?: StatRowColor
    description?: string
    component?: React.ElementType
}

export interface StatRowPlusProps {
    title: string
    description?: string
    divider?: string
    value_1: any
    value_2: any
    divider_color?: StatRowColor
    value_1_color?: StatRowColor
    value_2_color?: StatRowColor
    component?: React.ElementType
}

export interface StatRowPlusPlusProps {
    title: string
    description?: string
    divider?: string
    no_parens?: boolean
    value_1: any
    value_2: any
    value_3: any
    divider_color?: StatRowColor
    value_1_color?: StatRowColor
    value_2_color?: StatRowColor
    value_3_color?: StatRowColor
    component?: React.ElementType
}
