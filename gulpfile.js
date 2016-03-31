var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var jsuglify = require("gulp-uglify");
var typescript = require("gulp-typescript");

var tsProject = typescript.createProject("tsconfig.json");
var appDev = "dev/";
var appProd = "app/";

gulp.task("build-ts", function () {
	return gulp.src(appDev + "**/*.ts")
		.pipe(sourcemaps.init())
		.pipe(typescript(tsProject))
		.pipe(sourcemaps.write())
		.pipe(jsuglify())
		.pipe(gulp.dest(appProd));
});

gulp.task("watch", function () {
	gulp.watch(appDev + "**/*.ts", ["build-ts"]);
});

gulp.task("default", ["watch"]);
