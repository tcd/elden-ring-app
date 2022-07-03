import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { ErDialog } from "@app/shared"
import { Actions, Selectors } from "@app/state"

export const StartingClassConfirmationDialog = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const selectedName = useSelector(Selectors.Builder.startingClass.startingClassName)
    const confirming = useSelector(Selectors.Builder.startingClass.confirmingStartingClass)

    const handleConfirm = async () => {
        await dispatch(Actions.Builder.confirmStartingClassName())
        navigate("/")
    }

    const handleCancel = () => {
        dispatch(Actions.Builder.cancelStartingClassConfirmation())
    }

    const options = [
        {
            title: "Yes",
            handler: handleConfirm,
        },
        {
            title: "No",
            handler: handleCancel,
        },
    ]

    return (
        <ErDialog
            title={<span>Starting build with this class.<br/>Is that okay?</span>}
            isOpen={confirming}
            options={options}
            onClose={handleCancel}
        />
    )
}
