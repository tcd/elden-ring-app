import capitalize from "lodash/capitalize"
import { useDispatch } from "react-redux"
import { IconButton } from "@mui/material"
import {
    ArrowForwardIos as ArrowForwardIcon,
    ArrowBackIosNew as ArrowBackIcon,
} from "@mui/icons-material"

import { AttributeName } from "@app/types"
import { Audio } from "@app/util"
import { Actions } from "@app/state"

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
            <span>{capitalize(name)}</span>
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
