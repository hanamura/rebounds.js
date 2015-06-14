module.exports = (grunt) ->
  grunt.initConfig
    uglify:
      js:
        src: 'rebounds.js'
        dest: 'rebounds.min.js'

    mocha:
      test:
        src: 'test/**/*.html'
        options:
          run: true
          reporter: 'Spec'

    watch:
      files: [
        'rebounds.js'
        'test/*'
      ]
      tasks: 'default'

  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-mocha'

  grunt.registerTask 'default', [
    'uglify:js'
    'mocha:test'
  ]
