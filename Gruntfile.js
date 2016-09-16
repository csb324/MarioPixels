/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
  grunt.initConfig({
    watch: {
    	options: {
    		livereload: true
    	},

      assets: {
        files: ['index.html','styles.css'],
        tasks: []
      },

      scripts: {
        files: ['src/**/*'],
        tasks: ['browserify']
      }
    },
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {presets: ["es2015"]}]
          ],
          debug: true
        },
        files: {
          'dist/app.js': 'src/app.js'
        }
      }
    },
    connect: {
      server: {}
    }
    // babel: {
    //   options: {
    //     presets: ['es2015']
    //   },
    //   dist: {
    //     files: {
    //       
    //     }
    //   }
    // }


  });

  require('jit-grunt')(grunt);

  // Default task.
  grunt.registerTask('default', ['connect','browserify', 'watch']);

}