import { capitalize } from "lodash"
import { useSelector, useDispatch } from "react-redux"
import { mdiArmFlex } from "@mdi/js"
import { IconButton } from "@mui/material"
import {
    ArrowForwardIos as ArrowForwardIcon,
    ArrowBackIosNew as ArrowBackIcon,
} from "@mui/icons-material"

import { AttributeName } from "@app/types"
import { Audio } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { ErCard } from "@app/shared"

export interface AttributeRowProps {
    name: AttributeName
    value: number
}

export const AttributeRow = ({ name, value }: AttributeRowProps): JSX.Element => {

    const dispatch = useDispatch()

    const incrementAttribute = () => {
        Audio.slider()
        dispatch(Actions.LevelUp.incrementAttribute({ attribute: name }))
    }

    const decrementAttribute = () => {
        Audio.slider()
        dispatch(Actions.LevelUp.decrementAttribute({ attribute: name }))
    }

    return (
        <li className="attribute-row">
            <span className="text-capitalize">{capitalize(name)}</span>
            <div className="attribute-control">
                <IconButton size="small" onClick={decrementAttribute}>
                    <ArrowBackIcon />
                </IconButton>
                <span className="attribute-value">
                    {value}
                </span>
                <IconButton size="small" onClick={incrementAttribute}>
                    <ArrowForwardIcon />
                </IconButton>
            </div>
        </li>
    )
}

export const Attributes = (): JSX.Element => {

    const vigor        = useSelector(Selectors.Meta.Levels.corrected.vigor)
    const mind         = useSelector(Selectors.Meta.Levels.corrected.mind)
    const endurance    = useSelector(Selectors.Meta.Levels.corrected.endurance)
    const strength     = useSelector(Selectors.Meta.Levels.corrected.strength)
    const dexterity    = useSelector(Selectors.Meta.Levels.corrected.dexterity)
    const intelligence = useSelector(Selectors.Meta.Levels.corrected.intelligence)
    const faith        = useSelector(Selectors.Meta.Levels.corrected.faith)
    const arcane       = useSelector(Selectors.Meta.Levels.corrected.arcane)

    const attributes: Record<AttributeName, Integer> = {
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
