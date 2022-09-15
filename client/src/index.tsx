import { render } from "react-dom"

import { App } from "./ts"
import "./styles/main.scss"

window.jail = window.jail ?? {}

const container = document.getElementById("root")
render(<App />, container)
