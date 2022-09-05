import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/features/common"

import { MainSectionRows } from "./MainSectionRows"
import { PrimaryImage } from "./PrimaryImage"
import { SecondaryImage } from "./SecondaryImage"
import type { EquipmentDetailProps } from "./types"

const gridProps = ComponentSx.EquipmentDetail.mainSection.props

export const MainSection = (props: EquipmentDetailProps): JSX.Element => {
    return (
        <ErCard title={props.title} sx={ComponentSx.EquipmentDetail.bodyGrid.cardSx}>
            <Grid {...gridProps.container}>

                <Grid {...gridProps.detailColumn}>
                    <MainSectionRows {...props.mainSectionRows} />
                </Grid>

                <Grid {...gridProps.imageColumn}>
                    <SecondaryImage {...props.secondaryImage} include={props.includeSecondaryImage} />
                    <PrimaryImage {...props.primaryImage} />
                </Grid>

            </Grid>
        </ErCard>
    )
}
