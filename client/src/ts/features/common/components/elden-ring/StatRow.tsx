import { MouseOverPopover } from "@app/shared"

export interface StatRowProps {
    title: string
    value: any
    description?: string
}

export const StatRow = (props: StatRowProps): JSX.Element => {
    if (props?.description) {
        return (
            <MouseOverPopover id={`stat-row-${props.title}`} popoverContent={props.description}>
                <li className="er__stat-row">
                    <span>{props.title}</span>
                    <span>{props.value}</span>
                </li>
            </MouseOverPopover>
        )
    }
    return (
        <li className="er__stat-row">
            <span>{props.title}</span>
            <span>{props.value}</span>
        </li>
    )
}
