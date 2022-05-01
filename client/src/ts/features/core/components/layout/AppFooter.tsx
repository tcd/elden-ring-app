import { SxProps } from "@mui/material"
import Box from "@mui/material/Box"

// import { AppBottomNav } from "."

const showOnMobile: SxProps = {
    display: {
        xs: "inherit",
        md: "none",
    },
}

const showOnDesktop: SxProps = {
    display: {
        xs: "none",
        md: "inherit",
    },
}

export const AppFooter = () => {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <div id="app-footer" className="mt-auto w-100">
                {/* <Box sx={showOnMobile}>
                    <AppBottomNav />
                </Box> */}
                {/* <Box sx={showOnDesktop}>
                    <span>Elden Ring - {currentYear}</span>
                </Box> */}
            </div>
        </>
    )
}
