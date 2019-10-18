const gulp=require("gulp");
const sass=require("gulp-sass");
const plumber=require("gulp-plumber");
const autoprefixer=require("gulp-autoprefixer");

gulp.task("sass",()=>{
    return gulp.src("./scss/style.scss")
        .pipe(plumber({
            errorHandler:function(e){
                console.log(e.messageFormatted);
                this.emit("end");
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./"));
});

gulp.task("watch",()=>{
    gulp.watch("./scss/*",gulp.series("sass"));
});

gulp.task("default",gulp.series("watch"));
