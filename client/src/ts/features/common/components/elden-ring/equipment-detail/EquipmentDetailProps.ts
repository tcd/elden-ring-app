import { ReactNode } from "react"
import { MainSectionRowsProps } from "./MainSectionRows"

export interface ImageOptions {
    src: string
    alt?: string
}

export interface EquipmentDetailProps {
    children: ReactNode
    title: string
    mainSectionRows: MainSectionRowsProps
    includeSecondaryImages?: boolean
    includePassiveEffects?: boolean
    primaryImage: ImageOptions
    secondaryImage?: ImageOptions
}
