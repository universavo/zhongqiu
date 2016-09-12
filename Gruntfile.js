/* TODO: remove comments */
module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dist: {
        src: ['src/**/*', 'index.html', 'style.css'],
      },
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'app',
        src: '**/*',
        dest: '',
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

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.config('copy.dist.src', filepath.substr(4));
    grunt.config('clean.dist.src', filepath.substr(4));
  });

  grunt.registerTask('default', [
    'clean', 'copy',
  ]);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
