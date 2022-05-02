import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Attributes, Spell } from "@app/types"
import { meetsRequirements } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { SpellDetail } from "./SpellDetail"

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

    const stats = useSelector(Selectors.Builder.attributes)
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
                    className="equipment-menu-cell"
                    onClick={() => handleClick(spell.name)}
                >
                    {spellImage(spell, stats)}
                </div>
            )
        })

        return (
            <React.Fragment key={spellCategory}>
                <section id={spellCategory} className="equipment-menu-section">
                    {cells}
                </section>
                <div className="equipment-menu-section-border"></div>
            </React.Fragment>
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
                    <SpellDetail spell={spell} />
                </div>
            </div>
        </div>
    )
}

const spellImage = (spell: Spell, stats: Attributes) => {
    let cantUse = null
    if (!meetsRequirements(stats, spell)) {
        cantUse = <span className="requirements-not-met">X</span>
    }
    return (
        <div className="equipment-menu-image-wrapper">
            {cantUse}
            <img
                className="img-fluid"
                src={spell.image_url}
                alt={spell.name}
            />
        </div>
    )
}
