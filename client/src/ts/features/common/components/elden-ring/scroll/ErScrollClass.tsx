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
    ref: Ref<ErScrollClass>
    children: ReactNode
    contentRef: React.MutableRefObject<HTMLDivElement>
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

export class ErScrollClass extends Component<ErScrollClassProps, ErScrollClassState> {

    private scrollTrackRef: MutableRefObject<HTMLDivElement>
    private scrollThumbRef: MutableRefObject<HTMLDivElement>
    private observer: ResizeObserver

    static defaultProps: Partial<ErScrollClassProps> = {
        ref: null,
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
        super(mergeProps(ErScrollClass.defaultProps, props))
        this.state = { ...initialState }
        this.scrollTrackRef = createRef<HTMLDivElement>()
        this.scrollThumbRef = createRef<HTMLDivElement>()
    }

    public adjustScrollTrack(): void {
        this.handleThumbPosition()
    }

    public render(): JSX.Element {
        return (
            <Box ref={this.props.ref} {...this.props.containerProps}>
                <Box ref={this.props.contentRef} {...this.props.contentProps}>
                    {this.props.children}
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
        const ref = this.props.contentRef.current
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
        this.observer?.unobserve(this.props.contentRef.current)
        this.props.contentRef.current.removeEventListener("scroll", this.handleThumbPosition)
    }

    private handleResize(ref: HTMLDivElement, trackSize: number): void {
        const { clientHeight, scrollHeight } = ref
        const thumbHeight = Math.max((clientHeight / scrollHeight) * trackSize, 20)
        this.setState({ thumbHeight })
    }

    private handleScrollButton(direction: "up" | "down"): void {
        if (this.props.disableScroll) { return null }
        const { current } = this.props.contentRef
        if (current) {
            const scrollAmount = direction === "down" ? 200 : -200
            current.scrollBy({ top: scrollAmount, behavior: "smooth" })
        }
    }

    private handleTrackClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.props.disableScroll) { return null }
        const { current: trackCurrent } = this.scrollTrackRef
        const { current: contentCurrent } = this.props.contentRef
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

    private handleThumbPosition(): void {
        if (this.props.disableScroll) { return null }
        if (!this.props.contentRef.current || !this.scrollTrackRef.current || !this.scrollThumbRef.current) {
            return null
        }
        const { scrollTop: contentTop, scrollHeight: contentHeight } = this.props.contentRef.current
        const { clientHeight: trackHeight } = this.scrollTrackRef.current
        let newTop = (+contentTop / +contentHeight) * trackHeight
        newTop = Math.min(newTop, trackHeight - this.state.thumbHeight)
        const thumb = this.scrollThumbRef.current
        thumb.style.top = `${newTop}px`
    }

    private handleThumbMousedown(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.props.disableScroll) { return null }
        this.setState({ scrollStartPosition: e.clientY })
        if (this.props.contentRef.current) {
            this.setState({ initialScrollTop: this.props.contentRef.current.scrollTop })
        }
        this.setState({ isDragging: true })
    }

    private handleThumbMouseup(e: MouseEvent): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.props.disableScroll) { return null }
        if (this.state.isDragging) {
            this.setState({ isDragging: false })
        }
    }

    private handleThumbMousemove(e: MouseEvent): void {
        e.preventDefault()
        e.stopPropagation()
        if (this.props.disableScroll) { return null }
        if (this.state.isDragging) {
            const {
                scrollHeight: contentScrollHeight,
                offsetHeight: contentOffsetHeight,
            } = this.props.contentRef.current

            const deltaY = (e.clientY - this.state.scrollStartPosition) * (contentOffsetHeight / this.state.thumbHeight)
            const newScrollTop = Math.min(
                this.state.initialScrollTop + deltaY,
                contentScrollHeight - contentOffsetHeight,
            )
            this.props.contentRef.current.scrollTop = newScrollTop
        }
    }

}
