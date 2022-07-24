import {
    Heading,
    ErCard,
    ErTallCard,
    EPopoverContent,
    ErTallCardSection,
    Page,
} from "@app/shared"
import { CharacterStatusB } from "@app/features/builder"

const boxStyle = {
    // width: "200px",
    // height: "200px",
}

export const TestPage = (_props: unknown): JSX.Element => {

    const className = [
        "bg-success",
        // "h-100",
        // "w-100",
        "container",
        // "flex-center",
        // "flex-col",
        // "flex-between-column",
        // "p-5",
    ].join(" ")

    return (
        <Page pageName="about" className={className}>
            <div className="row">
                <div className="col">
                    <Heading title="Test" />
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2">
                    <CharacterStatusB />
                </div>
            </div>
        </Page>
    )
}
