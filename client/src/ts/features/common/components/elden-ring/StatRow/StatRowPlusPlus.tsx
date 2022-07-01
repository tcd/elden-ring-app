import { MouseOverPopover } from "@app/shared"

import {
    StatRowColor,
} from "."

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
}

const defaultProps: Partial<StatRowPlusPlusProps> = {
    divider: "/",
    no_parens: false,
    value_1_color: "default",
    divider_color: "default",
    value_2_color: "default",
}

export const StatRowPlusPlus = (props: StatRowPlusPlusProps): JSX.Element => {
    props = {
        ...defaultProps,
        ...props,
    }

    const leftParen  = props?.no_parens ? "" : "("
    const rightParen = props?.no_parens ? "" : ")"

    if (props?.description) {
        const id = `stat-row-${props.title}`
        return (
            <MouseOverPopover id={id} popoverContent={props.description}>
                <li className="er__statRow__column-plus-plus">
                    <span>{props.title}</span>
                    <span className={`er__statRow__column--color-${props.value_1_color}`}>{props.value_1}</span>
                    <span className={`er__statRow__column--color-${props.divider_color}`}>{props.divider}</span>
                    <span className={`er__statRow__column--color-${props.value_2_color}`}>{props.value_2}</span>
                    <span className="no-margins">
                        <span>{leftParen}</span>
                        <span className={`er__statRow__column--color-${props.value_2_color}`}>{props.value_3})</span>
                        <span>{rightParen}</span>
                    </span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="er__statRow__column-plus-plus">
            <span>{props.title}</span>
            <span className={`er__statRow__column--color-${props.value_1_color}`}>{props.value_1}</span>
            <span className={`er__statRow__column--color-${props.divider_color}`}>{props.divider}</span>
            <span className={`er__statRow__column--color-${props.value_2_color}`}>{props.value_2}</span>
            <span className="no-margins">
                <span>{leftParen}</span>
                <span className={`er__statRow__column--color-${props.value_3_color}`}>{props.value_3}</span>
                <span>{rightParen}</span>
            </span>
        </li>
    )
}
