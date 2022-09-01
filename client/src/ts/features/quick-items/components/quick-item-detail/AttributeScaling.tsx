import type { AttrMap, ScalingTier } from "elden-ring-calculator"
import { Box, SxProps } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import type { Grid2Props as GridProps} from "@mui/material/Unstable_Grid2"

import type { QuickItem } from "@app/types"
import { SpecialCharacters } from "@app/util"
import {
    StatRow,
    EquipmentDetail,
    EquipmentDetailProps,
    EquipmentDetailFullCard,
} from "@app/shared"

type Scaling = Partial<AttrMap<ScalingTier>>

export interface AttributeScalingProps {
    // quickItem?: QuickItem
    // scaling: Scaling
}

const defaultScaling: Scaling = {
    strength: "-",
    dexterity: "-",
    intelligence: "-",
    faith: "-",
    arcane: "-",
}

// FIXME: this is NOT done. Just built as a placeholder.
export const AttributeScaling = (props: AttributeScalingProps): JSX.Element => {
    return (
        <EquipmentDetailFullCard title="Attribute Scaling" icon="AttributeScaling">
            {/* <Grid container direction="row" columns={5} columnSpacing={6}>
                <Grid {...rowProps}><StatRow title="Str" value="-" /></Grid>
                <Grid {...rowProps}><StatRow title="Dex" value="-" /></Grid>
                <Grid {...rowProps}><StatRow title="Int" value="-" /></Grid>
                <Grid {...rowProps}><StatRow title="Fai" value="-" /></Grid>
                <Grid {...rowProps}><StatRow title="Arc" value="-" /></Grid>
            </Grid> */}
            <Box sx={boxSx}>
                <ScalingRow attr="Str" value="-" />
                <ScalingRow attr="Dex" value="-" />
                <ScalingRow attr="Int" value="-" />
                <ScalingRow attr="Fai" value="-" />
                <ScalingRow attr="Arc" value="-" />
            </Box>
        </EquipmentDetailFullCard>
    )
}

// =============================================================================

export interface ScalingRowProps {
    attr: string
    value: ScalingTier
}

export const ScalingRow = ({ attr, value }: ScalingRowProps): JSX.Element => {
    return (
        <Box component="span" sx={rowSx}>
            <span>{attr}</span>
            <span>{value}</span>
        </Box>
    )
}

// =============================================================================

const boxSx: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    alignItems: "stretch",
}

const rowSx: SxProps = {
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    mr: 13,
}

const rowProps: GridProps = {
    xs: 1,
}
