import type { Components } from "@mui/material/styles"

import { button } from "@app/theme/variables/variables.scss"

import { goldenHover } from "../../sx/mixins/golden-hover"
// import { textShadow } from "../../sx/mixins/text-shadow"

const _Button: Components["MuiButtonBase"]["styleOverrides"] = {
    root: {
        textTransform: "none",
        position: "relative",
        borderRadius: "0px",
        border: `1px solid ${button.borderColor}`,
        /** vertical, horizontal */
        padding: `${button.verticalPadding} ${button.horizontalPadding}`,
        backgroundColor: button.colorBg,
        color: button.colorFg,
    },
}

export const Button = {
    ..._Button,
    ...goldenHover,
}
