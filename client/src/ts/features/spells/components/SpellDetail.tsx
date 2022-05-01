import {
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import { Spell } from "@app/types"
import { ECard } from "@app/shared"
import { isBlank, numberOrDash } from "@app/util"

export interface SpellDetailProps {
    spell: Spell
}

export const SpellDetail = ({ spell }: SpellDetailProps): JSX.Element => {

    if (isBlank(spell)) {
        return null
    }

    const required_intelligence = numberOrDash(spell?.required_intelligence)
    const required_faith        = numberOrDash(spell?.required_faith)
    const required_arcane       = numberOrDash(spell?.required_arcane)

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ECard title={spell.name} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="stat-row">
                                        <span>{spell.spell_type}</span>
                                    </li>
                                    <li className="stat-row">
                                        <span>{spell.bonus_category}</span>
                                    </li>
                                    <br />
                                    <li className="stat-row">
                                        <span>FP Cost</span>
                                        <span>{spell.fp_cost_alt}</span>
                                    </li>
                                    <li className="stat-row">
                                        <span>Slots Used</span>
                                        <span>{spell.slots_required}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid" src={spell.image_url} alt={spell.name}/>
                                </div>
                            </div>
                        </div>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended}>
                        <div className="row">
                            <div className="col">
                                <div className="stat-row">
                                    <span>Int</span>
                                    <span>{required_intelligence}</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="stat-row">
                                    <span>Fai</span>
                                    <span>{required_faith}</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="stat-row">
                                    <span>Arc</span>
                                    <span>{required_arcane}</span>
                                </div>
                            </div>
                        </div>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrew}>
                        <ul>
                            <li> - </li>
                            <li> - </li>
                            <li> - </li>
                        </ul>
                    </ECard>
                </div>
            </div>
        </div>
    )

}
