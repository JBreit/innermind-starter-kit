import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import Config from './app.config';
import Runtime from './app.runtime';
import AppComponent from './app.component';
// import 'normalize.css';

angular.module('app', [uiRouter, Common, Components, Services])
  .component('app', AppComponent)
  .config(Config)
  .run(Runtime);
