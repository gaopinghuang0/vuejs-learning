
module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: ['index.html'],
			},
			clientjs: {
				files: ['src/**/*.js'],
				// tasks: ['concat', 'jshint'],
			},
			sass: {
				options: {
					livereload: false
				},
				files: ['src/sass/*.scss'],
				tasks: ['sass'],
			},
			css: {
				files: ['dist/css/*.css'],
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'dist/css/style.css': 'src/sass/style.scss',
				}
			}
		},

    jshint: {
    	options: {
    		asi: true
    	},
      all: [
          'gruntfile.js',
          'src/*/*.js',
      ]
    },

		concurrent: {
			tasks: ['watch', 'sass', 'jshint'],
			options: {
				logConcurrentOutput: true
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-concurrent');

	// do not abort when error
	grunt.option('force', true);
	grunt.registerTask('default', ['concurrent']);
}