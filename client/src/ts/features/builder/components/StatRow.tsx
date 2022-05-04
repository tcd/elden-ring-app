export interface StatRowProps {
    title: string
    value: any
    key?: string
}

export const StatRow = (props: StatRowProps): JSX.Element => {
    const liProps: any = {}
    if (props?.key) {
        liProps.key = props?.key
    }
    return (
        <li className="stat-row" {...liProps}>
            <span>{props.title}</span>
            <span>{props.value}</span>
        </li>
    )
}
