import { MouseOverPopover } from "@app/shared"

import {
    StatRowColor,
} from "."

export interface StatRowProps {
    title: string
    value: any
    color?: StatRowColor
    description?: string
}

const defaultProps: Partial<StatRowProps> = {
    color: "default",
}

export const StatRow = (props: StatRowProps): JSX.Element => {
    props = { ...defaultProps, ...props }

    if (props?.description) {
        return (
            <MouseOverPopover id={`stat-row-${props.title}`} popoverContent={props.description}>
                <li className="er__stat-row">
                    <span className={`er__stat-row__column`}>{props.title}</span>
                    <span className={`er__stat-row__column er__stat-row__column--color-${props.color}`}>{props.value}</span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="er__stat-row">
            <span className={`er__stat-row__column`}>{props.title}</span>
            <span className={`er__stat-row__column er__stat-row__column--color-${props.color}`}>{props.value}</span>
        </li>
    )
}
