module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine : {
      src : ['main.js', 'utility.js'],

      options: {
        specs : 'main.test.js',
        vendor: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/jasmine-jquery/lib/jasmine-jquery.js"
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jasmine']);
};
