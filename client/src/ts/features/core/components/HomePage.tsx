import { Link } from "react-router-dom"

import { Heading } from "@app/features/core"

export const HomePage = (): JSX.Element => {

    return (
        <>
            <Heading title="Home" />
            <section>
                {/* <Link to="/" className="btn btn-primary">Home</Link> */}
            </section>
        </>
    )
}
