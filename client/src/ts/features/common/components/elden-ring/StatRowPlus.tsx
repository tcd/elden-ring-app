import { MouseOverPopover } from "@app/shared"

export interface StatRowPlusProps {
    title: string
    value_1: any
    value_2: any
    description?: string
}

export const StatRowPlus = (props: StatRowPlusProps): JSX.Element => {
    if (props?.description) {
        const id = `stat-row-${props.title}`
        return (
            <MouseOverPopover id={id} popoverContent={props.description}>
                <li className="er__stat-row-plus">
                    <span>{props.title}</span>
                    <span>{props.value_1}</span>
                    <span>/</span>
                    <span>{props.value_2}</span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="er__stat-row-plus">
            <span>{props.title}</span>
            <span>{props.value_1}</span>
            <span>/</span>
            <span>{props.value_2}</span>
        </li>
    )
}
