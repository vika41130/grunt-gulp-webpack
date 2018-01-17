module.exports = function (grunt) {

  grunt.initConfig({
    concat_css: {
      options: {},
      all: {
        src: ["./public/css/*.css"], // all: "/**/*.css"
        dest: "./public/styles.css"
      },
    },
  });

  grunt.loadNpmTasks('grunt-concat-css');
  grunt.registerTask('default', ['concat_css']);

};
