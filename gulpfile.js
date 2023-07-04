const gulp = require('gulp');
const gulpsass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const jsonconcat = require("gulp-json-concat");
const minify = require("gulp-minify");
const connect = require("gulp-connect");

const paths = {
    sass: "./src/**/*.scss",
    css: "./dist/styles",
    angjs: [
        "./src/scripts/other/jquery.min.js",
        "./src/scripts/angular/angular.min.js",
        "./src/scripts/angular/angular-route.min.js",
        //"./src/scripts/custom/*.js"
    ],
    otherjs: [
        "./src/scripts/other/slick.min.js",
        //"./src/scripts/other/*.min.js"
    ],
    js: [
        "./src/app.js",
        "./src/components/**/*.module.js",
        "./src/components/**/*.service.js",
        "./src/components/**/*.controller.js",
        "./src/components/**/*.filter.js",
        "./src/components/**/*.directive.js"
    ],
    distjs: [
        "./dist/js"
    ],
    target: "./index.html",
    templates: "./src/components/**/*.html",
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
        .pipe(gulp.dest(paths.css))
        .pipe(connect.reload());
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
function angScriptsTask() {
    return gulp.src(paths.angjs)
        .pipe(concat("ang.min.js"))
        //.pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(paths.distjs))
        .pipe(connect.reload());
}

function otherScriptsTask() {
    return gulp.src(paths.otherjs)
        .pipe(concat("libraries.min.js"))
        //.pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(paths.distjs))
        .pipe(connect.reload());
}

function scriptsTask() {
    return gulp.src(paths.js)
        .pipe(concat("scripts.js"))
        .pipe(minify())
        //.pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(paths.distjs))
        .pipe(connect.reload());
}

function injectScripts() {
    const target = gulp.src(paths.target);
    const sources = gulp.src([paths.distjs + "/ang.min.js", paths.distjs + "/libraries.min.js", paths.distjs + "/scripts-min.js", paths.css + "/**/*.css"], {read: false});
    return target
        .pipe(inject(sources))
        .pipe(gulp.dest("./"))
        .pipe(connect.reload());
}

function server() {
    connect.server({
        livereload: true
    })
}

function watch () {
    gulp.watch(paths.sass, sassTask);
    gulp.watch(paths.js, gulp.series(angScriptsTask, otherScriptsTask, scriptsTask, injectScripts));
    gulp.watch(paths.templates, injectScripts);
    // gulp.watch(paths.jsonhome, jsonHomeTask);
    // gulp.watch(paths.jsonopenproduct, jsonOpenProductTask);
}

exports.default = gulp.series(gulp.parallel(sassTask, angScriptsTask, otherScriptsTask, scriptsTask), injectScripts, gulp.parallel(watch, server));