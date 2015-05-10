module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['./public/generated'],
        concurrent: {
            dev: ['nodemon:dev', 'webpack:dev'],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            dev: {
                script: './server.js',
                options: {
                    ignore: ['build/**'],
                    ext: 'js,jsx'
                }
            }
        },
        webpack: {
            dev: require("./config/webpack.config.dev.js")
        }
    });


    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['clean', 'concurrent:dev']);
};