import { Grid, GridProps } from "@mui/material"

import { Page } from "@app/shared"
import { CharacterStatus } from "@app/features/builder"
import { EquipmentGrid } from "@app/features/equipment/components/equipment-grid"
import { EquipmentPageDetail } from "@app/features/equipment/components/EquipmentPageDetail"

const parentProps: GridProps = {
    container: true,
    direction: "row",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "stretch",
    alignContent: "stretch",
    justifyItems: "stretch",
    columns: 12,
    // columnSpacing: 10,
    // sx: {
    //     width: "100%",
    //     // backgroundColor: "papayawhip",
    // },
}

const childProps: GridProps = {
    item: true,
    flexGrow: 1,
    xs: "auto",
    sm: "auto",
    // md: 2,
}

const child1Props: GridProps = {
    ...childProps,
    md: 4,
    sx: {
        // backgroundColor: "red",
        boxSizing: "border-box",
    },
    pl: {
        xs: 0,
        sm: 0,
        md: "96px",
    },
}

const child2Props: GridProps = {
    ...childProps,
    md: 5,
    alignContent: "flex-start",
    pr: {
        xs: 0,
        sm: 0,
        md: "48px",
    },
    sx: {
        // backgroundColor: "orange",
    },
}

const child3Props: GridProps = {
    ...childProps,
    md: 3,
    sx: {
        // backgroundColor: "yellow",
        pr: {
            xs: 0,
            sm: 0,
            md: "48px",
        },
    },
}


export const EquipmentPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="equipment">
            <Grid {...parentProps}>
                <Grid {...child1Props}>
                    <EquipmentGrid />
                </Grid>
                <Grid {...child2Props}>
                    <EquipmentPageDetail />
                </Grid>
                <Grid {...child3Props}>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </Page>
    )
}
