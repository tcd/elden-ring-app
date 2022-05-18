import { useSelector, useDispatch } from "react-redux"

import { ErCard } from "@app/shared"
import { TalismansSelectors } from "@app/features"
import {
    TalismanDetail,
} from "./TalismanDetail"

export const TalismanDetailPage = (): JSX.Element => {

    const talisman = useSelector(TalismansSelectors.active)

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    {talisman && <TalismanDetail talisman={talisman}/>}
                </div>
                <div className="col-5">
                    <ErCard title="Character Status">
                        <div className="row">
                            <div className="col">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta vero nulla illo assumenda! Facere voluptatibus deserunt quidem minima saepe, aliquam fuga officiis sunt quasi natus, reiciendis harum eaque.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta vero nulla illo assumenda! Facere voluptatibus deserunt quidem minima saepe, aliquam fuga officiis sunt quasi natus, reiciendis harum eaque.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta vero nulla illo assumenda! Facere voluptatibus deserunt quidem minima saepe, aliquam fuga officiis sunt quasi natus, reiciendis harum eaque.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta vero nulla illo assumenda! Facere voluptatibus deserunt quidem minima saepe, aliquam fuga officiis sunt quasi natus, reiciendis harum eaque.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta vero nulla illo assumenda! Facere voluptatibus deserunt quidem minima saepe, aliquam fuga officiis sunt quasi natus, reiciendis harum eaque.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem dicta vero nulla illo assumenda! Facere voluptatibus deserunt quidem minima saepe, aliquam fuga officiis sunt quasi natus, reiciendis harum eaque.
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
        </div>
    )
}
