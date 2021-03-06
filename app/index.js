'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');

  },
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the brilliant ' + chalk.red('AngularRequireFullstack') + ' generator! by ' + chalk.blue('MONITS')
    ));

    this.log(
      'I will generate a fullstack structure based on AngularJS + RequireJS, alongside some must-have modules'
    );

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Your project name:',
      default: this.appname
    },{
      type: 'confirm',
      name: 'continueOption',
      message: 'This process may take some time, do you want to continue?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      if (!this.props.continueOption) {
        return;
      }

      this.appname = this.props.projectName;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        this
      );

      // Main files
      this.fs.copyTpl(
        this.templatePath('/scripts/_app.js'),
        this.destinationPath('/app/scripts/' + this.appname + '.js'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('/scripts/_build.js'),
        this.destinationPath('/app/scripts/build.js'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('/scripts/_paths.js'),
        this.destinationPath('/app/scripts/paths.js'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('/scripts/_states.js'),
        this.destinationPath('/app/scripts/states.js'),
        this
      );
      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('robots.txt'),
        this.destinationPath('/app/robots.txt')
      );

      // i18n
      this.fs.copy(
        this.templatePath('/scripts/i18n/*.*'),
        this.destinationPath('/app/scripts/i18n/')
      );

      // Controllers
      this.fs.copyTpl(
        this.templatePath('/scripts/controllers/_IndexController.js'),
        this.destinationPath('/app/scripts/controllers/IndexController.js'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('/scripts/controllers/_HomeController.js'),
        this.destinationPath('/app/scripts/controllers/HomeController.js'),
        this
      );

      // Directives
      this.fs.copyTpl(
        this.templatePath('/scripts/directives/_sample.js'),
        this.destinationPath('/app/scripts/directives/sample.js'),
        this
      );

      // Services
      this.fs.copyTpl(
        this.templatePath('/scripts/services/_sampleService.js'),
        this.destinationPath('/app/scripts/services/sampleService.js'),
        this
      );

      this.fs.copy(
        this.templatePath('/scripts/services/dependencyResolverFor.js'),
        this.destinationPath('/app/scripts/services/dependencyResolverFor.js')
      );

      // Images
      this.fs.copy(
        this.templatePath('/images/yeoman.png'),
        this.destinationPath('/app/images/yeoman.png')
      );

      // Styles
      this.fs.copy(
        this.templatePath('/styles/**/*'),
        this.destinationPath('/app/styles/')
      );

      // Views
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('/app/index.html'),
        this
      );

      this.fs.copy(
        this.templatePath('404.html'),
        this.destinationPath('/app/404.html')
      );

      this.fs.copyTpl(
        this.templatePath('/views/_home.html'),
        this.destinationPath('/app/views/home.html'),
        this
      );

      // this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('_.eslintrc'),
        this.destinationPath('.eslintrc')
      );
    }
  },

  install: function () {
   this.installDependencies();
  },

  end: function () {
    this.log('Run ' + chalk.green('grunt serve') + ' to see the app in action or ' + chalk.blue('grunt build') + ' when you are ready to deploy it');
    this.log('Visit our blog at ' + chalk.blue('https://medium.com/monits-blog'));
  }
});
