import {
    forwardRef,
    useState,
    useRef,
    // useEffect,
    // useCallback,
} from "react"
import { PopperUnstyled, ClickAwayListener } from "@mui/base"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export interface ErContextMenuOption {
    text: string
    action: () => void
}

export interface ErContextMenuProps {
    /** `id` must be unique */
    id: string
    options: ErContextMenuOption[]
    children?: React.ReactNode
}

export const ErContextMenu = forwardRef(function ErContextMenu(props: ErContextMenuProps, ref) {

    const slotRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)

    // -------------------------------------------------------------------------

    // const handleGlobalContextMenu = useCallback((event: MouseEvent) => {
    //     event.preventDefault()
    //     event.stopPropagation()
    //     if (anchorEl) {
    //         // @ts-ignore: next-line
    //         if (event?.target?.id != props?.id) {
    //             setAnchorEl(null)
    //         }
    //     }
    // }, [anchorEl, setAnchorEl, props])

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault()
        if (anchorEl) {
            setAnchorEl(null)
        } else {
            setAnchorEl(slotRef.current)
        }
    }

    const handleClickAway = () => {
        setAnchorEl(null)
    }

    const handleMouseLeave = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        setAnchorEl(null)
    }

    const handleOptionClick = (action: () => void): void => {
        setAnchorEl(null)
        action()
    }

    // -------------------------------------------------------------------------

    // useEffect(() => {
    //     document.addEventListener("contextmenu", handleGlobalContextMenu)
    //     return () => {
    //         document.removeEventListener("contextMenu", handleGlobalContextMenu)
    //     }
    // }, [handleGlobalContextMenu])

    // -------------------------------------------------------------------------

    const $options = props?.options.map(({ text, action }) => (
        <Box
            key={text}
            component="li"
            onClick={() => handleOptionClick(action)}
            sx={ComponentSx.ContextMenu.option}
        >
            {text}
        </Box>
    ))

    return (
        <Box
            ref={ref}
            id={props?.id}
            onContextMenu={handleContextMenu}
            sx={{ cursor: "context-menu" }}
        >

            <Box ref={slotRef}>
                {props?.children && props.children}
            </Box>

            <ClickAwayListener onClickAway={handleClickAway}>
                <PopperUnstyled
                    open={open}
                    anchorEl={anchorEl}
                    componentsProps={{
                        root: {
                            id: props?.id,
                            style: ComponentSx.ContextMenu.root,
                            onMouseLeave: handleMouseLeave,
                        },
                    }}
                >
                    <Border />
                    <Box component="ul" sx={ComponentSx.ContextMenu.list}>
                        {$options}
                    </Box>
                    <Border />
                </PopperUnstyled>
            </ClickAwayListener>

        </Box>
    )
})

// =============================================================================

const Border = (_props: unknown): JSX.Element => <Box sx={ComponentSx.ContextMenu.borders} />
