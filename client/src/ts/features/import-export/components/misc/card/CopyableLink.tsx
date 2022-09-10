import { useDispatch } from "react-redux"
import { Box, } from "@mui/material"
import CopyIcon from "@mui/icons-material/ContentCopy"
// import FileCopyIcon from "@mui/icons-material/FileCopy"

import { ComponentSx } from "@app/theme"
import { Actions } from "@app/state"

export const CopyableLink = ({ url }: { url: string }): JSX.Element => {

    const dispatch = useDispatch()

    const handleClick = (): void => {
        navigator.clipboard.writeText(url)
        dispatch(Actions.Notifications.addNotification({
            message: "Link Copied to Clipboard",
            variant: "success",
        }))
    }

    return (
        <Box sx={ComponentSx.ExportCard.CopyableLink.root} onClick={handleClick}>
            <Box sx={ComponentSx.ExportCard.CopyableLink.typography}>
                {url}
            </Box>
            <CopyIcon fontSize="small" sx={{ m: 1 }} />
        </Box>
    )
}
