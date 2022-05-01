import { useSelector, useDispatch } from "react-redux"

import { Spell } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { WeaponsSelectors, BuilderSelectors } from "@app/features"
import { SpellDetail } from "../SpellDetail"
import React from "react"

const spellCategories = [
    // Incantations
    "Bestial Incantations",
    "Blood Incantations",
    "Dragon Communion Incantations",
    "Dragon Cult Incantations",
    "Erdtree Incantations",
    "Fire Giant Incantations",
    "Fire Monk Incantations",
    "Frenzied Flame Incantations",
    "Godskin Apostle Incantations",
    "Golden Order Incantations",
    "Servants OF Rot Incantations",
    "Two Fingers Incantations",
    // Sorceries
    "Aberrant Sorceries",
    "Carian Sorceries",
    "Claymen Sorceries",
    "Cold Sorceries",
    "Crystalian Sorceries",
    "Death Sorceries",
    "Full Moon Sorceries",
    "Glintstone Sorceries",
    "Gravity Sorceries",
    "Loretta's Sorceries",
    "Magma Sorceries",
    "Night Sorceries",
    "Primeval Sorceries",
]

export const SpellMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const spell = useSelector(Selectors.Spells.activeSpell)
    const spells = useSelector(Selectors.Spells.all)

    const handleClick = (name: string) => {
        dispatch(Actions.Spells.setActiveName({ name }))
    }

    const sections = spellCategories.map((spellCategory) => {
        const sectionSpells = spells.filter(x => x.bonus_category == spellCategory)
        const cells = sectionSpells.map((spell) => {
            return (
                <div
                    key={`spell-${spell.id}`}
                    className="weapon-menu-cell"
                    onClick={() => handleClick(spell.name)}
                >
                    {spellImage(spell)}
                </div>
            )
        })

        return (
            <React.Fragment key={spellCategory}>
                <section id={spellCategory} className="weapon-menu-section">
                    {cells}
                </section>
                <div className="weapon-menu-section-border"></div>
            </React.Fragment>
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
                    <SpellDetail spell={spell} />
                </div>
            </div>
        </div>
    )
}

const spellImage = (spell: Spell) => {
    return (
        <div className="weapon-menu-image-wrapper">
            <img
                className="img-fluid"
                src={spell.image_url}
                alt={spell.name}
            />
        </div>
    )
}
