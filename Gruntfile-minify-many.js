module.exports = function (grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          './public/css/styles.min.css': ['./public/css/**/*.css']
        }
      }
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);

};
