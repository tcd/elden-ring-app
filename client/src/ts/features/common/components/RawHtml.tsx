export interface RawHtmlProps {
    content: string
}

/**
 * Used to directly inject HTML into the DOM.
 *
 * Should probable not ever use this.
 */
export const RawHtml = (props: RawHtmlProps): JSX.Element => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: props.content }}
        />
    )
}
