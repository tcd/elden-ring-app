import type { SxProps } from "@mui/material"

import type { ComparisonColor } from "@app/types"

export interface StatColumnProps {
    value: React.ReactNode
    sx: SxProps
    color?: ComparisonColor
}

export interface StatRowProps {
    sx?: SxProps
    title: string
    value: any
    color?: ComparisonColor
    description?: string
    component?: React.ElementType
}

export interface StatRowPlusProps {
    sx?: SxProps
    title: string
    description?: string
    divider?: string
    value_1: any
    value_2: any
    divider_color?: ComparisonColor
    value_1_color?: ComparisonColor
    value_2_color?: ComparisonColor
    component?: React.ElementType
}

export interface StatRowPlusPlusProps {
    sx?: SxProps
    title: string
    description?: string
    divider?: string
    no_parens?: boolean
    value_1: any
    value_2: any
    value_3: any
    divider_color?: ComparisonColor
    value_1_color?: ComparisonColor
    value_2_color?: ComparisonColor
    value_3_color?: ComparisonColor
    component?: React.ElementType
}
