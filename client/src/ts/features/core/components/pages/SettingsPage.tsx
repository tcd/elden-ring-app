import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, Button, Typography } from "@mui/material"

import { Heading } from "@app/shared"
import { Actions, Selectors } from "@app/state"
import { exportJsonToFile } from "@app/util"

export const SettingsPage = (): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        // Anything in here is fired on component mount.
        dispatch(Actions.Core.setPageName("settings"))
        return () => {
            // Anything in here is fired on component unmount.
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

    return (
        <Box className="container">
            <Heading title="Settings" />
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
        </Box>
    )
}
