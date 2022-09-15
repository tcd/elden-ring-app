
import type { Spell } from "@app/types"
import { StatRow, StatRowPlus, StatRowProps } from "@app/features/common"
import { getImageSrc, isBlank, numberOrDash } from "@app/util"

export interface SpellDetailProps {
    spell: Spell
}

export const SpellDetail = ({ spell }: SpellDetailProps): JSX.Element => {

    if (isBlank(spell)) {
        return null
    }

    return <span>FIXME: rebuild SpellDetail component</span>

    // const required_intelligence = numberOrDash(spell?.required_intelligence, "0")
    // const required_faith        = numberOrDash(spell?.required_faith,        "0")
    // const required_arcane       = numberOrDash(spell?.required_arcane,       "0")
    //
    // const requirementsData: StatRowProps[] = [
    //     { title: "Int", value: required_intelligence },
    //     { title: "Fai", value: required_faith        },
    //     { title: "Arc", value: required_arcane       },
    // ]
    //
    // const requirementsElements = requirementsData.map(({ title, value }) => {
    //     const key = `spell-detail-${title}-requirement`
    //     return (
    //         <div className="col-3" key={key}>
    //             <StatRow title={title} value={value}/>
    //         </div>
    //     )
    // })
    //
    // const src = getImageSrc("Spell", spell.name, "256")
    //
    // return (
    //     <div className="er__equipmentDetail">
    //         <div className="row">
    //             <div className="col">
    //                 <ErCard title={spell.name} className="mt-0">
    //                     <div className="row">
    //                         <div className="col">
    //                             <ul>
    //                                 <StatRow title={spell?.spell_type}     value={null} />
    //                                 <StatRow title={spell?.bonus_category} value={null} />
    //                                 <br />
    //                                 <StatRowPlus title="No. Held" value_1="1" value_2="99" />
    //                                 <StatRowPlus title="Stored"   value_1="0" value_2="600" />
    //                                 <StatRow title="FP Cost"    value={spell?.fp_cost} />
    //                                 <StatRow title="Slots Used" value={spell?.slots_required} />
    //                             </ul>
    //                         </div>
    //                         <div className="col-1"></div>
    //                         <div className="col er__equipmentDetail__imageColumn">
    //                             <div className="er__equipmentDetail__imageWrapper">
    //                                 <img className="img-not-using-bootstrap-anymore-fluid" src={src} alt={spell.name}/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </ErCard>
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col">
    //                 <ErCard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended}>
    //                     <div className="row">
    //                         <div className="col-6">
    //                             <div className="row">
    //                                 {requirementsElements}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </ErCard>
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col">
    //                 <ErCard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrew}>
    //                     <ul>
    //                         <li> - </li>
    //                         <li> - </li>
    //                         <li> - </li>
    //                     </ul>
    //                 </ErCard>
    //             </div>
    //         </div>
    //     </div>
    // )
}
