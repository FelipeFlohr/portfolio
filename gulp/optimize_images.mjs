import gulp from "gulp"
import scaleImages from "gulp-scale-images"
import flatMapImport from "flat-map"
import path from "path"
const flatMap = flatMapImport.default
const { src, dest } = gulp

export function optimizeImages() {
    return src("dist/**/**_logo_tech.**.png")
        .pipe(flatMap(oneVariantPerFile))
        .pipe(scaleImages(computeFileName))
        .pipe(dest("dist"))
}

function oneVariantPerFile(file, cb) {
    file.scale = {
        maxHeight: 32,
        format: "png",
        fit: "contain",
    }
    cb(null, [file])
}

function computeFileName(output, scale, cb) {
    const fileName = [
        path.basename(output.path, output.extname),
        scale.format || output.extname
    ].join(".")
    cb(null, fileName)
}