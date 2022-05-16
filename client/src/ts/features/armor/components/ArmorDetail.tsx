import {
    mdiShield,
    mdiTshirtCrew,
    mdiTshirtCrewOutline,
} from "@mdi/js"

import { Armor } from "@app/types"
import { isBlank } from "@app/util"
import {
    ECard,
    StatRow,
} from "@app/shared"

export interface ArmorDetailProps {
    armor: Armor
}

export const ArmorDetail = ({ armor }: ArmorDetailProps): JSX.Element => {

    if (isBlank(armor)) {
        return null
    }

    const defensePlaceholder = "?" // "0.0"
    const resistancePlaceholder = "?" // "0"

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ECard title={armor.name}>
                        <div className="row">
                            <div className="col">
                                <ul className="h-100 flex-between-column">
                                    <li className="stat-row">
                                        <span>{armor.armor_type}</span>
                                    </li>
                                    <li className="stat-row">
                                        <span>Weight</span>
                                        <span>{armor.weight.toFixed(1)}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid" src={armor?.image_url} alt={armor.display_name + "image"} />
                                </div>
                            </div>
                        </div>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            <li className="stat-row">
                                <span>Physical</span>
                                <span>{armor.physical?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>VS Strike</span>
                                <span>{armor.vs_strike?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>VS Slash</span>
                                <span>{armor.vs_slash?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>VS Pierce</span>
                                <span>{armor.vs_pierce?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Magic</span>
                                <span>{armor.magic?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Fire</span>
                                <span>{armor.fire?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Lightning</span>
                                <span>{armor.lightning?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Holy</span>
                                <span>{armor.holy?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                        </ul>
                    </ECard>
                </div>
                <div className="col">
                    <ECard title="Attack Power" smallTitle={true} iconPath={mdiTshirtCrew}>
                        <ul>
                            <li className="stat-row">
                                <span>Immunity</span>
                                <span>{armor.immunity ?? resistancePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Robustness</span>
                                <span>{armor.robustness ?? resistancePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Focus</span>
                                <span>{armor.focus ?? resistancePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Vitality</span>
                                <span>{armor.vitality ?? resistancePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Poise</span>
                                <span>{armor.poise ?? resistancePlaceholder}</span>
                            </li>
                        </ul>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Passive Effects" smallTitle={true} iconPath={mdiTshirtCrewOutline}>
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
