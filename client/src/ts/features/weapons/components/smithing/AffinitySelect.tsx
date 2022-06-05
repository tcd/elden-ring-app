import { useSelector, useDispatch } from "react-redux"
import { Weapon } from "@app/types"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import {
    ErCard,
    StatRow,
    StatRowProps,
    SelectOption,
    CustomSelect,
} from "@app/shared"

const affinities = [
    { "name": "Standard",  "id":  1 },
    { "name": "Heavy",     "id":  2 },
    { "name": "Keen",      "id":  3 },
    { "name": "Quality",   "id":  4 },
    { "name": "Fire",      "id":  5 },
    { "name": "Flame Art", "id":  6 },
    { "name": "Lightning", "id":  7 },
    { "name": "Sacred",    "id":  8 },
    { "name": "Magic",     "id":  9 },
    { "name": "Cold",      "id": 10 },
    { "name": "Poison",    "id": 11 },
    { "name": "Blood",     "id": 12 },
    { "name": "Occult",    "id": 13 },
]

const options: SelectOption[] = affinities.map((name) => {
    return {
        label: name,
        value: name,
        imageUrl: `/public/images/weapon-affinities/${name}.png`,
    }
})

export const AffinitySelect = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const handleChange = (value: string): void => {
        dispatch(Actions.Weapons.setAffinity({ name: value }))
        return null
    }

    return (
        <CustomSelect
            label="Affinity Granted"
            selectedValue="Standard"
            options={options}
            onChange={handleChange}
        />
    )
    return null
}
