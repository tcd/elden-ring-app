import { useSelector, useDispatch } from "react-redux"
import { mdiArmFlex } from "@mdi/js"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

import { AttributeNames } from "@types"
import { Actions, Selectors } from "@app/state"
import { ECard } from "@app/shared"

export const Attributes = (): JSX.Element => {

    const dispatch = useDispatch()
    const attributes = useSelector(Selectors.Builder.attributes)

    const incrementAttribute = (name: string) => {
        dispatch(Actions.Builder.incrementAttribute({ name }))
    }

    const decrementAttribute = (name: string) => {
        dispatch(Actions.Builder.decrementAttribute({ name }))
    }

    const row = (name: string) => {
        return (
            <li className="attribute-row" key={`attribute_${name}`}>
                <span className="text-capitalize">{name}</span>
                <div className="attribute-control">
                    <IconButton size="small" onClick={() => decrementAttribute(name)}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <span className="attribute-value">
                        {attributes[name]}
                    </span>
                    <IconButton size="small" onClick={() => incrementAttribute(name)}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </li>
        )
    }

    const rows = AttributeNames.map(attr => row(attr))

    return (
        <ECard title="Attribute Points" iconPath={mdiArmFlex}>
            <ul>
                {rows}
            </ul>
        </ECard>
    )
}
