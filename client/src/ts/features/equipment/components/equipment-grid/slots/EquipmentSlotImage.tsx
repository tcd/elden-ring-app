import { forwardRef, ReactNode } from "react"
import { Box, BoxProps, SxProps } from "@mui/material"

// import { EquipmentType } from "@app/types"
import {
    EquipmentSlotImageUrls,
    cssUrl,
    EquipmentSlotBackgroundId,
    Audio,
} from "@app/util"

export interface EquipmentSlotImageProps {
    bgType: EquipmentSlotBackgroundId
    children?: ReactNode | JSX.Element
    img: {
        src: string
        alt: string
    },
    BoxProps?: BoxProps
}

const defaultProps: Partial<EquipmentSlotImageProps> = {
    children: null,
    img: { src: null, alt: null },
    BoxProps: {},
}

export const EquipmentSlotImage = forwardRef<HTMLLIElement, EquipmentSlotImageProps>(
    function EquipmentSlotImage(props: EquipmentSlotImageProps, ref): JSX.Element {

        const {
            bgType,
            children,
            img,
            BoxProps,
        } = { ...defaultProps, ...props }

        if (BoxProps?.onMouseEnter) {
            const _onMouseEnter = BoxProps.onMouseEnter
            BoxProps.onMouseEnter = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                Audio.menuClick()
                _onMouseEnter(event)
            }
        }

        const bgSrc = cssUrl(EquipmentSlotImageUrls[bgType])
        const filled = img?.src != null
        const className = filled ? "er__equipmentGrid__cell--filled" :  "er__equipmentGrid__cell"

        let $img: JSX.Element = null

        if (filled) {
            $img = <img
                src={img.src}
                alt={img.alt}
                className="er__equipmentGrid__cellImage img-fluid"
            />
        }

        const bgSx: SxProps = {
            "&::after": {
                backgroundImage: bgSrc,
            },
        }

        return (
            <Box
                ref={ref}
                component="li"
                className={className}
                {...BoxProps}
            >
                <Box sx={bgSx} className="er__equipmentGrid__cellBg" />
                {$img}
                {children && children}
            </Box>
        )
    },
)
