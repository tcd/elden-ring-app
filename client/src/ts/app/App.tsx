import { Provider } from "react-redux"
import { store } from "@app/state"
import { AppRoot } from "./AppRoot"

export const App = () => {
    return (
        <Provider store={store}>
            <AppRoot />
        </Provider>
    )
}
