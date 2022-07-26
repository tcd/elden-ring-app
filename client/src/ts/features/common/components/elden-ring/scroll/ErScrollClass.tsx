import {
    Component,
    createRef,
    MutableRefObject,
    ReactNode,
    Ref,
} from "react"
import { Box, BoxProps } from "@mui/material"

import { mergeProps } from "@app/util"

export interface ErScrollClassProps {
    children: ReactNode
    containerRef: MutableRefObject<ErScrollClass>
    contentRef: MutableRefObject<HTMLDivElement>
    containerProps?: BoxProps
    contentProps?: BoxProps
    disableScroll?: boolean
}

interface ErScrollClassState {
    thumbHeight: number
    scrollStartPosition: number | null
    initialScrollTop: number
    isDragging: boolean
}

const initialState: ErScrollClassState = {
    thumbHeight: 20,
    scrollStartPosition: null,
    initialScrollTop: 0,
    isDragging: false,
}

const defaultProps: Partial<ErScrollClassProps> = {
    containerRef: null,
    contentRef: null,
    children: null,
    containerProps: {
        className: "er__scrollBar__container",
    },
    contentProps: {
        className: "er__scrollBar__content",
    },
    disableScroll: false,
}

export class ErScrollClass extends Component<ErScrollClassProps, ErScrollClassState> {

    public scrollTrackRef: MutableRefObject<HTMLDivElement>
    public scrollThumbRef: MutableRefObject<HTMLDivElement>
    public observer: ResizeObserver
    public mergedProps: ErScrollClassProps

    static defaultProps: Partial<ErScrollClassProps> = {
        containerRef: null,
        contentRef: null,
        children: null,
        containerProps: {
            className: "er__scrollBar__container",
        },
        contentProps: {
            className: "er__scrollBar__content",
        },
        disableScroll: false,
    }

    constructor(props: ErScrollClassProps) {
        super(props)
        this.state = { ...initialState }
        this.scrollTrackRef = createRef<HTMLDivElement>()
        this.scrollThumbRef = createRef<HTMLDivElement>()
        this.mergedProps = mergeProps(defaultProps, props)

        this.adjustScrollTrack    = this.adjustScrollTrack.bind(this)
        this.handleResize         = this.handleResize.bind(this)
        this.handleScrollButton   = this.handleScrollButton.bind(this)
        this.handleTrackClick     = this.handleTrackClick.bind(this)
        this.handleThumbPosition  = this.handleThumbPosition.bind(this)
        this.handleThumbMousedown = this.handleThumbMousedown.bind(this)
        this.handleThumbMouseup   = this.handleThumbMouseup.bind(this)
        this.handleThumbMousemove = this.handleThumbMousemove.bind(this)
    }

    public adjustScrollTrack(): void {
        this.handleThumbPosition()
    }

    public render(): JSX.Element {
        return (
            <Box {...this.mergedProps.containerProps}>
                <Box ref={this.mergedProps.contentRef} {...this.mergedProps.contentProps}>
                    {this.mergedProps.children}
                </Box>
                <div className="er__scrollBar__scrollbar">
                    <button
                        className="er__scrollBar__button er__scrollBar__button--top"
                        onClick={() => this.handleScrollButton("up")}
                    >
                        <div className="triangle"></div>
                    </button>
                    <div className="er__scrollBar__track-and-thumb">
                        <div
                            className="er__scrollBar__track"
                            ref={this.scrollTrackRef}
                            onClick={this.handleTrackClick}
                        ></div>
                        <div
                            className="er__scrollBar__thumb"
                            ref={this.scrollThumbRef}
                            onMouseDown={this.handleThumbMousedown}
                            style={{ height: `${this.state.thumbHeight}px` }}
                        ></div>
                    </div>
                    <button
                        className="er__scrollBar__button er__scrollBar__button--bottom"
                        onClick={() => this.handleScrollButton("down")}
                    >
                        <div className="triangle"></div>
                    </button>
                </div>
            </Box>
        )
    }

