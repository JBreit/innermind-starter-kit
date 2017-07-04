import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutComponent from './about.component';

const Config = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about',
    });
};

const aboutModule = angular.module('about', [uiRouter])
  .config(Config)
  .component('about', aboutComponent)
  .name;

export default aboutModule;
