const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

gulp.task("default", function () {
  return gulp
    .src("css/styles.css")
    .pipe(
      postcss([
        autoprefixer({
          browsers: [
            "> 1%",
            "ie >= 8",
            "edge >= 15",
            "ie_mob >= 10",
            "ff >= 45",
            "chrome >= 45",
            "safari >= 7",
            "opera >= 23",
            "ios >= 7",
            "android >= 4",
            "bb >= 10",
          ],
          cascade: false,
        }),
      ])
    )
    .pipe(gulp.dest("css"));
});
