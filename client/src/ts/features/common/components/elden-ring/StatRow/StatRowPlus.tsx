import { MouseOverPopover } from "@app/shared"

export type StatRowPlusColor = "default" | "red" | "blue"

export interface StatRowPlusProps {
    title: string
    description?: string
    divider?: string
    value_1: any
    value_2: any
    value_1_color?: StatRowPlusColor
    divider_color?: StatRowPlusColor
    value_2_color?: StatRowPlusColor
}

const defaultProps: Partial<StatRowPlusProps> = {
    divider: "/",
    value_1_color: "default",
    divider_color: "default",
    value_2_color: "default",
}

export const StatRowPlus = (props: StatRowPlusProps): JSX.Element => {
    props = {
        ...defaultProps,
        ...props,
    }

    if (props?.description) {
        const id = `stat-row-${props.title}`
        return (
            <MouseOverPopover id={id} popoverContent={props.description}>
                <li className="er__statRow__column-plus">
                    <span>{props.title}</span>
                    <span className={`er__statRow__column--color-${props.value_1_color}`}>{props.value_1}</span>
                    <span className={`er__statRow__column--color-${props.divider_color}`}>{props.divider}</span>
                    <span className={`er__statRow__column--color-${props.value_2_color}`}>{props.value_2}</span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="er__statRow__column-plus">
            <span>{props.title}</span>
            <span className={`er__statRow__column--color-${props.value_1_color}`}>{props.value_1}</span>
            <span className={`er__statRow__column--color-${props.divider_color}`}>{props.divider}</span>
            <span className={`er__statRow__column--color-${props.value_2_color}`}>{props.value_2}</span>
        </li>
    )
}