    public componentDidMount(): void {
        document.addEventListener("mousemove",  this.handleThumbMousemove)
        document.addEventListener("mouseup",    this.handleThumbMouseup)
        document.addEventListener("mouseleave", this.handleThumbMouseup)
        const ref = this.mergedProps.contentRef.current
        const { clientHeight: trackSize } = this.scrollTrackRef.current
        this.observer = new ResizeObserver(() => {
            this.handleResize(ref, trackSize)
        })
        this.observer.observe(ref)
        ref.addEventListener("scroll", this.handleThumbPosition)
    }

    public componentWillUnmount(): void {
        document.removeEventListener("mousemove",  this.handleThumbMousemove)
        document.removeEventListener("mouseup",    this.handleThumbMouseup)
        document.removeEventListener("mouseleave", this.handleThumbMouseup)
        this.observer?.unobserve(this.mergedProps.contentRef.current)
        this.mergedProps.contentRef.current.removeEventListener("scroll", this.handleThumbPosition)
    }

    public handleResize(ref: HTMLDivElement, trackSize: number): void {
        const { clientHeight, scrollHeight } = ref
        const thumbHeight = Math.max((clientHeight / scrollHeight) * trackSize, 20)
        this.setState({ thumbHeight })
    }

    public handleScrollButton(direction: "up" | "down"): void {
        if (this.mergedProps.disableScroll) { return null }
        const { current } = this.mergedProps.contentRef
        if (current) {
            const scrollAmount = direction === "down" ? 200 : -200
            current.scrollBy({ top: scrollAmount, behavior: "smooth" })
        }
    }

    public handleTrackClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.mergedProps.disableScroll) { return null }
        const { current: trackCurrent } = this.scrollTrackRef
        const { current: contentCurrent } = this.mergedProps.contentRef
        if (trackCurrent && contentCurrent) {
            const { clientY } = e
            const target = e.target as HTMLDivElement
            const rect = target.getBoundingClientRect()
            const trackTop = rect.top
            const thumbOffset = -(this.state.thumbHeight / 2)
            const clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight
            const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight)
            contentCurrent.scrollTo({
                top: scrollAmount,
                behavior: "smooth",
            })
        }
    }

    public handleThumbPosition(): void {
        if (this.mergedProps.disableScroll) { return null }
        if (!this.mergedProps.contentRef.current || !this.scrollTrackRef.current || !this.scrollThumbRef.current) {
            return null
        }
        const { scrollTop: contentTop, scrollHeight: contentHeight } = this.mergedProps.contentRef.current
        const { clientHeight: trackHeight } = this.scrollTrackRef.current
        let newTop = (+contentTop / +contentHeight) * trackHeight
        newTop = Math.min(newTop, trackHeight - this.state.thumbHeight)
        const thumb = this.scrollThumbRef.current
        thumb.style.top = `${newTop}px`
    }

    public handleThumbMousedown(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.mergedProps.disableScroll) { return null }
        this.setState({ scrollStartPosition: e.clientY })
        if (this.mergedProps.contentRef.current) {
            this.setState({ initialScrollTop: this.mergedProps.contentRef.current.scrollTop })
        }
        this.setState({ isDragging: true })
    }

    public handleThumbMouseup(e: MouseEvent): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.mergedProps.disableScroll) { return null }
        if (this.state.isDragging) {
            this.setState({ isDragging: false })
        }
    }

    public handleThumbMousemove(e: MouseEvent): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.mergedProps.disableScroll) { return null }
        if (this.state.isDragging) {
            const {
                scrollHeight: contentScrollHeight,
                offsetHeight: contentOffsetHeight,
            } = this.mergedProps.contentRef.current

            const deltaY = (e.clientY - this.state.scrollStartPosition) * (contentOffsetHeight / this.state.thumbHeight)
            const newScrollTop = Math.min(
                this.state.initialScrollTop + deltaY,
                contentScrollHeight - contentOffsetHeight,
            )
            this.mergedProps.contentRef.current.scrollTop = newScrollTop
        }
    }

}
