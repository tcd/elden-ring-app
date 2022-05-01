import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Weapon } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { WeaponDetail } from "../WeaponDetail"

export const WeaponMenu = (): JSX.Element => {

    const dispatch = useDispatch()

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
            let classes = "weapon-menu-cell inactive"
            if (weapon.name === activeWeaponName) {
                classes = "weapon-menu-cell active"
            }
            return (
                <div
                    key={`weapon-${weapon.name}`}
                    className={classes}
                    onClick={() => handleClick(weapon.name)}
                >
                    {weaponImage(weapon)}
                </div>
            )
        })

        return (
            <Fragment key={weaponType.plural_name}>
                <section  id={weaponType.plural_name} className="weapon-menu-section">
                    {/* {weaponType.plural_name} */}
                    {weaponCells}
                </section>
                <div className="weapon-menu-section-border"></div>
            </Fragment>
        )
    })

    return (
        <div className="weapon-menu container">
            <div className="row">
                <div className="col-5">
                    <div className="weapon-menu-grid-column">
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


// const WeaponMenuRow = (weaponType: string, weapons: Weapon[]): JSX.Element => {
//
//     return (
//         <div className="weapon-menu-row"></div>
//     )
// }

// const WeaponMenuCell = (weapon: Weapon): JSX.Element => {
//
//     return (
//         <div className="row"></div>
//     )
// }

const weaponImage = (weapon: Weapon) => {
    const folder = weapon.is_shield ? "shields" : "weapons"
    const imagePath = `/public/images/${folder}/${weapon.name}.png`
    return (
        <div className="weapon-menu-image-wrapper">
            <img
                className="img-fluid"
                src={imagePath}
                alt="weapon"
            />
        </div>
    )
}
