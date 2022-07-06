import { capitalize } from "lodash"
import { useSelector, useDispatch } from "react-redux"
import { mdiArmFlex } from "@mdi/js"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

import { AttributeName, Attributes as TAttributes } from "@app/types"
import { ErCard } from "@app/shared"
import { Actions, Selectors } from "@app/state"

export interface AttributeRowProps {
    name: AttributeName
    value: number
}

export const AttributeRow = ({ name, value }: AttributeRowProps): JSX.Element => {

    const dispatch = useDispatch()

    const incrementAttribute = () => {
        dispatch(Actions.Builder.incrementAttribute({ name }))
    }

    const decrementAttribute = () => {
        dispatch(Actions.Builder.decrementAttribute({ name }))
    }

    return (
        <li className="attribute-row">
            <span className="text-capitalize">{capitalize(name)}</span>
            <div className="attribute-control">
                <IconButton size="small" onClick={decrementAttribute}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <span className="attribute-value">
                    {value}
                </span>
                <IconButton size="small" onClick={incrementAttribute}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </li>
    )
}

export const Attributes = (): JSX.Element => {

    const vigor        = useSelector(Selectors.Builder.attribute.vigor)
    const mind         = useSelector(Selectors.Builder.attribute.mind)
    const endurance    = useSelector(Selectors.Builder.attribute.endurance)
    const strength     = useSelector(Selectors.Builder.attribute.strength)
    const dexterity    = useSelector(Selectors.Builder.attribute.dexterity)
    const intelligence = useSelector(Selectors.Builder.attribute.intelligence)
    const faith        = useSelector(Selectors.Builder.attribute.faith)
    const arcane       = useSelector(Selectors.Builder.attribute.arcane)

    const attributes: TAttributes = {
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
    }

    const attributeRows = Object.entries(attributes).map(([name, value]) => {
        return <AttributeRow
            name={name as AttributeName}
            value={value}
            key={`attribute-leveling-row-${name}`}
        />
    })

    return (
        <ErCard title="Attribute Points" iconPath={mdiArmFlex}>
            <ul>
                {attributeRows}
            </ul>
        </ErCard>
    )
}
