import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Button, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
// import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import IosShareIcon from "@mui/icons-material/IosShare"
import RestartAltIcon from "@mui/icons-material/RestartAlt"

import { Actions, Selectors, persistor } from "@app/state"
import { ErCard } from "@app/shared"
import { exportJsonToFile } from "@app/util"

export const ActionsCard = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const buildData = useSelector(Selectors.Meta.Export.build)

    const handleExportClick = () => {
        exportJsonToFile({
            data: buildData,
            fileName: "elden-ring-app-build.json",
        })
    }

    const handleResetClick = async () => {
        await persistor.purge()
        await dispatch(Actions.Core.resetState())
        navigate("/", { replace: true })
    }

    return (
        <ErCard title="Actions">
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon onClick={handleExportClick}>
                            <IosShareIcon />
                        </ListItemIcon>
                        <ListItemText primary="Export Build Data to File" />
                        <Button variant="contained" onClick={handleExportClick}>
                            <IosShareIcon />
                        </Button>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleResetClick}>
                        <ListItemIcon>
                            <RestartAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reset Application" />
                        <Button variant="contained" onClick={handleResetClick}>
                            <RestartAltIcon />
                        </Button>
                    </ListItemButton>
                </ListItem>
            </List>
        </ErCard>
    )
}
