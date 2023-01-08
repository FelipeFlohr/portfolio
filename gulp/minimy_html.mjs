import gulp from "gulp";
const { src, dest } = gulp;
import htmlmin from "gulp-htmlmin";

export function minifyHtml() {
    return src("dist/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("dist"));
}