import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"
import Typography from "@mui/material/Typography"

import { Stat, Encumbrance } from "@app/types"
import { Selectors } from "@app/state"
import { ECard } from "@app/shared"
import { COLORS } from "@app/util"

const equipmentLoadColor = (load: Encumbrance) => {
    switch (load) {
        case Encumbrance.Overloaded:
            return COLORS.red
        case Encumbrance.Heavy:
            return COLORS.yellow
        case Encumbrance.Medium:
            return COLORS.green
        case Encumbrance.Light:
            return COLORS.blue
        default:
            return COLORS.white
    }
}

export const BaseStats = (): JSX.Element => {

    const stats = useSelector(Selectors.Builder.stats)
    const equipLoadDescription = useSelector(Selectors.Builder.equipLoad.description)
    // const equipLoadPercentage  = useSelector(Selectors.Builder.equipLoad.percentage)

    const row = (name: string, value: any) => {
        return (
            <li className="stat-row" key={`base_stat_${name}`}>
                <span>{name}</span>
                <div>
                    <span className="mx-3">
                        {value}
                    </span>
                </div>
            </li>
        )
    }

    const equipLoadRow = (
        <>
            <li className="stat-row">
                <Typography variant="body1" component="span">
                    Equip Load
                </Typography>
                <Typography className="mx-3" variant="body1" component="span">
                    <span className="">
                        {stats["Current Equip Load"].toFixed(1)}
                    </span>
                    <span> / </span>
                    <span className="">
                        {stats["Max Equip Load"].toFixed(1)}
                    </span>
                </Typography>
            </li>
            <li className="stat-row mx-3">
                <div></div>
                <div style={{ color: equipmentLoadColor(equipLoadDescription) }}>
                    <span className="">
                        {equipLoadDescription}
                    </span>
                    {/* <span className="">
                        ({`${equipLoadPercentage * 100}%`})
                    </span> */}
                </div>
            </li>
        </>
    )

    return (
        <ECard title="Base Stats" iconPath={mdiAccount}>
            <ul>
                {row(Stat.HP, stats.HP)}
                {row(Stat.FP, stats.FP)}
                {row(Stat.STAMINA, stats.Stamina)}
                <br/>
                {equipLoadRow}
                {/* <br/> */}
                {row(Stat.POISE, stats.Poise)}
                {row(Stat.DISCOVERY, stats.Discovery)}
            </ul>
        </ECard>
    )
}
