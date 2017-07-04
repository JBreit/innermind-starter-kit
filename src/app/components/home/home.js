import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

const Config = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
    });

  $urlRouterProvider
    .otherwise('/');

};

const homeModule = angular.module('home', [uiRouter,])
  .config(Config)
  .component('home', homeComponent)
  .name;

export default homeModule;
