import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"
import Grid from "@mui/material/Unstable_Grid2"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"
import { ErPage } from "@app/shared"
import { TriPage } from "@app/features/common2"
import { CharacterStatus } from "@app/features/character-status"
import { EquipmentGrid } from "@app/features/equipment/components/equipment-grid"
import { EquipmentPageDetail } from "@app/features/equipment/components/EquipmentPageDetail"

export const EquipmentPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()
    const baseClass = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(baseClass)) {
            navigate("/starting-class")
        }
    }, [baseClass, navigate])

    return (
        <ErPage pageName="equipment">
            <TriPage
                column1={<EquipmentGrid />}
                column2={<EquipmentPageDetail />}
            />
        </ErPage>
    )

    return (
        <ErPage pageName="equipment">
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
        </ErPage>
    )
}

// =============================================================================

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
