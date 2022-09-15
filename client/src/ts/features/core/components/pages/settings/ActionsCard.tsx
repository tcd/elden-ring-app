import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useConfirm } from "material-ui-confirm"
import { Button, List, ListItem, ListItemText, ListItemButton } from "@mui/material"
import IosShareIcon from "@mui/icons-material/IosShare"
import RestartAltIcon from "@mui/icons-material/RestartAlt"

import { Actions, persistor } from "@app/state"
import { ErCard } from "@app/features/common"
import { ExportModal } from "@app/features/import-export/components/misc"

export const ActionsCard = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const confirm  = useConfirm()

    const [modalOpen, setModalOpen] = useState(false)

    const handleExportClick = () => {
        setModalOpen(true)
        dispatch(Actions.ImportExport.buildUrl())
    }

    const handleResetClick = async () => {
        confirm({
            title: "Confirm",
            description: "Are you sure? You will loose any build options you've configured?",
            confirmationButtonProps: { color: "error", variant: "contained" },
            cancellationButtonProps: { color: "info",  variant: "contained" },
        })
            .then(async() => {
                persistor.purge()
                dispatch(Actions.Core.resetState())
                dispatch(Actions.Notifications.addNotification({
                    message: "App Reset",
                    variant: "success",
                }))
                navigate("/", { replace: true })
            })
            .catch((_error) => null)
    }

    return (
        <ErCard title="Actions">
            <ExportModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            />
            <List>
                <ListItem>
                    <ListItemButton>
                        {/* <ListItemIcon onClick={handleExportClick}>
                            <IosShareIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Export Build Data" sx={{ mr: 3 }} />
                        <Button variant="contained" onClick={handleExportClick}>
                            <IosShareIcon />
                        </Button>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleResetClick}>
                        {/* <ListItemIcon>
                            <RestartAltIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Reset Application" sx={{ mr: 3 }} />
                        <Button variant="contained" onClick={handleResetClick}>
                            <RestartAltIcon />
                        </Button>
                    </ListItemButton>
                </ListItem>
            </List>
        </ErCard>
    )
}
