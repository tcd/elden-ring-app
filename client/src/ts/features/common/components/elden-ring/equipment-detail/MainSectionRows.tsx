import {
    StatRow,
    StatRowPlus,
    StatRowPlusPlus,
    StatRowProps,
    StatRowPlusProps,
    StatRowPlusPlusProps,
} from "@app/features"

// TODO: open an issue in the TypeScript repo, there needs to be a shorthand for this.
const OptionNames = {
    "StatRow":         "StatRow",
    "StatRowPlus":     "StatRowPlus",
    "StatRowPlusPlus": "StatRowPlusPlus",
} as const
type OptionName = typeof OptionNames[keyof typeof OptionNames]

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

const defaultStatRowProps: StatRowProps = { title: "", value: "" }
const defaultProps: Partial<MainSectionRowsProps> = {
    row1: { type: "StatRow", props: defaultStatRowProps },
    row2: { type: "StatRow", props: defaultStatRowProps },
    row3: { type: "StatRow", props: defaultStatRowProps },
    row4: { type: "StatRow", props: defaultStatRowProps },
    row5: { type: "StatRow", props: defaultStatRowProps },
    row6: { type: "StatRow", props: defaultStatRowProps },
}

export const MainSectionRows = (props: MainSectionRowsProps): JSX.Element => {

    props = { ...defaultProps, ...props }

    const rowProps = [
        props.row1,
        props.row2,
        props.row3,
        props.row4,
        props.row5,
        props.row6,
    ]

    const rows = rowProps.map(({ type, props }, index) => {
        const key = `er__equipmentDetail__mainSection--${index + 1}`
        switch (type) {
            case "StatRow":         return <StatRow         key={key} {...props} />
            case "StatRowPlus":     return <StatRowPlus     key={key} {...props} />
            case "StatRowPlusPlus": return <StatRowPlusPlus key={key} {...props} />
        }
    })

    return (<>{rows}</>)
}
