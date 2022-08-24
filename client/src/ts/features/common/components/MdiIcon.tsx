import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

type MaterialColor = "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning"

const MATERIAL_COLORS = [
    "inherit",
    "disabled",
    "action",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
]

const isMaterialColor = (color: any): color is MaterialColor => {
    return MATERIAL_COLORS.includes(color)
}

export type MdiIconProps = Omit<SvgIconProps, "path" | "color"> & {
    path: string
    color?: MaterialColor | string | undefined
}

export const MdiIcon = (props: MdiIconProps): JSX.Element => {

    const {
        path,
        color,
        ...rest
    } = props

    const svgIconProps: SvgIconProps = {
        ...rest,
    }

    if (isMaterialColor(color)) {
        svgIconProps.color = color
    } else if (color == undefined) {
        // nothing
    } else {
        svgIconProps.sx = {
            color: color,
        }
    }

    return (
        <SvgIcon {...svgIconProps}>
            <path d={path} />
        </SvgIcon>
    )
}

