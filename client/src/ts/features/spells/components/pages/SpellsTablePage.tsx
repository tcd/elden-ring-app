import { Heading } from "@app/shared"
// import { SpellsTable } from "@app/features/spells"

export const SpellsTablePage = (_props: unknown): JSX.Element => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Heading title="Spells" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* <SpellsTable /> */}
                </div>
            </div>
        </div>
    )
}
