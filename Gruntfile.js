/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    jasmine : {
      // Your project's source files
      src : ['src/**/*.js', 'spec/**/*Helper.js'],
      options : {
        specs : 'spec/**/*Spec.js'
      }
    }
 });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // Default task.
  grunt.registerTask('default', ['jasmine']);

};
