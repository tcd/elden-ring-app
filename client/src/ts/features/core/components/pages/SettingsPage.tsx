import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"

import { Actions, Selectors, persistor } from "@app/state"
import { exportJsonToFile } from "@app/util"

export const SettingsPage = (): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(Actions.Core.setPageName("settings"))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [])

    const buildData = useSelector(Selectors.Builder.exportData)

    const handleExportClick = () => {
        exportJsonToFile({
            data: buildData,
            fileName: "elden-ring-app-build.json",
        })
    }

    const handleResetClick = async () => {
        await persistor.purge()
        await dispatch(Actions.Core.resetState())
        navigate("/")
    }

    return (
        <Box className="container">
            <section>
                <Typography variant="h5">
                    Export Data
                    <br />
                    <Button
                        onClick={handleExportClick}
                    >
                        Export Build
                    </Button>
                </Typography>
            </section>
            <section>
                <Typography variant="h5">
                    Reset
                    <br />
                    <Button onClick={handleResetClick}>
                        Reset App State
                    </Button>
                </Typography>
            </section>
        </Box>
    )
}
