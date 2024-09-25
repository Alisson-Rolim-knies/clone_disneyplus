// Importando gulp, sass e imagemin
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Função para processar os arquivos Sass
function styles() {
    return gulp.src('./src/styles/*.scss') // Fonte dos arquivos .scss
        .pipe(sass({ outputStyle: 'compressed' })) // Compila o Sass e mostra erros
        .pipe(gulp.dest('./dist/css')); // Destino dos arquivos CSS
}

// Função para otimizar as imagens
function images() {
    return gulp.src('./src/images/**/*') // Fonte das imagens
        .pipe(imagemin()) // Otimiza as imagens
        .pipe(gulp.dest('./dist/images')); // Destino das imagens otimizadas
}

// Função de observação para mudanças em Sass e imagens
exports.default = gulp.parallel(styles, images);
exports.default = gulp.parallel(styles, images)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

