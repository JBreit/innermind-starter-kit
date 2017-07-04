import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import MastheadComponent from './masthead.component';

const mastheadModule = angular.module('masthead', [uiRouter])
  .component('masthead', MastheadComponent).name;

export default mastheadModule;
