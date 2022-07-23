import { IconNamesKey } from "@app/constants"
import { IconUrls } from "@app/util"

export interface ErIconProps {
    icon: IconNamesKey
}

export const ErIcon = ({ icon }: ErIconProps): JSX.Element => {
    const src = IconUrls[icon]
    return (
        <div className="er__icon__wrapper">
            <img
                src={src}
                alt={icon}
                className="er__icon__image"
            />
        </div>
    )
}
