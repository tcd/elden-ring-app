import { useEffect } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import { ThemeVars } from "@app/theme"
import { ErPage } from "@app/shared"
import { SpecialCharacters, Audio } from "@app/util"

export const TestPage = (_props: unknown): JSX.Element => {

    const playClick = () => {
        Audio.menuClick()
    }

    const playSlider = () => {
        Audio.slider()
    }

    useHotkeys("left, right", playClick)
    useHotkeys("up, down", playSlider)
    useHotkeys("left, right", () => { console.log("left or right")})
    useHotkeys("up, down", () => { console.log("up or down")})

    useEffect(() => {
        logCssVariables()
    }, [])

    return (
        <ErPage pageName="about">
            <p>This is a development page. You shouldn{SpecialCharacters.singleQuote}t be here.</p>
            <button onClick={playClick}>click</button>
            <button onClick={playSlider}>slider</button>
        </ErPage>
    )
}

// =============================================================================

const logCssVariables = () => {
    const sass = {
        hex: {
            modalColorBg: getComputedStyle(document.documentElement).getPropertyValue("--hex-modal-color-bg").trim(),
            itemBg:       getComputedStyle(document.documentElement).getPropertyValue("--hex-affinity-item-color-bg").trim(),
            itemActiveBg: getComputedStyle(document.documentElement).getPropertyValue("--hex-affinity-item-color-active-bg").trim(),
        },
        hsl: {
            modalColorBg: getComputedStyle(document.documentElement).getPropertyValue("--hsl-modal-color-bg").trim(),
            itemBg:       getComputedStyle(document.documentElement).getPropertyValue("--hsl-affinity-item-color-bg").trim(),
            itemActiveBg: getComputedStyle(document.documentElement).getPropertyValue("--hsl-affinity-item-color-active-bg").trim(),
        },
    }

    console.log({
        sass,
        sx: ThemeVars?.debugging,
    })
}
