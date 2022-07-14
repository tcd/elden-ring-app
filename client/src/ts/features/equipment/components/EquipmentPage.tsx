import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"

export const EquipmentPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName("equipment"))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch])

    return (
        <main id="er__equipmentPage__root" className="container-fluid">
        </main>
    )
}
