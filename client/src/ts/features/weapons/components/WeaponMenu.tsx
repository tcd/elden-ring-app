import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Attributes, Weapon } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { meetsRequirements, getImageSrc } from "@app/util"
import { WeaponDetail } from "./weapon-detail"

export const WeaponMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeWeaponName = useSelector(Selectors.Weapons.active.weaponName)
    const weapon = useSelector(Selectors.Weapons.active.weapon)
    const oldWeapon = useSelector(Selectors.Weapons.old.weapon)
    const weapons = useSelector(Selectors.Builder.api.weapons)
    const weaponTypes = useSelector(Selectors.Builder.api.weaponTypes)
    const newStats = useSelector(Selectors.Weapons.active.calculatedStats)
    const oldStats = useSelector(Selectors.Weapons.old.stats)

    const vigor        = useSelector(Selectors.Builder.attribute.vigor)
    const mind         = useSelector(Selectors.Builder.attribute.mind)
    const endurance    = useSelector(Selectors.Builder.attribute.endurance)
    const strength     = useSelector(Selectors.Builder.attribute.strength)
    const dexterity    = useSelector(Selectors.Builder.attribute.dexterity)
    const intelligence = useSelector(Selectors.Builder.attribute.intelligence)
    const faith        = useSelector(Selectors.Builder.attribute.faith)
    const arcane       = useSelector(Selectors.Builder.attribute.arcane)

    const stats = {
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
    }

    const handleClick = (name: string) => {
        dispatch(Actions.Weapons.setActiveName({ name }))
    }

    const sections = weaponTypes.map((weaponType, index) => {
        const sectionWeapons = weapons.filter(x => x.weapon_type_id == weaponType.id)
        const weaponCells = sectionWeapons.map((weapon) => {
            let classes = "equipment-menu-cell inactive"
            if (weapon.name === activeWeaponName) {
                classes = "equipment-menu-cell active"
            }
            return (
                <div
                    key={`weapon-${weapon.name}`}
                    className={classes}
                    onClick={() => handleClick(weapon.name)}
                >
                    <WeaponImage weapon={weapon} stats={stats} />
                </div>
            )
        })

        const divider = (index + 1 < weaponTypes.length) ? <div className="equipment-menu-section-border"></div> : null

        return (
            <Fragment key={weaponType.plural_name}>
                <section  id={weaponType.plural_name} className="equipment-menu-section">
                    {weaponCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <div className="equipment-menu-grid-column">
                    {sections}
                </div>
            </div>
            <div>
                <WeaponDetail
                    weapon={weapon}
                    oldWeapon={oldWeapon}
                    newStats={newStats}
                    oldStats={oldStats}
                />
            </div>
        </div>
    )
}

export interface WeaponImageProps {
    weapon: Weapon
    stats: Attributes
}
const WeaponImage = ({ weapon, stats }: WeaponImageProps): JSX.Element => {
    const src = getImageSrc("Weapon", weapon.name, "256")
    let cantUse = null
    if (!meetsRequirements(stats, weapon)) {
        cantUse = <span className="requirements-not-met">X</span>
    }
    return (
        <div className="equipment-menu-image-wrapper">
            {cantUse}
            <img
                className="img-fluid"
                src={src}
                alt="weapon"
            />
        </div>
    )
}
