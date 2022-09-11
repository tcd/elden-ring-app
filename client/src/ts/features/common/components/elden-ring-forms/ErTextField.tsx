import { Box, SxProps } from "@mui/material"

export interface ErTextFieldProps {

}

export const ErTextField = (props: ErTextFieldProps): JSX.Element => {
    return (
        <Box>

        </Box>
    )
}

const borderColor = "#9a9990"

const sx: Record<string, SxProps> = {
    root: {
        position: "relative",
        boxSizing: "border-box",
        backgroundColor: "#252621",
        borderRadius: "0px",
        borderLeft: `1px solid ${borderColor}`,
        borderRight: `1px solid ${borderColor}`,
    },
}
