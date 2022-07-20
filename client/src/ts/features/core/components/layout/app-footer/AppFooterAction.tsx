import { Button } from "@mui/material"

import { ErButton } from "@app/shared"

export interface AppFooterActionProps {
    name: string
    onClick: () => void
}

export const AppFooterAction = (props: AppFooterActionProps): JSX.Element => {

    const handleClick = () => {
        props.onClick()
    }

    // return (
    //     <div className="er__footer__action" onClick={handleClick}>
    //         {props.name}
    //     </div>
    // )

    return (
        <ErButton onClick={handleClick}>
            {props.name}
        </ErButton>
    )
}
