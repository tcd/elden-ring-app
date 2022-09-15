import { Box, SxProps } from "@mui/material"

export interface RulerProps {
    top?: number
}

export const Ruler = ({ top }: RulerProps): JSX.Element => {

    const rulerSx: SxProps = {
        "position": "absolute",
        left: 0,
        top: top ?? 722,
        width: "100vw",
        height: "1px",
        backgroundColor: "red",
        "&::after": {
            content: '""',
            display: "none",
        },
    }

    return <Box sx={rulerSx} />
}
