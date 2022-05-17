import {
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import { Spell } from "@app/types"
import { ECard, StatRow, StatRowPlus, StatRowProps } from "@app/shared"
import { isBlank, numberOrDash, SpecialCharacters } from "@app/util"

export interface SpellDetailProps {
    spell: Spell
}

export const SpellDetail = ({ spell }: SpellDetailProps): JSX.Element => {

    if (isBlank(spell)) {
        return null
    }

    const required_intelligence = numberOrDash(spell?.required_intelligence, "0")
    const required_faith        = numberOrDash(spell?.required_faith, "0")
    const required_arcane       = numberOrDash(spell?.required_arcane, "0")

    const requirementsData: StatRowProps[] = [
        { title: "Int", value: required_intelligence },
        { title: "Fai", value: required_faith        },
        { title: "Arc", value: required_arcane       },
    ]

    const requirementsElements = requirementsData.map(({ title, value }) => {
        const key = `spell-detail-${title}-requirement`
        return (
            <div className="col-3" key={key}>
                <StatRow title={title} value={value}/>
            </div>
        )
    })

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ECard title={spell.name} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <StatRow title={spell?.spell_type}     value={null} />
                                    <StatRow title={spell?.bonus_category} value={null} />
                                    <br />
                                    <StatRowPlus title="No. Held" value_1="1" value_2="99" />
                                    <StatRowPlus title="Stored"   value_1="0" value_2="600" />
                                    <StatRow title="FP Cost"    value={spell?.fp_cost} />
                                    <StatRow title="Slots Used" value={spell?.slots_required} />
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
                            <div className="col-6">
                                <div className="row">
                                    {requirementsElements}
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
