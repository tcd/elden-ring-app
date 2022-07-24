import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { CharacterStatus } from "@app/features/builder"
import { SpellDetail, SpellMenuImage } from "@app/features/spells/components"

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

    const vigor        = useSelector(Selectors.Meta.Levels.corrected.vigor)
    const mind         = useSelector(Selectors.Meta.Levels.corrected.mind)
    const endurance    = useSelector(Selectors.Meta.Levels.corrected.endurance)
    const strength     = useSelector(Selectors.Meta.Levels.corrected.strength)
    const dexterity    = useSelector(Selectors.Meta.Levels.corrected.dexterity)
    const intelligence = useSelector(Selectors.Meta.Levels.corrected.intelligence)
    const faith        = useSelector(Selectors.Meta.Levels.corrected.faith)
    const arcane       = useSelector(Selectors.Meta.Levels.corrected.arcane)

    const attributes = {
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
    }

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
                    className="er__equipmentMenu__gridCell"
                    onClick={() => handleClick(spell.name)}
                >
                    <SpellMenuImage spell={spell} attributes={attributes} />
                </div>
            )
        })

        return (
            <Fragment key={spellCategory}>
                <section id={spellCategory} className="er__equipmentMenu__gridSection">
                    {cells.length > 0 ? cells : spellCategory}
                </section>
                <div className="er__equipmentMenu__gridSectionBorder"></div>
            </Fragment>
        )
    })

    return (
        <div className="er__equipmentMenu container">
            <div className="row">
                <div className="col-4">
                    <div className="er__equipmentMenu__gridColumn">
                        {sections}
                    </div>
                </div>
                <div className="col-4">
                    <SpellDetail spell={spell} />
                </div>
                <div className="col-3">
                    <CharacterStatus />
                </div>
            </div>
        </div>
    )
}
