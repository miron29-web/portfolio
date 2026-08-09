// ==============================
// Импорт модулей
// ==============================

const gulp = require("gulp");

const {
    src,
    dest,
    watch,
    series,
    parallel
} = gulp;

const fileInclude = require("gulp-file-include");

const sass = require("gulp-sass")(require("sass"));

const browserSync = require("browser-sync").create();

const del = require("del");

const ttf2woff2 = require("gulp-ttf2woff2");

const svgmin = require("gulp-svgmin");

const svgSprite = require("gulp-svg-sprite");

// ==============================
// Пути
// ==============================

const paths = {

    html: {
        src: "src/html/**/*.html",
        dest: "dist/"
    },

    styles: {
        src: "src/scss/**/*.scss",
        dest: "dist/css/"
    },

    scripts: {
        src: "src/js/**/*.js",
        dest: "dist/js/"
    },

    images: {
        src: [
            "src/images/**/*",
            "!src/images/**/*.svg"
        ],
        dest: "dist/images/"
    },

    svg: {
        src: "src/images/**/*.svg",
        dest: "dist/images/"
    },

    icons: {
        src: "src/icons/**/*.svg",
        dest: "dist/images/"
    },

    fonts: {
        src: "src/fonts/*.ttf",
        dest: "dist/fonts/"
    }

};

// ==============================
// Очистка
// ==============================

function clean() {
    return del(["dist"]);
}

// ==============================
// HTML
// ==============================

function html() {

    return src(paths.html.src)

        .pipe(fileInclude({
            prefix: "@@"
        }))

        .pipe(dest(paths.html.dest))

        .pipe(browserSync.stream());

}

// ==============================
// SCSS
// ==============================

function styles() {

    return src(paths.styles.src)

        .pipe(
            sass().on("error", sass.logError)
        )

        .pipe(dest(paths.styles.dest))

        .pipe(browserSync.stream());

}

exports.build = series(
    clean,

    parallel(
        html,
        styles,
        scripts,
        images,
        svg,
        sprite,
        fonts
    )
);

// ==============================
// JS
// ==============================

function scripts() {

    return src(paths.scripts.src)

        .pipe(dest(paths.scripts.dest))

        .pipe(browserSync.stream());

}

// ==============================
// Картинки (png, jpg, webp...)
// ==============================

function images() {

    return src(paths.images.src)

        .pipe(dest(paths.images.dest));

}

// ==============================
// Обычные SVG
// ==============================

function svg() {

    return src(paths.svg.src)

        .pipe(svgmin())

        .pipe(dest(paths.svg.dest));

}

// ==============================
// SVG Sprite
// ==============================

function sprite() {

    return src(paths.icons.src)

        .pipe(svgmin())

        .pipe(svgSprite({
            shape: {
                transform: ["svgo"]
            },
            mode: {
                symbol: {
                    dest: ".",
                    sprite: "sprite.svg"
                }
            }
        }))

        .pipe(dest(paths.icons.dest));

}

// ==============================
// Шрифты
// ==============================

function fonts() {

    return src(paths.fonts.src)

        .pipe(ttf2woff2())

        .pipe(dest(paths.fonts.dest));

}

// ==============================
// Сервер
// ==============================

function server() {

    browserSync.init({

        server: {
            baseDir: "dist"
        },

        port: 3000,

        notify: false

    });

}

// ==============================
// Watch
// ==============================

function watcher() {

    watch(paths.html.src, html);

    watch(paths.styles.src, styles);

    watch(paths.scripts.src, scripts);

    watch(paths.images.src, images);

    watch(paths.svg.src, svg);

    watch(paths.icons.src, sprite);

    watch(paths.fonts.src, fonts);

}

// ==============================
// Главная задача
// ==============================

exports.default = series(

    clean,

    parallel(
        html,
        styles,
        scripts,
        images,
        svg,
        sprite,
        fonts
    ),

    parallel(
        server,
        watcher
    )

);