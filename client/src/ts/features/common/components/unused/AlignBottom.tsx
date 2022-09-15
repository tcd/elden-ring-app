import { Box } from "@mui/material"
import { SxProps } from "@mui/material"

interface AlignBottomProps {
    children: React.ReactNode
}

// TODO: figure this the hell out.
export const AlignBottom = ({ children }: AlignBottomProps): JSX.Element => {
    return (
        <Box sx={containerSx}>
            <Box sx={childSx}>
                {children && children}
            </Box>
        </Box>
    )
}

// =============================================================================

const containerSx: SxProps = {
    position: "relative",
}

const childSx: SxProps = {
    position: "absolute",
    bottom: 0,
}
