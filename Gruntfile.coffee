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

    mocha:
      test:
        src: 'test/**/*.html'
        options:
          run: true
          reporter: 'Spec'

    watch:
      files: [
        'src/*.coffee'
        'test/*'
      ]
      tasks: 'default'

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-mocha'

  grunt.registerTask 'default', [
    'coffee:js'
    'uglify:js'
    'mocha:test'
  ]
