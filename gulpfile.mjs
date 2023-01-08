import gulp from "gulp"
const { parallel } = gulp
import { minifyHtml } from "./gulp/minimy_html.mjs"

export default parallel(
    minifyHtml
)