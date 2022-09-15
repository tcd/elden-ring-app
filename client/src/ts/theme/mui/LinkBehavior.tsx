import { forwardRef } from "react"
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom"

type LinkBehaviorProps = Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }

/**
 * [Global theme Link](https://mui.com/material-ui/guides/routing/#global-theme-link)
 */
export const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorProps>(function LinkBehavior(props, ref) {
    const { href, ...other } = props
    // Map href (MUI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />
})
