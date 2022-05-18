import { useSelector, useDispatch } from "react-redux"

import { Weapon } from "@app/types"
import { ErCard } from "@app/shared"
import { WeaponsSelectors } from "@app/features"
import {
    WeaponDetail,
} from "./WeaponDetail"

export const WeaponDetailPage = (): JSX.Element => {

    const weapon = useSelector(WeaponsSelectors.activeWeapon)

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <WeaponDetail weapon={weapon}/>
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
