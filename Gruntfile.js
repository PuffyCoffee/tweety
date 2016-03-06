module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            files: ['index.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
