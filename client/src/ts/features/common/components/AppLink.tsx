import { forwardRef, ReactNode } from "react"
import {
    Link as MuiLink,
    LinkProps as MuiLinkProps,
} from "@mui/material"
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    To,
} from "react-router-dom"

// export interface AppLinkProps extends MuiLinkProps {
//     to: To
//     children?: ReactNode
// }

// export const AppLink = (props: AppLinkProps): JSX.Element => {
//     return (
//         <MuiLink component={RouterLink} {...props}>
//             <>{props?.children && props.children}</>
//         </MuiLink>
//     )
// }

const appLink = forwardRef<any, Omit<RouterLinkProps, "to">>(
    (props, ref) => (
        <RouterLink
            ref={ref}
            to="/material-ui/getting-started/installation/"
            {...props}
        />
    ),
)
appLink.displayName = "AppLink"
export const AppLink = appLink
