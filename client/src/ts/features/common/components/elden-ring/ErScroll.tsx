import {
    useState,
    useEffect,
    useRef,
    useCallback,
    forwardRef,
    ReactNode,
    useImperativeHandle,
} from "react"
import { Box, BoxProps } from "@mui/material"

import { mergeProps } from "@app/util"

export interface ErScrollProps {
    children: ReactNode
    contentRef: React.MutableRefObject<HTMLDivElement>
    containerProps?: BoxProps
    contentProps?: BoxProps
    disableScroll?: boolean
}

const defaultProps: Partial<ErScrollProps> = {
    children: null,
    contentRef: null,
    containerProps: {
        className: "er__scrollBar__container",
    },
    contentProps: {
        className: "er__scrollBar__content",
    },
    disableScroll: false,
}

/**
 * @note original code by [Tom VanAntwerp](https://www.thisdot.co/blog/creating-custom-scrollbars-with-react)
 */
export const ErScroll = forwardRef<any, ErScrollProps>(function ErScroll(props: ErScrollProps, ref) {
    const {
        children,
        contentRef,
        containerProps,
        contentProps,
        disableScroll,
    } = mergeProps(defaultProps, props)

    const scrollTrackRef = useRef<HTMLDivElement>(null)
    const scrollThumbRef = useRef<HTMLDivElement>(null)
    const observer = useRef<ResizeObserver | null>(null)
    const [thumbHeight, setThumbHeight] = useState(20)
    const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(null)
    const [initialScrollTop, setInitialScrollTop] = useState<number>(0)
    const [isDragging, setIsDragging] = useState(false)

    function handleResize(ref: HTMLDivElement, trackSize: number): void {
        const { clientHeight, scrollHeight } = ref
        setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20))
    }

    function handleScrollButton(direction: "up" | "down"): void {
        if (disableScroll) { return null }
        const { current } = contentRef
        if (current) {
            const scrollAmount = direction === "down" ? 200 : -200
            current.scrollBy({ top: scrollAmount, behavior: "smooth" })
        }
    }

    const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if (disableScroll) { return null }
        e.preventDefault()
        e.stopPropagation()
        const { current: trackCurrent } = scrollTrackRef
        const { current: contentCurrent } = contentRef
        if (trackCurrent && contentCurrent) {
            const { clientY } = e
            const target = e.target as HTMLDivElement
            const rect = target.getBoundingClientRect()
            const trackTop = rect.top
            const thumbOffset = -(thumbHeight / 2)
            const clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight
            const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight)
            contentCurrent.scrollTo({
                top: scrollAmount,
                behavior: "smooth",
            })
        }
    }, [thumbHeight, contentRef, disableScroll])

    const handleThumbPosition = useCallback((): void => {
        if (disableScroll) { return null }
        if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
            return null
        }
        const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current
        const { clientHeight: trackHeight } = scrollTrackRef.current
        let newTop = (+contentTop / +contentHeight) * trackHeight
        newTop = Math.min(newTop, trackHeight - thumbHeight)
        const thumb = scrollThumbRef.current
        thumb.style.top = `${newTop}px`
    }, [thumbHeight, contentRef, disableScroll])

    const handleThumbMousedown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if (disableScroll) { return null }
        e.preventDefault()
        e.stopPropagation()
        setScrollStartPosition(e.clientY)
        if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop)
        setIsDragging(true)
    }, [contentRef, disableScroll])

    const handleThumbMouseup = useCallback((e: MouseEvent): void => {
        if (disableScroll) { return null }
        e.preventDefault()
        e.stopPropagation()
        if (isDragging) {
            setIsDragging(false)
        }
    }, [isDragging, disableScroll])

    const handleThumbMousemove = useCallback((e: MouseEvent): void => {
        if (disableScroll) { return null }
        e.preventDefault()
        e.stopPropagation()
        if (isDragging) {
            const {
                scrollHeight: contentScrollHeight,
                offsetHeight: contentOffsetHeight,
            } = contentRef.current

            const deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight)
            const newScrollTop = Math.min(
                initialScrollTop + deltaY,
                contentScrollHeight - contentOffsetHeight,
            )
            contentRef.current.scrollTop = newScrollTop
        }
    }, [isDragging, scrollStartPosition, thumbHeight, initialScrollTop, contentRef, disableScroll])

    // If the content and the scrollbar track exist, use a ResizeObserver
    // to adjust height of thumb and listen for scroll event to move the thumb
    useEffect(() => {
        if (contentRef.current && scrollTrackRef.current) {
            const ref = contentRef.current
            const { clientHeight: trackSize } = scrollTrackRef.current
            observer.current = new ResizeObserver(() => {
                handleResize(ref, trackSize)
            })
            observer.current.observe(ref)
            ref.addEventListener("scroll", handleThumbPosition)
            return () => {
                observer.current?.unobserve(ref)
                ref.removeEventListener("scroll", handleThumbPosition)
            }
        }
    }, [handleThumbPosition, contentRef])

    // Listen for mouse events to handle scrolling by dragging the thumb
    useEffect(() => {
        document.addEventListener("mousemove", handleThumbMousemove)
        document.addEventListener("mouseup", handleThumbMouseup)
        document.addEventListener("mouseleave", handleThumbMouseup)
        return () => {
            document.removeEventListener("mousemove", handleThumbMousemove)
            document.removeEventListener("mouseup", handleThumbMouseup)
            document.removeEventListener("mouseleave", handleThumbMouseup)
        }
    }, [handleThumbMousemove, handleThumbMouseup])

    useImperativeHandle(ref, () => ({
        adjustScrollTrack: () => {
            handleThumbPosition()
        },
    }))

    return (
        <Box ref={ref} {...containerProps}>
            <Box ref={contentRef} {...contentProps}>
                {children}
            </Box>
            <div className="er__scrollBar__scrollbar">
                <button
                    className="er__scrollBar__button er__scrollBar__button--top"
                    onClick={() => handleScrollButton("up")}
                >
                    <div className="triangle"></div>
                </button>
                <div className="er__scrollBar__track-and-thumb">
                    <div
                        className="er__scrollBar__track"
                        ref={scrollTrackRef}
                        onClick={handleTrackClick}
                    ></div>
                    <div
                        className="er__scrollBar__thumb"
                        ref={scrollThumbRef}
                        onMouseDown={handleThumbMousedown}
                        style={{ height: `${thumbHeight}px` }}
                    ></div>
                </div>
                <button
                    className="er__scrollBar__button er__scrollBar__button--bottom"
                    onClick={() => handleScrollButton("down")}
                >
                    <div className="triangle"></div>
                </button>
            </div>
        </Box>
    )
})
