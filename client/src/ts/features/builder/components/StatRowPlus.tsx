export interface StatRowProps {
    title: string
    value_1: any
    value_2: any
    key?: string
}

export const StatRowPlus = (props: StatRowProps): JSX.Element => {
    const liProps: any = {}
    if (props?.key) {
        liProps.key = props?.key
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
