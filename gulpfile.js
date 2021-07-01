const { src, dest, watch } = require('gulp');
const compileSass = require("gulp-sass")(require("node-sass"));

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('./scss/**/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(dest('./css/'));
};

const dev = () => {
    watch('./scss/**/*.scss', bundleSass);
}

exports.bundleSass = bundleSass;
exports.dev =  dev;