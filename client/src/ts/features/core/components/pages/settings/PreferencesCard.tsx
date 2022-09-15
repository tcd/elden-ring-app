import { useSelector, useDispatch } from "react-redux"
import { List, ListItem, ListItemIcon, ListItemText, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material"
import {
    mdiMicrosoftXbox,
    mdiSonyPlaystation,
} from "@mdi/js"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeMuteIcon from "@mui/icons-material/VolumeMute"

import { Actions, Selectors } from "@app/state"
import { ErCard, MdiIcon } from "@app/features/common"

export const PreferencesCard = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const soundsEnabled = useSelector(Selectors.Core.preferences.soundsEnabled)
    const console = useSelector(Selectors.Core.preferences.console)

    const toggleSounds = () => {
        dispatch(Actions.Core.toggleSounds())
    }

    const $soundsIcon = soundsEnabled ? <VolumeUpIcon /> : <VolumeMuteIcon />
    const $consoleIcon = console == "Xbox" ? <MdiIcon path={mdiMicrosoftXbox} /> : <MdiIcon path={mdiSonyPlaystation} />

    return (
        <ErCard title="Preferences">
            <List>
                <ListItem>
                    <ListItemIcon>
                        {$soundsIcon}
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-sounds" primary="Toggle Sounds" />
                    <Switch
                        edge="end"
                        onChange={toggleSounds}
                        checked={soundsEnabled}
                        inputProps={{
                            "aria-labelledby": "switch-list-label-sounds",
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        {$consoleIcon}
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-console" primary="Console" />
                    <ConsoleButtons />
                </ListItem>
            </List>
        </ErCard>
    )
}

const ConsoleButtons = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const console = useSelector(Selectors.Core.preferences.console)

    const handleClick = (_event: React.MouseEvent<HTMLElement>, c: "Xbox" | "PlayStation"): void => {
        dispatch(Actions.Core.setConsole(c))
    }

    return (
        <ToggleButtonGroup exclusive value={console} onChange={handleClick}>
            <ToggleButton value="Xbox">
                <MdiIcon path={mdiMicrosoftXbox} />
            </ToggleButton>
            <ToggleButton value="PlayStation">
                <MdiIcon path={mdiSonyPlaystation} />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
