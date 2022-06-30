import { useSelector } from "react-redux"

import { Selectors } from "@app/state"

export const AppHeaderV2 = (_props: unknown): JSX.Element => {

    const title = useSelector(Selectors.Core.title)
    const imageUrl = useSelector(Selectors.Core.titleIconUrl)

    return (
        <header id="er__appHeader">
            <div className="er__appHeader__content">
                {/* <img src="https://imagedelivery.net/tIYDWdG54zSW0jZ2i4FVmQ/ui/title-background/public" alt="title-background" /> */}
                <img className="er__appHeader__icon" src={imageUrl} alt={title} />
                <h1 className="er__appHeader__title">{title}</h1>
            </div>
        </header>
    )
}
