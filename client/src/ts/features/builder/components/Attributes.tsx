import { useSelector, useDispatch } from "react-redux"
import { mdiArmFlex } from "@mdi/js"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

import { AttributeNames } from "@types"
import { Actions, Selectors } from "@app/state"
import { ECard } from "@app/shared"

export interface AttributeRowProps {
    name: string
    value: number
}

export const AttributeRow = ({ name, value }: AttributeRowProps): JSX.Element => {

    const dispatch = useDispatch()

    const incrementAttribute = () => {
        dispatch(Actions.Builder.incrementAttribute({ name: name.toLowerCase() }))
    }

    const decrementAttribute = () => {
        dispatch(Actions.Builder.decrementAttribute({ name: name.toLowerCase() }))
    }

    return (
        <li className="attribute-row">
            <span className="text-capitalize">{name}</span>
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

    const attributeData: AttributeRowProps[] = [
        { name: "Vigor",        value: vigor        },
        { name: "Mind",         value: mind         },
        { name: "Endurance",    value: endurance    },
        { name: "Strength",     value: strength     },
        { name: "Dexterity",    value: dexterity    },
        { name: "Intelligence", value: intelligence },
        { name: "Faith",        value: faith        },
        { name: "Arcane",       value: arcane       },
    ]

    const attributeRows = attributeData.map(({ name, value }) => {
        return <AttributeRow
            name={name}
            value={value}
            key={`attribute-leveling-row-${name}`}
        />
    })

    return (
        <ECard title="Attribute Points" iconPath={mdiArmFlex}>
            <ul>
                {attributeRows}
            </ul>
        </ECard>
    )
}
