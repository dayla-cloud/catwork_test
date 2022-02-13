const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

gulp.task("default", function () {
  return gulp
    .src("css/styles.css")
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
          cascade: false,
        }),
      ])
    )
    .pipe(gulp.dest("css"));
});
