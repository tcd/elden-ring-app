import { useSelector, useDispatch } from "react-redux"

import { Talisman } from "@types"
import { Actions, Selectors } from "@app/state"

export const Talismans = (): JSX.Element => {

    const dispatch = useDispatch()

    const talismans = useSelector(Selectors.Builder.talismans)
    console.log(talismans)

    const handleClick = (number: number) => {
        dispatch(Actions.Builder.openTalismanModal({ number }))
    }

    const slotWithTalisman = (number: number, talisman?: Talisman) => {
        return (
            <li className="equipment-slot equipment-slot-talisman" key={`talisman_${number}`} onClick={() => handleClick(number)}>
                {/* <span>{talisman.name}</span> */}
                <img className="img-fluid" src={talisman.image_url} alt={talisman.name} />
            </li>
        )
    }

    const slotWithoutTalisman = (number: number, _talisman?: Talisman) => {
        const titleString = `Talisman ${number}`
        return (
            <li
                className="equipment-slot equipment-slot-talisman"
                key={`talisman_${number}`}
                title={titleString}
                onClick={() => handleClick(number)}
            >
                {/* <img className="img-fluid" src={talismanImage} alt={`Talisman ${number}`} /> */}
            </li>
        )
    }

    const rows = () => {
        const rows = []
        let number = 1
        for (const t of talismans) {
            if (t == null) {
                rows.push(slotWithoutTalisman(number, t))
            } else {
                rows.push(slotWithTalisman(number, t))
            }
            number++
        }
        return rows
    }

    const effectElements = () => {
        const elements = []
        talismans.map((talisman, i) => {
            if (talisman != null) {
                elements.push(
                    <li key={`talisman_${i + 1}_effect`}>
                        <span>{talisman?.description}</span>
                    </li>
                )
            }
        })
        return elements
    }

    return (
        <>
            <section className="talismans w-100">
                {/* <ul className="d-flex flex-row"> */}
                    {rows()}
                {/* </ul> */}
            </section>
            {/* <section className="talismans w-100">
                <ul>
                    {effectElements()}
                </ul>
            </section> */}
            {/* <section className="w-100 bg-success">
                <TalismanDisplay talisman={t} />
            </section> */}
        </>
    )
}
