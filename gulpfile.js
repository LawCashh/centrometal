const gulp = require('gulp');
const gulpsass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const jsonconcat = require("gulp-json-concat");

const paths = {
    sass: "./src/**/*.scss",
    css: "./dist/styles",
    js: [
        "./src/scripts/angular/*.js",
        "./src/scripts/custom/*.js",
        "./src/components/**/*.js"
    ],
    distjs: "./dist/js",
    target: "./index.html",
    // jsonhome: [
    //     "./src/data/header.json",
    //     "./src/data/footer.json",
    //     "./src/data/mainlistleft.json",
    //     "./src/data/akcijaproizvodi.json",
    //     "./src/data/novoproizvodi.json",
    //     "./src/data/preporucujemoproizvodi.json",
    //     "./src/data/rasprodajaproizvodi.json",
    //     "./src/data/vruciproizvodi.json",
    //     "./src/data/reklamemain.json",
    //     "./src/data/testere.json",
    // ],
    // jsonhomedest: "./dist/data",
    // jsonopenproduct: [
    //     "./src/data/header.json",
    //     "./src/data/footer.json",
    //     "./src/data/openproductproizvodi.json",
    //     "./src/data/videos.json",
    // ],
    // jsonopenproductdest: "./dist/data"
}


function sassTask () {
    return gulp.src(paths.sass)
        .pipe(gulpsass().on("sass task greska:", gulpsass.logError))
        .pipe(gulp.dest(paths.css));
}

// function jsonHomeTask () {
//     return gulp.src(paths.jsonhome)
//         .pipe(jsonconcat("home.json", function (data) {
//             return new Buffer(JSON.stringify(data));
//         }))
//         .pipe(gulp.dest(paths.jsonhomedest));
// }
//
// function jsonOpenProductTask() {
//     return gulp.src(paths.jsonopenproduct)
//         .pipe(jsonconcat("openproduct.json", function (data) {
//             return new Buffer(JSON.stringify(data));
//         }))
//         .pipe(gulp.dest(paths.jsonopenproductdest));
// }

function scriptsTask() {
    return gulp.src(paths.js)
        .pipe(concat("scripts.js"))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(paths.distjs));
}

function injectScripts() {
    const target = gulp.src(paths.target);
    const sources = gulp.src(paths.distjs + "/*.js", {read: false});
    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest("./src"))
}

function watch () {
    gulp.watch(paths.sass, sassTask);
    gulp.watch(paths.js, gulp.series(scriptsTask, injectScripts));
    // gulp.watch(paths.jsonhome, jsonHomeTask);
    // gulp.watch(paths.jsonopenproduct, jsonOpenProductTask);
}

exports.default = gulp.series(gulp.parallel(sassTask, scriptsTask), injectScripts, watch);