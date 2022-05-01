import { render } from "react-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import { App } from "./ts"
import "./styles/index.scss"

const container = document.getElementById("root")
render(<App />, container)
