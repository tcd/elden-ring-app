import { Component } from "react"
import { Alert } from "@mui/material"

import { logger } from "@app/util"

// =============================================================================
// Default Fallback Component
// =============================================================================

export interface DefaultFallbackComponentProps {
    message?: string
    error?: any
}

export const DefaultFallbackComponent = (props: DefaultFallbackComponentProps): JSX.Element => {
    const { message, error } = props || {}
    let displayText = "Something went wrong."
    if (message) {
        displayText = message
    }

    return (
        <Alert icon={false} severity="warning">
            {displayText}
        </Alert>
    )
}

// =============================================================================
// Error Boundary
// =============================================================================


export interface ErrorBoundaryProps {
    /**
     * Optional
     *
     * If `true`, don't log caught errors.
     *
     * @default false
     */
    silence?: boolean
    /**
     * Optional
     *
     * Component to display in the event of a rendering error.
     *
     * @default <DefaultFallbackComponent />
     */
    fallbackComponent?: JSX.Element
    children: React.ReactNode
}

export interface ErrorBoundaryState {
    hasError: boolean
}

/**
 * Catches errors in child components and renders a fallback component if rendering fails.
 *
 * References:
 *
 * - [Official React Docs](https://reactjs.org/docs/error-boundaries.html)
 * - [Handle errors in React components like a pro](https://dev.to/edemagbenyo/handle-errors-in-react-components-like-a-pro-l7l)
 * - [bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary)
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

    static defaultProps: ErrorBoundaryProps = {
        silence: false,
        children: null,
        fallbackComponent: <DefaultFallbackComponent />,
    }

    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(_error: any): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch(error: any, errorInfo: any): void {
        if (!this.props.silence) {
            logger.error(error, errorInfo)
        }
    }

    public render(): JSX.Element {
        if (this.state.hasError) {
            return this.props.fallbackComponent
        }

        return (
            <>
                {this.props.children}
            </>
        )
    }
}
