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
        <button
            type="button"
            className="er__button"
            onClick={handleClick}
        >
            {props.name}
        </button>
    )
}
