import { useSelector, useDispatch } from "react-redux"

import { Armor } from "@app/types"
import { ErCard } from "@app/shared"
import { ArmorSelectors } from "@app/features"
import {
    ArmorDetail,
} from "./ArmorDetail"

export const ArmorDetailPage = (): JSX.Element => {

    const armor = useSelector(ArmorSelectors.active)

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <ArmorDetail armor={armor}/>
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
