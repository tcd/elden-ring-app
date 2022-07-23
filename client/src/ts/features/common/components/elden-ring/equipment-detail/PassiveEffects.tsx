import { Component } from "react"

import { ErCard2, ErCard2Props, } from "@app/shared"
import { EquipmentDetailProps } from "./_index"

const cardProps: Partial<ErCard2Props> = {
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

        return (
            <section className="er__equipmentDetail2__section">
                <ErCard2 title="Passive Effects" icon="PassiveEffects" {...cardProps}>
                    <ul>
                        <li> - </li>
                        <li> - </li>
                        <li> - </li>
                    </ul>
                </ErCard2>
            </section>
        )
    }
}
