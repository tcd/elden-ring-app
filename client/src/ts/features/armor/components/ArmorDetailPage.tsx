import { useSelector } from "react-redux"

import { ArmorSelectors } from "@app/features"
import {
    ArmorDetail,
} from "./ArmorDetail"

export const ArmorDetailPage = (): JSX.Element => {

    const armor = useSelector(ArmorSelectors.active)

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ArmorDetail armor={armor}/>
                </div>
            </div>
        </div>
    )
}
