export interface EPopoverContentProps {
    content?: string
    children?: string | JSX.Element | JSX.Element[] | never[]
}

export const EPopoverContent = (props: EPopoverContentProps): JSX.Element => {
    return (
        <div className="er__popover">
            <div className="er__popover__content">
                <>{props?.children}</>
            </div>
        </div>
    )
}
