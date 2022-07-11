import { Link } from "react-router-dom"

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Actions } from "@app/state"
import { Heading } from "@app/shared"

export const NotFoundPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName("not-found"))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [])

    return (
        <main id="er__pageRoot">
            {/* <section>
                <Link to="/" className="btn btn-primary">Home</Link>
            </section> */}
            <div id="er__youDied">
                <div>
                    {/* <span onClick={}>404 - Not Found</span> */}
                    <Link to="/" className="er__youDied__link">404 - Not Found</Link>
                </div>
            </div>
        </main>
    )
}
