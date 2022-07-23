import {
    ReactNode,
    AnchorHTMLAttributes,
    DetailedHTMLProps,
} from "react"

export interface AnchorProps {
    href: string
    content: ReactNode
    newTab?: false
}

const defaultProps: Partial<AnchorProps> = {
    content: null,
    newTab: false,
}

/**
 * Vanilla HTML link.
 *
 * @see [How to Use HTML to Open a Link in a New Tab](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/)
 */
export const Anchor = (props: AnchorProps): JSX.Element => {
    const {
        href,
        content,
        newTab,
    }= { ...defaultProps, ...props }

    const aProps: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> = {
        href: href,
        target: newTab ? "_blank" : undefined,
        rel: "noopener noreferrer",
    }

    return (
        <a {...aProps}>
            {content}
        </a>
    )
}
