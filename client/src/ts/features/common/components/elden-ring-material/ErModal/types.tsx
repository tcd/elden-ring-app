export interface ErModalProps {
    title: string
    isOpen: boolean
    onClose?: () => any
    children?: React.ReactNode
    footerContent?: React.ReactNode
}
