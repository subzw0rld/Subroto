var gulp=require("gulp"),
    connect=require("gulp-connect"),
    sass=require("gulp-sass"),
    open=require("gulp-open"),
    handlebars = require('handlebars'),
    gulpHandlebars = require('gulp-compile-handlebars')(handlebars),
    rename = require('gulp-rename');


gulp.task('handlebars', function () {
    var templateData = 'modules/**/data/*.json',
    options = {
        partialsDirectory : ['modules/partials/**']
    }

    return gulp.src('modules/**/*.hbs')
        .pipe(rename('**/*.html'))
        .pipe(gulp.dest('dist'));
});


gulp.task("server",function(){
   connect.server({
       port:8888,
       livereload:true
   }); 
});

gulp.task("open",function(){
    gulp.src(__filename).pipe(open({uri:"http://localhost:8888/"}));
});

gulp.task("html",function(){
    gulp.src('index.html').pipe(connect.reload());
});

gulp.task("sass",function(){
    console.info("main.scss changed");
    return gulp.src("scss/main.scss").pipe(sass().on('error',sass.logError)).pipe(gulp.dest("./css"));
});

gulp.task("watch",function(){
    gulp.watch(['*.html',"scss/main.scss"],['sass','html']);
});

gulp.task("default",["server","watch", "open"]);
