import { render } from "react-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "keen-slider/keen-slider.min.css"

import { App } from "./ts"
import "./styles/index.scss"

window.jail = window.jail ?? {}

const container = document.getElementById("root")
render(<App />, container)
