import { styled } from "@mui/material"

import { ComponentSx } from "@app/theme"

// @ts-ignore: next-line
const A = styled("a")(ComponentSx.Anchor)

export interface AnchorProps {
    href: string
    content: React.ReactNode
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

    const aProps: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> = {
        href: href,
        target: newTab ? "_blank" : undefined,
        rel: "noopener noreferrer",
    }

    return (
        <A {...aProps}>
            {content}
        </A>
    )
}
