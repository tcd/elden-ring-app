import { Component } from "react"

import { ErCard } from "@app/shared"
import { EquipmentDetailProps } from "./_index"

export class PassiveEffects extends Component<EquipmentDetailProps> {

    constructor(props: EquipmentDetailProps) {
        super(props)
    }

    public render(): JSX.Element {

        if (this.props.includePassiveEffects !== true) {
            return null
        }

        return (
            <section className="er__equipmentDetail2__section">
                <ErCard title="Passive Effects" contentClassName="er__equipmentDetail2__cardContent">
                    <>TODO: passive effects</>
                </ErCard>
            </section>
        )
    }
}
