import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/shared"
import {
    EquipmentDetailProps,
    MainSectionRows,
    PrimaryImage,
    SecondaryImage,
} from "./_index"

export const MainSection = (props: EquipmentDetailProps): JSX.Element => {
    return (
        <ErCard title={props.title}>

            <Grid {...ComponentSx.EquipmentDetail.mainSection.props.container}>

                <Grid {...ComponentSx.EquipmentDetail.mainSection.props.col1}>
                    <MainSectionRows {...props.mainSectionRows} />
                </Grid>

                <Grid {...ComponentSx.EquipmentDetail.mainSection.props.col2}>
                    <SecondaryImage
                        include={props.includeSecondaryImage}
                        {...(props?.secondaryImage ?? {})}
                    />
                    <PrimaryImage
                        src={props?.primaryImage?.src}
                        alt={props?.primaryImage?.alt}
                    />
                </Grid>

            </Grid>

        </ErCard>
    )
}
