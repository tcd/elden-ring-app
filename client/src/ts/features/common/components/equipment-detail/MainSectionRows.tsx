import {
    StatRow,
    StatRowPlus,
    StatRowPlusPlus,
} from "@app/features"

import type { MainSectionRowsProps } from "./types"

const defaultStatRowProps = { title: "", value: "" }

const defaultProps: MainSectionRowsProps = {
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

    return (
        <>{rows}</>
    )
}
