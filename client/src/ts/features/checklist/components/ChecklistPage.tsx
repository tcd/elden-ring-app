import { useSelector, useDispatch } from "react-redux"
import Checkbox from "@mui/material/Checkbox"
import MapIcon from "@mui/icons-material/Map"

import { Heading, RawHtml } from "@app/shared"
import { Selectors, Actions } from "@app/state"

export const ChecklistPage = () => {
    const dispatch = useDispatch()

    const resources = useSelector(Selectors.Checklist.resources)

    const rows = resources.map((r) => {
        const img = <img src={`/public/images/upgrade-materials/${r.type}.png`} alt={r.type} title={r.type} style={{ width: "50px" }} />
        const mapLink = r.mapLink ? <a href={r.mapLink}><MapIcon/></a> : null
        const quest = r.questLink ? <a href={r.questLink}>{r.quest}</a> : null
        const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => { dispatch(Actions.Checklist.toggleObtained(r.id.toString())) }
        return (
            <tr key={r.id}>
                <td className="text-center">{img}</td>
                <td className="text-center"><Checkbox checked={r.obtained} onChange={handleChange} /></td>
                <td className="text-center">{mapLink}</td>
                {/* <td className="text-center">{r.type}</td> */}
                <td className="text-center">{quest}</td>
                <td className="text-center">{r.location}</td>
                <td><RawHtml content={r.description}/></td>
            </tr>
        )
    })

    return (
        <div className="container">
            <Heading title="Checklist" />
            <section>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-center"></th>
                            <th className="text-center">Map Link</th>
                            {/* <th className="text-center">Type</th> */}
                            <th className="text-center">Quest</th>
                            <th className="text-center">Location</th>
                            <th className="text-center">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
