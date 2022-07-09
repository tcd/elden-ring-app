import { useSelector } from "react-redux"

import { getImageSrcManual } from "@app/util"
import { Selectors } from "@app/state"

const headerBackgroundSrc = getImageSrcManual("ui/header/400", "public")

export const MobileHeader = (_props: unknown): JSX.Element => {
    const title = useSelector(Selectors.Core.title)
    const imageUrl = useSelector(Selectors.Core.titleIconUrl)

    return (
        <header id="er__appHeader__root">
            <img id="er__appHeader__background" src={headerBackgroundSrc} alt="header background" />
            <div id="er__appHeader__content">
                <img className="er__appHeader__icon" src={imageUrl} alt={title} />
                <h1 className="er__appHeader__title">{title}</h1>
            </div>
        </header>
    )
}
