import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

export interface ErrorBoundaryProps {
    children?: React.ReactNode
}

export const ErrorBoundary = (props: ErrorBoundaryProps): JSX.Element => {
    return (
        <></>
    )
}

// =============================================================================

const ErrorFallback = ({ error, resetErrorBoundary }): JSX.Element => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
