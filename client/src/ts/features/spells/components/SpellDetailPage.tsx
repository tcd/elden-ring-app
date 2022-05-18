import { useSelector, useDispatch } from "react-redux"

import { ErCard } from "@app/shared"
import { Selectors } from "@app/state"
import {
    SpellDetail,
} from "./SpellDetail"

export const SpellDetailPage = (): JSX.Element => {

    const spell = useSelector(Selectors.Spells.activeSpell)

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <SpellDetail spell={spell}/>
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
