import { useHotkeys } from "react-hotkeys-hook"

import { Page } from "@app/shared"
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

    return (
        <Page pageName="about">
            <p>This is a development page. You shouldn{SpecialCharacters.singleQuote}t be here.</p>
            <button onClick={playClick}>click</button>
            <button onClick={playSlider}>slider</button>
        </Page>
    )
}
