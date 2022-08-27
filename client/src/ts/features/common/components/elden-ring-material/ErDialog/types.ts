import type { ReactNode } from "react"

export interface ErDialogOption {
    title: string
    handler: () => any
}

export interface ErDialogProps {
    title: string | ReactNode
    isOpen: boolean
    options: ErDialogOption[]
    onClose?: () => any
}
