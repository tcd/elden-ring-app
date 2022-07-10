import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"

export const AppHeaderV2 = (_props: unknown): JSX.Element => {

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
        <header id="er__header">
            <div className="er__header__content">
                {/* <img src="https://imagedelivery.net/tIYDWdG54zSW0jZ2i4FVmQ/ui/title-background/public" alt="title-background" /> */}
                <img
                    className="er__header__icon"
                    src={imageUrl}
                    alt={title}
                    onClick={handleIconClick}
                />
                <h1 className="er__header__title">
                    {title}
                </h1>
            </div>
        </header>
    )
}
