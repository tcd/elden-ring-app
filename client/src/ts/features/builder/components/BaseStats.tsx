import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { ECard } from "@app/shared"
import { EquipLoad } from "./EquipLoad"

export const BaseStats = (): JSX.Element => {

    const stats = useSelector(Selectors.Builder.stats)

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

    return (
        <ECard title="Base Stats" iconPath={mdiAccount}>
            <ul>
                {row(Stat.HP, stats.HP)}
                {row(Stat.FP, stats.FP)}
                {row(Stat.STAMINA, stats.Stamina)}
                <br/>
                <EquipLoad />
                {/* <br/> */}
                {row(Stat.POISE, stats.Poise)}
                {row(Stat.DISCOVERY, stats.Discovery)}
            </ul>
        </ECard>
    )
}
