const gulp = require('gulp');
const ts = require('gulp-typescript');
const gulpTslint = require('gulp-tslint');
const tslint = require('tslint');
const del = require('del');

gulp.task('lint-server', () => {
  const tsProject = ts.createProject('./src/server/tsconfig.json');
  const program = tslint.Linter.createProgram('./src/server/tsconfig.json');

  tsProject.src()
    .pipe(gulpTslint({
      formatter: 'stylish',
      program
    }))
    .pipe(gulpTslint.report({
      summarizeFailureOutput: true
    }));
});

gulp.task('clean', (done) => {
  del('.dist').then(() => {
    done();
  });
});

gulp.task('build-server', () => {
  const tsProject = ts.createProject('./src/server/tsconfig.json');
  return gulp.src('src/server/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('.dist'));
});

gulp.task('test', ['lint-server']);
gulp.task('default', ['test']);
