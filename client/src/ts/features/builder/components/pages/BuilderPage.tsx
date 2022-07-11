import { useSelector } from "react-redux"

import { Selectors } from "@app/state"
import { isBlank } from "@app/util"

import { MainBuilderMenu, StartingClassPage } from "@app/features/builder"

export const BuilderPage = (): JSX.Element => {
    const startingClassName = useSelector(Selectors.Builder.startingClass.startingClassName)
    const content = isBlank(startingClassName) ? <StartingClassPage /> : <MainBuilderMenu />
    return content
}
