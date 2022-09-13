/**
 * Used for testing error handling.
 *
 * Just throws an error, won't render anything.
 */
export const ErrorThrower = (_props: unknown): JSX.Element => {

    const throwError = () => {
        throw new Error("oh no!")
    }

    return (
        <>
            {throwError()}
        </>
    )
}
