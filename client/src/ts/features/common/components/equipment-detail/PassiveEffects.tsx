import { Component } from "react"

import { ErCard, ErCardProps, } from "@app/shared"
import { EquipmentDetailProps } from "./_index"

const cardProps: Partial<ErCardProps> = {
    smallTitle: true,
    sx: {
        mx: 3,
        my: 2,
    },
}

export class PassiveEffects extends Component<EquipmentDetailProps> {

    constructor(props: EquipmentDetailProps) {
        super(props)
    }

    public render(): JSX.Element {

        if (this.props.includePassiveEffects !== true) {
            return null
        }

        const rows = this.props.passiveEffects

        while (rows.length < 3) {
            rows.push(<li key={`passive-effect-${rows.length + 1}`}> - </li>)
        }

        return (
            <section className="er__equipmentDetail__section">
                <ErCard title="Passive Effects" icon="PassiveEffects" {...cardProps}>
                    <ul>
                        {rows}
                    </ul>
                </ErCard>
            </section>
        )
    }
}
