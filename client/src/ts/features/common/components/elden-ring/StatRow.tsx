import { MouseOverPopover } from "@app/shared"

export interface StatRowProps {
    title: string
    value: any
    key?: string
    description?: string
}

export const StatRow = (props: StatRowProps): JSX.Element => {
    const liProps: any = {}
    if (props?.key) {
        liProps.key = props?.key
    }
    const key = props?.key ?? `stat-row-${props.title}`
    if (props?.description) {
        return (
            <MouseOverPopover key={key} id={key} popoverContent={props.description}>
                <li id={key} className="stat-row">
                    <span>{props.title}</span>
                    <span>{props.value}</span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="stat-row" {...liProps}>
            <span>{props.title}</span>
            <span>{props.value}</span>
        </li>
    )
}
