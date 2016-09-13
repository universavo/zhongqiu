/* TODO: remove comments */
module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dist: {
        src: ['dist/src/**/*', "dist/index.html", "dist/style.css"],
      },
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'app',
        src: '**/*',
        dest: 'dist',
      },
    },
    watch: {
      files: ['app/**/*'],
      tasks: ['default'],
      options: {
        spawn: false,
      },
    },
  });

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('copy.dist.src', filepath.substr(4));
    grunt.config('clean.dist.src', 'dist/' + filepath.substr(4));
  });

  grunt.registerTask('default', [
    'clean', 'copy',
  ]);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
