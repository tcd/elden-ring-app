import { Talisman } from "@types"

export interface TalismanDisplayProps {
    talisman: Talisman
}

export const TalismanDisplay = ({ talisman }: TalismanDisplayProps): JSX.Element => {

    const imageSrc = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great-jars_arsenal_talisman_elden_ring_wiki_guide_200px.png"

    return (
        <article className="talisman-display">
            <section className="row-1">
                <header>
                    <span className="align-bottom">{talisman?.name}</span>
                </header>
                <div className="row-1-body">
                    <div className="left-border"></div>
                    <div className="flex-bottom">
                        <div className="flex-between">
                            <span>Weight</span>
                            <span>{talisman.weight}</span>
                        </div>
                    </div>
                    <div className="flex-top-right">
                        <img className="img-fluid talisman" alt="talisman image" src={imageSrc} />
                    </div>
                </div>
            </section>
            <section className="row-2">
                <div className="row-2-body">
                    <div className="">
                        <h5>Item Effect</h5>
                        <p>{talisman.description}</p>
                    </div>
                </div>
            </section>
        </article>
    )
}
