import { useSelector, useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { MuiImg } from "@app/shared"
import { getImageSrc } from "@app/util"

export const AffinitySelect = (_props: unknown): JSX.Element => {

    const activeAffinityName = useSelector(Selectors.Weapons.smithing.activeAffinityName)
    const affinityOptions    = useSelector(Selectors.Weapons.smithing.affinityOptions)

    const $items = affinityOptions.map((name) => {
        return (
            <AffinityOption
                key={`affinity-option-${name}`}
                name={name}
                active={name === activeAffinityName}
            />
        )
    })

    $items.unshift(<UndoEnhancementOption key="affinity-option-undo" />)

    return (
        <Box component="ul" sx={ComponentSx.AffinityModal.options.root}>
            {$items}
        </Box>
    )
}

// =============================================================================

interface AffinityOptionProps {
    name: string
    active: boolean
}

const AffinityOption = ({ name, active }: AffinityOptionProps): JSX.Element => {

    const dispatch = useDispatch()

    const imgSrc = getImageSrc("Weapon Affinity", name, "72")

    const handleClick = () => {
        dispatch(Actions.Weapons.setAffinity({ name }))
    }

    return (
        <Box
            component="li"
            sx={ComponentSx.AffinityModal.options.option}
            onClick={handleClick}
            data-is-selected={active}
        >
            <MuiImg
                src={imgSrc}
                alt={name}
                sx={ComponentSx.AffinityModal.options.image}
            />
            <Box component="span" sx={ComponentSx.AffinityModal.options.title}>
                {name}
            </Box>
        </Box>
    )
}

// =============================================================================

const UndoEnhancementOption = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(Actions.Weapons.removeAffinity())
    }

    return (
        <Box
            component="li"
            sx={ComponentSx.AffinityModal.options.option}
            onClick={handleClick}
        >
            <Box sx={ComponentSx.AffinityModal.options.imagePlaceholder} />
            <Box component="span" sx={ComponentSx.AffinityModal.options.title}>
                Undo Enhancement
            </Box>
        </Box>
    )
}
