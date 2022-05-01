import { useSelector } from "react-redux"
import { mdiShield } from "@mdi/js"

import { Selectors } from "@app/state"
import { ECard } from "@app/shared"

export const Defense = (): JSX.Element => {

    const physicalNegation  = useSelector(Selectors.Builder.defense.negation.physical)
    const strikeNegation    = useSelector(Selectors.Builder.defense.negation.strike)
    const slashNegation     = useSelector(Selectors.Builder.defense.negation.slash)
    const pierceNegation    = useSelector(Selectors.Builder.defense.negation.pierce)
    const magicNegation     = useSelector(Selectors.Builder.defense.negation.magic)
    const fireNegation      = useSelector(Selectors.Builder.defense.negation.fire)
    const lightningNegation = useSelector(Selectors.Builder.defense.negation.lightning)
    const holyNegation      = useSelector(Selectors.Builder.defense.negation.holy)

    const row = (name: string, value: any) => {
        return (
            <li className="stat-row" key={`defense_${name}`}>
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
        <ECard title="Defense/Dmg Negation" iconPath={mdiShield}>
            <ul>
                {row("Physical", physicalNegation) }
                {row("VS Strike", strikeNegation) }
                {row("VS Slash", slashNegation) }
                {row("VS Pierce", pierceNegation) }
                {row("Magic", magicNegation) }
                {row("Fire", fireNegation) }
                {row("Lightning", lightningNegation) }
                {row("Holy", holyNegation) }
            </ul>
        </ECard>
    )
}
