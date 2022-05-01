import { Link } from "react-router-dom"

import { Heading } from "@app/features/core"

export const NotFoundPage = () => (
    <>
        <Heading title="404 - Not Found" />
        <section>
            <Link to="/" className="btn btn-primary">Home</Link>
        </section>
    </>
)
