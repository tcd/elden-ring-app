import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"
import Typography from "@mui/material/Typography"

import { Selectors } from "@app/state"
import { ECard } from "@app/shared"

export const Overview = (): JSX.Element => {

    const level = useSelector(Selectors.Builder.level)
    const runes = useSelector(Selectors.Builder.runesToNextLevel)
    const baseClass = useSelector(Selectors.Builder.startingClassName)

    return (
        <ECard title="Overview" iconPath={mdiAccount}>
            <ul className="w-100">
                <li className="flex-between">
                    <Typography variant="body1" component="span">
                        Starting Class
                    </Typography>
                    <Typography variant="body1" component="span">
                        {baseClass}
                    </Typography>
                </li>
                <br/>
                <li className="flex-between">
                    <Typography variant="body1" component="span">
                        Level
                    </Typography>
                    <Typography variant="body1" component="span">
                        {level}
                    </Typography>
                </li>
                <br/>
                <li className="flex-between">
                    <Typography variant="body1" component="span">
                        Runes Needed
                    </Typography>
                    <Typography variant="body1" component="span">
                        {runes?.toLocaleString()}
                    </Typography>
                </li>
            </ul>
        </ECard>
    )
}
