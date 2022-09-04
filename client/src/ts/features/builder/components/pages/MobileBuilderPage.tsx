import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import { isBlank } from "@app/util"
import { Selectors } from "@app/state"
import {
    ErPage,
    CharacterStatus,
    Attributes,
    Overview,
    useHash,
} from "@app/features"

import { EquipmentSlots } from "../equipment-slots"

export const MobileBuilderPage = (_props: unknown): JSX.Element => {

    const tab = useHash()
    const navigate = useNavigate()

    const startingClassName = useSelector(Selectors.StartingClass.startingClassName)

    useEffect(() => {
        if (isBlank(startingClassName)) {
            navigate("/starting-class")
        } else if (tab === "") {
            navigate("#level", { replace: true })
        }
    }, [startingClassName, navigate, tab])

    let $content: JSX.Element = null
    switch (tab) {
        case "level":     $content = <LevelUpMenu />; break
        case "status":    $content = <CharacterStatus />; break
        case "equipment": $content = <EquipmentSlots />; break
        default: break
    }

    return (
        <ErPage pageName="builder" id="er__builder__root" sx={{ width: "90vw" }}>
            <div id="er__builder__body">
                {$content}
            </div>
        </ErPage>
    )
}

// =============================================================================

const LevelUpMenu = (_props: unknown): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Overview />
            <Attributes />
        </Box>
    )
}

