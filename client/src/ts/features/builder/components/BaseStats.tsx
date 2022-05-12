import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { ECard } from "@app/shared"
import { EquipLoad } from "./EquipLoad"
import { StatRow } from "./StatRow"

export const BaseStats = (): JSX.Element => {

    const stats = useSelector(Selectors.Builder.stats)

    return (
        <ECard title="Base Stats" iconPath={mdiAccount}>
            <ul>
                <StatRow title={Stat.HP} value={stats.HP}/>
                <StatRow title={Stat.FP} value={stats.FP}/>
                <StatRow title={Stat.STAMINA} value={stats.Stamina}/>
                <br/>
                <EquipLoad />
                {/* <br/> */}
                <StatRow title={Stat.POISE} value={stats.Poise}/>
                <StatRow title={Stat.DISCOVERY} value={stats.Discovery}/>
            </ul>
        </ECard>
    )
}
