module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './styles',
          src: ['*.scss'],
          dest: './public/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);

};
