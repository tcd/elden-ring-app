export interface RawHtmlProps {
    content: string
}

export const RawHtml = (props: RawHtmlProps): JSX.Element => {
    return (
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
    )
}
