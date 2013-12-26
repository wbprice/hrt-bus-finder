module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {

            js: {
                src: [
                    'js/jquery-2.0.2.js',
                    'js/jquery.jpanelmenu.js',
                    'js/underscore-min.js',
                    'js/backbone.js',
                    'js/bootstrap.min.js',
                    'js/busfinder.js',  
                    'js/modernizr.js',
                ],
                dest: 'js/build/production.js',
            },

            css: {
                src: [
                    'css/bootstrap-responsive.min',
                    'css/bootstrap.css',
                    'css/busfinder.css',    
                ],
                dest: 'css/production.css',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['production.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['css/*.css'],
                tasks: ['concat','cssmin'],
                options: {
                    spawn: false,
                }
            }
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','cssmin']);

};
