import { useDispatch, useSelector } from "react-redux"

import { getImageSrcManual } from "@app/util"
import { Actions, Selectors } from "@app/state"

// const headerBackgroundSrc = getImageSrcManual("ui/header/400", "public")

export const MobileHeader = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const title = useSelector(Selectors.Core.title)
    const imageUrl = useSelector(Selectors.Core.titleIconUrl)
    const sideNavOpened = useSelector(Selectors.Core.sideNavOpened)

    const handleIconClick = (_event) => {
        if (!sideNavOpened) {
            dispatch(Actions.Core.openSideNav())
        }
    }

    return (
        <header id="er__appHeader__root">
            {/* <img id="er__appHeader__background" src={headerBackgroundSrc} alt="header background" /> */}
            <div id="er__appHeader__background"></div>
            <div id="er__appHeader__content">
                <img
                    className="er__appHeader__icon"
                    src={imageUrl}
                    alt={title}
                    onClick={handleIconClick}
                />
                <h1 className="er__appHeader__title">
                    {title}
                </h1>
            </div>
        </header>
    )
}
