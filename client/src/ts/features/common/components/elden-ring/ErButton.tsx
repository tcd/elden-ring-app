import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps =
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >

export interface ErButtonProps {
    children: ReactNode
    onClick: () => void
    ButtonProps?: ButtonProps
}

const defaultProps: Partial<ErButtonProps> = {
    ButtonProps: {},
    children: null,
    onClick: null,
}

export const ErButton = (props: ErButtonProps): JSX.Element => {
    props = { ...defaultProps, ...props }

    const {
        children,
        onClick,
    } = props

    return (
        <button
            type="button"
            className="er__button"
            onClick={onClick}
        >
            {children && children}
        </button>
    )
}
