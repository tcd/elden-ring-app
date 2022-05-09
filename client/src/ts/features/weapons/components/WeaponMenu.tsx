import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Attributes, Weapon } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { WeaponDetail } from "./WeaponDetail"
import { meetsRequirements } from "@app/util"

export const WeaponMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const stats = useSelector(Selectors.Builder.attributes)
    const activeWeaponName = useSelector(Selectors.Weapons.activeWeaponName)
    const weapon = useSelector(Selectors.Weapons.activeWeapon)
    const weapons = useSelector(Selectors.Builder.api.weapons)
    const weaponTypes = useSelector(Selectors.Builder.api.weaponTypes)

    const handleClick = (name: string) => {
        dispatch(Actions.Weapons.setActiveName({ name }))
    }

    const sections = weaponTypes.map((weaponType) => {
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
                    {weaponImage(weapon, stats)}
                </div>
            )
        })

        return (
            <Fragment key={weaponType.plural_name}>
                <section  id={weaponType.plural_name} className="equipment-menu-section">
                    {/* {weaponType.plural_name} */}
                    {weaponCells}
                </section>
                <div className="equipment-menu-section-border"></div>
            </Fragment>
        )
    })

    return (
        <div className="equipment-menu container">
            <div className="row">
                <div className="col-5">
                    <div className="equipment-menu-grid-column">
                        {sections}
                    </div>
                </div>
                <div className="col-7">
                    <WeaponDetail weapon={weapon} />
                </div>
            </div>
        </div>
    )
}


const weaponImage = (weapon: Weapon, stats: Attributes) => {
    let cantUse = null
    if (!meetsRequirements(stats, weapon)) {
        cantUse = <span className="requirements-not-met">X</span>
    }
    return (
        <div className="equipment-menu-image-wrapper">
            {cantUse}
            <img
                className="img-fluid"
                src={weapon.image_url}
                alt="weapon"
            />
        </div>
    )
}