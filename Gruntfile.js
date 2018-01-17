module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './public/sass',
          src: ['*.scss'],
          dest: './public/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          './build/css/style.min.css': ['./public/css/**/*.css']
        }, {
          expand: true,
          cwd: './public/css',
          src: ['*.css', '!*.min.css'],
          dest: './public/css',
          ext: '.min.css'
        }]
      }
    },
    concat_css: {
      options: {
        baseDir: './public/(css|assets)'
      },
      all: {
        src: ["./public/css/**/*.min.css"],
        dest: "./public/css/style.concat.css"
      },
    },
    clean: {
      build: {
        src: ['./build/css', './public/css']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['clean', 'sass', 'cssmin', 'concat_css']);

};
