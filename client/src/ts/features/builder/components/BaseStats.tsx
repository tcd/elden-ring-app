import { useSelector } from "react-redux"
import { mdiAccount } from "@mdi/js"

import { Stat } from "@app/types"
import { Selectors } from "@app/state"
import { ECard, StatRow } from "@app/shared"
import { EquipLoad } from "./EquipLoad"

export const BaseStats = (): JSX.Element => {

    const hp        = useSelector(Selectors.Builder.stat.hp)
    const fp        = useSelector(Selectors.Builder.stat.fp)
    const stamina   = useSelector(Selectors.Builder.stat.stamina)
    const poise     = useSelector(Selectors.Builder.stat.poise)
    const discovery = useSelector(Selectors.Builder.stat.discovery)

    return (
        <ECard title="Base Stats" iconPath={mdiAccount}>
            <ul>
                <StatRow title={Stat.HP} value={hp}/>
                <StatRow title={Stat.FP} value={fp}/>
                <StatRow title={Stat.STAMINA} value={stamina}/>
                <br/>
                <EquipLoad />
                {/* <br/> */}
                <StatRow title={Stat.POISE} value={poise}/>
                <StatRow title={Stat.DISCOVERY} value={discovery}/>
            </ul>
        </ECard>
    )
}
