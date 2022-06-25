import { useSelector, useDispatch } from "react-redux"

import {
    Talisman,
    TalismanSlotId,
    TalismanSlotIds,
} from "@app/types"
import {
    Actions,
    Selectors,
} from "@app/state"
import { getImageSrc } from "@app/util"

export const Talismans = (): JSX.Element => {

    const dispatch = useDispatch()

    const talismans = useSelector(Selectors.Talismans.array)

    const handleClick = (id: TalismanSlotId) => {
        dispatch(Actions.Talismans.openTalismansMenu({ id }))
    }

    const slotWithTalisman = (id: TalismanSlotId, talisman?: Talisman) => {
        const src = getImageSrc("Talisman", talisman.name, "256")
        return (
            <li className="equipment-slot equipment-slot-filled equipment-slot-talisman" key={`talisman_${id}`} onClick={() => handleClick(id)}>
                {/* <span>{talisman.name}</span> */}
                <img className="img-fluid" src={src} alt={talisman.name} />
            </li>
        )
    }

    const slotWithoutTalisman = (id: TalismanSlotId, _talisman?: Talisman) => {
        const titleString = `Talisman ${id}`
        return (
            <li
                className="equipment-slot equipment-slot-talisman"
                key={`talisman_${id}`}
                title={titleString}
                onClick={() => handleClick(id)}
            >
                {/* <img className="img-fluid" src={talismanImage} alt={`Talisman ${number}`} /> */}
            </li>
        )
    }

    const rows = () => {
        const rows = []
        for (const [index, talisman] of talismans.entries()) {
            const id = TalismanSlotIds[index]
            if (talisman == null) {
                rows.push(slotWithoutTalisman(id, talisman))
            } else {
                rows.push(slotWithTalisman(id, talisman))
            }
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
