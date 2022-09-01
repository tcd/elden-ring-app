import type {
    StatRowProps,
    StatRowPlusProps,
    StatRowPlusPlusProps,
} from "@app/features"

export interface ImageOptions {
    src?: string
    alt?: string
}

export interface EquipmentDetailProps {
    children?: React.ReactNode | React.ReactNode[]
    title?: string
    mainSectionRows: MainSectionRowsProps
    includeSecondaryImage?: boolean
    includePassiveEffects?: boolean
    primaryImage?: ImageOptions
    secondaryImage?: ImageOptions
    passiveEffects?: React.ReactNode[]
}

// =============================================================================

type OptionName = "StatRow" | "StatRowPlus" | "StatRowPlusPlus"

type IOptions<Type extends OptionName, Props> = { type: Type, props: Props }

type RowProps =
    | IOptions<"StatRow",         StatRowProps>
    | IOptions<"StatRowPlus",     StatRowPlusProps>
    | IOptions<"StatRowPlusPlus", StatRowPlusPlusProps>

export interface MainSectionRowsProps {
    row1?: RowProps
    row2?: RowProps
    row3?: RowProps
    row4?: RowProps
    row5?: RowProps
    row6?: RowProps
}
