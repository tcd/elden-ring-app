import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const HorizontalBorder = (_props: unknown): JSX.Element => <Box sx = {ComponentSx.AffinityModal.borders.horizontal} />
export const LeftBorder       = (_props: unknown): JSX.Element => <Box sx = {ComponentSx.AffinityModal.borders.left} />
export const RightBorder      = (_props: unknown): JSX.Element => <Box sx = {ComponentSx.AffinityModal.borders.right} />

export const InnerBorder = (_props: unknown): JSX.Element => {
    return (
        <Box sx={ComponentSx.AffinityModal.borders.innerBorder.wrapper}>
            <Box sx={ComponentSx.AffinityModal.borders.innerBorder.content} />
        </Box>
    )
}
