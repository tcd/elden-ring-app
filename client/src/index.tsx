import { render } from "react-dom"

import "bootstrap/dist/js/bootstrap.bundle"

import { App } from "./ts"
import "./styles/index.scss"

window.jail = window.jail ?? {}

const container = document.getElementById("root")
render(<App />, container)
