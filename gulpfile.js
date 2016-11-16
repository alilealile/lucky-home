/**
 * Created by Administrator on 2016/11/15.
 */

var gulp=require("gulp" ),
 	htmlmin=require("gulp-htmlmin" ),
	imagemin=require("gulp-imagemin" ),
	minifycss=require("gulp-minify-css" ),
	uglify=require("gulp-uglify");

//压缩html
gulp.task('htmlmin',function(){
	gulp.src('./views/**/*.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist/view'))
});

//压缩js
gulp.task('uglify',function(){
	gulp.src('./static/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/static/js'))
});

//压缩css
gulp.task('minifycss',function(){
	gulp.src('./static/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/static/css'))
});

//压缩 图片
gulp.task('imagemin',function(){
	gulp.src('./static/img/**/*.{png,jpg,gif.ico}')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/static/img'))
});

//动态监听文件变化
/*gulp.task("watch",function(){
	gulp.watch('./views/!**!/!*.html',['htmlmin'])
});*/


//合并运行任务
gulp.task('default',['htmlmin','uglify','minifycss','imagemin']);