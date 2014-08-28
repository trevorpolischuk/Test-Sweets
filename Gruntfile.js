module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            files: {
                src: ['source/javascripts/*.js'],
                dest: 'minified/app.min.js'
            },
            jslibs: {
                src:[
                    'source/lib/jquery/dist/jquery.js',
                    'source/lib/bootstrap/dist/js/bootstrap.js',
                    'source/lib/highlightjs/highlight.pack.js'
                ],
                dest: 'minified/libs.min.js'
            },
            csslibs: {
                src: ['source/lib/highlightjs/styles/arta.css',
                      'source/lib/bootstrap/dist/css/bootstrap.css'],
                dest: 'minified/libs.min.css'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "minified/app.min.css": "source/stylesheets/*.less"
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'source/javascripts/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>', 'source/stylesheets/stylesheet.less'],
            tasks: ['test', 'concat', 'less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('default', ['jshint', 'less', 'concat', 'watch']);

};