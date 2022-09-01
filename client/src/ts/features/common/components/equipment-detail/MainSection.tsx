import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/shared"

import { MainSectionRows } from "./MainSectionRows"
import { PrimaryImage } from "./PrimaryImage"
import { SecondaryImage } from "./SecondaryImage"
import type { EquipmentDetailProps } from "./types"

const gridProps = ComponentSx.EquipmentDetail.mainSection.props

export const MainSection = (props: EquipmentDetailProps): JSX.Element => {
    return (
        <ErCard title={props.title}>
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
