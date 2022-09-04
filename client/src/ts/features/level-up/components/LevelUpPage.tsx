import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { isBlank } from "@app/util"
import { Selectors } from "@app/state"
import { ErPage } from "@app/shared"
import { CharacterStatus } from "@app/features/character-status"

import { Overview } from "./Overview"
import { Attributes } from "./Attributes"

export const LevelUpPage = (_props: unknown): JSX.Element => {

    const navigate = useNavigate()

    const baseClass = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(baseClass)) {
            navigate("/starting-class")
        }
    }, [baseClass, navigate])

    return (
        <ErPage pageName="level-up">
            <Grid container direction="row">
                <Grid xs sx={{ display: "flex", flexDirection: "column" }}>
                    <Overview />
                    <Attributes />
                </Grid>
                <Grid xs>
                </Grid>
                <Grid xs>
                    <CharacterStatus />
                </Grid>
            </Grid>
        </ErPage>
    )
}
