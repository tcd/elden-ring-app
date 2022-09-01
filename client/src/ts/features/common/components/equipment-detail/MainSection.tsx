import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/shared"
import {
    EquipmentDetailProps,
    MainSectionRows,
    PrimaryImage,
    SecondaryImage,
} from "./_index"

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
