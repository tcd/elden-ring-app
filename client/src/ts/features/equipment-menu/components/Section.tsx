import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

import { EquipmentMenuDivider } from "./Divider"

export interface SectionProps {
    id: string
    /** If `true`, a divider will be added after the section. */
    divider: boolean
    children?: React.ReactNode
}

export const Section = (props: SectionProps): JSX.Element => {

    const {
        children = null,
        id,
        divider,
    } = props

    return (
        <>
            <Box
                id={id}
                sx={ComponentSx.EquipmentMenu.grid.section}
            >
                {children && children}
            </Box>
            {divider && <EquipmentMenuDivider />}
        </>

    )
}
