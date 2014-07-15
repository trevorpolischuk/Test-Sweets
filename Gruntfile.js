module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            scripts: {
                files: [
                    {
                        src: "tests/tests/src/*.js",
                        dest: "tests/tests/tests.js",
                        nonull: true
                    }
                ]
            }
        },
        qunit: {
            all: ['tests/runners/main.html']
        },
        jshint: {
            all: ['Gruntfile.js', 'tests/tests/src/*', 'tests/tests/tests.js']
        },
        watch: {
            scripts: {
                files: ['tests/tests/src/*.js'],
                tasks: ['concat', 'qunit', 'jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'jshint', 'qunit', 'watch']);

};