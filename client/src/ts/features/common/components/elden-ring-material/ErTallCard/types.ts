import type { IconNamesKey } from "@app/constants"

export interface ErTallCardSectionProps {
    title: string
    content: React.ReactNode
}

export interface ErTallCardProps {
    title: string
    icon: IconNamesKey
    sections?: React.ReactNode[]
}
