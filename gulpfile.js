var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var markdown = require('gulp-markdown-to-json');
var hbs = require('gulp-hbs');
var rename = require('gulp-rename');
var path = require('path');
var fs = require('fs');

gulp.task('md', function () {
    var config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
    config.sections.forEach(function (el, arr, i) {
        gulp.src('./'+el.dir+'/*.md')
        .pipe(gutil.buffer())
        .pipe(markdown('genfile-'+el.dir+'.json', {
            smartypants: true,
            gfm: true
        }))
        .pipe(gulp.dest('.'));

        el.headings = [];
        var headings = JSON.parse(fs.readFileSync(path.join(__dirname, 'genfile-'+el.dir+'.json'), 'utf8'));
        for (var key in headings) {
            if (headings.hasOwnProperty(key)) {
                el.headings.push(headings[key]);
            }
        }
    });
    fs.writeFileSync(path.join(__dirname, 'genfile--final.json'), JSON.stringify(config), 'utf8');
});

gulp.task('compile', ['md'], function() {
    gulp.src('./genfile--final.json')
    .pipe(hbs('template.hbs'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function() {
    return sass('sass/main.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
