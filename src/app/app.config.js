import NotFound from './notfound';

const handleError = ($injector) => {
  $injector
    .invoke(['$state', ($state) => {
      $state
        .transitionTo('404', {}, false);
    }]);
};

const Config = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  $locationProvider
    .html5Mode(false)
    .hashPrefix('!');

  $stateProvider
    .state('404', NotFound);

  $urlRouterProvider
    .otherwise(handleError);
};

export default Config;
