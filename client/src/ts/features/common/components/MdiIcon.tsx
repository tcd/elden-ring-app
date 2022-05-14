import { SvgIcon } from "@mui/material"

type SvgIconColor =
    | "inherit"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"

interface IconProps {
    color?: SvgIconColor
    path: string
}

export const MdiIcon = (props: IconProps): JSX.Element => {
    let {
        color,
        path,
    } = props

    color ??= "inherit"

    return (
        <SvgIcon color={color}>
            <path d={path}></path>
        </SvgIcon>
    )
}
