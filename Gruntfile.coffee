module.exports = (grunt) ->
	grunt.initConfig
		coffee:
			js:
				src: 'src/*.coffee'
				dest: 'rebounds.js'

		uglify:
			js:
				src: 'rebounds.js'
				dest: 'rebounds.min.js'

		mochaTest:
			test:
				src: 'test/*.coffee'
				options: reporter: 'spec'

		watch:
			files: ['src/*.coffee', 'test/*.coffee']
			tasks: 'default'

	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-mocha-test'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.registerTask 'default', [
		'coffee:js',
		'uglify:js',
		'mochaTest:test',
	]
