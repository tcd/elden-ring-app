import { MouseOverPopover } from "@app/shared"

export interface StatRowProps {
    title: string
    value_1: any
    value_2: any
    key?: string
    description?: string
}

export const StatRowPlus = (props: StatRowProps): JSX.Element => {
    const liProps: any = {}
    if (props?.key) {
        liProps.key = props?.key
    }
    if (props?.description) {
        const key = props?.key ?? `stat-row-${props.title}`
        return (
            <MouseOverPopover key={key} id={key} popoverContent={props.description}>
                <li id={key} className="stat-row-plus">
                    <span>{props.title}</span>
                    <span>{props.value_1}</span>
                    <span>/</span>
                    <span>{props.value_2}</span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="stat-row-plus" {...liProps}>
            <span>{props.title}</span>
            <span>{props.value_1}</span>
            <span>/</span>
            <span>{props.value_2}</span>
        </li>
    )
}
