import gulp from "gulp"
const { parallel } = gulp
import { minifyHtml } from "./gulp/minimy_html.mjs"
import { optimizeImages } from "./gulp/optimize_images.mjs"

export default parallel(
    minifyHtml,
    optimizeImages,
)