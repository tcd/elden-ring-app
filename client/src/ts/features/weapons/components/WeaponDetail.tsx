import {
    mdiSword,
    mdiShield,
    mdiArmFlex,
    mdiHandExtended,
    mdiTshirtCrew,
} from "@mdi/js"

import { Weapon } from "@app/types"
import { ECard } from "@app/shared"
import { isBlank } from "@app/util"

export interface WeaponDetailProps {
    weapon: Weapon
}

export const WeaponDetail = ({ weapon }: WeaponDetailProps): JSX.Element => {

    if (isBlank(weapon)) {
        return null
    }

    const defensePlaceholder = "?" // "0.0"

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ECard title={weapon?.name} className="mt-0">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="stat-row">
                                        <span>{weapon.weapon_type}</span>
                                    </li>
                                    <li className="stat-row">
                                        <span>{weapon.physical_damage_types.join("/")}</span>
                                    </li>
                                    <br />
                                    <li className="stat-row">
                                        <span>{weapon.weapon_skill.name}</span>
                                    </li>
                                    <li className="stat-row">
                                        <span>FP Cost</span>
                                        <span>{"TODO: weapon skill fp cost"}</span>
                                    </li>
                                    <li className="stat-row">
                                        <span>Weight</span>
                                        <span>{weapon.weight.toFixed(1)}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid" src={weapon.image_url} alt="weapon" />
                                </div>
                            </div>
                        </div>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Attack Power" smallTitle={true} iconPath={mdiSword}>
                        <ul>
                            <li className="stat-row">
                                <span>Physical</span>
                                <span>{weapon.attack_physical ?? 0}</span>
                            </li>
                            <li className="stat-row">
                                <span>Magic</span>
                                <span>{weapon.attack_magic ?? 0}</span>
                            </li>
                            <li className="stat-row">
                                <span>Fire</span>
                                <span>{weapon.attack_fire ?? 0}</span>
                            </li>
                            <li className="stat-row">
                                <span>Lightning</span>
                                <span>{weapon.attack_lightning ?? 0}</span>
                            </li>
                            <li className="stat-row">
                                <span>Holy</span>
                                <span>{weapon.attack_holy ?? 0}</span>
                            </li>
                            <li className="stat-row">
                                <span>Critical</span>
                                <span>{weapon.attack_critical ?? 0}</span>
                            </li>
                        </ul>
                    </ECard>
                </div>
                <div className="col">
                    <ECard title="Guarded Damage Negation" smallTitle={true} iconPath={mdiShield}>
                        <ul>
                            <li className="stat-row">
                                <span>Physical</span>
                                <span>{weapon.defense_physical?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Magic</span>
                                <span>{weapon.defense_magic?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Fire</span>
                                <span>{weapon.defense_fire?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Lightning</span>
                                <span>{weapon.defense_lightning?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Holy</span>
                                <span>{weapon.defense_holy?.toFixed(1) ?? defensePlaceholder}</span>
                            </li>
                            <li className="stat-row">
                                <span>Guard Boost</span>
                                <span>{weapon.defense_guard_boost ?? defensePlaceholder}</span>
                            </li>
                        </ul>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Attribute Scaling" smallTitle={true} iconPath={mdiArmFlex}>
                        <div className="row">
                            <div className="col">
                                <div className="stat-row">
                                    <span>Str</span>
                                    <span>{weapon.scaling_strength ?? "-"}</span>
                                </div>
                                <div className="stat-row">
                                    <span>Int</span>
                                    <span>{weapon.scaling_intelligence ?? "-"}</span>
                                </div>
                                <div className="stat-row">
                                    <span>Arc</span>
                                    <span>{weapon.scaling_arcane ?? "-"}</span>
                                </div>
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <div className="stat-row">
                                    <span>Dex</span>
                                    <span>{weapon.scaling_dexterity ?? "-"}</span>
                                </div>
                                <div className="stat-row">
                                    <span>Fai</span>
                                    <span>{weapon.scaling_faith ?? "-"}</span>
                                </div>
                            </div>
                        </div>
                    </ECard>
                </div>
                <div className="col">
                    <ECard title="Attributes Required" smallTitle={true} iconPath={mdiHandExtended}>
                        <div className="row">
                            <div className="col">
                                <div className="stat-row">
                                    <span>Str</span>
                                    <span>{weapon.required_strength ?? "-"}</span>
                                </div>
                                <div className="stat-row">
                                    <span>Int</span>
                                    <span>{weapon.required_intelligence ?? "-"}</span>
                                </div>
                                <div className="stat-row">
                                    <span>Arc</span>
                                    <span>{weapon.required_arcane ?? "-"}</span>
                                </div>
                            </div>
                            <div className="col-1"></div>
                            <div className="col">
                                <div className="stat-row">
                                    <span>Dex</span>
                                    <span>{weapon.required_dexterity ?? "-"}</span>
                                </div>
                                <div className="stat-row">
                                    <span>Fai</span>
                                    <span>{weapon.required_faith ?? "-"}</span>
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
