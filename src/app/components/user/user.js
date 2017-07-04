import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

const Config = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('user', {
      url: '/user',
      component: 'user',
    });

  $urlRouterProvider
    .otherwise('/');

};
