/**
 * Created by Administrator on 2016/11/18.
 */
var gulp=require("gulp"),
    stylus=require('gulp-stylus'),
    concat=require('gulp-concat'),
    minifycss=require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    nodemon = require('nodemon'),
    del = require('del');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//编译stylus
gulp.task('stylus',function () {
    return gulp.src('./public/stylus/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/public/css'));
})

//压缩css
gulp.task('minifycss', ['stylus'], function(){
    return gulp.src('./public/css/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/public/css'));
});
//压缩js
gulp.task('uglify',function () {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/public/js'));
});
//压缩html
gulp.task('htmlmin', function(){
    return gulp.src('./views/**/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist/views'))
});
//压缩images
gulp.task('imagemin', function(){
    return gulp.src('./public/img/**/*{png,jpg,ico,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/public/img'));
});

//启动服务器
gulp.task('nodemon', function (a) {
    var ft = false;
    return nodemon({
        script: 'app.js'
         }).on('start', function() {
            if (!ft) {
            a();
            ft = true;
        }
    });
});

//  proxy 服务器代理
gulp.task('browser-sync',['nodemon'] , function(){
    browserSync.init({
    proxy: {
        target: 'http://127.0.0.1:16083'
    },
    files: ['*'],
    open: false,
    notify: false,
    port: 9800
});
});

//编译前清除文件
gulp.task('clean', function(opt){
    del(['./dist'], opt);
});

//构建项目
gulp.task('build', ['stylus', 'minifycss', 'uglify', 'imagemin', 'htmlmin']);

//监听文件变更
gulp.task('watch', function(){
    gulp.watch('./public/stylus/**/*.styl', ['stylus']);
    gulp.watch([
        './views/**/*.html',
        './public/css/**/*.css',
        './public/js/**/*.js',
        './public/img/**/*.{png,jpg,ico,gif}}'
    ]).on('change', reload);
});

//启动任务
gulp.task('default', ['browser-sync', 'stylus', 'watch'], function(){
    console.log("gulp default");
});
