module.exports = (grunt) ->
  grunt.initConfig
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

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-mocha'

  grunt.registerTask 'default', [
    'mocha:test'
  ]
