import { useSelector, useDispatch } from "react-redux"

import { ECard } from "@app/shared"
import { WeaponsSelectors } from "@app/features"
import {
    SpellDetail,
} from "./SpellDetail"

export const SpellDetailPage = (): JSX.Element => {

    const weapon = useSelector(WeaponsSelectors.activeWeapon)

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <SpellDetail spell={weapon}/>
                </div>
                <div className="col-5">
                    <ECard title="Character Status">
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
                    </ECard>
                </div>
            </div>
        </div>
    )
}
