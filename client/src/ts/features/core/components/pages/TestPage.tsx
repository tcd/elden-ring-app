import { Page } from "@app/shared"
import { SpecialCharacters, Audio } from "@app/util"

export const TestPage = (_props: unknown): JSX.Element => {

    const playClick = async () => {
        await Audio.menuClick()
    }

    const playSlider = async () => {
        await Audio.slider()
    }

    return (
        <Page pageName="about">
            <p>This is a development page. You shouldn{SpecialCharacters.singleQuote}t be here.</p>
            <button onClick={playClick}>click</button>
            <button onClick={playSlider}>slider</button>
        </Page>
    )
}
