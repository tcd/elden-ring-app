import {
    DamageTypePlus,
    Spell,
    Weapon,
} from "@app/types"

import { MuiImg } from "../MuiImage"

export interface SpellDamageTypesProps {
    spell: Spell
}

export const SpellDamageTypes = ({ spell }: SpellDamageTypesProps): JSX.Element => {
    const types = damageTypesForSpell(spell)
    return damageTypesComponent(spell.id, types)
}

export interface WeaponDamageTypesProps {
    weapon: Weapon
}

export const WeaponDamageTypes = ({ weapon }: WeaponDamageTypesProps): JSX.Element => {
    const types = damageTypesForWeapon(weapon)
    return damageTypesComponent(weapon.id, types)
}

const damageTypesComponent = (id: number, types: DamageTypePlus[]): JSX.Element => {
    const typeElements = types.map((t) => {
        const key = `${id}-${t}`
        const altText = `${t} Damage`
        const imagePath = `/public/images/damage-types/${t}.png`
        return (
            <div
                key={key}
                className="damage-type-icon-wrapper"
            >
                <MuiImg
                    src={imagePath}
                    alt={altText}
                    title={altText}
                    responsive={true}
                    className="damage-type-icon"
                />
            </div>
        )
    })
    return (
        <div className="damage-types">
            {typeElements}
        </div>
    )
}

const damageTypesForSpell = (spell: Spell): DamageTypePlus[] => {
    const types: DamageTypePlus[] = []
    if (spell.inflicts_physical     === true) { types.push("Physical")     }
    if (spell.inflicts_magic        === true) { types.push("Magic")        }
    if (spell.inflicts_fire         === true) { types.push("Fire")         }
    if (spell.inflicts_lightning    === true) { types.push("Lightning")    }
    if (spell.inflicts_holy         === true) { types.push("Holy")         }
    if (spell.inflicts_blood_loss   === true) { types.push("Blood Loss")   }
    if (spell.inflicts_frost        === true) { types.push("Frost")        }
    if (spell.inflicts_madness      === true) { types.push("Madness")      }
    if (spell.inflicts_poison       === true) { types.push("Poison")       }
    if (spell.inflicts_sleep        === true) { types.push("Sleep")        }
    if (spell.inflicts_death_blight === true) { types.push("Death Blight") }
    if (spell.inflicts_scarlet_rot  === true) { types.push("Scarlet Rot")  }
    return types
}

// FIXME: this doesn't apply anymore
const damageTypesForWeapon = (weapon: Weapon): DamageTypePlus[] => {
    const types: DamageTypePlus[] = []
    if (weapon.attack_physical     > 0) { types.push("Physical")     }
    if (weapon.attack_magic        > 0) { types.push("Magic")        }
    if (weapon.attack_fire         > 0) { types.push("Fire")         }
    if (weapon.attack_lightning    > 0) { types.push("Lightning")    }
    if (weapon.attack_holy         > 0) { types.push("Holy")         }
    if (weapon.damage_blood_loss   > 0) { types.push("Blood Loss")   }
    if (weapon.damage_frost        > 0) { types.push("Frost")        }
    if (weapon.damage_madness      > 0) { types.push("Madness")      }
    if (weapon.damage_poison       > 0) { types.push("Poison")       }
    if (weapon.damage_sleep        > 0) { types.push("Sleep")        }
    if (weapon.damage_death_blight > 0) { types.push("Death Blight") }
    if (weapon.damage_scarlet_rot  > 0) { types.push("Scarlet Rot")  }
    return types
}
