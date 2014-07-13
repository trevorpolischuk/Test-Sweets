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
                        src: "tests/src/*.js",
                        dest: "tests/tests.js",
                        nonull: true
                    }
                ]
            }
        },
        qunit: {
            all: ['runners/main.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task(s).
    grunt.registerTask('default', ['qunit']);

};