interface JsonDisplayProps {
    data: any
}

export const JsonDisplay = (props: JsonDisplayProps): JSX.Element => {
    let { data } = props
    if (!data) {
        return null
    }
    if (typeof(data) == "string") {
        data = JSON.parse(data)
    }
    const prettyData = JSON.stringify(data, null, 4)
    return (<code><pre>{prettyData}</pre></code>)
}
