import { useEffect } from "react"

import { STARTING_CLASSES } from "@app/data"
import { StartingClassOption } from "."

export const StartingClassOptions = (_props: unknown): JSX.Element => {

    const startingClasses = STARTING_CLASSES

    const options = startingClasses.map((sClass) => <StartingClassOption key={sClass.name} sClass={sClass} />)

    useEffect(() => {
        const ignore = (event: Event) => {
            // console.log(event)
            event.stopPropagation()
            event.preventDefault()
        }
        document.getElementById("er__startingClass__menu__options").addEventListener("scroll", ignore)
        document.getElementById("er__startingClass__menu__options").addEventListener("mousewheel", ignore)
        return () => {
            document.getElementById("er__startingClass__menu__options")?.removeEventListener("scroll", ignore)
            document.getElementById("er__startingClass__menu__options")?.removeEventListener("mousewheel", ignore)
        }
    }, [])

    return (
        <>
            {options}
        </>
    )
}
